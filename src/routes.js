import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/lista_utente/Table.vue'
import Form from './views/lista_utente/Form.vue'
import report from './views/lista_utente/report.vue'
import cambiaPassword from './views/conto/cambia_password.vue'
import Page5 from './views/conto/Page5.vue'
import manageHomepage from './views/manage_homepage/home.vue'
import echarts from './views/charts/echarts.vue'
import agentManagement from './views/agente/agent_management.vue'
import billReport from './views/statistical_report/bill_report'
import estrattoConto from './views/statistical_report/estratto_conto'
import teamQuery from './views/statistical_report/team_query'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/manage_homepage', component: manageHomepage, name: 'Manage homepage' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'conto',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/cambia_password', component: cambiaPassword, name: 'cambia password' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'agente',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/agente', component: agentManagement, name: 'Agent Management' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'lista utente',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user_list', component: manageHomepage, name: 'user list' },
            { path: '/report', component: report, name: 'report' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Statistical report',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/team_query', component: teamQuery, name: 'Team performance query' },
            { path: '/bill_report', component: billReport, name: 'bill report' },
            { path: '/estratto', component: estrattoConto, name: 'estratto conto' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
