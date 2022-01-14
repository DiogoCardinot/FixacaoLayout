const partnerCompanies = () => {
  const partCompanies = document.querySelector("#partner-companies");
  let partCompaniesStructure = "";
  const partImageGoogleMobile = document.querySelector(
    "#partner-companies-google-mobile"
  ).src;
  const partImageSeloMobile = document.querySelector(
    "#partner-companies-selo-mobile"
  ).src;
  const partImageLogoM3Mobile = document.querySelector(
    "#partner-companies-logom3-mobile"
  ).src;

  const partImageGoogleDesktop = document.querySelector(
    "#partner-companies-google-desktop"
  ).src;
  const partImageSeloDesktop = document.querySelector(
    "#partner-companies-selo-desktop"
  ).src;
  const partImageLogoM3Desktop = document.querySelector(
    "#partner-companies-logom3-desktop"
  ).src;

  partCompaniesStructure = `
        <div class='partner-companies-wrapper'>

            <div class='partner-companies-desktop'>
                <img src=${partImageGoogleDesktop} alt="EmpresaParceiraGoogle" />
                <img src=${partImageSeloDesktop} alt="SeloExcelencia" />
                <img src=${partImageLogoM3Desktop} alt="LogoM3" />
            </div>

            <div class='partner-companies-mobile'>
                <div class='partner-companies-mobile-top'>
                    <img src=${partImageGoogleMobile} alt="EmpresaParceiraGoogle" class='partner-companies-image-mobile-google'/>
                    <img src=${partImageSeloMobile} alt="SeloExcelencia" class='partner-companies-image-mobile-selo'/>
                </div>
                <div class='partner-companies-logom3-mobile'>
                    <img src=${partImageLogoM3Mobile} alt="LogoM3" class='partner-companies-image-mobile-logom3'/>
                </div>
            </div>
        </div>
    `;
  partCompanies.innerHTML = partCompaniesStructure;
};
export default partnerCompanies;
