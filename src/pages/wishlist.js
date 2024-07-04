import React from 'react'
import styles from '@/styles/wishlist.module.css'
import Link from 'next/link'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const wishlist = () => {
  return (
    <div>
      <section className={styles.section1}>
        <h1>Wishlist</h1>
        <p><Link href='/' style={{textDecoration: "none", color:"lightgray" }}>Home </Link>/ Wishlist</p>
   </section>
   <section className={styles.wishlist}>
   <FontAwesomeIcon icon={faHeart} size='10x' className={styles.fa} />
   <h1>This Wishlist is Empty.</h1>
   <p>You don't have any products in the wishlist yet.
   You will find a lot of interesting products on our "Shop" page.</p>
   <button><Link href='/shop' style={{textDecoration:'none', color:'white'}}>Return to Shop</Link></button>
   </section>
    </div>
  )
}

export default wishlist
