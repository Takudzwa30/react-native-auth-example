import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { logIn } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuth(true);
    try {
      await logIn(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not login, please check your credentials or try again later"
      );
    }
    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent onAuthenticate={loginHandler} isLogin />;
}

export default LoginScreen;
