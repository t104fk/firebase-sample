import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useUser } from "../auth/UserProvider";
import Button from "./Button";
import { useAuth } from "../auth/useAuth";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const { user } = useUser();
  const { signOut } = useAuth();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="p-sm">
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/auth/signin">
            <a>SignIn</a>
          </Link>{" "}
          |{" "}
          <Link href="/auth/signup">
            <a>SignUp</a>
          </Link>{" "}
          |{" "}
          {/* <Link href="/secrets">
            <a>Secret</a>
          </Link>{" "} */}
        </nav>
      </header>
      {children}
      <footer className="px-sm py-md">
        <hr />
        <span>{user ? `user: ${user.email}` : "Anonymous"}</span>
        <Button onClick={async () => await signOut()} className="mt-sm">
          signOut
        </Button>
      </footer>
    </div>
  );
};

export default Layout;
