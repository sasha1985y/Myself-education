import { Helmet } from 'react-helmet-async';
import styles from './js-help-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function JsHelp(): JSX.Element {
  return (
    <main className={styles.js_help_main}>
      <Helmet>
        <title>Шпаргалка JavaScript</title>
      </Helmet>
      <ol className={styles.js_help_ol}>
        <li><a className={styles.js_help_a} href="https://jsdoc.app/index.html">@use JSDoc</a></li>
        <li><a className={styles.js_help_a} href="https://doka.guide/js/element-positioning-js/">Позиционирование элементов с помощью JS</a></li>
        <li><a className={styles.js_help_a} href="https://dev-gang.ru/doc/htmldom/make-a-draggable-element/">Как управлять DOM на чистом JavaScript?</a></li>
        <li><a className={styles.js_help_a} href="https://lk.result.school/pl/fileservice/user/file/download/h/a46b8dfc2b9db6f48da82d867a691007.pdf">события Drag & Drop</a></li>
        <li><a className={styles.js_help_a} href="https://developer.chrome.com/docs/devtools/">Chrome DevTools</a></li>
        <li><a className={styles.js_help_a} href="http://css.yoksel.ru/funny-little-console/">Весёлая консолька</a></li>
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
        <li><Link className={styles.js_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default JsHelp;

