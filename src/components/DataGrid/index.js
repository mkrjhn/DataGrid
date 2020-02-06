import DataGrid from './DataGrid.vue';
import DataGridColumn from './DataGridColumn.vue';

DataGrid.install = (Vue) => {
  Vue.component(DataGrid.name, DataGrid);
};

export {
  DataGrid,
  DataGridColumn
};

export default DataGrid;
