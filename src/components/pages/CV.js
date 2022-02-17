import pdfFile from '../../assets/cv_2022_02.pdf';
import styles from './CV.module.css';

const CV = () => {
  return (
    <div >
      <h1>Curriculum Vitae</h1>
      <div className={styles.pdf}>
        <iframe src={pdfFile} title="cv">
          <p>You do not seem to have a functional PDF plug-in for this browser. <a href={pdfFile}>Link to the CV!</a></p>
        </iframe>
      </div>
    </div >
  );
};

export default CV;