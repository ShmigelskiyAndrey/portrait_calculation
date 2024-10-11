import styles from "./compositeCell.module.css";

function CompositeCell({children}) {

  return (
    <div className={styles.container}>
      <div className={styles.date}>{children}</div>
      <div className={styles.arcans}>
        <div className={styles.arcan}>1</div>
        <div className={styles.arcan}>2</div>
        <div className={styles.arcan}>3</div>
        <div className={styles.arcan}>4</div>
        <div className={styles.arcan}>5</div>
        <div className={styles.arcan}>6</div>
      </div>
    </div>
  )
}

export { CompositeCell }