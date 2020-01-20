import React, { PureComponent, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './Layout';
import Orders from './Order';

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path='/order' component={Orders} />
                    <Route component={() => (<div style={{ flex: 1 }} />)} />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default Home;