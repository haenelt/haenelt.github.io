import pdfFile from '../../assets/cv_2022_02.pdf';
import styles from './CV.module.css';

const CV = () => {
  return (
    <div >
      <h1>Curriculum Vitae</h1>
      <div className={styles.pdf}>
        <object data={pdfFile} type="application/pdf">
          <p>You do not seem to have a functional PDF plug-in for this browser. <a href={pdfFile}>Link to the PDF!</a></p>
        </object>
      </div>
    </div >
  );
};

export default CV;