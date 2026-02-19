import * as React from "react";
import styles from "../styles/Rodape.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#c4c4c4",
    },
    secondary: {
      main: "#c4c4c4",
    },
  },
};

const theme = createTheme(themeOptions);

function Rodape() {
  return (
    <footer className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.rodapePrincipal}>
          <div className={styles.colLogo}>
            <img
              src="/static/images/Logo-branco.png"
              alt="Logo Flow"
              className={styles.logo}
            />
            <p><b>Serra/ES</b><br />
              Rua Carcará, 07
              <br />
              Rua Carcará, Novo Horizonte
              <br />
              CEP: 29.163-356 - ES
            </p>
            </div>

          <div className={styles.divisor}></div>

          <div className={styles.links}>
            <div className={styles.coluna}>
              <h4>Menu</h4>
              <Link legacyBehavior href="/">
                <a>Home</a>
              </Link>
              <Link legacyBehavior href="/mec">
                <a>A MEC</a>
              </Link>
              <Link legacyBehavior href="/produtos">
                <a>Equipamentos</a>
              </Link>
              <Link legacyBehavior href="#OndeAtendemos">
                <a>Onde Atendenmos</a>
              </Link>
              <Link legacyBehavior href="/contato">
                <a>Contato</a>
              </Link>
            </div>            
            <div className={styles.social}>
              <div className={styles.icones}>
                <Link
                  legacyBehavior
                  href="https://www.instagram.com/mec_hidraulicas/"
                >
                  <a target="_blank">
                    <img src="/instagram-branco.png" alt="Instagram" />
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://www.facebook.com/mecservicosepecashidraulicas"
                >
                  <a target="_blank">
                    <img src="/facebook-branco.png" alt="Facebook" />
                  </a>
                </Link>
              </div>
              <p>
                <strong>Siga a mec</strong>
                <br />
                nas redes Sociais
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
