import imgProfile from "../../assets/profile.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div >
      <h1>About</h1>
      <img className={styles.imgProfile} src={imgProfile} alt="Profile"></img>
      <p>I am currently a Research Fellow in Jon Polimeni's lab at the <a href="https://www.martinos.org/">Martinos Center for Biomedical Imaging</a>. After studying physics (MSc) and musicology/philosophy (BA) at the Free University of Berlin and the University of Leipzig, I pursued a PhD under the supervision of Prof. Nikolaus Weiskopf (Department of Neurophysics, <a href="https://www.cbs.mpg.de/en">Max Planck Institute for Human Cognitive and Brain Sciences</a>, Leipzig, Germany) investigating possibilities and challenges of BOLD- and CBV-based (VASO) high-resolution fMRI methods for the mapping of cortical columns in humans. Currently, I continue working on CBV-based imaging methods and the application of deep learning models to increase the spatiotemporal specificity of functional imaging methods.</p>
    </div >
  );
};

export default About;
