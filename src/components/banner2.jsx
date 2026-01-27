import Link from "next/link";
import styles from "../styles/Banner2.module.css";
import { useState } from "react";

import ModalOrcamento from "./modal";
import ModalVideo from "./video"; // Novo modal

function Banner() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Novo estado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica do envio
    console.log({ nome, empresa, telefone, email, mensagem });
    // Fechar modal (opcional)
    setShowModal(false);
  };

  return (
    <section className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.box}>
          <h4>Engenharia focada em performance</h4>
          <h2>
            Equipamentos desenvolvidos para força, durabilidade e eficiência
          </h2>

          <span>
            <Link legacyBehavior href="/">
              <a>
                <button
                  className={styles.video}
                  onClick={() => setShowVideo(true)}
                >
                  VIDEO
                </button>
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a>
                <button
                  className={styles.orcamento}
                  onClick={() => setShowModal(true)}
                >
                  Solicitar orçamento
                </button>
              </a>
            </Link>
          </span>
        </div>

        <div className={styles.div_seta_baixo}>
          <img
            src="/static/images/seta-baixo.png"
            alt="seta-baixo"
            style={{ width: "1.5rem" }}
          />
        </div>
      </div>

      {/*
      <video
      className={styles.video}
      src="/static/video/banner-video.mp4"
      muted
      autoPlay
      loop
      />
 */}

      {/* Modal de vídeo */}
      <ModalVideo open={showVideo} onClose={() => setShowVideo(false)} />
      {/* Modal */}
      <ModalOrcamento open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

export default Banner;
