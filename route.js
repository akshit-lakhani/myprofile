import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './src/components/Home';
export default class route extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home.js" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}
