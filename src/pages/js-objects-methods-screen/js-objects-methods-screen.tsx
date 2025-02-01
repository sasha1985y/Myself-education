import { Helmet } from 'react-helmet-async';
import styles from './js-objects-methods-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import { useState } from 'react';

const themes = {
    light: {
        '--background-color': ' #ffffff',
        '--div-background-color': ' #e4e4e4',
        '--text-color': ' #4b4b4b',
        '--text-shadow': '5px 5px 15px #444444',
        '--primary-color': ' #2e4153',
        '--secondary-color': ' #e4e4e4',
        '--filled-color': 'unset',
        '--stroke': '.6px #272727',
        '--custom-box-shadow_1': '3px 3px 3px 3px #2e4153, -3px -3px 3px 3px #2e4153',
        '--custom-box-shadow_2': '3px 3px 3px 3px #e4e4e4, -3px -3px 3px 3px #e4e4e4',
    },
    dark: {
        '--background-color': ' #222f3d',
        '--div-background-color': ' #2e4153',
        '--text-color': ' #ecf0f1',
        '--text-shadow': '10px 10px 30px #2101ec, -10px 10px 30px #d83cec',
        '--primary-color': ' #3ca3e7',
        '--secondary-color': ' #2e4153',
        '--filled-color': 'transparent',
        '--stroke': '.5px #dd3bd0',
        '--custom-box-shadow_1': '3px 3px 3px 3px #3ca3e7, -3px -3px 3px 3px #3ca3e7',
        '--custom-box-shadow_2': '3px 3px 3px 3px #2e4153, -3px -3px 3px 3px #2e4153',
    }
};


function JsObjectsMethodsHelp(): JSX.Element {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    const switchTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        const theme = themes[newTheme];

        for (const [variable, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(variable, value);
        }
    };

    return (
        <main className={styles.js_objects_methods_main}>
            <Helmet>
                <title>Методы объектов JS</title>
            </Helmet>

            <div className={styles.sticky_header}>
                <Link className={styles.js_objects_methods_a} to={AppRoute.Main}>Домой</Link>
                <h1>Методы массивов JavaScript</h1>
                <button onClick={switchTheme}>{currentTheme === 'dark' ? "🌤" : "🌦"}</button>
            </div>

            <div className="method">
                <h2>1. Object.assign()</h2>
                <p>Копирует значения всех перечисляемых собственных свойств из одного или более исходных объектов в целевой объект.</p>
                <pre><code>
                    {`\t\t\tconst target = {};
                    const source = { a: 1, b: 2 };

                    Object.assign(target, source);
                    console.log(target); // target = { a: 1, b: 2 }`}</code></pre>
                                    <p>Также можно использовать несколько источников:</p>
                                    <pre><code>{`\t\t\tconst target = { a: 1 };
                    const source1 = { b: 2 };
                    const source2 = { c: 3 };

                    Object.assign(target, source1, source2);
                    console.log(target); // target = { a: 1, b: 2, c: 3 }`}
                </code></pre>
            </div>

            <div className="method">
                <h2>2. Object.create()</h2>
                <p>Создает новый объект с указанным прототипом и свойствами.</p>
                <pre><code>
                    {`\t\t\tconst proto = { greet() { console.log('Hello!'); } };
                    const obj = Object.create(proto);
                    obj.greet(); // Hello!`}
                </code></pre>
            </div>

            <div className="method">
                <h2>3. Object.defineProperty()</h2>
                <p>Добавляет свойство в объект или изменяет существующее, и возвращает объект.</p>
                <pre><code>
                    {`\t\t\tconst obj = {};
                    Object.defineProperty(obj, 'property', {
                        value: 42,
                        writable: false, // свойство не может быть изменено
                    });

                    console.log(obj.property); // 42
                    obj.property = 77; // не сработает
                    console.log(obj.property); // все еще 42`}
                </code></pre>
            </div>

            <div className="method">
                <h2>4. Object.defineProperties()</h2>
                <p>Добавляет или изменяет несколько свойств объекта, используя заданные дескрипторы.</p>
                <pre><code>
                    {`\t\t\tconst obj = {};
                    Object.defineProperties(obj, {
                        property1: { value: 42, writable: true },
                        property2: { value: 'Hello', writable: false },
                    });

                    console.log(obj.property1); // 42
                    console.log(obj.property2); // Hello
                    obj.property1 = 100; // изменяем
                    console.log(obj.property1); // 100
                    obj.property2 = 'World'; // не сработает
                    console.log(obj.property2); // все еще Hello`}
                </code></pre>
            </div>

            <div className="method">
                <h2>5. Object.entries()</h2>
                <p>Возвращает массив пар [ключ, значение] для каждого собственного перечисляемого свойства объекта.</p>
                <pre><code>
                    {`\t\t\tconst obj = { a: 1, b: 2 };
                    const entries = Object.entries(obj);
                    console.log(entries); // [['a', 1], ['b', 2]]`}
                </code></pre>
            </div>

            <div className="method">
                <h2>6. Object.freeze()</h2>
                <p>Замораживает объект, предотвращая изменения его свойств.</p>
                <pre><code>
                    {`\t\t\tconst obj = { a: 1 };
                    Object.freeze(obj);
                    obj.a = 2; // не сработает
                    console.log(obj.a); // 1`}
                </code></pre>
            </div>

            <div className="method">
                <h2>7. Object.fromEntries()</h2>
                <p>Создает объект из массива пар [ключ, значение].</p>
                <pre><code>{`\t\t\tconst entries = [['a', 1], ['b', 2]];
                    const obj = Object.fromEntries(entries);
                    console.log(obj); // { a: 1, b: 2 }`}
                </code></pre>
            </div>

            <div className="method">
                <h2>8. Object.getOwnPropertyDescriptor()</h2>
                <p>Возвращает дескриптор свойства для заданного свойства объекта.</p>
                <pre><code>
                    {`\t\t\tconst obj = {};
                    Object.defineProperty(obj, 'property', {
                        value: 42,
                        writable: false,
                    });
                    const descriptor = Object.getOwnPropertyDescriptor(obj, 'property');
                    console.log(descriptor); // { value: 42, writable: false, enumerable: false, configurable: false }`}
                </code></pre>
            </div>

            <div className="method">
                <h2>9. Object.getOwnPropertyDescriptors()</h2>
                <p>Возвращает все дескрипторы собственных свойств объекта.</p>
                <pre><code>
                    {`\t\t\tconst obj = {};
                    Object.defineProperty(obj, 'property1', { value: 42 });
                    Object.defineProperty(obj, 'property2', { value: 'Hello' });

                    const descriptors = Object.getOwnPropertyDescriptors(obj);
                    console.log(descriptors); 
                    // {
                    //   property1: { value: 42, writable: false, enumerable: false, configurable: false },
                    //   property2: { value: 'Hello', writable: false, enumerable: false, configurable: false }
                    // }`}
                </code></pre>
            </div>

            <div className="method">
                <h2>10. Object.getOwnPropertyNames()</h2>
                <p>Возвращает массив строк, содержащих имена собственных свойств объекта.</p>
                <pre><code>
                    {`\t\t\tconst obj = { a: 1, b: 2 };
                    const propertyNames = Object.getOwnPropertyNames(obj);
                    console.log(propertyNames); // ['a', 'b']`}
                </code></pre>
            </div>

            <div className="method">
                <h2>11. Object.getPrototypeOf()</h2>
                <p>Возвращает прототип указанного объекта.</p>
                <pre><code>
                    {`const obj = {};
                    const proto = Object.getPrototypeOf(obj);
                    console.log(proto === Object.prototype); // true`}
                </code></pre>
            </div>

            <div className="method">
                <h2>12. Object.is()</h2>
                <p>Сравнивает два значения на строгое равенство.</p>
                <pre><code>
                    {`\t\t\tconsole.log(Object.is('foo', 'foo')); // true
                    console.log(Object.is({}, {})); // false (разные объекты)
                    console.log(Object.is(NaN, NaN)); // true (в отличие от ===)`}
                </code></pre>
            </div>

            <div className="method">
                <h2>13. Object.keys()</h2>
                <p>Возвращает массив строк, содержащих имена собственных перечисляемых свойств объекта.</p>
                <pre><code>
                    {`\t\t\tconst obj = { a: 1, b: 2 };
                    const keys = Object.keys(obj);
                    console.log(keys); // ['a', 'b']`}
                </code></pre>
            </div>

            <div className="method">
                <h2>14. Object.values()</h2>
                <p>Возвращает массив значений собственных перечисляемых свойств объекта.</p>
                <pre><code>
                    {`\t\t\tconst obj = { a: 1, b: 2 };
                    const values = Object.values(obj);
                    console.log(values); // [1, 2]`}
                </code></pre>
            </div>

            <div className="method">
                <h2>15. Object.seal()</h2>
                <p>Запечатывает объект, предотвращая добавление новых свойств.</p>
                <pre><code>
                    {`\t\t\tconst obj = { a: 1 };
                    Object.seal(obj);
                    obj.b = 2; // не сработает
                    console.log(obj.b); // undefined
                    obj.a = 3; // сработает
                    console.log(obj.a); // 3`}
                </code></pre>
            </div>
        </main>
    );
}

export default JsObjectsMethodsHelp;

