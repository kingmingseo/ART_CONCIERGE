const { Exhibit, Cart } = require("../db/index.js");

//장바구니 추가
async function addCart(exhibitId, quantity) {
  // const existCart = await Order.findCartByExhibitId(exhibitId); => model 사용했을때
  const existCart = await Exhibit.findOne({ "item.exhibitId": exhibitId });

  if (existCart) {
    for (let item of existCart.item) {
      if (item.exhibitId.toString() === exhibitId) {
        item.quantity += quantity;
        break;
      }
    }
    await existCart.save();
    return existCart;
  } else {
    const newCart = await Order.create({
      item: [{ exhibitId, quantity }],
    });
    return newCart;
  }
}

//장바구니 조회
async function getAllCarts() {
  return await Cart.find({}).select(
    "exhibitId exhibitName quantity price image"
  );
}

//장바구니 수정
async function putAllCarts(exhibitId, quantity) {
  const updatedCart = await Cart.updateOne(
    { "item.exhibitId": exhibitId },
    { $set: { "item.0.quantity": quantity } }
  );
  return updatedCart;
}

//장바구니 삭제
async function deleteCartsItem(exhibitId) {
  if (exhibitId) {
    // exhibitsId 배열에 속한 장바구니 상품 삭제
    const deleteCart = await Cart.deleteMany({
      "item.exhibitId": { $in: exhibitId },
    });
    return deleteCart;
  } else {
    // exhibitsId가 제공되지 않았다면 모든 장바구니 상품 삭제 -> postman에서 모두삭제가 안되고 있는데 원인을 모르겠습니다..ㅠ
    const deleteAllCart = await Cart.deleteMany({});
    return deleteAllCart;
  }
}

module.exports = { addCart, getAllCarts, putAllCarts, deleteCartsItem };
