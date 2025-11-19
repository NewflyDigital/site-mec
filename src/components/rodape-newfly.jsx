import Link from "next/link";
import styles from "../styles/RodapeNewfly.module.css";

export default function RodapeNewFly() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span>
          Direitos Reservados 2025 | Desenvolvido por
        </span>
        <Link legacyBehavior href="https://www.newflydigital.com.br/">
          <a target="_blank">
            <img src="/newfly.png" alt="NewFly" />
          </a>
        </Link>
      </div>
    </div>
  );
}
