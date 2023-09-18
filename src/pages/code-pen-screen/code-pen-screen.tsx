import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './code-pen-screen.module.css';
import { Helmet } from 'react-helmet-async';

function CodePenScreen(): JSX.Element {
  return (
    <main className={styles.code_pen_screen_main}>
      <Helmet>
        <title>Клёвые Code Pen</title>
      </Helmet>
      <ol className={styles.code_pen_screen_ol}>
        <li><a className={styles.code_pen_screen_a} href="https://codepen.io/sashaNightMare/pen/LYMjrbr?editors=1000">Галерея</a></li>
        <li><a className={styles.code_pen_screen_a} href="https://codepen.io/sashaNightMare/pen/KKbXwyL?editors=0100">Работа с Drag & Drop</a></li>
        <li><a className={styles.code_pen_screen_a} href="https://codepen.io/sashaNightMare/pen/LYMzoNz?editors=0010">Слайдер</a></li>
        <li><a className={styles.code_pen_screen_a} href="https://codepen.io/SofiaSergio/pen/qBWXqNW">CSS is awesome!</a></li>
        <li><a className={styles.code_pen_screen_a} href=""></a></li>
        <li><a className={styles.code_pen_screen_a} href=""></a></li>
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
        <li><Link className={styles.code_pen_screen_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default CodePenScreen;
