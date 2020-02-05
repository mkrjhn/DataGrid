# DataGrid
Data grid by [element-ui table](https://element.eleme.io/#/en-US/component/table)

# client

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### events
* grid:sort - сортировка, возвращает { prop, order } имя колонки и порядок сортировки
* grid:search - возвращает { prop, val }
* grid:select - возвращает массив отмеченных строк
* grid:expand - возвращет { row, expanded } expanded{Boolean}]

### data-grid properties
* columns - массив столбцов
* data - массив данных
* search - показать/скрыть поля поиска Boolean
* colWidth - ширина столбца подефолту Number
* colAlign - выравнивание left/center/right
* sortable - сортировка по умолчанию для всех столбцов Boolean, подефоту false
* spanMethod - метод для объединения ячеек
* rowClassName - метод или строка для добавления классов строке

### customizing content
template slot="название колонки" scope-slot="{ col, row }"
template slot="название колонки - header" scope-slot="{ }"

### span-method
```javascript
spanMethod({ row, column, rowIndex, columnIndex }) {
    if (columnIndex === 1) {
        return {
            colspan: 2,
            rowspan: 1
        };
    } else if (columnIndex === 2) {
        return {
            colspan: 0,
            rowspan: 0
        };
    }
}
```

### data-grid-column properties
* prop - название столбца
* label - заголовок столбца
* type - selection/expand
* width - ширина
* align - выравнивание
* fixed - фиксирование столбца true/right - чтобы прижать к правому краю
* search - поиск
* children - вложенные колонки