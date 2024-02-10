import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p className={styles.item}><strong>Mail</strong>: <a href="mailto:daniel.haenelt@gmail.com">daniel.haenelt@gmail.com</a> (personal) / <a href="mailto:dhaenelt@mgh.harvard.edu">dhaenelt@mgh.harvard.edu</a> (work)</p>
      <p className={styles.item}><strong>Address</strong>: Athinoula A. Martinos Center for Biomedical Imaging, 149 Thirteenth Street, Suite 2301, Charlestown, MA 02129 USA</p>
    </div>
  );
};

export default Contact;