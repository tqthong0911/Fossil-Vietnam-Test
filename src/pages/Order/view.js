import React, { PureComponent, Fragment } from 'react';
import memoizeOne from 'memoize-one';
import Header from './components/Header';
import { Tabs, Row, Col, Nav } from 'src/components/UIElements';
import TableView from './components/TableView';
import './styles.scss';
import { ORDERS } from './constants';

const { Tab } = Tabs;

class OrdersView extends PureComponent {

    getMenus = memoizeOne(() => {
        const { orders: dataSource } = ORDERS;
        return [{
            id: 'confirm',
            name: 'Confirm',
            width: '200px',
            renderComponent: () => (<TableView dataSource={dataSource} key='Confirm' />),
        }, {
            id: 'progress',
            name: 'Progress',
            renderComponent: () => (<TableView dataSource={dataSource} key='progress' />),
        }, {
            id: 'waiting',
            name: 'Waiting',
            renderComponent: () => (<TableView dataSource={dataSource} key='waiting' />),
        }, {
            id: 'payment',
            name: 'Payment',
            renderComponent: () => (<TableView dataSource={dataSource} key='payment' />),
        }, {
            id: 'success',
            name: 'Success',
            renderComponent: () => (<TableView dataSource={dataSource} key='success' />),
        }];
    });

    render() {
        const { totalConfirm } = ORDERS;
        return (
            <Fragment>
                <Header />
                <div id='orders' className='container'>
                    <Tab.Container defaultActiveKey={this.getMenus()[0].id}>
                        <Row className='wrapper'>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {this.getMenus().map(({ id, name }) => (
                                        <Nav.Item key={id}>
                                            <Nav.Link className='text-uppercase' eventKey={id}>{name}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <div>
                                    You have
                                    <span className='text-success'>{` ${totalConfirm} `} </span>
                                    orders, waiting for your confirm
                                </div>
                                <Tab.Content>
                                    {this.getMenus().map(({ id, renderComponent }) => (
                                        <Tab.Pane key={id} eventKey={id} variant="danger">
                                            {renderComponent()}
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Fragment>
        )
    }
}

export default OrdersView;