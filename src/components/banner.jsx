import Link from "next/link";
import styles from "../styles/Banner.module.css";
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
         
          <span>
           
          </span>
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
