const middleImages = () => {
  const midImg = document.querySelector("#middle-images");
  let midImgStructure = "";
  const topLeftImage = document.querySelector("#middle-image-top-left").src;
  const bottomLeftImage = document.querySelector(
    "#middle-image-bottom-left"
  ).src;
  const rightImage = document.querySelector("#middle-image-right").src;

  midImgStructure = `
        <div class='middle-images-wrapper'>

            <div  class='middle-images-left'>
                    <img class='top-image-left' src=${topLeftImage} alt="" />
                    <img class='bottom-image-left' src=${bottomLeftImage} alt="" />
            </div>
            
            <div class='middle-image-right'>
                <img  class='image-right' src=${rightImage} alt="" />
            </div>
        </div>
    `;
  midImg.innerHTML = midImgStructure;
};
export default middleImages;
