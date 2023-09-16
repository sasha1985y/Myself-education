import { Helmet } from 'react-helmet-async';
import styles from './ts-help-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function TsHelp(): JSX.Element {
  return (
    <main className={styles.ts_help_main}>
      <Helmet>
        <title>Шпаргалка по TypeScript</title>
      </Helmet>
      <ol className={styles.ts_help_ol}>
        <li><a className={styles.ts_help_a} href="https://www.typescriptlang.org/docs/handbook/intro.html">Настольная книга по TypeScript</a></li>
        <li><a className={styles.ts_help_a} href="https://www-tutorialsteacher-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=sc">tutorialsteacher изучение TS и многого другого</a></li>
        <li><a className={styles.ts_help_a} href="https://www.typescriptlang.org/">Официальный сайт по TypeScript с песочницей</a></li>
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
        <li><Link className={styles.ts_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default TsHelp;

