import AppHome from './components/AppHome.vue';
import AppMyInfo from './components/AppMyInfo.vue';
import AppAbout from './components/AppAbout.vue';

import AppList from './components/AppList.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
	{
        path: '/about',
        name: 'About',
        component: AppAbout
    },
    {
        path: '/myinfo',
        name: 'Per Steen Olsen',
        component: AppMyInfo
    },
	 {
        path: '/employee',
        name: 'Employees',
        component: AppList
    }
];

export default routes;
