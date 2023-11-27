import styles from './container.module.css'
export default function Container({ children }) {
  return <div className={styles.paret_container}>{children}</div>;
}
