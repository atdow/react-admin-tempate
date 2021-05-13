/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 16:33:36
 * @Description: file content
 */
import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalContext from '@common/global-context';
import { renderAllRoutes } from '@routes/route-loader';
import { connect } from 'react-redux';
// import * as utils from "@src/utils";

import GlobalHeader from '@src/components/GlobalHeader';
import Menu from '@src/components/Menu';

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
        return (
            <>
                <GlobalHeader />
                <Menu />
                <GlobalContext.Provider value={this.globalContext}>
                    <Switch>{routes}</Switch>
                </GlobalContext.Provider>
            </>
        );
    }
}

export default App;
