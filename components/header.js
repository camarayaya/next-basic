import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./header.module.css";
export const Header = ()=>{
    const router= useRouter();
    return(
        <div className={styles.header}>
            <Link href="/" passHref>
            <samp className={router.pathname === "/" ? styles.active : styles.Link}>Home</samp>
            </Link>
            <Link href="/blog" passHref>
            <samp className={router.pathname === "/blog" ? styles.active : styles.Link}>Blog</samp>
            </Link>
            <Link href="/profile" passHref>
            <samp className={router.pathname === "/profile" ? styles.active : styles.Link}>Profile</samp>
            </Link>
            <Link href="/blog/items" passHref>
            <samp className={router.pathname === "/blog/items" ? styles.active : styles.Link}>Items</samp>
            </Link>
            <Link href="/blog/categorie" passHref>
            <samp className={router.pathname === "/blog/categorie" ? styles.active : styles.Link}>Categorie</samp>
            </Link>
            <Link href="/departements" passHref>
            <samp className={router.pathname === "/departements" ? styles.active : styles.Link}>departements</samp>
            </Link>
        </div>
    )
}