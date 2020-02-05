<template>
  <div id="app">
    <div style="height: 500px; width: 100%; position: relative">
      <data-grid
        @grid:sort="onSort"
        @grid:expand="onExpand"
        @grid:select="onSelect"
        @grid:search="onSearch"
        :columns="columns"
        :data="data"
        :sortable="true"
        :search="true"
        :spanMethod="spanMethod"
        :row-class-name="addRowClass"
      >
        <template slot="Name" slot-scope="{ col, row }">
          <div>Кастомный контент</div>
          <a href="/">{{ row[col.prop] }}</a>
        </template>

        <template slot="Description-header" slot-scope="{ col }">
          <div>{{ col.label }}</div>
          <div>Кастомный заголовок</div>
        </template>

        <template slot="expand" slot-scope="{ row }">
          <div>Line {{ row.Id }}</div>
        </template>
      </data-grid>
    </div>
  </div>
</template>

<script>
import DataGrid from './components/DataGrid';

const DATA = require('@/mocks/data-grid.json');

export default {
  name: 'app',

  data: () => ({
    data: DATA.Items,
    columns: [
      {
        type: 'selection',
        width: 60,
        align: 'center',
        fixed: true
      },
      {
        prop: 'Name',
        label: 'Name',
        width: 200,
        fixed: true,
        search: true
      },
      {
        prop: 'Description',
        label: 'Description',
        width: 300
      },
      {
        label: 'Dates',
        children: [
          {
            prop: 'RegDate',
            label: 'RegDate'
          },
          {
            prop: 'StartDate',
            label: 'StartDate'
          },
          {
            prop: 'EndDate',
            label: 'EndDate'
          },
          {
            prop: 'CreateDate',
            label: 'CreateDate'
          }
        ]
      },
      {
        prop: 'DocNumber',
        label: 'DocNumber'
      },
      {
        prop: 'RegulatoryDocTypeName',
        label: 'RegulatoryDocTypeName'
      },
      {
        prop: 'DocumentId',
        label: 'DocumentId'
      },
      {
        type: 'expand',
        prop: 'expand',
        width: 50,
        fixed: 'right'
      }
    ]
  }),

  methods: {
    onSort({ order, prop }) {
      // eslint-disable-next-line
      alert(prop + ' ' + order);
    },

    onExpand({ row, expanded }) {
      // eslint-disable-next-line
      alert(row.Id + ' expanded: ' + expanded);
    },

    onSelect(rows) {
      // eslint-disable-next-line
      alert(rows.reduce((acc, e) => acc + e.Id + ', ', ''));
    },

    onSearch({ val, prop }) {
      // eslint-disable-next-line
      alert(prop + ': ' + val);
    },

    /* eslint-disable-next-line */
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        return {
          colspan: 2,
          rowspan: 1
        };
      }

      if (columnIndex === 2) {
        return {
          colspan: 0,
          rowspan: 0
        };
      }
    },

    /* eslint-disable-next-line */
    addRowClass({ rowIndex }) {
      if (rowIndex % 2) return 'success-row';
    }
  },

  components: {
    DataGrid
  }
};
</script>
