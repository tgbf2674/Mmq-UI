<template>
  <div class="mqTable">
    <table>
      <thead>
      <tr>
        <th :style="item.width ? { width: item.width + 'px' } : ''" v-for="(item, index) in columns" :key="index">{{ item.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in dataSource" :key="index">
        <td :class="fieldItem.ellipsis ? 'hasEllipsis' : ''" v-for="(fieldItem) in columns" :key="item.key">{{ item[fieldItem.dataIndex] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">

export default {
  name: 'MqTable',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.mqTable {
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
          border: 1px solid #f0f0f0;
          border-right: transparent;
          background-color:darken(#fafafa,1%);
          color: #646468;
          font-size: 16px;
          text-align: left;
          line-height: 1.5;
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
          border: 1px solid #f0f0f0;
          color: #646468;
          font-size: 16px;
          text-align: left;
          line-height: 1.5;
          border-top: transparent;
          border-right: transparent;
          position: relative;
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
          background-color: darken(#fafafa,2%);
        }
      }
    }
  }
}

</style>
