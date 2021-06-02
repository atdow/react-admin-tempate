/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-06-02 13:35:35
 * @Description: file content
 */
import './App.css';
import '../style/reset.less';
import '../style/global.less';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalContext from '@common/global-context';
import { renderAllRoutes } from '@routes/route-loader';
import { connect } from 'react-redux';
// import * as utils from "@src/utils";

// 实现动态title
import { Helmet } from 'react-helmet';
import history from '@store/history';
import { routesConfig } from '@routes/routes-config';

interface AppProps {
    routes?: any;
}
type State = {
    title: string;
};
let unlisten;
class App extends React.PureComponent<AppProps, State> {
    globalContext;

    constructor(props) {
        super(props);
        this.globalContext = {};
        this.state = {
            title: '',
        };
    }
    componentDidMount() {
        let pathname = history.location.pathname;
        this.pathnameToRouteTitle(pathname, routesConfig);
        unlisten = history.listen((location, action) => {
            pathname = location.pathname;
            this.pathnameToRouteTitle(pathname, routesConfig);
        });
    }
    pathnameToRouteTitle(pathname, routes) {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path == pathname) {
                this.setState({ title: routes[i].meta?.title });
                break;
            }
            if (routes[i].routes?.length > 0) {
                this.pathnameToRouteTitle(pathname, routes[i].routes);
            }
        }
    }
    componentWillUnmount() {
        unlisten(); // 停止侦听
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        // console.log('routes:', routes);
        return (
            <div className="app">
                <Helmet>
                    <title>{this.state.title}</title>
                    <meta name="description" content="Todos!" />
                    <meta name="theme-color" content="#008f68" />
                </Helmet>
                {/* <Menu history={history} /> */}
                <div className="s-content">
                    {/* <GlobalHeader history={history} /> */}
                    <GlobalContext.Provider value={this.globalContext}>
                        <Switch>{routes}</Switch>
                    </GlobalContext.Provider>
                </div>
            </div>
        );
    }
}

export default App;
