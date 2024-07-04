import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faCart, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isVisible, setisVisible] = useState(false);
    const [Menu, setMenu]=useState('Home');
    const handleSearchClick=()=>{
      setisVisible(!isVisible);
    };  
  return <div>
    <nav className={styles.mainnav}>
      <div className={styles.leftNav}>
        {isVisible?(<FontAwesomeIcon icon={faXmark} className={styles.fa}  onClick={handleSearchClick} size='lg' />):(<FontAwesomeIcon icon={faSearch}  className={styles.fa} onClick={handleSearchClick} size='lg' />)}
        <Link href='/wishlist' style={{ textDecoration: "none", color: "black" }} ><FontAwesomeIcon icon={faHeart} size='lg' className={styles.fa} /></Link>
      </div>
      <div className={styles.midNav}>
        <ul>
        <li onClick={()=>{setMenu('Home')}}><Link style={{ textDecoration: "none", color:'#363737'}} href='/'> Home {(Menu==='Home')?<hr/>:<></>}</Link></li>
         <li onClick={()=>{setMenu('Shop')}}><Link style={{ textDecoration: "none", color:'#363737'}} href='/shop'>Shop{(Menu==='Shop')?<hr/>:<></>}</Link></li>
        <li ><Link style={{ textDecoration: "none", color:'#363737'}} href='/'><img src="/logo.png" width={59} height={50} alt=" logo" /></Link></li>
        <li onClick={()=>{setMenu('Contact')}}><Link style={{ textDecoration: "none", color:'#363737'}} href='/contact'>Contact Us{(Menu==='Contact')?<hr/>:<></>}</Link></li>
        </ul>
      </div>
      <div className={styles.rightNav}>
        <Link href='/register' style={{ textDecoration: "none", color: "black" }}><FontAwesomeIcon icon={faUser} className={styles.fa} size='lg' /></Link>
        <Link href='/cart' style={{ textDecoration: "none", color: "black" }}><FontAwesomeIcon icon={faCartShopping} className={styles.fa} size='lg' /></Link>
        <div className={styles.navCount}>0</div>
      </div>
    </nav>
    {isVisible && (<div className={styles.openSearch}>
      <div className={styles.search}>
        <input type="text" placeholder='Search for Products' />
        <FontAwesomeIcon icon={faXmark} style={{ width: '5%', height: '2%', cursor:'pointer' }} onClick={handleSearchClick} />
      </div>
      <p>Start typing to see products you are looking for.</p>
    </div>)}
  </div>

}

export default Navbar
