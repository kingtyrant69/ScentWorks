import Image from 'next/image';
import styles from '@/styles/product.module.css';


const Product = () => {
  return (
    <div className={styles.card}>
      <img src='/background.jpg' alt='name' width={300} height={300} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>product name</h2>
        <p className={styles.description}>product description</p>
        <div className={styles.footer}>
          <span className={styles.price}>Rs.xx</span>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
