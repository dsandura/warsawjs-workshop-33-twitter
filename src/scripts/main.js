import App from '@/components/app';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';

Vue.use(BootstrapVue);

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    components: {
        App
    }
});
