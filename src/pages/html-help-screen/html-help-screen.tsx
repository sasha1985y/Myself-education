import { Helmet } from 'react-helmet-async';
import styles from './html-help-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HtmlHelp(): JSX.Element {
  return (
    <main className={styles.html_help_main}>
      <Helmet>
        <title>Шпаргалка HTML</title>
      </Helmet>
      <ol className={styles.html_help_ol}>
        <li><a className={styles.html_help_a} href="https://htmlacademy.ru/blog/html/fonts-loading">как подключить и оптимизировать нестандартные шрифты</a></li>
        <li><a className={styles.html_help_a} href="https://www.cssfontstack.com/">безопасные шрифты</a></li>
        <li><a className={styles.html_help_a} href="https://fonts.google.com/">Google fonts</a></li>
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
        <li><Link className={styles.html_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default HtmlHelp;

