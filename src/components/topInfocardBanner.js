const topInfocardBanner = () => {
  const topInfoBanner = document.querySelector("#top-infocard-banner");

  let topInfocardBannerStructure = "";
  const imageMiddleLogo = document.querySelector(
    "#middle-logo-infocard-banner"
  ).src;
  const imageBottomLogo = document.querySelector(
    "#bottom-logo-infocard-banner"
  ).src;
  const imageTopInfocard = document.querySelector(
    "#top-infocard-banner-image"
  ).src;
  topInfocardBannerStructure = `

    
        <div class='top-infocard-banner-content'>
        
            <div class='top-infocard-banner-texts-logo'>
                <div class='top-infocard-title-m3academy'>
                    <h1 class='top-infocard-banner-title'>Mais um evento de sucesso!</h1>
                    <div class='top-infocard-banner-m3academy'>
                        <div class='top-infocard-banner-retangle'>
                        </div>
                        <img src=${imageMiddleLogo} alt="logoM3" class='top-infocard-banner-m3academy-logo'/>
                        <h1 class='top-infocard-banner-description'>academy</h1>
                    </div>
                </div>
                
                <div class='top-infocard-banner-bottom-logo'>
                    <img src=${imageBottomLogo} alt="bottomLogoM3" />
                </div>

            </div>

            <div class='top-infocard-banner-principal'>
                <img class='top-infocard-banner-principal-image' src=${imageTopInfocard} alt="TopBannerPrincipal" />
            </div>
        </div>
  `;
  topInfoBanner.innerHTML = topInfocardBannerStructure;
};

export default topInfocardBanner;
