import styles from "../styles/GoogleMap.module.css";

function GoogleMap() {
  return (
    <section
      className={styles.background}
      style={{
        WebkitFilter: "grayscale(100%)",
        filter: "grayscale(100%)",
      }}
    >
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.6962766913402!2d-51.22927092416709!3d-29.173621191443907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ebc8dc5f01d2f%3A0xa6431774785a5174!2sFlow%20Sistem!5e0!3m2!1spt-BR!2sbr!4v1745278381166!5m2!1spt-BR!2sbr"
        
        scrolling="no"
        allowFullScreen
        width="100%"
        className={styles.mapa}
      ></iframe>
    </section>
  );
}

export default GoogleMap;