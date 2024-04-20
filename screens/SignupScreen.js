import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverloay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuth(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later"
      );
    }

    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverloay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
