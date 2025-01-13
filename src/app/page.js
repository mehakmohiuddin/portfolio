import Experience from "@/components/Experience";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className={styles.main}>
        <Hero/>
        <Experience/>
        <Projects/>
        <Feedbacks/>
        </div>
        <div className='relative z-0'>
          <Contact/>
        </div>
            </div>
        
  );
}
