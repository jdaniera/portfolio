import Menu from "../Menu";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.introOuterContainer}>
      <div className={styles.introInnerContainer}>
        <h1>
          Hello,
        </h1>
        <h1>
            nice to meet you.
        </h1>
        <p>Jasmine Putri is a Vancouver-based multidisciplinary digital designer with a love for story-telling and human-centered design.
        </p>
      </div>
      <Menu layout="column" />
    </div>
  );
}
