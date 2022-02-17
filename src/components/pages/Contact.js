import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p className={styles.item}><strong>Mail</strong>: <a href="mailto:daniel.haenelt@gmail.com">daniel.haenelt@gmail.com</a> (personal) / <a href="mailto:haenelt@cbs.mpg.de">haenelt@cbs.mpg.de</a> (work)</p>
      <p className={styles.item}><strong>Phone</strong>: <a href="tel:004934199402438">+49 (0) 341 9940 2438</a></p>
      <p className={styles.item}><strong>Address</strong>: Max Planck Institute for Human Cognitive and Brain Sciences, Stephanstraße 1a, 04103 Leipzig, Germany</p>
    </div>
  );
};

export default Contact;