import { REST_API_KEY,REDIRECT_URI } from "../data/LoginData";

const Login = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return(
        <button onClick={handleLogin}>
            <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        </button>

    )

}

export default Login;