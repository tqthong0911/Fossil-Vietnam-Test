import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from 'src/components/UIElements';
import { TITLE } from './constants';

import './styles.scss';

export default class StandardTable extends React.Component {

    customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total text-left w-100 d-flex">
            You have: {size} order
        </span>
    );

    pageListRenderer = ({ pages, onPageChange }) => {
        const pageWithoutIndication = pages.filter(p => (p.page !== TITLE.PREV && p.page !== TITLE.NEXT));
        return (
            <div className='paginationBtn'>
                {pageWithoutIndication.map(({ page, ...rest }) => (
                    <Button
                        variant="outline-dark"
                        {...rest}
                        key={page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Button>
                ))}
            </div>
        );
    };

    render() {
        const options = {
            sizePerPage: 10,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true,
            firstPageText: TITLE.FIRST,
            firstPageTitle: TITLE.FIRST,
            lastPageText: TITLE.LAST,
            lastPageTitle: TITLE.LAST,
            alwaysShowAllBtns: true,
            showTotal: true,
            paginationTotalRenderer: this.customTotal,
            pageListRenderer: this.pageListRenderer,
        };
        const { dataSource, columns } = this.props;
        return (
            <div className='wrapper-table'>
                <BootstrapTable
                    keyField="id"
                    data={dataSource}
                    columns={columns}
                    bordered={false}
                    pagination={paginationFactory(options)}
                />
            </div>
        );
    }
}