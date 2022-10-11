import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="">
        <h1 className="text-4xl font-bold">NetxMall with Tailwindcss</h1>
        <p>웹서버프로그래밍, 강채린!</p>
      </div>
    </Layout>
  )
}
