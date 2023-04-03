<template>
  <div :class="['mqTable', hasBordered]">
    <div :class="['mqTableTitle', computedSizeClass]" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div ref="tableHeadRef" class="mqTableHeader">
      <table>
        <colgroup>
          <col :style="headThStyle(item)" v-for="(item, index) in columns" :key="index"/>
        </colgroup>
        <thead>
        <tr>
          <th ref="tableThRef" :class="fixedStyle(item)" :style="headThStyle(item)" v-for="(item) in columns"
              :key="item.key">
            <div :class="['cell', computedSizeClass]">
              <slot name="headerCell" :title="item.title" :column="item">
                {{ item.title }}
                <span v-if="item.sort" class="sortWrapper">
                <i @click="sortHandler(item.sort, $event)" :class="['sortAscending']"></i>
                <i @click="sortHandler(item.sort, $event)" :class="['sortDescending'] "></i>
              </span>
              </slot>
            </div>
          </th>
        </tr>
        </thead>
      </table>
    </div>
    <div ref="tableBodyRef" class="mqTableBody" @scroll="handleScroll">
      <table>
        <colgroup>
          <col :style="headThStyle(item)" v-for="(item, index) in columns" :key="index"/>
        </colgroup>
        <tbody>
        <tr :class="computedRowClass(item, index)" @mouseleave="mouseLeaveHandle" @mouseenter="mouseEnterHandle"
            v-for="(item, index) in realDataSource"
            :key="item.key">
          <td ref="tableTdRef" :class="[bodyTdClass(fieldItem), computedSizeClass]" v-for="(fieldItem) in columns"
              :key="item.key">
            <slot name="bodyCell" :column="fieldItem" :record="item"
                  :index="item.key">{{ item[fieldItem.dataIndex] || item.index }}
            </slot>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="showSummary" ref="tableFooterRef" class="mqTableSummary">
      <table>
        <colgroup>
          <col :style="headThStyle(item)" v-for="(item, index) in columns" :key="index"/>
        </colgroup>
        <tbody>
        <tr>
          <td ref="tableSummaryRef" :class="[bodyTdClass(item), computedSizeClass]" v-for="(item, index) in columns" :key="index">
            {{ index === 0 ? summaryData.sumTitle : summaryData[item.dataIndex] }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div :class="['mqTableFooter', computedSizeClass]" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent, nextTick, onMounted, PropType, ref, watch} from 'vue';
import {clone, isUndefined} from 'mmq-utils';

type HeadStyleType = {
  width?: string
}

export default defineComponent({
  name: 'MqTable',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array as PropType<TableColumnsOptions []>,
      default: () => []
    },
    bordered: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    maxHeight: {
      type: Number
    },
    rowClassName: {
      type: Function
    },
    size: {
      type: String as PropType<TableSizeOptions>,
      default: 'normal'
    },
    showSummary: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const tableBodyRef = ref();
    const tableHeadRef = ref();
    const tableFooterRef = ref();
    const tableSummaryRef = ref()
    const tableThRef = ref();
    const tableTdRef = ref();
    let fixedThElArr: HTMLElement [] = [];
    let fixedTdElArr: HTMLElement [] = [];
    let fixedThRightElArr: HTMLElement [] = [];
    let fixedTdRightElArr: HTMLElement [] = [];
    const realDataSource = ref(clone(props.dataSource, true));
    const descendingReg = RegExp(/sortDescending/);
    const dSelectedReg = RegExp(/sortDescending/);
    const ascendingReg = RegExp(/sortAscending/);
    const aSelectedReg = RegExp(/sortASelected/);
    const sortMethod = ref();
    const summaryData = ref({})
    watch(props.dataSource, (newVal) => {
      realDataSource.value = clone(newVal);
    });
    const computedRowClass = (record: any, index: number) => {
      if (props.rowClassName) {
        return props.rowClassName(record, index);
      }
    };
    const computedSizeClass = computed(() => {
      if (props.size === 'middle') return 'mqTableMiddle';
      else if (props.size === 'small') return 'mqTableSmall';
      else return 'mqTableNormal';
    });
    const sortHandler = (fn: Function, e: Event) => {
      clearSortSelected();
      if (descendingReg.test((e.target as HTMLElement).classList.value)) {
        sortMethod.value = 0;
        (e.target as HTMLElement).classList.add('sortDSelected');
      } else if (ascendingReg.test((e.target as HTMLElement).classList.value)) {
        sortMethod.value = 1;
        (e.target as HTMLElement).classList.add('sortASelected');
      }
      sortMethod.value ? realDataSource.value.sort(fn) : realDataSource.value.sort(fn).reverse();
    };
    const clearSortSelected = () => {
      const indexs: number[] = [];
      props.columns.forEach((item, index) => {
        if ((item as TableColumnsOptions).sort) {
          indexs.push(index);
        }
      });
      if (indexs.length) {
        const temp = [];
        for (let i = 0; i < indexs.length; i++) {
          temp.push(...tableThRef.value[indexs[i]].children[0].childNodes[1].children);
        }
        temp.forEach(item => {
          if (descendingReg.test(item.classList) && dSelectedReg.test(item.classList)) item.classList.remove('sortDSelected');
          else if (ascendingReg.test(item.classList) && aSelectedReg.test(item.classList)) item.classList.remove('sortASelected');
        });
      }
    };
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      tableHeadRef.value.scrollLeft = target.scrollLeft;
      tableFooterRef.value.scrollLeft = target.scrollLeft;
      if (fixedThElArr.length) {
        if (tableBodyRef.value.clientHeight !== tableBodyRef.value.offsetHeight) {
          if (tableHeadRef.value.scrollLeft === 0) {
            fixedThElArr[fixedThElArr.length - 1].classList.add('noShadow');
            computedFixedFirstClass(fixedTdElArr, 'add', 'noShadow');
          } else {
            fixedThElArr[fixedThElArr.length - 1].classList.remove('noShadow');
            computedFixedFirstClass(fixedTdElArr, 'remove', 'noShadow');
          }
        }
        if (fixedThRightElArr.length) {
          if (target.scrollLeft === tableHeadRef.value.scrollWidth - tableHeadRef.value.clientWidth) {
            fixedThRightElArr[0].classList.add('noShadow');
            computedFixedFirstClass(fixedTdRightElArr, 'add', 'noShadow');
          } else {
            fixedThRightElArr[0].classList.remove('noShadow');
            computedFixedFirstClass(fixedTdRightElArr, 'remove', 'noShadow');
          }
        }
      }
    };
    const findThOrTd = (className: string, el: string) => {
      let target = el === 'td' ? tableTdRef : tableThRef;
      let arr: HTMLElement [] = [];
      target.value.forEach((item: HTMLElement) => {
        Array.from(item.classList).forEach(element => {
          if (arr && element === className) {
            arr.push(item);
          }
        });
      });
      if (props.showSummary && el === 'td') {
        target = tableSummaryRef
        target.value.forEach((item: HTMLElement) => {
          Array.from(item.classList).forEach(element => {
            if (arr && element === className) {
              arr.push(item);
            }
          });
        });
      }
      return arr;
    };
    const hasBordered = () => {
      if (props.bordered) return 'hasBorder';
    };
    const fixedStyle = (fieldItem: TableColumnsOptions) => {
      const arr: string[] = [];
      if (props.bordered) arr.push('hasBorder');
      if (typeof fieldItem.fixed === 'boolean' && fieldItem.fixed) arr.push('tableLiftFixed');
      else if (fieldItem.fixed === 'left') arr.push('tableLiftFixed');
      else if (fieldItem.fixed === 'right') arr.push('tableRightFixed');
      return arr;
    };
    const bodyTdClass = (fieldItem: TableColumnsOptions) => {
      const classArr = [];
      if (fieldItem.ellipsis) classArr.push('hasEllipsis');
      return classArr.concat(fixedStyle(fieldItem));
    };
    const mouseEnterHandle = (e: Event) => {
      const target = e.target as Element;
      target.classList.add('hoverRow');
    };
    const mouseLeaveHandle = (e: Event) => {
      const target = e.target as Element;
      target.classList.remove('hoverRow');
    };
    const headThStyle = (item: TableColumnsOptions) => {
      const styles: HeadStyleType = {};
      if (item.width) styles.width = item.width + 'px';
      return styles;
    };
    const fixedCol = (tdArr: HTMLElement [], thArr: HTMLElement []) => {
      let temp: HTMLElement[][] = [];
      for (let i = 0; i < tdArr.length / computedFixedCol().leftCount; i++) {
        temp.push([]);
      }
      tdArr.forEach((item, index: number) => {
        let idx = Math.floor(index / computedFixedCol().leftCount);
        temp[idx].push(item);
      });
      for (let i = 0; i < temp.length; i++) {
        for (let j = 1; j < temp[i].length; j++) {
          temp[i][j].style.left = temp[i][j - 1].clientWidth + 'px';
        }
      }
      for (let i = 1; i < thArr.length; i++) {
        thArr[i].style.left = thArr[i - 1].clientWidth + 'px';
      }
    };
    const fixedColPosition = () => {
      fixedCol(fixedTdElArr, fixedThElArr);
      fixedCol(fixedTdRightElArr, fixedThRightElArr);
    };
    const computedFixedCol = () => {
      let leftCount = 0;
      let rightCount = 0;
      props.columns.forEach((item: any) => {
        if (item.fixed === 'right') rightCount++;
        else if (item.fixed && item.fixed === 'left') leftCount++;
      });
      return {leftCount, rightCount};
    };
    const initArr = () => {
      fixedThElArr = []
      fixedTdElArr = []
      fixedThRightElArr = []
      fixedTdRightElArr = []
      fixedThElArr.push(...findThOrTd('tableLiftFixed', 'th'));
      fixedTdElArr.push(...findThOrTd('tableLiftFixed', 'td'));
      fixedThRightElArr.push(...findThOrTd('tableRightFixed', 'th'));
      fixedTdRightElArr.push(...findThOrTd('tableRightFixed', 'td'));
    };
    const computedFixedFirstClass = (arr: HTMLElement [], method: string, clazz: string) => {
      arr.forEach(item => {
        method === 'add' ? item.classList.add(clazz) : item.classList.remove(clazz);
      });
    };
    const setTableBodyHeight = () => {
      if (props.height) tableBodyRef.value.style.height = props.height + 'px';
      if (props.maxHeight) tableBodyRef.value.style.maxHeight = props.maxHeight + 'px';
    };
    const setScrollBar = () => {
      const arr: HTMLElement[] = Array.from(tableThRef.value);
      arr[arr.length - 1].style.transform = `translateX(${tableBodyRef.value.clientWidth - tableBodyRef.value.offsetWidth}px)`;
    };
    const computedSummary = () => {
      if (props.showSummary) {
        const res:any = {
          sumTitle: 'Sum'
        }
        realDataSource.value.forEach((item: any) => {
          for (const key in item) {
            if (typeof item[key] === 'number') {
              isUndefined(res[key]) ? res[key] = 0 : res[key] += item[key]
            } else {
              res[key] = '/'
            }
          }
        })
        summaryData.value = res
        initArr()
        console.log(fixedTdElArr)
      }
    }
    onMounted(() => {
      computedSummary()
      setTableBodyHeight();
      initArr();
      fixedColPosition();
      setScrollBar();
      nextTick(() => {
        if (fixedThElArr[fixedThElArr.length - 1]) {
          fixedThElArr[fixedThElArr.length - 1].classList.add('noShadow');
        }
        computedFixedFirstClass(fixedTdElArr, 'add', 'noShadow');
      });
    });
    return {
      tableBodyRef,
      tableHeadRef,
      tableFooterRef,
      tableSummaryRef,
      handleScroll,
      bodyTdClass,
      headThStyle,
      fixedStyle,
      mouseEnterHandle,
      mouseLeaveHandle,
      tableThRef,
      tableTdRef,
      hasBordered,
      sortHandler,
      realDataSource,
      computedRowClass,
      computedSizeClass,
      summaryData,
      computedSummary
    };
  }
});
</script>

<style lang="scss" scoped>
.mqTable {
  /* 滚动槽 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .mqTableTitle {
    border: 1px solid #f0f0f0;
    border-bottom: transparent;
    font-size: 14px;
  }

  .mqTableSmall {
    padding: 8px;
  }

  .mqTableMiddle {
    padding: 12px 8px;
  }

  .mqTableNormal {
    padding: 16px 8px;
  }

  .mqTableFooter {
    border: 1px solid #f0f0f0;
    border-top: transparent;
    padding: 16px;
    color: #000000d9;
    background: #fafafa;
    font-size: 14px;
  }

  .mqTableHeader {
    overflow-x: auto;

    table {
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      table-layout: fixed;

      thead {
        tr {
          th {
            color: #646468;
            font-size: 14px;
            text-align: left;
            line-height: 1.5;
            width: 100%;
            background: #fafafa;

            .cell {
              display: flex;
              align-items: center;

              .sortWrapper {
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                height: 14px;
                width: 24px;
                vertical-align: middle;
                cursor: pointer;
                overflow: initial;
                position: relative;

                .sortAscending {
                  width: 0;
                  height: 0;
                  border: solid 5px transparent;
                  position: absolute;
                  left: 7px;
                  border-bottom-color: #a8abb2;
                  top: -5px;
                }

                .sortDescending {
                  width: 0;
                  height: 0;
                  border: solid 5px transparent;
                  position: absolute;
                  left: 7px;
                  border-top-color: #a8abb2;
                  bottom: -3px;
                }

                .sortASelected {
                  border-bottom-color: #409eff;
                }

                .sortDSelected {
                  border-top-color: #409eff;
                }
              }
            }

            .mqTableSmall {
              padding: 8px;
            }

            .mqTableMiddle {
              padding: 12px 8px;
            }

            .mqTableNormal {
              padding: 16px 8px;
            }
          }

          .hasBorder {
            border-left: 1px solid #f0f0f0;
          }
        }
      }
    }
  }

  .mqTableHeader::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .mqTableHeader::-webkit-scrollbar-thumb {
    width: 0;
    height: 0;
  }

  .mqTableSummary::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .mqTableSummary::-webkit-scrollbar-thumb {
    width: 0;
    height: 0;
  }

  .tableLiftFixed {
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: #fff;
  }

  .tableLiftFixed:before {
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    bottom: 1px;
    overflow-x: hidden;
    overflow-y: hidden;
    touch-action: none;
    pointer-events: none;
    right: -10px;
    box-shadow: inset 10px 0 10px -10px rgba(0, 0, 0, .15);
  }

  .noShadow:before {
    box-shadow: none;
  }

  .tableRightFixed {
    position: sticky;
    right: 0;
    z-index: 2;
    background-color: #fff;
  }

  .tableRightFixed:before {
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    bottom: 1px;
    overflow-x: hidden;
    overflow-y: hidden;
    touch-action: none;
    pointer-events: none;
    left: -10px;
    box-shadow: inset -10px 0 10px -10px rgba(0, 0, 0, .15);
  }

  .noShadow:before {
    box-shadow: none;
  }

  .mqTableBody {
    overflow: auto;
    height: 100%;

    table {
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      table-layout: fixed;

      tbody {
        tr {
          td {
            color: #646468;
            font-size: 14px;
            text-align: left;
            line-height: 1.5;
          }

          .hasBorder {
            border-bottom: 1px solid #f0f0f0;
            border-right: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
          }

          .hasEllipsis {
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: keep-all;
            overflow: hidden;
          }
        }

        .hoverRow {
          background-color: darken(#fafafa, 2%);

          td {
            background-color: darken(#fafafa, 2%);
          }
        }
      }
    }
  }

  .mqTableSummary {
    overflow-x: auto;
    table {
      table-layout: fixed;
      border-collapse: collapse;
      width: 100%;
      border-spacing: 0;
      border: 0;

      tbody {
        tr {
          td {
            color: #646468;
            font-size: 14px;
            text-align: left;
            line-height: 1.5;
            padding: 12px 8px;
          }
        }
      }
    }
  }
}

.hasBorder {
  border-left: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
}
</style>
