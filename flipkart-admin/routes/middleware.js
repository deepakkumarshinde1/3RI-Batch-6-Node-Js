const middleware = {
  checkIsLogin: (request, response, next) => {
    let { isLogin } = request.session;
    if (isLogin) {
      next();
    } else {
      response.redirect("/login");
      return false;
    }
  },
  dummyLogin: (request, response, next) => {
    request.session.isLogin = true;
    next();
  },
};

module.exports = middleware;
