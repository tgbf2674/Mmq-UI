<template>
  <div class="mqTable">
    <div class="mqTableTitle" v-if="$slots.footer">
      <slot name="title"></slot>
    </div>
    <table>
      <thead>
      <tr>
        <th :style="item.width ? { width: item.width + 'px' } : ''" v-for="(item, index) in columns" :key="index">
          {{ item.title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in dataSource" :key="index">
        <td :class="[fieldItem.ellipsis ? 'hasEllipsis' : '', hasBorder]" v-for="(fieldItem) in columns"
            :key="item.key">{{ item[fieldItem.dataIndex] }}
        </td>
      </tr>
      </tbody>
    </table>
    <div class="mqTableFooter" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent} from 'vue';

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
    }
  },
  setup(props, context) {
    const hasBorder = computed(() => {
      if (props.bordered) return 'hasBorder';
      else return '';
    });
    return {
      hasBorder
    };
  }
});
</script>

<style lang="scss" scoped>
.mqTable {
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
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    table-layout: fixed;
  }

  table {
    border-collapse: separate;

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
          position: relative;
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

</style>
