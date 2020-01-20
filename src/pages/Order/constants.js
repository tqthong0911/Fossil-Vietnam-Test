import memoizeOne from "memoize-one";

const DEFAULT_DATA = [{
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 1,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Minh Tường',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 2,
}, {
    orderId: 158680083786,
    name: 'Lê Nguyễn Minh Khánh',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 1,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 1,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 2,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 2,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 2,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 1,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 2,
}, {
    orderId: 158680083786,
    name: 'Nguyễn Thị Thanh Thúy',
    quantity: 124,
    time: '1558112400000',
    total: '35.000.000',
    level: 2,
}];

const getData = memoizeOne(() => {
    let result = [];
    for (let i = 0; i < 120; i++) {
        result = result.concat(DEFAULT_DATA.map(e => ({ ...e, id: `${i}-${Math.random()}` })));
    }
    return result;
});

export const ORDERS = {
    orders: getData(),
    totalConfirm: 101,
    totalItem: 1200,
    page: 1,
}