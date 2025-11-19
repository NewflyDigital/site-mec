import * as React from "react";
import { useState } from "react";
import Banner from "../components/banner";
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
      <Banner />
      <section className={styles.background3}>
        <div className={styles.parceiros}>
          <h3>
            Selecione uma <b>marca</b>
          </h3>
          <img src="/static/images/Parceiros/parceiros-ING-branco.png" />
          <img src="/static/images/Parceiros/parceiros-Termolog-branco.png" />
          <img src="/static/images/Parceiros/parceiros-Gotti-branco.png" />
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.Box}>
            <img
              className={styles.banparceiro}
              src="/static/images/parceiros-ING.png"
            />
            <h2 className={styles.titulo}>Muncks ING Guindastes</h2>
            <p className={styles.paragrafo}>
              Referência na fabricação de equipamentos para movimentação e
              elevação de cargas. Nascida com o propósito de projetar, fabricar
              e comercializar guindastes de alto desempenho, a ING desenvolve
              soluções robustas, seguras e tecnológicas que atendem às mais
              diversas demandas do mercado. Com foco constante em qualidade,
              inovação e eficiência, a empresa constrói guindastes para clientes
              que buscam o que há de melhor no mercado, com um sistema de
              gerenciamento da qualidade certificado pela ISO 9001, garantindo
              desempenho, durabilidade e confiança em cada operação.
            </p>
          </div>
          <div className={styles.Right}>
            <img
              className={styles.quemsomos}
              src="/static/images/ing-ban.jpg"
            />
          </div>
        </div>

        <div className={`${styles.interno} my-[5rem]`}>
          <div className={styles.Box}>
            <img
              className={styles.quemsomos}
              src="/static/images/Termolog-ban.jpg"
            />
          </div>
          <div className={styles.Right}>
            <img
              className={styles.banparceiro}
              src="/static/images/parceiros-Termolog.png"
            />
            <h2 className={styles.titulo}>Baús Frigoríficos Termolog</h2>
            <p className={styles.paragrafo}>
              A Termolog desenvolve carrocerias frigoríficas para negócios que
              movem o Brasil, oferecendo soluções com alto padrão de qualidade,
              eficiência e desempenho térmico. A empresa fabrica baús
              resistentes e tecnologicamente avançados, garantindo uma logística
              segura e precisa. A Termolog também conta com a tecnologia de
              refrigeração Titon, que assegura eficiência, durabilidade e baixo
              custo de manutenção em cada operação.
            </p>
          </div>
        </div>

        <div className={styles.interno}>
          <div className={styles.Box}>
            <img
              className={styles.banparceiro}
              src="/static/images/parceiros-Gotti.png"
            />
            <h2 className={styles.titulo}>Tanques Gotti</h2>
            <p className={styles.paragrafo}>
              A Gotti fabrica tanques, basculantes e pranchas personalizados,
              projetados para atender às necessidades específicas de cada
              cliente. Com foco em segurança, robustez e eficiência, seus
              produtos garantem desempenho e durabilidade, oferecendo soluções
              precisas para o transporte de cargas pesadas, volumosas ou
              perigosas. Cada implemento é desenvolvido para proporcionar
              leveza, confiabilidade e economia, ajudando sua frota a operar com
              mais agilidade e segurança, sempre com alto padrão de
              qualidade e acabamento.
            </p>
          </div>
          <div className={styles.Right}>
            <img
              className={styles.quemsomos}
              src="/static/images/gotti-ban.jpg"
            />
          </div>
        </div>
      </section>

      <a id="OndeAtendemos" />

      <section className={styles.bgnsa}>
        <div className={styles.interno}>
          <div className={styles.Box}>
            <h2>Onde Atendemos</h2>
            <h4>Presença regional com atendimento especializado.</h4>

            <p>
              A NSA Implementos atua estrategicamente em diferentes regiões,
              garantindo agilidade, suporte técnico e proximidade com o cliente.
            </p>
            <p>
              Representamos marcas de referência no setor, levando soluções de
              alto desempenho para o transporte, a construção e o agronegócio.
            </p>

            <p>
              <strong>ING e Gotti:</strong> Triângulo Mineiro, Alto Paranaíba e
              Noroeste de Minas. <br />
              <strong>Termolog:</strong> Minas Gerais, Goiás e regiões de DDD 16
              e 17 do estado de São Paulo.
            </p>

            <h3>
              Mais do que presença, entregamos parceria e comprometimento em
              cada projeto.
            </h3>

            <Link legacyBehavior href="/contato">
              <a className={styles.botaonsa}>Entre em contato +</a>
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
            <h2 className={styles.titulo3}>Representações estratégicas</h2>
          </div>
          <div className={styles.box2}>
            <Link legacyBehavior href="/contato">
              <a className={styles.botaofooter}>Entre em Contato</a>
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
