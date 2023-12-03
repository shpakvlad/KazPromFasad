// const prices = {
//     base: 2000,
//     cm1: 0,
//     cm2: 1000,
//     cm3: 2000,
//     cm4: 3000,
//     colorNone: 0,
//     colorDark: 2000,
//     colorLight: 3000,
//     dekarat: 500,
// };

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
};

let finalPrice = prices.base;
let thickness = null;
let colorless = null;
let dekarat = null;
let nThick = 0;
let nColor = 0;
let nDekarat = 0;

// let byuBtn = document.querySelector("input[value='Buy']");
const thickRadio = document.querySelectorAll(".thick-box input");
const colorsRadio = document.querySelectorAll(".color-box input");
let dekaratChk = document.querySelectorAll(".options-box input");
let priceText = document.querySelectorAll(".price");

for (const t of thickRadio) {
    t.addEventListener("click", function () {
        finalPrice = Number(
            this.parentNode.parentNode.children[6].children[0].textContent
        );
        let parentData = this.parentNode.dataset.thickPrice;

        console.log(finalPrice);

        if (this.checked) {
            if (this.value == "1cm") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.cm1;
                this.parentNode.dataset.thickPrice = prices.brick.cm1;
            } else if (this.value == "2cm") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.cm2;
                this.parentNode.dataset.thickPrice = prices.brick.cm2;
            } else if (this.value == "3cm") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.cm3;
                this.parentNode.dataset.thickPrice = prices.brick.cm3;
            } else if (this.value == "4cm") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.cm4;
                this.parentNode.dataset.thickPrice = prices.brick.cm4;
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

        if (this.checked) {
            if (this.value == "none") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.colorNone;
                this.parentNode.dataset.colorPrice = prices.brick.colorNone;
            } else if (this.value == "dark") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.colorDark;
                this.parentNode.dataset.colorPrice = prices.brick.colorDark;
            } else if (this.value == "light") {
                finalPrice -= Number(parentData);
                finalPrice += prices.brick.colorLight;
                this.parentNode.dataset.colorPrice = prices.brick.colorLight;
            }
        }
        this.parentNode.parentNode.children[6].children[0].textContent =
            finalPrice;
    });
}

for (const dekarat of dekaratChk) {
    dekarat.addEventListener("click", function () {
        finalPrice = Number(
            this.parentNode.parentNode.children[6].children[0].textContent
        );
        let parentData = Number(this.parentNode.dataset.dekaratPrice);

        if (this.checked) {
            // finalPrice -= Number(parentData);;
            finalPrice += prices.brick.dekarat;
            this.parentNode.dataset.dekaratPrice = prices.brick.dekarat;
        } else {
            // finalPrice -= Number(parentData);;
            finalPrice -= prices.brick.dekarat;
            this.parentNode.dataset.dekaratPrice = 0;
        }
        this.parentNode.parentNode.children[6].children[0].textContent =
            finalPrice;
    });
}
