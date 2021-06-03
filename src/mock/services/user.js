import Mock from 'mockjs2';
import { builder } from '../util';

import { baseUrl } from '@src/routes/routes-config';

const info = options => {
    //console.log('options', options)
    const userInfo = {
        id: '4291d7da9005377ec9aec4a71ea837f',
        name: '天野远子',
        username: 'admin',
        password: '',
        avatar: '/avatar2.jpg',
        status: 1,
        telephone: '',
        lastLoginIp: '27.154.74.117',
        lastLoginTime: 1534837621348,
        creatorId: 'admin',
        createTime: 1497160610259,
        merchantCode: 'TLif2btpzg079h15bk',
        deleted: 0,
        roleId: 'admin',
        role: {},
    };
    // role
    const roleObj = {
        id: 'admin',
        name: '管理员',
        describe: '拥有所有权限',
        status: 1,
        creatorId: 'system',
        createTime: 1497160610259,
        deleted: 0,
        permissions: [
            {
                roleId: 'admin',
                permissionId: 'dashboard',
                permissionName: '仪表盘',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'exception',
                permissionName: '异常页面权限',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'result',
                permissionName: '结果权限',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'profile',
                permissionName: '详细页权限',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'table',
                permissionName: '表格权限',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'import',
                        describe: '导入',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'form',
                permissionName: '表单权限',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'order',
                permissionName: '订单管理',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'permission',
                permissionName: '权限管理',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'role',
                permissionName: '角色管理',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'table',
                permissionName: '桌子管理',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
            {
                roleId: 'admin',
                permissionId: 'user',
                permissionName: '用户管理',
                actions:
                    '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false,
                    },
                    {
                        action: 'import',
                        describe: '导入',
                        defaultCheck: false,
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false,
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false,
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false,
                    },
                    {
                        action: 'export',
                        describe: '导出',
                        defaultCheck: false,
                    },
                ],
                actionList: null,
                dataAccess: null,
            },
        ],
    };

    roleObj.permissions.push({
        roleId: 'admin',
        permissionId: 'support',
        permissionName: '超级模块',
        actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
        actionEntitySet: [
            {
                action: 'add',
                describe: '新增',
                defaultCheck: false,
            },
            {
                action: 'import',
                describe: '导入',
                defaultCheck: false,
            },
            {
                action: 'get',
                describe: '详情',
                defaultCheck: false,
            },
            {
                action: 'update',
                describe: '修改',
                defaultCheck: false,
            },
            {
                action: 'delete',
                describe: '删除',
                defaultCheck: false,
            },
            {
                action: 'export',
                describe: '导出',
                defaultCheck: false,
            },
        ],
        actionList: null,
        dataAccess: null,
    });

    userInfo.role = roleObj;
    return builder(userInfo);
};

const userNav = options => {
    const nav = [
        // 首页
        {
            name: 'index',
            parentId: 0,
            id: 19,
            meta: {
                icon: 'HomeOutlined',
                title: '首页',
                show: true,
            },
            component: 'Home',
            path: '/index/home',
        },
        // dashboard
        {
            name: 'dashboard',
            parentId: 0,
            id: 1,
            meta: {
                icon: 'dashboard',
                title: '仪表盘',
                show: true,
            },
            component: 'RouteView',
            redirect: '/dashboard/workplace',
        },
        {
            name: 'workplace',
            parentId: 1,
            id: 7,
            meta: {
                title: '工作台',
                show: true,
            },
            component: 'Workplace',
        },
        {
            name: 'monitor',
            path: 'https://www.baidu.com/',
            parentId: 1,
            id: 3,
            meta: {
                title: '监控页（外部）',
                target: '_blank',
                show: true,
            },
        },
        {
            name: 'Analysis',
            parentId: 1,
            id: 2,
            meta: {
                title: '分析页',
                show: true,
            },
            component: 'Analysis',
            path: '/dashboard/analysis',
        },
        {
            name: 'tests',
            parentId: 1,
            id: 8,
            meta: {
                title: '测试功能',
                show: true,
            },
            component: 'TestWork',
        },
        // form
        {
            name: 'form',
            parentId: 0,
            id: 10,
            meta: {
                icon: 'form',
                title: '表单页',
            },
            redirect: '/form/base-form',
            component: 'PageView',
        },
        {
            name: 'basic-form',
            parentId: 10,
            id: 6,
            meta: {
                title: '基础表单',
            },
            component: 'BasicForm',
        },
        {
            name: 'step-form',
            parentId: 10,
            id: 5,
            meta: {
                title: '分步表单',
            },
            component: 'StepForm',
        },
        {
            name: 'advanced-form',
            parentId: 10,
            id: 4,
            meta: {
                title: '高级表单',
            },
            component: 'AdvanceForm',
        },

        // list
        {
            name: 'list',
            parentId: 0,
            id: 10010,
            meta: {
                icon: 'table',
                title: '列表页',
                show: true,
            },
            redirect: '/list/table-list',
            component: 'PageView',
        },
        {
            name: 'table-list',
            parentId: 10010,
            id: 10011,
            path: '/list/table-list/:pageNo([1-9]\\d*)?',
            meta: {
                title: '查询表格',
                show: true,
            },
            component: 'TableList',
        },
        {
            name: 'basic-list',
            parentId: 10010,
            id: 10012,
            meta: {
                title: '标准列表',
                show: true,
            },
            component: 'StandardList',
        },
        {
            name: 'card',
            parentId: 10010,
            id: 10013,
            meta: {
                title: '卡片列表',
                show: true,
            },
            component: 'CardList',
        },
        {
            name: 'search',
            parentId: 10010,
            id: 10014,
            meta: {
                title: '搜索列表',
                show: true,
            },
            redirect: '/list/search/article',
            component: 'SearchLayout',
        },
        {
            name: 'article',
            parentId: 10014,
            id: 10015,
            meta: {
                title: '搜索列表（文章）',
                show: true,
            },
            component: 'SearchArticles',
        },
        {
            name: 'project',
            parentId: 10014,
            id: 10016,
            meta: {
                title: '搜索列表（项目）',
                show: true,
            },
            component: 'SearchProjects',
        },
        {
            name: 'application',
            parentId: 10014,
            id: 10017,
            meta: {
                title: '搜索列表（应用）',
                show: true,
            },
            component: 'SearchApplications',
        },

        // profile
        {
            name: 'profile',
            parentId: 0,
            id: 10018,
            meta: {
                title: '详情页',
                icon: 'profile',
                show: true,
            },
            redirect: '/profile/basic',
            component: 'RouteView',
        },
        {
            name: 'basic',
            parentId: 10018,
            id: 10019,
            meta: {
                title: '基础详情页',
                show: true,
            },
            component: 'ProfileBasic',
        },
        {
            name: 'advanced',
            parentId: 10018,
            id: 10020,
            meta: {
                title: '高级详情页',
                show: true,
            },
            component: 'ProfileAdvanced',
        },

        // result
        {
            name: 'result',
            parentId: 0,
            id: 10021,
            meta: {
                title: '结果页',
                icon: 'check-circle-o',
                show: true,
            },
            redirect: '/result/success',
            component: 'PageView',
        },
        {
            name: 'success',
            parentId: 10021,
            id: 10022,
            meta: {
                title: '成功',
                hiddenHeaderContent: true,
                show: true,
            },
            component: 'ResultSuccess',
        },
        {
            name: 'fail',
            parentId: 10021,
            id: 10023,
            meta: {
                title: '失败',
                hiddenHeaderContent: true,
                show: true,
            },
            component: 'ResultFail',
        },

        // Exception
        {
            name: 'exception',
            parentId: 0,
            id: 10024,
            meta: {
                title: '异常页',
                icon: 'warning',
                show: true,
            },
            redirect: '/exception/403',
            component: 'RouteView',
        },
        {
            name: '403',
            parentId: 10024,
            id: 10025,
            meta: {
                title: '403',
                show: true,
            },
            component: 'Exception403',
        },
        {
            name: '404',
            parentId: 10024,
            id: 10026,
            meta: {
                title: '404',
                show: true,
            },
            component: 'Exception404',
        },
        {
            name: '500',
            parentId: 10024,
            id: 10027,
            meta: {
                title: '500',
                show: true,
            },
            component: 'Exception500',
        },

        // account
        {
            name: 'account',
            parentId: 0,
            id: 10028,
            meta: {
                title: '个人页',
                icon: 'user',
                show: true,
            },
            redirect: '/account/center',
            component: 'RouteView',
        },
        {
            name: 'center',
            parentId: 10028,
            id: 10029,
            meta: {
                title: '个人中心',
                show: true,
            },
            component: 'AccountCenter',
        },
        // 特殊三级菜单
        {
            name: 'settings',
            parentId: 10028,
            id: 10030,
            meta: {
                title: '个人设置',
                hideHeader: true,
                hideChildren: true,
                show: true,
            },
            redirect: '/account/settings/base',
            component: 'AccountSettings',
        },
        {
            name: 'BaseSettings',
            path: '/account/settings/base',
            parentId: 10030,
            id: 10031,
            meta: {
                title: '基本设置',
                show: false,
            },
            component: 'BaseSettings',
        },
        {
            name: 'SecuritySettings',
            path: '/account/settings/security',
            parentId: 10030,
            id: 10032,
            meta: {
                title: '安全设置',
                show: false,
            },
            component: 'SecuritySettings',
        },
        {
            name: 'CustomSettings',
            path: '/account/settings/custom',
            parentId: 10030,
            id: 10033,
            meta: {
                title: '个性化设置',
                show: false,
            },
            component: 'CustomSettings',
        },
        {
            name: 'BindingSettings',
            path: '/account/settings/binding',
            parentId: 10030,
            id: 10034,
            meta: {
                title: '账户绑定',
                show: false,
            },
            component: 'BindingSettings',
        },
        {
            name: 'NotificationSettings',
            path: '/account/settings/notification',
            parentId: 10030,
            id: 10034,
            meta: {
                title: '新消息通知',
                show: false,
            },
            component: 'NotificationSettings',
        },
    ];
    const json = builder(nav);
    //console.log('json', json)
    return json;
};
export const menu = [
    // 首页
    {
        name: 'index',
        parentId: 0,
        id: 10000,
        meta: {
            icon: 'HomeOutlined',
            title: '首页',
            show: true,
        },
        component: 'Home',
        path: baseUrl + '/index/home',
    },
    // dashboard
    {
        name: 'workplace',
        parentId: 20000,
        id: 20001,
        meta: {
            title: '工作台',
            show: true,
        },
        component: 'Workplace',
        path: baseUrl + '/dashboard/workplace',
    },
    {
        name: 'dashboard',
        parentId: 0,
        id: 20000,
        meta: {
            icon: 'DashboardOutlined',
            title: 'Dashboard',
            show: true,
        },
        component: 'SecurityLayout',
        redirect: '/dashboard/workplace',
        path: baseUrl + '/dashboard',
    },
    {
        name: 'monitor',
        parentId: 20000,
        id: 20002,
        meta: {
            title: '监控页（外部）',
            target: '_blank',
            show: true,
        },
        component: 'monitor',
        path: baseUrl + '/dashboard/monitor',
    },
    {
        name: 'Analysis',
        parentId: 20000,
        id: 20003,
        meta: {
            title: '分析页',
            show: true,
        },
        component: 'Analysis',
        path: baseUrl + '/dashboard/analysis',
    },
    // {
    //     name: 'AnalysisChildren1',
    //     parentId: 4,
    //     id: 6,
    //     meta: {
    //         title: '分析页子1',
    //         show: true,
    //     },
    //     component: 'AnalysisChildren1',
    //     path: '/dashboard/analysisChildren1',
    // },
    // {
    //     name: 'AnalysisChildren2',
    //     parentId: 4,
    //     id: 7,
    //     meta: {
    //         title: '分析页子2',
    //         show: true,
    //     },
    //     component: 'AnalysisChildren2',
    //     path: '/dashboard/analysisChildren2',
    // },
    {
        name: 'tests',
        parentId: 20000,
        id: 20004,
        meta: {
            title: '测试功能',
            show: true,
        },
        component: 'Tests',
        path: baseUrl + '/dashboard/tests',
    },
    // Exception
    {
        name: 'exception',
        parentId: 0,
        id: 30000,
        meta: {
            icon: 'WarningOutlined',
            title: '异常页',
            show: true,
        },
        component: 'SecurityLayout',
        redirect: '/exception',
        path: baseUrl + '/exception',
    },
    {
        name: '403',
        parentId: 30000,
        id: 30001,
        meta: {
            title: '403',
            show: true,
        },
        component: '403',
        path: baseUrl + '/exception/403',
    },
    {
        name: '404',
        parentId: 30000,
        id: 30002,
        meta: {
            title: '404',
            show: true,
        },
        component: '404',
        path: baseUrl + '/exception/404',
    },
    {
        name: '500',
        parentId: 30000,
        id: 30003,
        meta: {
            title: '500',
            show: true,
        },
        component: '500',
        path: baseUrl + '/exception/500',
    },
    // list
    {
        name: 'list',
        parentId: 0,
        id: 40000,
        meta: {
            title: '列表页',
            show: true,
            icon: 'TableOutlined',
        },
        component: 'SecurityLayout',
        path: baseUrl + '/list',
    },
    {
        name: 'searchList',
        parentId: 40000,
        id: 40001,
        meta: {
            title: '查询列表',
            show: true,
        },
        component: 'searchList',
        path: baseUrl + '/list/searchList',
    },
    // permission
    {
        name: 'permission',
        parentId: 0,
        id: 50000,
        meta: {
            title: '权限管理',
            show: true,
            icon: 'UserSwitchOutlined',
        },
        component: 'SecurityLayout',
        path: baseUrl + '/permission',
    },
    {
        name: 'role',
        parentId: 50000,
        id: 50001,
        meta: {
            title: '角色管理',
            show: true,
        },
        component: 'role',
        path: baseUrl + '/permission/role',
    },
];
const permission = options => {
    const permission = {
        Analysis: true,
    };
    const result = {
        menu,
        permission,
    };
    const json = builder(result);
    return json;
};

Mock.mock(/\/api\/user\/info/, 'get', info);
Mock.mock(/\/api\/user\/nav/, 'get', userNav);
Mock.mock(/\/pt\/perssionlist/, 'get', permission);
