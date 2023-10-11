import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import styles from './developing-help-screen.module.css';

function DevelopingHelp(): JSX.Element {
  return (
    <main className={styles.developing_help_main}>
      <ol className={styles.developing_help_ol}>
        <li><a className={styles.developing_help_a} href="https://directory.audio/ru/">Бесплатные звуки событий компонентов DOM</a></li>
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
        <li><Link className={styles.developing_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default DevelopingHelp;
