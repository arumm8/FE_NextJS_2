import Header from "components/Header"
import Footer from "components/Footer"
import { ReactNode } from "react";
import styles from "../../src/styles/Layout.module.css";
import Head from 'next/head';

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const {children,pageTitle} = props;
    return (
    <>
    <Head>
      <title>Next JS | 
        {''}
        {pageTitle}</title>
      <meta name="description" content='Personal Web'/>
    </Head>
      <div className={styles.container}>
        <Header/>
        <div className={styles.content}>{children}</div>
        <Footer/>
      </div>
    </>
    )
}