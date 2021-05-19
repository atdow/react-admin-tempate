/**
 * @author：atdow
 * @description：路由配置入口文件
 * @date：2020/3/17
 */
import React from 'react';

/**
 * 注意：如果路由组件使用动态加载的话，那么下面就不要再引入组件了，否则动态加载就会失效
 * 如果项目结构简单，可以在当前文件中配置所有路由，如果结构复杂，就需要将二级路由及下层的路由单独拆分成一个个路由配置文件
 */

import App from '@src/entry/App';

export interface RouteConfigDeclaration {
    /**
     * 当前路由路径
     */
    path: string;
    /**
     * 当前路由名称
     */
    name?: string;
    /**
     * 是否严格匹配路由
     */
    exact?: boolean;
    /**
     * 是否需要路由鉴权
     */
    isProtected?: boolean;
    /**
     * 是否需要路由重定向
     */
    isRedirect?: boolean;
    /**
     * 是否需要动态加载路由
     */
    isDynamic?: boolean;
    /**
     * 动态加载路由时的提示文案
     */
    loadingFallback?: string;
    /**
     * 路由组件
     */
    component: any;
    /**
     * 子路由
     */
    routes?: RouteConfigDeclaration[];
}

export const baseUrl = '/react-admin-tempate'; // 路由baseUrl

export const routesConfig: RouteConfigDeclaration[] = [
    {
        path: '/',
        name: 'root-route',
        component: App,
        routes: [
            // 首页
            {
                path: '/index',
                isDynamic: true,
                isRedirect: false,
                component: React.lazy(() =>
                    import(
                        /* webpackChunkName: "dashboard" */
                        '@src/layout/SecurityLayout'
                    ),
                ),
                routes: [
                    {
                        path: '/index/home',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "home" */ '@src/views/home'),
                        ),
                    },
                ],
            },
            // // 首页
            // {
            //     path: '/index',
            //     isDynamic: true,
            //     isRedirect: false,
            //     component: React.lazy(() =>
            //         import(/* webpackChunkName: "home" */ '@src/views/home'),
            //     ),
            // },
            // user
            {
                path: '/user',
                isDynamic: true,
                isRedirect: false,
                component: React.lazy(() =>
                    import(
                        /* webpackChunkName: "userlayout" */
                        '@src/layout/UserLayout'
                    ),
                ),
                routes: [
                    {
                        path: '/user/login',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "login" */ '@src/views/user/Login'),
                        ),
                    },
                ],
            },
            // dashboard
            {
                path: '/dashboard',
                isDynamic: true,
                isRedirect: false,
                component: React.lazy(() =>
                    import(
                        /* webpackChunkName: "dashboard" */
                        '@src/layout/SecurityLayout'
                    ),
                ),
                routes: [
                    {
                        path: '/dashboard/analysis',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(
                                /* webpackChunkName: "analysis" */ '@src/views/dashboard/Analysis'
                            ),
                        ),
                    },
                    {
                        path: '/dashboard/workplace',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(
                                /* webpackChunkName: "workplace" */ '@src/views/dashboard/Workplace'
                            ),
                        ),
                    },
                ],
            },
            // exception
            {
                path: '/exception',
                isDynamic: true,
                isRedirect: false,
                component: React.lazy(() =>
                    import(
                        /* webpackChunkName: "exception" */
                        '@src/layout/SecurityLayout'
                    ),
                ),
                routes: [
                    {
                        path: '/exception/403',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "403" */ '@src/views/exception/403'),
                        ),
                    },
                    {
                        path: '/exception/404',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "404" */ '@src/views/exception/404'),
                        ),
                    },
                    {
                        path: '/exception/500',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "500" */ '@src/views/exception/500'),
                        ),
                    },
                ],
            },
        ],
    },
];
baseUrlAdd(routesConfig);
function baseUrlAdd(routes) {
    routes.forEach(routesItem => {
        if (routesItem.path.indexOf(baseUrl) === -1) {
            routesItem.path = baseUrl + routesItem.path;
        }
        if (routesItem.routes) {
            baseUrlAdd(routesItem.routes);
        }
    });
}
