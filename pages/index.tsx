import styled from 'styled-components'
import Layout from '../src/components/Layout'
import Challenges from '../src/components/Challenges'
import { GetServerSideProps } from 'next'
import { api } from '../src/utils/api'
import { useEffect } from 'react'

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response: any = await api.get("/challenge/user/challenges/list/6160e47eef372319884f034c")
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