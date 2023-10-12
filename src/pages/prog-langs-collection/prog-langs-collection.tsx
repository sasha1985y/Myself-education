import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import styles from './prog-langs-collection.module.css';

function ProgLangsCollection(): JSX.Element {
  return (
    <main className={styles.prog_langs_collection_main}>
      <ol className={styles.prog_langs_collection_ol}>
        <li><a className={styles.prog_langs_collection_a} href="https://inst.eecs.berkeley.edu/~cs61a/fa14/assets/interpreter/scheme.html">Lisp Scheme Interpreter Online</a></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li><Link className={styles.prog_langs_collection_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default ProgLangsCollection;
