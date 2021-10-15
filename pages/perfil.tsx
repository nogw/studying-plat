import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Layout from "../src/components/Layout";
import ProfileComponent from "../src/components/ProfileComponent";
import { api } from "../src/utils/api";
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

function Perfil({ user }) {
  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <Layout>
      <ProfileComponent user={user}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "py.plat.user.id": cookies }  = nookies.get(ctx)
  const decode: any = jwt.decode(cookies)
  const response: any = await api.get(`/user/info/${decode.id}`)
  const user = response.data.message

  console.log(user.name)

  if (!cookies) {
    return {
      redirect: {
        destination: "/connect",
        permanent: false
      }
    }
  }

  return {
    props: {
      user
    }
  }
}

export default Perfil;
