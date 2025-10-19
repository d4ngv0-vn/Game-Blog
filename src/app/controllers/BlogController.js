const Blog = require('../models/Blog');
const { mongooseArrayToObject } = require('../../util/mongooseHelper');
const { StatusCodes, ReasonPhrases, getReasonPhrase, getStatusCode, } = require('http-status-codes');

class BlogController {
  // [GET] '/blogs/'

  index(req, res, next) {
    
   Blog.find({})
   .then(blogs => {
    
    res.render('blogs', { 
        blogs:mongooseArrayToObject(blogs) 
    });
   })
   .catch(next);
  }
    // [GET] '/blogs/:id'
    getBlog(req, res, next) {
        console.log(req.params.id)
//    Blog.findById(req.params.id)
//    .then(blog => {
//     res.render('blog', {
//         blog: blog
//     });
//    })
//    .catch(next);
res.status(200).json({})
  }

  // [POST]
  createBlog(req, res) {}

  getBlog(req, res) {}

}

module.exports = new BlogController();
