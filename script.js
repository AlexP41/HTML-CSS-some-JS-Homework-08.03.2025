'use strict';

const Descriptions = {};

class ProductCard {

  
  constructor(image, title, oldPrice, newPrice, description) {
    this.image = image;
    this.title = title;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
    this.description = description;
  };


  generateCard() {
    return `
      <div class="block col--1">
        <div class="heart-scales-icons heart-position">
          <ion-icon name="heart-outline" class="heart-outline"></ion-icon>
        </div>

        <div class="heart-scales-icons scale-position">
          <ion-icon name="scale-outline" class="scale-outline"></ion-icon>
        </div>

        <img src="${this.image}" alt="product image" class="good-image" />

        <p class="good-info">${this.title}</p>
        <p class="detailed-description hidden">${this.description}</p>

        <p class="price-old"><s>${this.oldPrice}</s></p>

        <div class="price-container">
          <p class="price-new">${this.newPrice}</p>
          <ion-icon name="cart-outline" class="cart-outline"></ion-icon>
        </div>
      </div>
    `;
  }
}








const product1 = new ProductCard(
  "/images/goods-image.png",
  "Електрична кавомолка з регулюванням помелу",
  "1500 $",
  "900 $",
  "Сучасна електрична кавомолка з можливістю регулювання ступеня помелу. Ідеальна для любителів ароматної кави."
);

const product2 = new ProductCard(
  "/images/goods-image.png",
  "Блендер з кількома швидкостями",
  "2500 $",
  "1500 $",
  "Потужний блендер з кількома режимами швидкості, який дозволяє швидко приготувати коктейлі, смузі або супи-пюре."
);

const product3 = new ProductCard(
  "/images/goods-image.png",
  "Мультиварка з функцією пароварки",
  "3500 $",
  "2500 $",
  "Багатофункціональна мультиварка, яка підтримує пароварку, дозволяючи готувати корисні страви без зайвого жиру."
);

const product4 = new ProductCard(
  "/images/goods-image.png",
  "Кавоварка з автоматичним відключенням",
  "2200 $",
  "1600 $",
  "Зручна кавоварка з функцією автоматичного вимкнення, що гарантує безпеку та енергоефективність."
);

const product5 = new ProductCard(
  "/images/goods-image.png",
  "Фритюрниця з регулюванням температури",
  "2000 $",
  "1300 $",
  "Фритюрниця, яка дозволяє налаштовувати температуру для ідеального приготування хрустких страв."
);

const product6 = new ProductCard(
  "/images/goods-image.png",
  "Пилосос з функцією мокрого прибирання",
  "3000 $",
  "1800 $",
  "Пилосос з потужним всмоктуванням та можливістю вологого прибирання, ідеальний для дому та офісу."
);



document.getElementById("cards-container").innerHTML =
  product1.generateCard() +
  product2.generateCard() +
  product3.generateCard() +
  product4.generateCard() +
  product5.generateCard() +
  product6.generateCard();

document.getElementById("cards-container-2").innerHTML =
  product1.generateCard() +
  product2.generateCard() +
  product3.generateCard() +
  product4.generateCard() +
  product5.generateCard() +
  product6.generateCard();



const goodsInformations = document.querySelectorAll(".good-info");
const detailedDescryption = document.querySelector(".detailed-description");

const goodDescryption = document.querySelector(".good-description");
const overlay = document.querySelector(".overlay");

const closeGoodDescryption = document.querySelector(".close-good-description");

// Opening Good Descryption
goodsInformations.forEach((goodInformation) => {
  goodInformation.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    goodDescryption.classList.remove("hidden");


    const detailedText = goodInformation.parentElement.querySelector(".detailed-description").textContent;
    console.log(detailedText);

    const detailedTextElement = goodInformation.parentElement.querySelector(".detailed-description");


    detailedTextElement.classList.toggle("active");

    
    goodDescryption.querySelector(".good-description-text").textContent = detailedText;
    goodDescryption.querySelector(".good-description-text").classList.toggle("active");
  });
    
});


// CLosing Good Descryption

/**
 * Closes the good description overlay by adding the "hidden" class to the overlay, detailed description, 
 * and good description elements. Toggles the "active" state of the detailed text.
 */

const closeGoodDescryptionFunction = function () {
  overlay.classList.add("hidden");
  detailedDescryption.classList.add("hidden");
  goodDescryption.classList.add("hidden");
  goodDescryption.querySelector(".good-description-text").classList.toggle("active");
};

closeGoodDescryption.addEventListener("click", closeGoodDescryptionFunction);

overlay.addEventListener("click", closeGoodDescryptionFunction);

document.addEventListener('keydown', function (e) {
  if(e.key === "Escape" && !detailedDescryption.classList.contains("hidden")) {
    closeGoodDescryptionFunction();
  }
});












