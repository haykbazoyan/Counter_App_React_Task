import styles from './button.css';

export default function Button({ onClickFn, isDisable, btnName }) {
  return (
    <button type="button" onClick={onClickFn} disabled={isDisable} className={`${styles.btn}`}>{btnName}</button>
  );
}
