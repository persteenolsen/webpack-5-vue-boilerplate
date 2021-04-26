// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './components/App.vue';
import routes from './routes';


// Note: Using an Alias in Webpack
// import 'styles/index.scss';

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});

// module.hot.accept();

