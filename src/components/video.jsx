import styles from "../styles/Video.module.css";

function ModalVideo({ open, onClose }) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ✖
        </button>
        <video controls autoPlay className={styles.video}>
          <source src="/static/video/video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>
    </div>
  );
}

export default ModalVideo;
