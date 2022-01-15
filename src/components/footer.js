const Footer = () => {
  const footer = document.querySelector("#footer");
  let footerStructure = "";
  const footerImageLogoFacebook = document.querySelector(
    "#footer-logo-facebook"
  ).src;

  const footerImageLogoInstagram = document.querySelector(
    "#footer-logo-instagram"
  ).src;
  const footerImageLogoLinkedin = document.querySelector(
    "#footer-logo-linkedin"
  ).src;
  footerStructure = `
        <div class='page-footer'>
        
          <div class='footer-text'>
            <p class='footer-text-email'>WWW.DIGITALM3.COM.BR</p>
          </div>
          
          <ul class='footer-icons'>
              <li class='footer-icon'>
                <a href="https://www.facebook.com/digitalm3" target='_blank'>
                    <img src=${footerImageLogoFacebook} alt="FacebookIcon" />
                </a>
              </li>
              <li class='footer-icon'>
                <a href="https://www.instagram.com/m3.ecommerce/" target='_blank'>
                    <img src=${footerImageLogoInstagram} alt="Instagram Icon" />
                </a>
              </li>
              <li class='footer-icon'>
                <a href="https://www.linkedin.com/company/m3ecommerce/" target='_blank'>
                    <img src=${footerImageLogoLinkedin} alt="LinkedinIcon" />
                </a>
              </li>
          </ul>

        </div>
    `;

  footer.innerHTML = footerStructure;
};
export default Footer;
