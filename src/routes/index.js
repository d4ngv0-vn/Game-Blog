const blogRouter = require('./blog');
const siteRouter = require('./site');

function route(app) {
    app.use('/blogs', blogRouter);
    app.use('/', siteRouter)
}

module.exports = route;