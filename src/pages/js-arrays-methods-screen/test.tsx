import { Helmet } from 'react-helmet-async';
import styles from './js-objects-methods-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function JsObjectsMethodsHelp(): JSX.Element {

  return (
    <main className={styles.js_objects_methods_main}>
        <Helmet>
            <title>Методы массива JS</title>
        </Helmet>

        <div className={styles.sticky_header}>
            <Link className={styles.js_objects_methods_a} to={AppRoute.JsObjectsMethods}>Домой</Link>
            <h1>Методы  объектов JavaScript</h1>
        </div>

        <div className="method">
            <h2>1. Название метода</h2>
            <p>Кратко о том, что этот метод делает.</p>
            <pre><code>Краткий пример</code></pre>
        </div>

        ...
    </main>

  );
}

export default JsObjectsMethodsHelp
