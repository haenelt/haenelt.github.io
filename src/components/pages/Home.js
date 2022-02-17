import { AiOutlineGithub, AiOutlineTwitter, AiOutlineGoogle, AiOutlineMail } from "react-icons/ai";
import { FaResearchgate } from "react-icons/fa";
import styles from './Home.module.css';

const Home = () => {
  const handleGithub = () => {
    window.open("https://github.com/haenelt", "_blank");
  }

  const handleResearchgate = () => {
    window.open("https://www.researchgate.net/profile/Daniel-Haenelt", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com/DanielHaenelt", "_blank");
  };

  const handleGoogle = () => {
    window.open("https://scholar.google.com/citations?user=q5IWq3UAAAAJ&hl=de", "_blank");
  };

  const handleMail = () => {
    window.open("mailto:daniel.haenelt@gmail.com", "_blank");
  }

  return (
    <div className={styles.iconMenu}>
      <AiOutlineGithub className={styles.icon} onClick={handleGithub} />
      <FaResearchgate className={styles.icon} onClick={handleResearchgate} />
      <AiOutlineTwitter className={styles.icon} onClick={handleTwitter} />
      <AiOutlineGoogle className={styles.icon} onClick={handleGoogle} />
      <AiOutlineMail className={styles.icon} onClick={handleMail} />
    </div>
  );
};

export default Home;