import React from 'react'
import styles from '@/styles/shop.module.css'
import Link from 'next/link'

const Shop = () => {
  return (
    <div>
     <section className={styles.section1}>
        <h1>Shop</h1>
        <p><Link href='/' style={{textDecoration: "none", color:"lightgray" }}>Home </Link>/ Shop</p>
   </section>
    </div>
  )
}

export default Shop
