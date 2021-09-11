import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';

//emmiter is the global object handing custom event emmisions
const emitter = mitt();
const app = createApp(App);
//change the global emitter to the one just created
app.config.globalProperties.emitter = emitter;
app.mount('#app');
