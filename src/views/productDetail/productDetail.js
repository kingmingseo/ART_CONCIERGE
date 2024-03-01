
import { response } from 'express';

import { response } from 'express';
import { getDB } from '../../../indexedDB.js';

const db = await getDB();
const $minusButton = document.querySelector('.minus');
const $plusButton = document.querySelector('.plus');
const $countElement = document.querySelector('.cartCount');
const $addCart = document.querySelector('#addCart')
const $exhibitionInfo = document.querySelector('#exhibitionInfo');
const $modal = document.querySelector('.modal')
const $modalCheck = document.querySelector('#modalCheck')

const currentUrl = window.location.href;
const match = currentUrl.match(/\/exhibits\/productDetail\/([^\/]+)/);
const exhibitId = match[1]

insertExhibitionInfo();

$modalCheck.addEventListener('click', () => {
    $modal.classList.remove('is-active')
})

$minusButton.addEventListener('click', function () {
    var count = parseInt($countElement.innerText);
    if (count > 1) {
        $countElement.innerText = count - 1;
    }
});

// 플러스 버튼 클릭 시
$plusButton.addEventListener('click', function () {
    var count = parseInt($countElement.innerText);
    $countElement.innerText = count + 1;
});

$addCart.addEventListener('click', () => {
    let store = db.transaction('shoppingCart', 'readwrite').objectStore('shoppingCart');
    let addReq = store.add({
        exhibitId: exhibitId,
        exhibitId: exhibitId,
        exhibitName: document.querySelector('#exhibitName').textContent,
        quantity: document.querySelector('#quantity').textContent,
        price: document.querySelector('#price').textContent,
        quantity: document.querySelector('#quantity').textContent,
        price: document.querySelector('#price').textContent,
    });
    addReq.addEventListener('success', function (event) {
        console.log(event);
    });
});

getExhibition()

async function insertExhibitionInfo() {
    const $exhibitName = document.querySelector('#exhibitName');
    const $price = document.querySelector('#price');
    const $startDate = document.querySelector('#startDate');
    const $endDate = document.querySelector('#endDate');
    const $exhibitAddress = document.querySelector('#exhibitAddress');

    const res = await fetch(url);
    const data = await res.json();

    $exhibitName.textContent = data.exhibitName;
    $price.textContent = data.price;
    $startDate.textContent = data.startDate;
    $endDate.textContent = data.endDate;
    $exhibitAddress.textContent = data.exhibitAddress;

    $exhibitionInfo.innerHTML = `
        <div class="columns">
            <span class="column is-one-quarter" style="font-weight: bold;"><strong>제목</strong></span>
            <span class="column">${data.exhibitName}</span>
        </div>
        <div class="columns">
            <span class="column is-one-quarter" style="font-weight: bold;"><strong>작가</strong></span>
            <span class="column">${data.author}</span>
        </div>
    `;
}

// function getProductId(){
//     var path=window.location.pathname

//     return path.split('/')[3]
// }