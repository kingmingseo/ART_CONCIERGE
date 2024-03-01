const authService = require("../services/auth-service");
const ERRORS = require("../utils/errors");

// 이메일 중복 체크
async function uniqueEmail(req, res, next) {
  try {
    const email = req.body.email;
    console.log(email);
    await authService.checkEmail(email);

    res.status(200).json({ message: "사용 가능한 이메일입니다" });
  } catch (err) {
    const { statusCode, message } = err.statusCode ? err : ERRORS.INVALID_INPUT;
    res.status(statusCode).json({ message });
  }
}

// 회원 가입
async function postUser(req, res, next) {
  try {
    const userInfo = req.body;

    // 이메일 중복체크
    await authService.checkEmail(userInfo.email);
    const newUser = await authService.addUser(userInfo);

    res.status(201).json(newUser);
  } catch (err) {
    const { statusCode, message } = err.statusCode
      ? err
      : ERRORS.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({ message });
  }
}

// 회원 가입
async function findPassword(req, res, next) {
  try {
    const { email } = req.body;

    await authService.sendMail(email);

    res.status(204).json();
  } catch (err) {
    const { statusCode, message } = err.statusCode
      ? err
      : ERRORS.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({ message });
  }
}

// 로그인
// async function loginUser(req, res, next) {
//     try {
//         const { email, password } = req.body;

//         const user = await authService.loginUser(email, password);
//         res.status(204).send();
//     } catch (error) {
//         // 서비스 레이어에서 전달된 오류 메시지를 클라이언트에게 전송
//         res.status(401).json({ error: error.message });
//     }
// }

module.exports = { postUser, uniqueEmail, findPassword };
