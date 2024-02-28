const { Router } = require('express');
const orderController = require('../controller/orderController');
const loginRequired = require('../middlewares/loginRequired');

const router = Router();

//주문추가, 주문하기
router.post('/', loginRequired, orderController.postOrder);

// 주문조회
router.get('/', loginRequired, orderController.getOrder);

//배송전 주문정보 수정
router.put('/:_id', loginRequired, orderController.updateOrder);

//유저 주문 취소 - 배송 전까지
router.delete('/:_id', loginRequired, orderController.deleteOrder);


module.exports = router;