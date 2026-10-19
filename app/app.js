import home from "../pages/home.js";
import shop from "../pages/shop.js";
import guides from "../pages/guides.js";
import about from "../pages/about.js";
import contact from "../pages/contact.js";
import login from "../pages/login.js";
import header from "./header.js";

const routes = {
  home: home,
  shop: shop,
  guides: guides,
  about: about,
  contact: contact,
  login: login,
};

function loadPage() {
  let page = window.location.hash.slice(1);

  if (!page || !routes[page]) {
    page = "home";
    window.location.hash = "#home";
  }

  document.querySelector("#app").innerHTML = routes[page];

  window.scrollTo(0, 0);
}

document.querySelector("#header").innerHTML = header;

window.addEventListener("hashchange", loadPage);

loadPage();
