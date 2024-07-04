import React from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return <>
    <footer className={styles.footer}>
      <div className={styles.topfoot}>
        <div className={styles.first}>
          <Link href='/'><img src="" alt="logo" /></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae nemo fugiat quaerat perferendis fugit eos, velit officia, itaque rerum unde praesentium.Doloribus minima quod sapiente nam quos laborum rem!</p>
        </div>
        <div className={styles.second}>
          <h3>Customer Policy</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refunds & Cancellations</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.third}>
          <h3>Contact Us</h3>
          <li>
            <FontAwesomeIcon icon={faLocation} />
            <p>3161D, Sector 36D, Sector 36, Chandigarh-160014</p>
          </li>
          <li>
          <FontAwesomeIcon icon={faPhone} />
            <p>9831023341</p>
          </li>
          <li>
          <FontAwesomeIcon icon={faMailBulk} />
            <p>contact@kriva.com</p>
          </li>
        </div>
      </div>
      <hr />
      <div className={styles.bottomfooter}>
        <p>Copyright &copy; www.kriva.com - Powered by Kriva Brothers</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" className={styles.icon}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com" className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com" className={styles.icon}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
