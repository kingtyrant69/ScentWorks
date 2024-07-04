import React from 'react'
import styles from '@/styles/contact.module.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>
      <section className={styles.section1}>
        <h1>Contact Us</h1>
        <p><Link href='/' style={{ textDecoration: "none", color: "lightgray" }}>Home </Link>/ Contact Us</p>
      </section>
      <section className={styles.enquiry}>
        <div>
          <h1>Get In Touch With Us!</h1>
          <form action="">
            <p>Name</p>
            <input type="text" required />
            <p>Email</p>
            <input type="text" />
            <p>Phone Number</p>
            <input type="text" />
            <p>Message</p>
            <textarea name="message" id="message"></textarea> 
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>
        <hr />
        <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58924.17330185246!2d88.40683110198545!3d22.62540469001653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fce103bdde5%3A0xfe7d6a4a297ddbb6!2sRajarhat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1719932701720!5m2!1sen!2sin" width="500" height="400" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className={styles.faqs}>
        <div className={styles.leftfaq}>
          <h1>FAQs</h1>
          <p>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
        </div>
        <div className={styles.rightfaq}>
          <div className={styles.faq}>
            <h1>How do I order flowers and choose delivery options?</h1>
            <p>Simply browse our shop, select your bouquet, and follow the checkout process. You can choose the delivery date and time during checkout.</p>
            <hr />
          </div>
          <div className={styles.faq}>
            <h1>How do I order flowers and choose delivery options?</h1>
            <p>Simply browse our shop, select your bouquet, and follow the checkout process. You can choose the delivery date and time during checkout.</p>
            <hr />
          </div>
          <div className={styles.faq}>
            <h1>How do I order flowers and choose delivery options?</h1>
            <p>Simply browse our shop, select your bouquet, and follow the checkout process. You can choose the delivery date and time during checkout.</p>
            <hr />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
