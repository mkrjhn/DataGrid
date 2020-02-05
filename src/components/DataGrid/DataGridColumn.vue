<script>
import ElTableColumn from 'element-ui/lib/table-column';

const DataGridColumn = {
  functional: true,

  render(h, { scopedSlots, props: { generator, options } }) {
    const children = [];
    const params = { props: generator(options) };

    if (options.children && options.children.length) {
      options.children.forEach(e => children.push(
        h(DataGridColumn, {
          props: { generator, options: e },
          scopedSlots
        })
      ));
    } else if (options.prop) {
      params.scopedSlots = {
        default: ({ row }) => h(
          'slot',
          scopedSlots.default
            ? scopedSlots.default({ row, col: options })
            : []
        ),

        header: ctx => h(
          'slot',
          { props: { name: 'header' } },
          scopedSlots.header ? scopedSlots.header(ctx) : []
        )
      };
    }

    return h(ElTableColumn, params, children);
  },

  components: {
    ElTableColumn
  }
};

export default DataGridColumn;
</script>
