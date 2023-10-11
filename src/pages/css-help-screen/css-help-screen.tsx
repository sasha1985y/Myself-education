import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './css-help-screen.module.css';

function CssHelp(): JSX.Element {
  return (
    <main className={styles.css_help_main}>
      <ol className={styles.css_help_ol}>
        <li><a className={styles.css_help_a} href="https://htmlacademy.ru/blog/html/cascade-works">как работает каскад в css</a></li>
        <li><a className={styles.css_help_a} href="https://www.w3.org/TR/CSS21/propidx.html">Спецификация CSS (Фрагмент)</a></li>
        <li><a className={styles.css_help_a} href="https://www.toptal.com/developers/css/sprite-generator/">CSS генератор спрайтов</a></li>
        <li><a className={styles.css_help_a} href="https://htmlacademy.ru/blog/html/margin-vs-padding">чем отличаются margin и padding</a></li>
        <li><a className={styles.css_help_a} href="https://htmlacademy.ru/blog/html/flexbox-vs-grid">когда использовать флексы, а когда гриды</a></li>
        <li><a className={styles.css_help_a} href="https://animate.style/">библиотека Animate.css Just-add-water CSS animations</a></li>
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
        <li><Link className={styles.css_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default CssHelp;
