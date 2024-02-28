const jwt = require('jsonwebtoken');

function loginRequired(req, res, next) {
    if (req.headers || req.headers["Authorization"]) {
        //console.log('어써 있음')
        // request 헤더로부터 authorization bearer 토큰을 받음.
        // const token = req.headers && req.headers["Authorization"].split(' ')[1]
        console.log(req.headers.cookie);
        //console.log(req.headers.cookie.value);

        const token = req.headers.cookie.split("token=")[1];
        console.log(token);

        // const userToken = req.cookies.value;
        const trimmedToken = token.trim();

        console.log(trimmedToken);

        // console.log(token.cookie)
        // 이 토큰은 jwt 토큰 문자열 || "null" 문자열 || undefined
        // 토큰이 "null" 일 경우, loginRequired 가 필요한 서비스 사용을 제한
        if (!trimmedToken || trimmedToken === "null") {
            console.log(`서비스 사용 요청이 있습니다.하지만, Authorization 토큰: ${trimmedToken}`);
            res.json({
                result: "forbidden-approach",
                reason: "로그인한 유저만 사용할 수 있는 서비스입니다.",
            });
            return;
        }

        // 해당 token 이 정상적인 token인지 확인
        try {

            // JWT 토큰을 쿠키에 저장
            const maxAge = 1*6//0 * 60 * 24 * 7; // 1주일
            res.cookie('jwt', trimmedToken, { maxAge: maxAge * 1000, httpOnly: true });


            const secretKey = process.env.JWT_SECRET;

            console.log(secretKey);

            const jwtDecoded = jwt.verify(trimmedToken, secretKey);

            console.log(jwtDecoded);

            const userId = jwtDecoded._id;
            console.log(userId)

            // 라우터에서 req.currentUserId를 통해 유저의 id에 접근 가능하게 됨
            req.currentUserId = userId;


            console.log(req.currentUserId);

            next();

        } catch (error) {
            // jwt.verify 함수가 에러를 발생시키는 경우는 토큰이 정상적으로 decode 안되었을 경우임.
            // 403 코드로 JSON 형태로 프론트에 전달함.
            //console.error('JWT Verify Error:', error);
            res.json({
                result: "forbidden-approach",
                reason: "정상적인 토큰이 아닙니다.",
            });
            return;
        }
    } else {
        console.log("없음")
        return;
    }
}

module.exports = loginRequired;