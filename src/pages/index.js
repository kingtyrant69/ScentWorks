import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Product from "../../components/Product";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <section className={styles.first}>
        <h3>Welcome to Scent Works</h3>
        <h1>Let&apos;s make Beautiful Scents a Part of Your Life.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur id ipsam odit harum, recusandae optio sapiente vero deserunt totam quod illo atque rem exercitationem provident laborum error, voluptas quia.</p>
        <Link href='/shop'><button>Shop now</button></Link>
      </section>
      <div className={styles.second}>
        <h1>WHY CHOOSE US</h1>
        <div className={styles.Whyus}>
          <hr />
          <div>
          <Image src="/i1.png" 
              width={80}
              height={80}
              alt="Picture of the author" />

            <p>Best Service</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          </div>
          <hr />
          <div>
          <Image src="/i2.png" 
              width={80}
              height={80}
              alt="Picture of the author" />

            <p>Order Online</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          </div>
          <hr />
          <div>
            <Image src="/i3.png" 
              width={80}
              height={80}
              alt="Picture of the author" />

            <p>Free Shipping</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          </div>
          <hr />
          <div>
          <Image src="/i4.png" 
              width={80}
              height={80}
              alt="Picture of the author" />


            <p>More Freshness </p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          </div>
        </div>
        <div className={styles.productSection}>
          <Product />
          <Product />
          <Product />
        </div>
        <div className={styles.productSection}>
          <Product />
          <Product />
          <Product />
        </div>
        <section className={styles.first}>
          <h3>Welcome to Scent Works</h3>
          <h1>Let&apos;s make Beautiful Scents a Part of Your Life.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur id ipsam odit harum, recusandae optio sapiente vero deserunt totam quod illo atque rem exercitationem provident laborum error, voluptas quia.</p>
          <Link href='/shop'><button>Shop now</button></Link>
        </section>
      </div>
    </>
  );
}
