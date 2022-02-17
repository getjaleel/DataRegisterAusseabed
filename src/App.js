import { useAuthenticator, authState } from "@aws-amplify/ui-react";
import { Amplify, AmplifySignIn } from "aws-amplify";

import { Home } from "./Home";
import { Login } from "./Login";
import "./styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
  const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }
  if (authState === "confirmSignUp") {
    return (
      <AmplifySignIn
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          height: "100vh"
        }}
        headerText="Your Signup request is now being reviewed by the site Admin"
        slot="sign-in"
      ></AmplifySignIn>
    );
  }
  return <Login />;
}
