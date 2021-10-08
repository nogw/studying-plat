import styled from 'styled-components'
import Layout from '../src/components/Layout'
import Challenges from '../src/components/Challenges'
import { GetServerSideProps } from 'next'
import { api } from '../src/utils/api'
import { useEffect } from 'react'

export default function Home({ challenges }) {
  return (
    <Layout>
      <Challenges challenges={challenges}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response: any = await api.get("/challenge/admin/list")
  const challenges = response.data.message

  return {
    props: { challenges }
  }
}