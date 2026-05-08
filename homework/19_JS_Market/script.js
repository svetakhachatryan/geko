const orders = [  {    id: 1,    user: "Ivan",    items: [      { name: "Laptop", price: 1200, qty: 1 },      { name: "Mouse", price: 25, qty: 2 }    ],    status: "pending",    createdAt: "2026-04-28"  },  {    id: 2,    user: "Anna",    items: [      { name: "Phone", price: 800, qty: 1 }    ],    status: "completed",    createdAt: "2026-04-20"  },  {    id: 3,    user: "Ivan",    items: [      { name: "Keyboard", price: 100, qty: 1 }    ],    status: "pending",    createdAt: "2026-04-29"  }];

function calculateOrderTotal(order){
    let sum = 0
    order.items.forEach(item => {
        sum = sum + (item.price * item.qty)
    })
    return sum
}

function getUserPendingOrders(orders, username){
    return orders.filter(order => {
        if(order.user === username && order.status === "pending"){
            return true 
        } else {
            return false
        }
    })
}

function getTotalRevenue(orders){
    let revenue = 0
    orders.forEach(order => {
        if(order.status === "completed"){
            revenue = revenue + calculateOrderTotal(order)
        }
    })
    return revenue
}

function groupOrdersByUser(orders){
    let result = {}
    orders.forEach(order => {
        let name = order.user
        if(!result[name]){
            result [name] = []
        }
        result [name].push(order)
    })
    return result
}

function getTopUsers(orders, topN){
    const grouped = groupOrdersByUser(orders)

 const usernames = Object.keys(grouped)

 const userTotals = Object.keys(grouped).map(name => {
    const currentOrders = grouped[name]
    const total = getTotalRevenue(currentOrders)
    return {user: name, total: total}
})
 userTotals.sort((a, b) => b.total - a.total)
 return userTotals.slice(0, topN)
}

console.log(getTopUsers(orders, 2))