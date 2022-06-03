import styles from './CV.module.css';

const CV = () => {
  const cvFile = "https://drive.google.com/file/d/1lkPh6PpNGxWgCJpRpTveePuC_sGQP6uM/preview";

  return (
    <div >
      <h1>Curriculum Vitae</h1>
      <div className={styles.pdf}>
        <iframe src={cvFile} type='application/pdf' title="cv" scrolling="auto" allow="autoplay">
          <p>You do not seem to have a functional PDF plug-in for this browser. <a href={cvFile}>Link to the CV!</a></p>
        </iframe>
      </div>
    </div >
  );
};

export default CV;