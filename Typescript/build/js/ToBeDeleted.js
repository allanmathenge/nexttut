"use strict";
//////////////////////// index signatures and key of Assertions \\\\\\\\
const TodaysOrders = {
    Pizza: 3,
    Maccaroni: 6,
    Hamburger: 9,
    Hotdogg: 6,
};
// console.log(TodaysOrders['Hamburger'])
// console.log(TodaysOrders['Maccaroni'])
// console.log(TodaysOrders['Pizza'])
const ordersToday = (TodaysOrders) => {
    Object.keys(TodaysOrders).forEach((el) => console.log(el));
};
ordersToday(TodaysOrders);
