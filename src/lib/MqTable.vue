<template>
  <div class="mqTable">
    <div class="mqTableTitle" v-if="$slots.footer">
      <slot name="title"></slot>
    </div>
    <div ref="tableHeadRef" class="mqTableHeader">
      <table>
        <colgroup>
          <col :style="item.width ? { width: item.width + 'px' } : { width: 100 / columns.length + '%' }" v-for="(item, index) in columns" :key="index" />
        </colgroup>
        <thead>
        <tr>
          <th :style="item.width ? { width: item.width + 'px' } : ''" v-for="(item, index) in columns" :key="index">
            {{ item.title }}
          </th>
        </tr>
        </thead>
        </table>
      </div>
    <div ref="tableBodyRef" class="mqTableBody" @scroll="handleScroll">
      <table>
        <colgroup>
          <col :style="item.width ? { width: item.width + 'px' } : { width: 100 / columns.length + '%' }" v-for="(item, index) in columns" :key="index" />
        </colgroup>
        <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td :class="[fieldItem.ellipsis ? 'hasEllipsis' : '', hasBorder]" v-for="(fieldItem, fieldIndex) in columns"
              :key="item.key">{{ item[fieldItem.dataIndex] }}
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

import {computed, defineComponent, nextTick, onMounted, ref} from 'vue';

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
  setup(props, context) {
    const tableBodyRef = ref()
    const tableHeadRef = ref()
    const hasBorder = computed(() => {
      if (props.bordered) return 'hasBorder';
      else return '';
    });
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      tableHeadRef.value.scrollLeft = target.scrollLeft
    }
    onMounted(() => {
      if (props.height) {
        tableBodyRef.value.style.height = props.height + 'px'
      }
    })
    return {
      hasBorder, tableBodyRef, tableHeadRef, handleScroll
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
    table {
      border-collapse: collapse;
      width: 100%;
      table-layout: fixed;

      thead {
        tr {
          th {
            padding: 12px 14px;
            background-color: darken(#fafafa, 1%);
            color: #646468;
            font-size: 16px;
            text-align: left;
            line-height: 1.5;
            position: relative;
            width: 100%;
          }

          th::before {
            position: absolute;
            top: 50%;
            right: 0;
            width: 1px;
            height: 1.6em;
            background-color: #0000000f;
            transform: translateY(-50%);
            transition: background-color .3s;
            content: "";
          }

          th:last-child {
            border-right: 1px solid #f0f0f0;
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
  .mqTableBody {
    overflow: auto;
    table {
      border-collapse: collapse;
      width: 100%;
      table-layout: fixed;
      tbody {
        tr {
          td {
            padding: 12px 14px;
            border: 1px solid;
            color: #646468;
            font-size: 16px;
            text-align: left;
            line-height: 1.5;
            border-color: transparent transparent #f0f0f0 transparent;
          }

          .hasBorder {
            border-color: transparent transparent #f0f0f0 #f0f0f0;
          }

          .hasEllipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: keep-all;
          }

          td:last-child {
            border-right: 1px solid #f0f0f0;
          }

          &:hover {
            background-color: darken(#fafafa, 2%);
          }
        }
      }
    }
  }
}

</style>
