const Header = () => {
  const headerContent = document.querySelector("#header");
  let headerStructure = "";
  const imageLogoHeader = document.querySelector("#headerLogo").src;

  headerStructure = `
        <div class='header-content'>

            <div>
            <img src=${imageLogoHeader} alt="LogoM3" />
            </div>
            
            <div class='header-navbar-mobile'>
             <button class='active-navbar-button'>
                <span class='hamburguer-button'></span>
             </button>
                <div class ='header-text'>
                    <a href="https://m3ecommerce.com/migracao-de-plataforma/" target="_blank">
                        <p class= 'header-navbar-button'>Serviços</p>
                    </a>

                    <a href="https://m3ecommerce.com/blog/" target="_blank">
                        <p class= 'header-navbar-button'>Blog</p>
                    </a>
                    
                    <a href="">
                        <p class= 'header-navbar-button'>Clientes</p>
                    </a>
                    
                    <div class='header-navbar-contacts'>
                        <a href="#contacts">
                            <p class='header-navbar-contact-background'>Contato</p>
                        </a>
                    </div>
                </div>
            </div>
               
        </div>
    `;
  headerContent.innerHTML = headerStructure;
};
export default Header;
