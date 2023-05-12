const http = require('http'),

orders = [
    {order_id: 1, order_status: 'Required', client: 'Johana', order: "Soup and meat"},
    {order_id: 2, order_status: 'In progress', client: 'Monroe', order: "Cake and coke"},
    {order_id: 3, order_status: 'In progress', client: 'Carassr', order: "Meat and rice"},
    {order_id: 4, order_status: 'Sold', client: 'Marit', order: "Orange juice"},
    {order_id: 5, order_status: 'Required', client: 'Jusih', order: "Broasted chicken"}

]

webServer = (req, res) => {
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(orders))
            break;
        case '/In-Progress':
            const in_progress = orders.filter(item => item.order_status === 'In progress')
            res.end(JSON.stringify(in_progress))
            break;
        case '/By-Name':
            getByName = name => {
                return orders.filter(item => item.client === name)
            }
            res.end(JSON.stringify(getByName('Johana')))
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('404 ERROR')
            break;
    }
}

http
    .createServer(webServer)
    .listen(3000, 'localhost', () => console.log('Server has been initialized... port: 3000'))