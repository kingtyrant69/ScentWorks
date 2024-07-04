import React from 'react'
import styles from '@/styles/cart.module.css'
import Link from 'next/link'
const cart = () => {
  return (
    <div>
      <section className={styles.section1}>
        <h1>Cart</h1>
        <p><Link href='/' style={{textDecoration: "none", color:"lightgray" }}>Home </Link>/ Cart</p>
   </section>
    </div>
  )
}

export default cart
