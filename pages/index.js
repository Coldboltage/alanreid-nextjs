import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
import Hero from "../components/Hero"

export default function Home() {
  return (
      <Layout>
        {/* Hero Section */}
        <Hero/>
        <section>
          {/* Hero Comp */}
        </section>
      </Layout>

  )
}
