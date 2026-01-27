import styles from "../styles/Mec.module.css";
import { useState } from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeNewFly from "../components/rodape-newfly";
import Link from "next/link";
import Whats from "../components/whats";

export default function QuemSomos() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>CONHEÇA A</span>
          <br />
          <h2>MEC Implementos Hidráulicos</h2>
        </div>
      </section>

      <section className={styles.background}>
        <img
          className={styles.banquemsomos}
          src="/static/images/banner-interno.jpg"
        />
      </section>

      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <a className={styles.paragrafo2}>
              <h2>Onde Atendemos</h2>
              <h4>Atuação regional com suporte técnico próximo.</h4>

              <p>
                A MEC atua de forma estratégica no estado do Espírito Santo,
                oferecendo atendimento ágil, orientação especializada e
                proximidade com cada cliente.
              </p>

              <p>
                Como representante da TKA Cranes e dos controles Tecnnic,
                levamos soluções confiáveis para operações de elevação,
                movimentação de cargas e aplicações rodoviárias.
              </p>

              <p>
                <strong>TKA Cranes e Tecnnic:</strong> atuação em todo o estado
                do Espírito Santo, com suporte técnico e acompanhamento
                especializado.
              </p>

              <h3>
                Presença regional que se traduz em confiança, suporte e parceria
                em cada operação.
              </h3>

              <Link legacyBehavior href="/contato">
                <span className={styles.botaomec}>Entre em contato +</span>
              </Link>
            </a>
          </div>
          <div className={styles.box}>
            <img
              className={styles.quemsomos}
              src="/static/images/quem-somos.jpg"
            />
          </div>
        </div>
      </section>

      <section />
      <section className={styles.background}>
        <div className={styles.interno3}>
          <div className={styles.box3}></div>
          <div className={styles.box2}>
            {showVideo ? (
              // Substitua pelo link do seu vídeo institucional
              <video width="1300" height="516" controls autoPlay>
                <source src="/static/video/video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            ) : (
              <img
                src="/static/images/play.png"
                alt="Play"
                onClick={() => setShowVideo(true)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno2}>
          <div className={styles.box}>
            <h2 className={styles.titulo2}>Soluções em Implementos</h2>
            <p className={styles.paragrafo}>
              A MEC atua como representante de marcas reconhecidas no setor de
              implementos rodoviários, oferecendo soluções voltadas à
              movimentação e elevação de cargas.
              <br />
              Com atuação regional e foco em proximidade, garantimos atendimento
              especializado, orientação técnica e equipamentos que unem
              tecnologia, resistência e desempenho operacional.
              <br />
              Nosso propósito é apoiar cada cliente na escolha da solução certa,
              entregando confiança, suporte e resultado em cada operação.
            </p>
          </div>
          <div className={styles.parceiros}>
            <img
              className={styles.parceirosimg}
              src="/static/images/parceiros/logo-tecnnic-branco.png"
            />
            <img
              className={styles.parceirosimg}
              src="/static/images/parceiros/logo-tka-branco.png"
            />
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo3}>Soluções em Implementos</h2>
          </div>
          <div className={styles.box2}>
            <a href="/contato" className={styles.botaofooter}>
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
