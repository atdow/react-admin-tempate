/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-05-19 14:30:17
 * @Description: file content
 */
import './App.css';
import '../style/reset.less';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalContext from '@common/global-context';
import { renderAllRoutes } from '@routes/route-loader';
import { connect } from 'react-redux';
// import * as utils from "@src/utils";

import GlobalHeader from '@src/components/GlobalHeader';
import Menu from '@src/components/Menu';

import history from '@store/history';

interface AppProps {
    routes?: any;
}
class App extends React.PureComponent<AppProps> {
    globalContext;

    constructor(props) {
        super(props);
        this.globalContext = {};
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        // console.log('routes:', routes);
        return (
            <div className="app">
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
