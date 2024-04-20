import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverloay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuth(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later"
      );
      setIsAuth(false);
    }
  }

  if (isAuth) {
    return <LoadingOverloay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
