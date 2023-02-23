import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Layout from 'components/Layout';
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
    <body className={styles['body']}>
      <Layout pageTitle='Home Page'>
      <h1 className={styles['title-homepage']}>Welcome Home</h1>
      <Image className={styles['fotoDiri']} src="/self_love_5.jpg" width={450} height={250} alt="self_love_5"/>
      <p className={styles['paragraph']}>Halo makhluk bumi!</p>
      <p className={styles['paragraph']}>Aku another makhluk bumi yang hidup dan made in malang</p>
      </Layout>
    </body>
    </>
  );
}

