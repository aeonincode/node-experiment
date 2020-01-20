// create server with express

let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
        <p>Sorry, that is the incorrect.</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

ourApp.get('/answer', function(req, res) {
    res.send("Are you lost? There is nothing to see here.")
})

ourApp.listen(3000)
























// let http = require("http")

// let ourApp = http.createServer(function(req, res) {
//     if (req.url == "/") {
//         res.end("Hello, and welcome to our home page.")
//     }

//     if (req.url == "/about") {
//         res.end("Thank you for the interest in our company.")
//     }

//     res.end("We cannot find the page you are looking for.")
// })
// ourApp.listen(3000)
















// let strawberryCount = 3

// if (strawberryCount > 10) {
//     console.log("you have enough strawberries.")
// } else {
//     console.log("You do not have enough berries.")
// }