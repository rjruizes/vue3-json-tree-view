import TreeViewItemValueComponent from './src/TreeViewItemValue.vue';
import TreeViewItemComponent from './src/TreeViewItem.vue';
import TreeViewComponent from './src/TreeView.vue';

const Vue3JsonTreeViewPlugin = {
	install(app, options) {
		if (!options) {
			options = {};
		}
		app.component('tree-view-item-value', TreeViewItemValueComponent);
		app.component('tree-view-item', TreeViewItemComponent);
		app.component('tree-view', TreeViewComponent);
	},
};

export const TreeView = TreeViewComponent;
export default Vue3JsonTreeViewPlugin;
