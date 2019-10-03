import auth0 from "auth0-js";
import { navigateTo } from "gatsby-link";

if (typeof localStorage === "undefined" || localStorage === null) {
  require("localstorage-polyfill");
}

const AUTH0_DOMAIN = process.env["GATSBY_AUTH0_DOMAIN"];
const AUTH0_CLIENT_ID = process.env["GATSBY_AUTH0_CLIENT_ID"];
const AUTH0_REDIRECT_URI = process.env["GATSBY_AUTH0_REDIRECT_URI"];

class Auth {
  // `window` is not defined at build time so we need to work around it
  // see https://github.com/auth0/auth0.js/issues/877
  auth0 =
    typeof window !== "undefined"
      ? new auth0.WebAuth({
          domain: AUTH0_DOMAIN || "",
          clientID: AUTH0_CLIENT_ID || "",
          redirectUri: AUTH0_REDIRECT_URI,
          audience: `https://${AUTH0_DOMAIN}/api/v2/`,
          responseType: "token id_token",
          scope: "openid profile email",
        })
      : undefined;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
  }

  login() {
    if (this.auth0) this.auth0.authorize();
  }

  handleAuthentication() {
    if (this.auth0) {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (err) {
          navigateTo("/");
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    }
  }

  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  setAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  getIdToken() {
    return localStorage.getItem("idToken");
  }

  setIdToken(idToken) {
    localStorage.setItem("idToken", idToken);
  }

  getExpiresAt() {
    const str = localStorage.getItem("expiresAt");
    return str ? parseInt(str) : 0;
  }

  setExpiresAt(expiresAt) {
    localStorage.setItem("expiresAt", expiresAt.toFixed(0));
  }

  getUserProfile() {
    const str = localStorage.getItem("userProfile");
    return str ? JSON.parse(str) : null;
  }

  setUserProfile(userProfile) {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    console.log("authResult", JSON.stringify(authResult));
    this.setAccessToken(authResult.accessToken);
    this.setIdToken(authResult.idToken);
    this.setExpiresAt(expiresAt);
    if (this.auth0) {
      this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
        if (profile) {
          this.setUserProfile(profile);
        }
        // navigateTo to the home route
        navigateTo("/");
      });
    }
  }

  logout() {
    // Remove tokens and expiry time
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("userProfile");

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    // navigateTo to the home route
    navigateTo("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.getExpiresAt();
    return expiresAt ? new Date().getTime() < expiresAt : false;
  }

  getUser() {
    return this.getUserProfile();
  }

  getFirstName() {
    if (this.getUser()) {
      return this.getUser()["given_name"];
    }
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser()["name"];
    }
  }
}

const auth = new Auth();
export default auth;
