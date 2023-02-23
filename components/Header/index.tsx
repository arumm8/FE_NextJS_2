import Link from "next/link";
import styles from "../../src/styles/Header.module.css"
export default function Header() {
    return (
      <>
      <header className={styles.container}>
       <ul className={styles.list}>
        <li className={styles.item}><Link href="/">Home</Link></li>
        <li className={styles.item}><Link href="/image_gallery">Image Gallery</Link></li>
        <li className={styles.item}><Link href="/contact">Contact</Link></li>
       </ul>
       </header>
      </>
    )
}