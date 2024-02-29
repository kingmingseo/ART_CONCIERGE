let value;

window.onload = async function () {
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach(function (a) {
        value = a;
    });

    console.log(value);
}

import { getDB } from '../../../indexedDB.js';

const db = await getDB();
const $minusButton = document.querySelector('.minus');
const $plusButton = document.querySelector('.plus');
const $countElement = document.querySelector('.cartCount');
const $addCart = document.querySelector('#addCart')
const $exhibitionInfo = document.querySelector('#exhibitionInfo');
const $modal = document.querySelector('.modal')
const $modalCheck = document.querySelector('#modalCheck')

// const currentUrl = window.location.href;
// const match = currentUrl.match(/\/exhibits\/productDetail\/([^\/]+)/);
// const exhibitId = match[1]

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
        exhibitName: document.querySelector('#exhibitName').textContent,
        quantity: document.querySelector('#quantity').textContent,
        price: document.querySelector('#price').textContent,
    });
    addReq.addEventListener('success', function (event) {
        console.log(event);
    });
});

// const $exhibitionInfo = document.querySelector('#exhibitionInfo');

getExhibitionName();

async function getExhibitionName() {
    const $exhibitName = document.querySelector('#exhibitName')
    const $price = document.querySelector('#price')
    const $startDate = document.querySelector('#startDate')
    const $endDate = document.querySelector('#endDate')
    const $location = document.querySelector('#location')
    const $image = document.querySelector('.img-container img');

    const imageUrl = data.imageUrl;

    const res = await fetch(`http://localhost:5001/api/exhibits?${value}`);
    const data = await res.json();
    console.log(data)

    $exhibitName.textContent = data.exhibitName
    $price.textContent = data.price
    $startDate.textContent = data.startDate
    $endDate.textContent = data.endDate
    $location.textContent = data.exhibitAddress
    $image.src = imageUrl;

    $exhibitionInfo.innerHTML =
        `<ul>
        <li>
            <span class="subject" style="font-weight: bold;"><strong>제목</strong></span>
            <span class="column">${data.exhibitName}</span>
            </li>
        <li>
            <span class="subject" style="font-weight: bold;"><strong>작가</strong></span>
            <span class="column">${data.author}</span>
            </li>
        <li>
            <span class="subject" style="font-weight: bold;"><strong>전시 장소</strong></span>
            <span class="" id="${data.exhibitAddress}"></span>
        </li> 
        <li>
            <span class="subject" style="font-weight: bold;"><strong>가격</strong></span>
            <span class="" id="${data.price}"></span>원
        </li>
        <li>
            <span class="subject" style="font-weight: bold;"><strong>전시 기간</strong></span>
            <span class="">${data.startDate} ~ ${data.endDate}</span>
        </li>
    </ul>  
    `;
}
