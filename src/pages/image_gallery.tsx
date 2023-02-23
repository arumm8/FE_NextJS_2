import Layout from "components/Layout";
import styles from "../styles/Image_gallery.module.css"

export default function image_gallery(){
    return(
        <>
        <body>
        <Layout pageTitle="Image Gallery">
            <h1 className={styles['subTitle']}>Image Gallery</h1>
        </Layout>
        </body>
        </>
    )
}