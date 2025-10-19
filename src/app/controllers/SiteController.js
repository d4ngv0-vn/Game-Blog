class SiteController {
  // [GET] render /home
  home(req, res) {
    res.render('home');
  }
}

module.exports = new SiteController();
