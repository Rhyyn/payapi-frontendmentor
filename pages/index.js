import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <h1 className={styles.test}>Hello</h1>
      <div className={styles.logo}>
        <Image src="/logo.svg" height={32} width={32}></Image>
      </div>
    </div>
  )
}
