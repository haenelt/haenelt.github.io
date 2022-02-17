import imgProfile from "../../assets/profile.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div >
      <h1>About</h1>
      <img className={styles.imgProfile} src={imgProfile} alt="Profile"></img>
      <p>I am a PhD student in the Neurophysics department at the <a href="https://www.cbs.mpg.de/departments/neurophysics">
        Max Planck Institute for Human Cognitive and Brain Science</a> (MPI-CBS) in Leipzig, Germany. I studied physics at the
        Free University in Berlin and at the Leipzig University, where I extended my studies to musicology and philosophy.
        During my Master studies in physics, I joined the Neurophysics department at the MPI-CBS to write my Master Thesis
        in the field of high-resolution fMRI at ultra-high magnetic field strengths. I continue working in this research field
        during my PhD.</p>
    </div >
  );
};

export default About;
