import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Created with ♥️ by{" "}
      <a
        href="https://github.com/Hekimianz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aram Hekimian
      </a>
    </footer>
  );
}

export default Footer;
