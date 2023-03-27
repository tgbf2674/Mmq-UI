<template>
  <div class="mqTable">
    <div class="mqTableTitle" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div ref="tableHeadRef" class="mqTableHeader">
      <table>
        <colgroup>
          <col :style="headThStyle(item)" v-for="(item, index) in columns" :key="index" />
        </colgroup>
        <thead>
        <tr>
          <th ref="tableThRef" :class="fixedStyle(item)" :style="headThStyle(item)" v-for="(item, index) in columns" :key="index">
            {{ item.title }}
          </th>
        </tr>
        </thead>
        </table>
      </div>
    <div ref="tableBodyRef" class="mqTableBody" @scroll="handleScroll">
      <table>
        <colgroup>
          <col :style="headThStyle(item)" v-for="(item, index) in columns" :key="index" />
        </colgroup>
        <tbody>
        <tr @mouseleave="mouseLeaveHandle" @mouseenter="mouseEnterHandle" v-for="(item, index) in dataSource" :key="index">
          <td ref="tableTdRef" :class="bodyTdClass(fieldItem)" v-for="(fieldItem) in columns"
              :key="item.key">
            <slot name="bodyCell" :column="fieldItem" :text="item[fieldItem.dataIndex]" :record="item" :index="item.key">{{ item[fieldItem.dataIndex] }}</slot>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="mqTableFooter" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, nextTick, onMounted, ref} from 'vue';

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
      type: Array,
      default: () => []
    },
    bordered: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    }
  },
  setup(props) {
    const tableBodyRef = ref()
    const tableHeadRef = ref()
    const tableThRef = ref()
    const tableTdRef = ref()
    const fixedThElArr: HTMLElement [] = []
    const fixedTdElArr: HTMLElement [] = []
    const fixedThRightElArr: HTMLElement [] = []
    const fixedTdRightElArr: HTMLElement [] = []
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      tableHeadRef.value.scrollLeft = target.scrollLeft
      if (tableHeadRef.value.scrollLeft === 0) {
        fixedThElArr[fixedThElArr.length - 1].classList.add('noShadow')
        computedFixedFirstClass(fixedTdElArr, 'add', 'noShadow')
      } else {
        fixedThElArr[fixedThElArr.length - 1].classList.remove('noShadow')
        computedFixedFirstClass(fixedTdElArr, 'remove', 'noShadow')
      }
      if (target.scrollLeft === tableHeadRef.value.scrollWidth - tableHeadRef.value.clientWidth) {
        fixedThRightElArr[0].classList.add('noShadow')
        computedFixedFirstClass(fixedTdRightElArr, 'add', 'noShadow')
      } else {
        fixedThRightElArr[0].classList.remove('noShadow')
        computedFixedFirstClass(fixedTdRightElArr, 'remove', 'noShadow')
      }
    }
    const findThOrTd = (className: string, el: string) => {
      const target = el === 'td' ? tableTdRef : tableThRef
      let arr: HTMLElement [] = []
      target.value.forEach((item: HTMLElement) => {
        Array.from(item.classList).forEach(el => {
          if (arr && el === className) {
            arr.push(item)
          }
        })
      })
      return arr
    }
    const fixedStyle = (fieldItem: TableColumnsOptions) => {
      const arr: string[] = []
      if (props.bordered) arr.push( 'hasBorder')
      if (typeof fieldItem.fixed === 'boolean' && fieldItem.fixed) arr.push( 'tableLiftFixed')
      else if (fieldItem.fixed === 'left') arr.push( 'tableLiftFixed')
      else if (fieldItem.fixed === 'right') arr.push( 'tableRightFixed')
      return arr
    }
    const bodyTdClass = (fieldItem: TableColumnsOptions) => {
      const classArr = []
      if (fieldItem.ellipsis) classArr.push('hasEllipsis')
      return classArr.concat(fixedStyle(fieldItem))
    }
    const mouseEnterHandle = (e: Event) => {
      const target = e.target as Element
      target.classList.add('hoverRow')
    }
    const mouseLeaveHandle = (e: Event) => {
      const target = e.target as Element
      target.classList.remove('hoverRow')
    }
    const headThStyle = (item: TableColumnsOptions) => {
      const styles: HeadStyleType = {}
      if (item.width) styles.width = item.width + 'px'
      return styles
    }
    const fixedCol = (tdArr: HTMLElement [], thArr: HTMLElement []) => {
      let temp: HTMLElement[][] = []
      for (let i = 0;i<tdArr.length / computedFixedCol().leftCount;i++) {
        temp.push([])
      }
      tdArr.forEach((item, index: number) => {
        let idx = Math.floor(index / computedFixedCol().leftCount)
        temp[idx].push(item)
      })
      for (let i =0;i<temp.length;i++) {
        for (let j = 1; j<temp[i].length;j++) {
          temp[i][j].style.left = temp[i][j-1].clientWidth + 'px'
        }
      }
      for (let i = 1; i< thArr.length;i++) {
        thArr[i].style.left = thArr[i-1].clientWidth  + 'px'
      }
    }
    const fixedColPosition = () => {
      fixedCol(fixedTdElArr, fixedThElArr)
      fixedCol(fixedTdRightElArr, fixedThRightElArr)
    }
    const computedFixedCol = () => {
      let leftCount = 0
      let rightCount = 0
      props.columns.forEach((item:any) => {
        if (item.fixed === 'right') rightCount++
        else if (item.fixed && item.fixed === 'left') leftCount++
      })
      return {leftCount, rightCount}
    }
    const initArr = () => {
      fixedThElArr.push(...findThOrTd('tableLiftFixed', 'th'))
      fixedTdElArr.push(...findThOrTd('tableLiftFixed', 'td'))
      fixedThRightElArr.push(...findThOrTd('tableRightFixed', 'th'))
      fixedTdRightElArr.push(...findThOrTd('tableRightFixed', 'td'))
    }
    const computedFixedFirstClass = (arr: HTMLElement [], method: string, clazz: string) => {
      arr.forEach(item => {
        method === 'add' ? item.classList.add(clazz) : item.classList.remove(clazz)
      })
    }
    onMounted(() => {
      if (props.height) {
        tableBodyRef.value.style.height = props.height + 'px'
      }
      initArr()
      fixedColPosition()
      nextTick(() => {
        if (fixedThElArr[fixedThElArr.length - 1]) {
          fixedThElArr[fixedThElArr.length - 1].classList.add('noShadow')
        }
        computedFixedFirstClass(fixedTdElArr, 'add', 'noShadow')
      })
    })
    return {
      tableBodyRef, tableHeadRef, handleScroll, bodyTdClass, headThStyle, fixedStyle, mouseEnterHandle, mouseLeaveHandle, tableThRef, tableTdRef
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
    background: rgba(0,0,0,0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
  }
  .mqTableTitle {
    border: 1px solid #f0f0f0;
    border-bottom: transparent;
    padding: 16px;
  }

  .mqTableFooter {
    border: 1px solid #f0f0f0;
    border-top: transparent;
    padding: 16px;
    color: #000000d9;
    background: #fafafa;
  }

  .mqTableHeader {
    overflow-x: auto;
    border-left: 1px solid #f0f0f0;
    border-top: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;;
    //border-right: 1px solid #f0f0f0;
    table {
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      table-layout: fixed;

      thead {
        tr {
          th {
            padding: 12px 14px;
            color: #646468;
            font-size: 16px;
            text-align: left;
            line-height: 1.5;
            width: 100%;
            border-bottom: 1px solid #f0f0f0;
          }
          .hasBorder {
            border-bottom: 1px solid #f0f0f0;
            border-left: 1px solid #f0f0f0;
          }
          .hasBorder:first-child {
            border-left: none;
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
    bottom: -1px;
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
    bottom: -1px;
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
    border: 1px solid #f0f0f0;
    border-top: none;
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
            padding: 12px 16px;
            color: #646468;
            font-size: 16px;
            text-align: left;
            line-height: 1.5;
            border-bottom: 1px solid #f0f0f0;
          }

          .hasBorder {
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
}

</style>
