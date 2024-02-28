const { Router } = require('express');
const adminOrderController = require('../../controller/adminOrderController');
const { adminValidate } = require('../../middlewares/adminValidator');

const router = Router();

// 배송 상태 변경
router.put('/:_id', adminValidate, adminOrderController.updateState);

// 관리자 주문 삭제(취소)
router.delete("/:_id", adminValidate, adminOrderController.deleteOrder);

module.exports = router;