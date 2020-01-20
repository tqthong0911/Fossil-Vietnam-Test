import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class extends React.PureComponent {
    static Tab = Tab;

    render() {
        return (<Tabs {...this.props} />)
    }
}