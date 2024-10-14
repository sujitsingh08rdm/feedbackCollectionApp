const passport = require("passport");

//google auth route
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // This tells Passport to use the "google" strategy. It will redirect the user to Google's login page.
      scope: ["profile", "email"],
      //score Specifies what information the app is asking permission to access
    })
  );

  //After the user logs in and grants permission, Google redirects them to this URL (/auth/google/callback).
  app.get("/auth/google/callback/", passport.authenticate("google")); // the callback function handles response from google, retreives the user profile information and complets the authentication process

  // route to logout
  app.get("api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // we created this route for user info, req.user is a property that Passport.js automatically attaches to the req object after successful authentication. It contains the authenticated user's information, which has been retrieved during the session.
  app.get("api/current_user", (req, res) => {
    res.send(req.user);
  });
};
