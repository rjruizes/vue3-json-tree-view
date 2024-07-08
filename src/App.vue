<template>
  <div id="container" class="container">

    <div class="row">
      <div class="col-sm-6">
        <h2>Test String, some Max Depth, Named Root Object</h2>
        <pre><code>{{sampleJSONString}}</code></pre>
      </div>
      <div class="col-sm-6">
        <tree-view :data="sampleJSONString" :options="{maxDepth: 2, rootObjectKey: 'The Test String'}"></tree-view>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <h2>Test Array, some Max Depth, Named Root Object, and Auto Linking</h2>
        <pre><code>{{sampleJSONArray}}</code></pre>
      </div>
      <div class="col-sm-6">
        <tree-view :data="sampleJSONArray" :options="{maxDepth: 2, rootObjectKey: 'The Test Array', link: true}"></tree-view>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <h2>No Max Depth, Named Root Object</h2>
        <pre><code>{{sampleJSON}}</code></pre>
      </div>
      <div class="col-sm-6">
        <tree-view :data="sampleJSON" :options="{maxDepth: 0, rootObjectKey: 'The named Object'}"></tree-view>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <h2>Max Depth set to 2</h2>
        <pre><code>{{sampleJSON}}</code></pre>
      </div>
      <div class="col-sm-6">
        <tree-view :data="sampleJSON" :options="{maxDepth: 2}"></tree-view>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <h2>Modifiable</h2>
        <pre><code>{{sampleJSON}}</code></pre>
      </div>
      <div class="col-sm-6">
        <tree-view :data="sampleJSON" :options="{modifiable: true}" v-on:change-data="onChangeData" ></tree-view>
      </div>
    </div>
  </div>
</template>

<script>
import TreeView from './TreeView.vue';

export default {
	name: 'TreeViewDemoApp',
	components: {
		TreeView
	},
	data() {
		return {
			sampleJSON: { testArray: ['Just a Test String', 'in a Test Array', 0, 1, true, false], component: 'vuejsontreeview', descripton: 'A JSON Tree View built in Vue.js', tags: [{ name: 'vue.js' }, { name: 'JSON' }], steps: ['HTML Template', 'Root Component', 'View Component', { 'Transformation Logic': ['Transform Objects', 'Transform Arrays', 'Transform Values'] }, 'Animate', 'Allow Options', 'Blog about it...'] }, // eslint-disable-line max-len
			sampleJSONString: 'Just a Test String',
			sampleJSONArray: ['Just a Test String', 'in a Test Array', 'www.google.com', 0, 1, true, false]
		};
	},
	methods: {
		onChangeData(data) {
			this.sampleJSON = data;
		}
	},
	watch: {
		sampleJSON() {
			console.log('updated sampleJSON'); // eslint-disable-line no-alert
		}
	}
}
</script>