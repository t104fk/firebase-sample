import { GetStaticProps } from "next";
import Link from "next/link";
import { UserProvider, useUser } from "../../auth/UserProvider";

import Layout from "../../components/Layout";

type Props = {};

const WithStaticProps = ({}: Props) => {
  const { user } = useUser();
  if (!user) {
    return;
  }
  return (
    <UserProvider>
      <Layout title="Secret contents | Next.js + TypeScript Example">
        <h1 className="p-sm">Secrets</h1>
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </Layout>
    </UserProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default WithStaticProps;
