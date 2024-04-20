import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { logIn } from "../util/auth";

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuth(true);
    await logIn(email, password);
    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent onAuthenticate={loginHandler} isLogin />;
}

export default LoginScreen;
