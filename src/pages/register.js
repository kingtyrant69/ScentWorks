import React from 'react'
import styles from '@/styles/register.module.css'
import Link from 'next/link'
import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic (e.g., sending data to an API)
      };
  return (
    <>
   <section className={styles.section1}>
        <h1>MY ACCOUNT</h1>
        <p><Link href='/' style={{textDecoration: "none", color:"lightgray" }}>Home </Link>/ My Account</p>
   </section>
   <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
    </div>
   </>
  )
}

export default Register
