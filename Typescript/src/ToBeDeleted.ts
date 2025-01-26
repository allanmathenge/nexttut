
//////////////////////// index signatures and key of Assertions \\\\\\\\

interface transactions1 {
    [index:string]: number
    Pizza: number
    Maccaroni: number
    Hamburger: number
}

const TodaysOrders: transactions1 = {
    Pizza:3,
    Maccaroni: 6,
    Hamburger: 9,

    Hotdogg: 6,
}

// console.log(TodaysOrders['Hamburger'])
// console.log(TodaysOrders['Maccaroni'])
// console.log(TodaysOrders['Pizza'])

const ordersToday = (TodaysOrders: transactions1) => {
    Object.keys(TodaysOrders).forEach((el)=> console.log(el))
}

ordersToday(TodaysOrders)


