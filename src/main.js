import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import GlobalComponents from './globals';
// import { upperFirst, camelCase } from 'lodash';

const app = createApp(App).use(GlobalComponents);

// webpack
// const requiereComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/);
// requiereComponent.keys().forEach((fileName) => {
//   const componentConfig = requiereComponent(fileName);

//   const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));

//   app.component(componentName, componentConfig.default || componentConfig);
// });

app.mount('#app');
