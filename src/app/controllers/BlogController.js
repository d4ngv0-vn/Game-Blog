
class BlogController {
    // [GET] render
    index(req, res) {
        res.render('blog')
    }
    // [POST]
    createBlog(req, res) {
        
    }
    
    show(req, res) {
        res.send('yeah')
    }

    getBlog(req, res) {

    }

    getBlogs(req, res) {

    }

}

module.exports = new BlogController;