const Contacts = () => {
  const contacts = document.querySelector("#contacts");
  let contactsStucture = "";
  const logoM3ContactsDesktop = document.querySelector(
    "#contatos-logom3-desktop"
  ).src;
  const logoM3ContactsMobile = document.querySelector(
    "#contatos-logom3-mobile"
  ).src;

  contactsStucture = `
        <div class='contacts-wrapper'>
            <div class='contacts-logom3-desktop'>
                <img src=${logoM3ContactsDesktop} alt="LogoM3Contatos" />
            </div>
            
            <div class='contacts-text'>
                <h1 class='contacts-title'>olá!</h1>
                <p class='contacts-tel1'>+55 11 9999 9999</p>
                <p class='contacts-email'>m3academy@digitalm3.com.br</p>
                <p class='contacts-city'>nova friburgo</p>
                <p class='contacts-tel2'>+55 99999999</p>
            </div>
            <div class='contacts-logom3-mobile'>
                <img src=${logoM3ContactsMobile} alt="LogoM3Contatos" />
            </div>
        </div>
    `;

  contacts.innerHTML = contactsStucture;
};
export default Contacts;
