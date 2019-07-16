const express = require("express");
const next = require("next");
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const ApiServices = require('./services/api');

app.prepare().then(() => {
    const server = express();
    server.use(express.static(path.join(__dirname, "/static")));

    // server.get('/', (req, res) => {
    //     return app.render(req, res, '/', req.query)
    // });

    // server.get('/about', (req, res) => {
    //     return app.render(req, res, '/about', req.query)
    // });

    // server.get('/posts/:slug', (req, res) => {
    //     console.log("you are accessing /posts");
    //
    //     return app.render(req, res, '/posts', {slug: req.params.slug})
    // });

    server.get('/v1/api/countries', (req, res) => {
        let countries = ApiServices.getCountries();
        return res.json(countries);
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://127.0.0.1:${port}`)
    })
});
