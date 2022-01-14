import Header from "./Header/header.js";
import mobileNavbar from "./Header/mobile-navbar.js";
import topInfocardBanner from "./topInfocardBanner.js";
import middleDescription from "./middleDescription.js";
import middleImages from "./middleImages.js";
import Contacts from "./contacts.js";
import partnerCompanies from "./partnerCompanies.js";

document.addEventListener("DOMContentLoaded", function () {
  Header();
  mobileNavbar();
  topInfocardBanner();
  middleDescription();
  middleImages();
  Contacts();
  partnerCompanies();
});
