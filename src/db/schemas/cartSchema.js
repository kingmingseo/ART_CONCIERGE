const { Schema } = require("mongoose");

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    //상품 관련 정보 (주문한 상품 이름, 상품 수량, 금액, 이미지 url)
    item: [
      {
        exhibitId: {
          type: Schema.Types.ObjectId,
          ref: "Exhibit", // 'Exhibit' 스키마모델을 참조
          required: true,
        },
        exhibitName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        //배열 처리를 해야하는지
        image: {
          type: String,
          required: true,
        },
      },
    ],
    //주문한 전체 상품 가격
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "carts",
  }
);

module.exports = cartSchema;
