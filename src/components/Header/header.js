const Header = () => {
  const headerContent = document.querySelector("#header");
  let headerStructure = "";
  const imageLogoHeader = document.querySelector("#headerLogo").src;

  headerStructure = `
        <div class='header-content'>

            <div>
            <img src=${imageLogoHeader} alt="LogoM3" />
            </div>
            <div class='mobile-navbar'>
                <div class='line1'></div>
                <div class='line2'></div>
                <div class='line3'></div>
            </div>
                
            <div class ='header-text'>
                <p class= 'header-navbar-button'>Serviços</p>
                <p class= 'header-navbar-button'>Blog</p>
                <p class= 'header-navbar-button'>Clientes</p>
                
                <div class='header-navbar-contacts'>
                    <a href="#">
                        <p class='header-navbar-contact-background'>Contato</p>
                    </a>
                </div>
            </div>
        </div>
    `;
  headerContent.innerHTML = headerStructure;
};
export default Header;
