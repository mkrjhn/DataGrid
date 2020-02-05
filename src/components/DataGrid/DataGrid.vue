<template>
  <div class="data-grid">
    <el-table
      @sort-change="onSort"
      @selection-change="onSelect"
      @expand-change="onExpand"
      :data="data"
      :span-method="spanMethod"
      :row-key="row => row.Id"
      :row-class-name="addRowClass"
      :cell-class-name="({ column }) => 'data-grid__cell-' + (column.property || column.type)"
      height="100%"
      ref="table"
    >
      <slot>
        <template v-if="data && data.length">
          <data-grid-column
            v-for="col in columns"
            :key="col.prop"
            :options="col"
            :generator="bindProps"
          >
            <template slot="header" slot-scope="{ column }">
              <slot :name="col.prop + '-header'" :col="column">
                {{ column.label }} {{ col.serach }}
                <div v-if="col.search" v-show="search" @click.stop>
                  <el-input
                    v-model="searchModel[col.prop]"
                    @input="onSearch($event, col.prop)"
                    size="mini"
                    placeholder="Type to search"
                  />
                </div>
              </slot>
            </template>

            <template slot-scope="{ col, row }">
              <slot :name="col.prop" :row="row" :col="col">
                {{ row[col.prop] }}
              </slot>
            </template>
          </data-grid-column>
        </template>
      </slot>
    </el-table>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/table.css';
import 'element-ui/lib/theme-chalk/input.css';
import xorBy from 'lodash/xorBy';
import debounce from 'lodash/debounce';
import ElTable from 'element-ui/lib/table';
import ElInput from 'element-ui/lib/input';
import DataGridColumn from './DataGridColumn';

export default {
  name: 'data-grid',

  /**
   * @property {Object} sort - объект сортировки
   * @property {String} sort.prop - наименование столбца
   * @property {String} sort.order - порядок сортировки
   * @property {Object} searchModel - модели для полей поиска в колонках
   * @property {Array<Number>} expandModel - коллекция id развернутых строк
   */
  data: () => ({
    sort: null,
    searchModel: {},
    expandModel: []
  }),

  /**
   * @type {Array<Object>} columns - коллекция столбцов
   * @type {Array<Object>} data - коллекция данных
   * @type {Boolean} search - скрыть/показать поля поиска
   * @type {Number} colWidth - минимальная ширина колонки
   * @type {String} colAlign - выравнивание всех колонок по умолчанию
   * @type {Boolean} sortable - сортировка для всех колонок по умолчанию
   */
  props: {
    columns: Array,
    data: Array,
    search: Boolean,
    spanMethod: Function,
    rowClassName: [Function, String],
    colWidth: {
      type: Number,
      default: 150
    },
    colAlign: {
      type: String,
      default: 'left'
    },
    sortable: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * формирует объект свойств для v-bind в компонент el-table-column
     * @param {Object} col - объект столбца
     * @returns {Object}
     */
    bindProps(col) {
      return {
        sortable: (col.sortable || this.sortable) && 'custom',
        sortOrders: ['ascending', 'descending'],
        label: col.label,
        prop: col.prop,
        type: col.type,
        width: col.width || this.colWidth,
        fixed: col.fixed,
        headerAlign: col.align || this.colAlign,
        align: col.align || this.colAlign
      };
    },

    /** @callback для события сортировки */
    onSort({ prop, order }) {
      this.sort = { prop, order };
      this.$emit('grid:sort', this.sort);
    },

    /** @callback для события селект строк */
    onSelect(rows) {
      this.$emit('grid:select', rows);
    },

    /** @callback для события поиска */
    onSearch(val, prop) {
      this.$emit('grid:search', { val, prop });
    },

    /** @callback для события развернуть строку */
    onExpand(row, expanded) {
      this.expandModel = xorBy(this.expandModel, [row], r => r.Id);
      this.$emit('grid:expand', { row, expanded: !!expanded.length });
    },

    /**
     * добавляет реактивные свойства в data для поиска
     * @param {Number} col - объект столбца
     */
    addSearchModel(col) {
      if (col.search) this.$set(this.searchModel, [col.prop], '');
      if (col.children) col.children.forEach(e => this.addSearchModel(e));
    },

    addRowClass(ctx) {
      let classes = `v-grid__row-${ctx.row.Id} `;

      if (this.rowClassName) {
        if (typeof this.rowClassName === 'function') {
          classes += this.rowClassName(ctx) || '';
        } else {
          classes += this.rowClassName;
        }
      }

      return classes;
    }
  },

  created() {
    this.onSearch = debounce(this.onSearch, 200);
    this.columns.forEach(col => this.addSearchModel(col));
  },

  components: {
    ElTable,
    ElInput,
    DataGridColumn
  }
};
</script>

<style lang="postcss">
.data-grid {
  $border-color: #ccc;

  position: relative;
  height: 100%;

  .el-table {
    position: relative;
    transform: translateY(0);

    &--border,
    &--group {
      border: none;
    }

    &__fixed-header-wrapper {
      z-index: 4;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      box-shadow: inset 0px 0px 0px 1px $border-color;
      pointer-events: none;
      content: '';
    }

    table {
      border-collapse: collapse;
    }
    td,
    th {
      border: 1px solid $border-color;
    }
  }
}
</style>
