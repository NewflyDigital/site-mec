import styles from "../styles/Nsa.module.css";
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
          <h2>NSA Representações</h2>
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
            <h2 className={styles.titulo}>NSA Implementos</h2>
            <p className={styles.paragrafo2}>
              <h4>
                Inovação, robustez e soluções sob medida para o transporte e o
                campo.
              </h4>
              <p>
                A NSA Implementos é especialista no desenvolvimento,
                personalização e reforma de implementos rodoviários e
                equipamentos hidráulicos. Com uma estrutura sólida e equipe
                qualificada, entregamos soluções que aliam tecnologia,
                durabilidade e desempenho.
              </p>
              <p>
                Nosso compromisso é oferecer produtos e serviços que realmente
                façam a diferença na rotina dos nossos clientes — seja no
                transporte, na logística ou nas operações de carga e descarga.
              </p>
              <p>
                Atendemos diversos segmentos, com foco em resultados reais,
                segurança e confiabilidade. Cada projeto é tratado de forma
                única, com atenção ao detalhe e à necessidade específica de cada
                operação.
              </p>
              <h3>
                🛠 Qualidade em cada solda, força em cada detalhe. <br />
              </h3>
              <h3>
                NSA: Mais que implementos. Soluções que movem o seu negócio.
                <br />
              </h3>
              <Link legacyBehavior href="/">
                <a className={styles.botaonsa}>Conheça nossos serviços +</a>
              </Link>
            </p>
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
            <h2 className={styles.titulo2}>Representações Estratégicas </h2>
            <p className={styles.paragrafo}>
              A NSA Implementos atua como representante oficial de grandes
              marcas do setor, oferecendo soluções completas para transporte,
              movimentação de cargas e refrigeração.
              <br /> <br />
              Com presença consolidada em diversas regiões do Brasil, garantimos
              atendimento especializado, suporte técnico e produtos que unem
              tecnologia, robustez e desempenho.
              <br /> <br />
              Nosso objetivo é conectar clientes às melhores soluções do mercado
              — com atendimento personalizado e foco total em resultados.
            </p>
          </div>
          <div className={styles.box}>
            <img
              className={styles.parceiros}
              src="/static/images/parceiros.jpg"
            />
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo3}>Representações estratégicas</h2>
          </div>
          <div className={styles.box2}>
            <a href="/contato" className={styles.botaofooter}>
              Entre em Contato
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
