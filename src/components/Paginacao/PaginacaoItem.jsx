import * as styles from "./style.module.css";

const PaginacaoItem = ({ number, active, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={active ? styles.itemActive : styles.item}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default PaginacaoItem;
