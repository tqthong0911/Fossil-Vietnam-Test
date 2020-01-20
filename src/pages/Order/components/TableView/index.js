import React, { PureComponent } from 'react';
import moment from 'moment';
import { parseInt, isEmpty } from 'lodash';
import { StandardTable, Tag } from 'src/components/UIElements'
import { DATETIME_FORMAT } from 'src/pages/constants';
import './styles.scss';

export default class TableView extends PureComponent {
    render() {
        const columns = [{
            text: 'Name',
            width: '30%',
            id: 'name',
            dataField: 'name',
            formatter: (name, row) => {
                const { level } = row;
                return (
                    <div className='order-name'>
                        <span>{name}</span>
                        <Tag style={{ width: 150, margin: 'auto' }} name={`Lv${level}`} />
                    </div>
                )
            },
            headerStyle: { width: 300 },
        }, {
            text: 'Quantity',
            width: '30%',
            id: 'quantity',
            dataField: 'quantity'
        }, {
            text: 'Time',
            width: '30%',
            id: 'time',
            dataField: 'time',
            formatter: (time) => {
                if (isEmpty(time)) return '';
                return moment(parseInt(time)).format(DATETIME_FORMAT)
            },
        }, {
            text: 'Order ID',
            width: '30%',
            id: 'orderId',
            dataField: 'orderId'
        }, {
            text: 'Total',
            width: '30%',
            id: 'total',
            dataField: 'total',
        }];

        const { dataSource, totalConfirm } = this.props;
        return (
            <div className='wrapper'>
                <StandardTable columns={columns} dataSource={dataSource} totalConfirm={totalConfirm} />
            </div>
        )
    }
}
