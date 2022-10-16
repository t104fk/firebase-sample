import { GetStaticProps } from "next";
import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { UserProvider } from "../auth/UserProvider";
import Button from "../components/Button";
import FormItem from "../components/FormItem";
import InputField from "../components/InputField";

import Layout from "../components/Layout";

type Props = {};

const WithStaticProps = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Error>();
  const { signIn } = useAuth();
  const handleSignIn = async () => {
    const result = await signIn(email, password);
    result && setError(result);
  };
  return (
    <UserProvider>
      <Layout title="Sign In | Next.js + TypeScript Example">
        <h1 className="px-sm font-bold">Sign in</h1>
        <div className="px-sm">
          <FormItem name="email">
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormItem>
          <FormItem name="password">
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
          {error && <p className="text-red font-bold">{error.message}</p>}
          <Button onClick={handleSignIn} className="mt-md">
            submit
          </Button>
        </div>
      </Layout>
    </UserProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  return { props: {} };
};

export default WithStaticProps;
