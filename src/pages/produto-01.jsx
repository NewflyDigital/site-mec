import styles from "../styles/Produto.module.css";
import { useState } from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeNewFly from "../components/rodape-newfly";
import Whats from "../components/whats";
import Link from "next/link";

export default function Produto01() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState("especificacoes");

  return (
    <>
      <Menu />

      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>Linha Trave</span>
          <br />
          <h2>80.500</h2>
        </div>
      </section>

      <section className={styles.background}>
        <img
          className={styles.banquemsomos}
          src="/static/images/banner-produto.jpg"
        />
      </section>

      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/ING/Menu-80-500-Trave.png"
          />
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.barra}>
          <div>Soluções para grandes empreendimentos</div>
          <div>
            <p>Baixar catálogo</p>
            <Link legacyBehavior href="/">
              <img src="/static/images/download.png" />
            </Link>
          </div>
        </div>
      </section>

       <section className={styles.background}>
      <div className={styles.mvv}>
        <div
          className={`${styles.mvvBox} ${
            activeTab === "especificacoes" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("especificacoes")}
        >
          <h3>ESPECIFICAÇÕES TÉCNICAS</h3>
        </div>

        <div
          className={`${styles.mvvBox} ${
            activeTab === "graficos" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("graficos")}
        >
          <h3>GRÁFICOS DE CARGA</h3>
        </div>

        <div
          className={`${styles.mvvBox} ${
            activeTab === "dimensoes" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("dimensoes")}
        >
          <h3>DIMENSÕES</h3>
        </div>
      </div>

      <div className={styles.interno4}>
        {activeTab === "especificacoes" && (
          <div className={styles.tabelaBox}>
            <h2 className={styles.titulo}>Especificações Técnicas</h2>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>DADOS TÉCNICOS</th>
                  <th>ING 80.500</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>MOMENTO MÁXIMO DE CARGA</td><td>80.500 kgm</td></tr>
                <tr><td>ALCANCE MÁXIMO VERTICAL (DO SOLO)</td><td>29,0 m</td></tr>
                <tr><td>ALCANCE MÁXIMO HORIZONTAL</td><td>25,2 m</td></tr>
                <tr><td>ALCANCE MÁXIMO VERTICAL HIDRÁULICO</td><td>22,8 m</td></tr>
                <tr><td>ALCANCE MÁXIMO HORIZONTAL HIDRÁULICO</td><td>18,9 m</td></tr>
                <tr><td>ÂNGULO MÁXIMO DE INCLINAÇÃO</td><td>80°</td></tr>
                <tr><td>ÂNGULO DE GIRO</td><td><strong>CONTÍNUO</strong></td></tr>
                <tr><td>TORQUE DE GIRO</td><td>9,3 tm</td></tr>
                <tr><td>VOLUME DE ÓLEO NO TANQUE</td><td>265 l</td></tr>
                <tr><td>PRESSÃO DE TRABALHO</td><td>260 bar</td></tr>
                <tr><td><strong>PESO PADRÃO APROX*</strong></td><td>8200 kg</td></tr>
                <tr><td>ESPAÇO OCUPADO PARA MONTAGEM</td><td>1,9 m</td></tr>
                <tr><td>ESTABILIZADOR DIANTEIRO EXTENDIDO</td><td>8,0 m</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "graficos" && (
          <div className={styles.box}>
            <h2 className={styles.titulo}>Gráficos de Carga</h2>
            <img className={styles.imgBox} src="/static/images//Produtos/ING/80-500-Trave-grafico.png" alt="Gráfico de Carga" />
          </div>
        )}

        {activeTab === "dimensoes" && (
          <div className={styles.box}>
            <h2 className={styles.titulo}>Dimensões</h2>
            <img className={styles.imgBox} src="/static/images//Produtos/ING/80-500-Trave-dimensoes.png" alt="Dimensões" />
          </div>
        )}
      </div>
    </section>

      

      <section className={styles.background}>
        <div className={styles.interno3}>
          <div className={styles.box3}>
          </div>
          <div className={styles.box2}>
            {showVideo ? (
              // Substitua pelo link do seu vídeo institucional
              <video width="560" height="315" controls autoPlay>
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

      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo3}>Representações estratégicas</h2>
          </div>
          <div className={styles.box2}>
            <a href="/" className={styles.botaofooter}>
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
