import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);
  }, []);

  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);

    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const menu = document.getElementById(styles.menuheader);

      if (winScroll > 0) {
        menu.classList.add(styles["menu-alternative"]);
      } else {
        menu.classList.remove(styles["menu-alternative"]);
      }
    });
  }, []);

  const [showSubMenu, setShowSubMenu] = React.useState(false);

  function handleMouseEnter() {
    setShowSubMenu(true);
  }

  function handleMouseLeave() {
    setShowSubMenu(false);
  }

  function toggleMenu() {
    const nav = document.getElementById(`${styles.nav}`);
    nav.classList.toggle(styles.active);
  }

  return (
    <div id={styles.menuheader} className={styles.header}>
      <div className={`${styles.interno}`}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <img src="/static/images/logo.png" alt="Logo" />
          </a>
        </Link>

        <button id={`${styles.btn_mobile}`}>
          <span id={`${styles.hamburguer}`}></span>
        </button>

        <ul
          id={`${styles.nav}`}
          className={`${styles.menu} ${styles.navbar}  `}
        >
          <li className={styles.li}>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link legacyBehavior href="/a-mec">
              <a>A MEC</a>
            </Link>
          </li>

          <li
            className={styles.li}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link legacyBehavior href="/produtos">
              <a>Equipamentos</a>
            </Link>
            {showSubMenu && (
              <div className={styles.submenu}>
                <div className={styles.submenuContent}>
                  <div className={styles.submenuInterno}>
                    <Link legacyBehavior href="/produtos?categoria=Guindaste%20Linha%20Canivete">
                      <a>
                        <img src="/static/images/parceiros/logo-tka.png" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/produtos?categoria=Guindaste%20Linha%20Trave">
                      <a>
                        <img src="/static/images/parceiros/logo-tecnnic.png" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className={styles.li}>
            <Link legacyBehavior href="/index2#OndeAtendemos">
              <a>Onde Atendemos</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link legacyBehavior href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
        <Link legacyBehavior href="/contato">
          <a id={`${styles.botao}`}>
            <button className={styles.contato}>Entre em contato</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
