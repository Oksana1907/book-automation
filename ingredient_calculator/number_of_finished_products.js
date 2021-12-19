let productEggsList;
let productFlourList;
let productSugarList;
let productSaltList;
let productBakingpowderList;
let productOilList;

const buttonCalc = document.getElementById('calculate');
const buttonFunc = function () {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    const productEggs = document.getElementById('product_eggs').value;
    const prodcutFlour = document.getElementById('product_flour').value;
    const productSugar = document.getElementById('product_sugar').value;
    const productSalt = document.getElementById('product_salt').value;
    const productBakingpowder = document.getElementById('product_bakingpowder').value;
    const productOil = document.getElementById('product_oil').value;

    const lengthUser = document.getElementById('length_user').value;
    const widthUser = document.getElementById('width_user').value;
    const heightUser = document.getElementById('height_user').value;

    const amountDoughUser = lengthUser * widthUser * heightUser;

    const lengthCook = document.getElementById('length_cook').value;
    const widthCook = document.getElementById('width_cook').value;
    const heightCook = document.getElementById('height_cook').value;

    const amountDoughCook = lengthCook * widthCook * heightCook;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    function finishedProducts(a, b) {
        return ((a * 100) / b)
    }
    const coefficient = finishedProducts(amountDoughUser, amountDoughCook)

    if (!isNaN(productEggs)) {
        productEggsList = `<li>${Math.floor(productEggs * coefficient)} шт - яйца</li>`;
    } else {
        productEggsList = '';
    }
    if (!isNaN(prodcutFlour)) {
        productFlourList = `<li>${Math.floor(prodcutFlour * coefficient)} гр - мука</li>`;
    } else {
        productFlourList = '';
    }
    if (!isNaN(productSugar)) {
        productSugarList = `<li>${Math.floor(productSugar * coefficient)}гр - сахар</li>`;
    } else {
        var productSugarList = '';
    }
    if (!isNaN(productSalt)) {
        productSaltList = `<li>${Math.floor(productSalt * coefficient)}гр - соль</li>`;
    } else {
        productSaltList = '';
    }
    if (!isNaN(productBakingpowder)) {
        productBakingpowderList = `<li>${Math.floor(productBakingpowder * coefficient)}гр - разрыхлитель</li>`;
    } else {
        productBakingpowderList = '';
    }
    if (!isNaN(productOil)) {
        productOilList = `<li>${Math.floor(productOil * coefficient)}мл - масло</li>`;
    } else {
        productOilList = '';
    }

    let listItems = document.querySelector('.section_list');
    listItems.innerHTML = `<ol>
${productEggsList}
${productFlourList}
${productSugarList}
${productSaltList}
${productBakingpowderList}
${productOilList}
</ol>`
}

buttonCalc.onclick = buttonFunc;