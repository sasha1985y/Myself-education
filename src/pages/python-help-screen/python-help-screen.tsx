import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import styles from './python-help-screen.module.css';

function PythonHelp(): JSX.Element {
  return (
    <main className={styles.python_help_main}>
      <ol className={styles.python_help_ol}>
        <li><a className={styles.python_help_a} href="https://www.python.org/">официальный сайт Python</a></li>
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
        <li><Link className={styles.python_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default PythonHelp;
