import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverloay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuth(true);
    await createUser(email, password);
    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverloay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
