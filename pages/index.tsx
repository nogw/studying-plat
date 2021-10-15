import Layout from '../src/components/Layout'
import Challenges from '../src/components/Challenges'
import { GetServerSideProps } from 'next'
import { api } from '../src/utils/api'
import { useEffect } from 'react'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

export default function Home({ challenges }) {
  useEffect(() => {
    console.log(challenges)
  }, [])

  return (
    <Layout>
      <Challenges challenges={challenges}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "py.plat.user.id": cookies }  = nookies.get(ctx)
  const decode: any = jwt.decode(cookies)

  try {
    const response: any = await api.get(`/challenge/user/challenges/list/${decode.id}`)
    const challenges = response.data.message
    return {
      props: { challenges }
    }
  } catch (_) { 
    return {
      props: { challenges: [] }
    }
  }
}