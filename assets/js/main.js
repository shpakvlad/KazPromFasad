const prices = {
    brick: {
        base: 2000,
        cm1: 0,
        cm2: 1000,
        cm3: 2000,
        cm4: 3000,
        colorNone: 0,
        colorDark: 2000,
        colorLight: 3000,
        dekarat: 500,
    },
    corona: {
        base: 1000,
        cm1: 0,
        cm2: 700,
        cm3: 1200,
        cm4: 1600,
        colorNone: 0,
        colorDark: 1000,
        colorLight: 1500,
        dekarat: 300,
    },
};

let finalPrice = prices.base;
let thickness = null;
let colorless = null;
let dekarat = null;
let nThick = 0;
let nColor = 0;
let nDekarat = 0;

const thickRadio = document.querySelectorAll(".thick-box input");
const colorsRadio = document.querySelectorAll(".color-box input");
let dekaratChk = document.querySelectorAll(".options-box input");
let priceText = document.querySelectorAll(".price");
let cards = document.querySelectorAll(".card");
let price = {};

function changePrices(priceSet) {
    // let price = c.dataset.card;
    switch (priceSet) {
        case 'brick':
            price = prices.brick;  
            console.log(price);              
            break;
        case 'corona':
            price = prices.corona;  
            console.log(price);              
            break;        
        default:
            break;
    } 
}

for (const t of thickRadio) {
    t.addEventListener("click", function () {
        finalPrice = Number(
            this.parentNode.parentNode.children[6].children[0].textContent
        );
        let parentData = this.parentNode.dataset.thickPrice;
        let priceSet = this.parentNode.parentNode.dataset.card;
        changePrices(priceSet);

        if (this.checked) {
            if (this.value == "1cm") {
                finalPrice -= Number(parentData);
                finalPrice += price.cm1;
                this.parentNode.dataset.thickPrice = price.cm1;
            } else if (this.value == "2cm") {
                finalPrice -= Number(parentData);
                finalPrice += price.cm2;
                this.parentNode.dataset.thickPrice = price.cm2;
            } else if (this.value == "3cm") {
                finalPrice -= Number(parentData);
                finalPrice += price.cm3;
                this.parentNode.dataset.thickPrice = price.cm3;
            } else if (this.value == "4cm") {
                finalPrice -= Number(parentData);
                finalPrice += price.cm4;
                this.parentNode.dataset.thickPrice = price.cm4;
            }
        }
        this.parentNode.parentNode.children[6].children[0].textContent =
            finalPrice;
    });
}

for (const c of colorsRadio) {
    c.addEventListener("click", function () {
        finalPrice = Number(
            this.parentNode.parentNode.children[6].children[0].textContent
        );
        let parentData = Number(this.parentNode.dataset.colorPrice);
        let priceSet = this.parentNode.parentNode.dataset.card;
        changePrices(priceSet);

        if (this.checked) {
            if (this.value == "none") {
                finalPrice -= Number(parentData);
                finalPrice += price.colorNone;
                this.parentNode.dataset.colorPrice = price.colorNone;
            } else if (this.value == "dark") {
                finalPrice -= Number(parentData);
                finalPrice += price.colorDark;
                this.parentNode.dataset.colorPrice = price.colorDark;
            } else if (this.value == "light") {
                finalPrice -= Number(parentData);
                finalPrice += price.colorLight;
                this.parentNode.dataset.colorPrice = price.colorLight;
            }
        }
        this.parentNode.parentNode.children[6].children[0].textContent =
            finalPrice;
    });
}

for (const dekarat of dekaratChk) {
    dekarat.addEventListener("click", function () {

        let priceSet = this.parentNode.parentNode.dataset.card;
        changePrices(priceSet);

        finalPrice = Number(
            this.parentNode.parentNode.children[6].children[0].textContent
        );
        let parentData = Number(this.parentNode.dataset.dekaratPrice);

        if (this.checked) {
            finalPrice += price.dekarat;
            this.parentNode.dataset.dekaratPrice = price.dekarat;
        } else {
            finalPrice -= price.dekarat;
            this.parentNode.dataset.dekaratPrice = 0;
        }
        this.parentNode.parentNode.children[6].children[0].textContent =
            finalPrice;
    });
}
