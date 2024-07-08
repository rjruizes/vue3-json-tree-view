# Vue JSON Tree View

![a demonstration](https://raw.githubusercontent.com/rjruizes/vue-json-tree-view/main/header.png)

##  Installation

Install the plugin with npm:
```shell
npm install --save vue-json-tree-view
```

Then, in your Application JavaScript, add:
```js
import TreeView from "vue-json-tree-view"
Vue.use(TreeView)
```

## Usage

Put the `tree-view` element into your  HTML where you want the Tree View to appear.
```html
<div>
  <tree-view :data="jsonSource" :options="{maxDepth: 3}"></tree-view>
</div>
```

## Props

#### `data`

The JSON to be displayed. Expects a valid JSON object.

#### `options`

The defaults are:
```js
{
  maxDepth: 4,
  rootObjectKey: "root",
  modifiable: false,
  link: false,
  limitRenderDepth: false
}
```
- maxDepth: The maximum number of levels of the JSON Tree that should be expanded by default. Expects an Integer from 0 to Infinity.
- rootObjectKey: the name of the Root Object, will default to `root`.
- modifiable: To modify the json value.
- link: URL strings will appear as clickable links (unless `modifiable="true"`).
- limitRenderDepth: maximum number of nodes that should be rendered (for very large JSONs)

## Event

#### updated json data
If `modifiable` is true and you want to take the updated json data, you must register event handler as `v-on:change-data=...`. Only one argument is passed that is updated data - `data`.
```html
<div>
  <tree-view :data="jsonSource" :options="{modifiable: true}" @change-data="onChangeData"></tree-view>
</div>

// in your vue code
  ...
  methods: {
    onChangeData: function(data) {
      console.log(JSON.stringify(data))
    }
  },
  ...

```


## Custom Styling

All leaves will have their type indicated as a CSS class, like `tree-view-item-value-string`. Supported types: String, Number, Function, Boolean and Null Values.

Keys can also be styled. For instance to make labels red:
```css
.tree-view-item-key {
    color: red;
}
```

## Contributing

Contributions to this repo are very welcome as they are what has helped it become what it is today. Simply raise an issue with new ideas or submit a pull request.

A github action automatically deploys changes when they are merged into the master branch.