
class SiteController {
    // [GET] render /home
    home(req, res) {
        res.render('blog')
    }
    

}

module.exports = new SiteController;