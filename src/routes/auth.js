const { Router } = require('express');
const { setUserToken } = require('../utils/jwt'); // JWT 사용

const authController = require('../controller/auth-controller');
const passport = require('passport');

const router = Router();

router.post('/join', authController.postUser);
router.post('/check-email', authController.uniqueEmail);
// router.post('/', authController.loginUser);
router.post('/find-password', authController.findPassword);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res, next) => {
    setUserToken(res, req.user); //토큰 생성
});

// 로그인 3계층 분리 ... 보류
router.post('/', passport.authenticate('local', { session: false }), (req, res, next) => {
    // 유저 토큰 생성 및 쿠키 전달
    setUserToken(res, req.user);
    console.log('로그인 성공!')
    // res.redirect('/'); // 쿠키를 전달 받아 토큰을 브라우져에 저장
    res.status(204).send()
    });

// 로그아웃 3계층 분리 ... 보류 (로그아웃은 delete)
router.post('/logout', (req, res, next) => {
    res.cookie('token', null, {
        maxAge: 0,
    })
    console.log('로그아웃 성공!')
    res.status(204).send()
    });

module.exports = router;