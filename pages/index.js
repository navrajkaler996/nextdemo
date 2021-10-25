import Link from "next/link";
import styles from "../styles/Home.module.css";
import Display from "../Components/Display";
import ClickContext from "../store/click-context";
import { useContext } from "react";
export default function Home() {
  const clickContext = useContext(ClickContext);

  const clickHandler = () => {
    clickContext.incrementValue(clickContext.value + 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={clickHandler}>Click</button>
      <h2>{clickContext.value}</h2>
      <hr />
      <h2>This is Display component</h2>
      <Display />
    </div>
  );
}
