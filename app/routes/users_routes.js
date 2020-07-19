bodyParser = require('body-parser').json();

module.exports = function (app) {
    app.get('/profile', (req, res) => {
        let result = [
            {
                "s1p": "Я усердный, усидчивый, устремленный, уверенный, упорный",
                "s1": "Обо мне",
                "s2": "Мои проекты",
                "s2l": [
                    "Тетрис на javaFX",
                    "Тетрис на Pascal.net",
                    "Этот сайт"
                ]
            }
        ];
        res.send(JSON.stringify(result));
    })

    app.post('/send', (req, res) => {
        const {Pool} = require('pg')
        const fs = require('fs')
        let body = req.body;
        const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'nodejs',
            password: 'sdfsdf',
            port: 5432,
        })
        pool.query("insert into letters values (default, '" + body['email'] + "', '" + body['name'] + "', '" + body['message'] + "')", (err) => {
            pool.end()
        })
        const java = fs.readFileSync('static/submit.html')
        res.setHeader("Content-Type", "text/html")
        res.send(java)
    })

    app.get('/letters', (request, result) => {
        const {Pool} = require('pg')
        let body = request.body;
        const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'nodejs',
            password: 'sdfsdf',
            port: 5432,
        })
        pool.query("select * from letters", (err, res) => {
            result.send(JSON.stringify(res["rows"]));
            pool.end()
        })
    })
};