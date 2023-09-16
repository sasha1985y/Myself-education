import { Helmet } from 'react-helmet-async';
import styles from './json-help-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function JsonHelp(): JSX.Element {
  return (
    <main className={styles.json_help_main}>
      <Helmet>
        <title>Шпаргалка JSON</title>
      </Helmet>
      <ol className={styles.json_help_ol}>
        <li><a className={styles.json_help_a} href="https://jsonformatter.curiousconcept.com/">JSON Formatter & Validator</a></li>
        <li><a className={styles.json_help_a} href="https://jsonplaceholder.typicode.com/">JSON Placeholder тестовые серверные данные</a></li>
        <li><a className={styles.json_help_a} href="https://www.npoint.io/">N:POINT хранилище json данных</a></li>
        <li><a className={styles.json_help_a} href="https://jsonbin.io/">{ }JSONBIN.io тоже хранилище json данных но с продвинутой безопасностью</a></li>
        <li><a className={styles.json_help_a} href="https://wiki.merionet.ru/servernye-resheniya/57/top-7-json-xostingov-dlya-vashego-prilozheniya/">7вариантов размещения json</a></li>
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
        <li><Link className={styles.json_help_a} to={AppRoute.Main}>Домой</Link></li>
      </ol>
    </main>
  );
}

export default JsonHelp;

