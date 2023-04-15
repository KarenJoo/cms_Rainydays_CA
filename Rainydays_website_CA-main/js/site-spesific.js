let mainImg = document.querySelector(".main-pro-img");
let detailImg = document.querySelector(".pro-detail-img");

console.log(detailImg);
console.log(mainImg);

detailImg[0].onclick = function () {
  mainImg.src = detailImg[0].src;
};

detailImg[1].onclick = function () {
  mainImg.src = detailImg[1].src;
};

detailImg[2].onclick = function () {
  mainImg.src = detailImg[2].src;
};
