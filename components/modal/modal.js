import styles from "./modal.module.scss";

const Modal = ({ project, closeModal }) => {
  const outsideClick = (e) => {
    if (e.target.id !== "cover") {
      return;
    }
    closeModal();
  };
  return (
    <div id="cover" className={styles.cover} onClick={outsideClick}>
      <div className={styles.modal}>
        <table>
          <tr>
            <td colSpan="2">
              <img src={project.image} alt={project.title} />
            </td>
          </tr>
          <tr>
            <td>Projekt</td>
            <td>{project.title}</td>
          </tr>
          <tr>
            <td>Opis</td>
            <td>{project.description}</td>
          </tr>
          <tr>
            <td>Repozytorium</td>
            <td>{project.git}</td>
          </tr>
          <tr>
            <td>Live</td>
            <td>{project.live}</td>
          </tr>
        </table>

        <span className="close" onClick={closeModal}>
          Zamknij
        </span>
      </div>
    </div>
  );
};

export default Modal;
