import * as React from "react";
import { useState } from "react";
import Banner2 from "../components/banner2";
import Menu from "../components/menu";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import GoogleMap from "../components/map";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Home() {
  React.useEffect(() => {
    window.document.body.style.backgroundColor = "#01030e";
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner2 />
      <section className={styles.background3}>
        <div className={styles.parceiros}>
          <h3>
            Selecione uma <b>marca</b>
          </h3>
          <img src="/static/images/Parceiros/logo-tka-branco.png" />
          <img src="/static/images/Parceiros/logo-tecnnic-branco.png" />
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <img
              className={styles.banparceiro}
              src="/static/images/parceiros/logo-TKA.png"
            />
            <h2 className={styles.titulo}>Guindastes TKA Cranes</h2>
            <p className={styles.paragrafo}>
              A TKA Cranes desenvolve guindastes hidráulicos projetados para
              quem precisa de desempenho real em operações de elevação e
              movimentação de cargas. Com engenharia focada em resistência
              estrutural, precisão de movimentos e segurança operacional, a
              marca entrega equipamentos preparados para rotinas intensas e
              diferentes aplicações no campo, na indústria e na logística.
              <br />
              Cada guindaste TKA é desenvolvido com foco em eficiência,
              estabilidade e durabilidade, garantindo operações seguras mesmo em
              condições exigentes. A atenção aos detalhes construtivos e aos
              sistemas hidráulicos assegura um desempenho consistente ao longo
              do tempo, atendendo clientes que buscam confiabilidade e
              produtividade em cada jornada de trabalho.
            </p>
          </div>
          <div className={styles.Right}>
            <img
              className={styles.quemsomos}
              src="/static/images/ban-index-tka.jpg"
            />
          </div>
        </div>

        <div className={`${styles.interno} my-[5rem]`}>
          <div className={styles.Box}>
            <img
              className={styles.quemsomos}
              src="/static/images/ban-index-tecnnic.jpg"
            />
          </div>
          <div className={styles.Right}>
            <img
              className={styles.banparceiro}
              src="/static/images/parceiros/logo-tecnnic.png"
            />
            <h2 className={styles.titulo}>Controles Tecnnic</h2>
            <p className={styles.paragrafo}>
              Os controles Tecnnic são desenvolvidos para oferecer comando
              preciso, resposta rápida e total controle das operações.
              Projetados para guindastes hidráulicos e caminhões, os sistemas
              Tecnnic garantem sensibilidade progressiva, segurança operacional
              e facilidade de uso, mesmo em ambientes de trabalho complexos.
              <br />
              Com tecnologia aplicada para reduzir falhas, aumentar a precisão
              dos movimentos e proporcionar conforto ao operador, os controles
              Tecnnic contribuem diretamente para a preservação do equipamento e
              para a eficiência da operação. É a tecnologia certa para quem
              precisa de controle absoluto, confiabilidade e desempenho no dia a
              dia.
            </p>
          </div>
        </div>
      </section>

      <a id="OndeAtendemos" />

      <section className={styles.bgmec}>
        <div className={styles.interno}>
          <div className={styles.Box}>
            <h2>Onde Atendemos</h2>
            <h4>Atuação regional com suporte técnico próximo.</h4>

            <p>
              A MEC atua de forma estratégica no estado do Espírito Santo,
              oferecendo atendimento ágil, orientação especializada e
              proximidade com cada cliente.
            </p>

            <p>
              Como representante da TKA Cranes e dos controles Tecnnic, levamos
              soluções confiáveis para operações de elevação, movimentação de
              cargas e aplicações rodoviárias.
            </p>

            <p>
              <strong>TKA Cranes e Tecnnic:</strong> atuação em todo o estado do
              Espírito Santo, com suporte técnico e acompanhamento
              especializado.
            </p>

            <h3>
              Presença regional que se traduz em confiança, suporte e parceria
              em cada operação.
            </h3>

            <Link legacyBehavior href="/contato">
              <a className={styles.EntreContato}>Entre em contato +</a>
            </Link>
          </div>

          <div className={styles.Right}>
            <img
              className={styles.quemsomos}
              src="static/images/quem-somos.jpg"
              alt="NSA Implementos"
            />
          </div>
        </div>
      </section>

      {/* Video
      <section className={styles.backgroundMovidos}>
        <div className={styles.interno3}>
          <div className={styles.box3}></div>
          <div className={styles.box2}>
            {showVideo ? (
              // Substitua pelo link do seu vídeo institucional
              <video width="1300" height="516" controls autoPlay>
                <source
                  src="/static/video/video.mp4"
                  type="video/mp4"
                />
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
*/}

      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo3}>Soluções em Implementos</h2>
          </div>
          <div className={styles.box2}>
            <Link legacyBehavior href="/contato">
              <a className={styles.botaofooter}>Fale Conosco</a>
            </Link>
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
