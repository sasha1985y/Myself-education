import { Helmet } from 'react-helmet-async';
import styles from './js-arrays-methods-screen.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const themes = {
    light: {
        '--background-color': ' #ffffff',
        '--div-background-color': ' #e4e4e4',
        '--text-color': ' #353535',
        '--text-shadow': '0px 0px 0px #ffffff',
        '--primary-color': ' #0a9dff',
        '--secondary-color': ' #2ecc71',
        '--filled-color': 'unset',
        '--stroke': '.8px black',
        '--background-img': 'url(../../../public/img/cloud-sun-solid.svg)',
    },
    dark: {
        '--background-color': ' #222f3d',
        '--div-background-color': ' #2e4153',
        '--text-color': ' #ecf0f1',
        '--text-shadow': '10px 10px 30px #2101ec, -10px 10px 30px #8a31e9',
        '--primary-color': ' #e74c3c',
        '--secondary-color': ' #8e44ad',
        '--filled-color': 'transparent',
        '--stroke': '.8px #dd3bd0',
        '--background-img': 'url(../../../public/img/sun-solid.svg)',
    }
};

let currentTheme: 'light' | 'dark' = 'light';

const switchTheme = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    const theme = themes[currentTheme];

    for (const [variable, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(variable, value);
    }
};

function JsArraysMethodsHelp(): JSX.Element {
  return (
    <main className={styles.js_arrays_methods_main}>
        <Helmet>
            <title>Методы массива JS</title>
        </Helmet>

        <div className={styles.sticky_header}>
            <Link className={styles.js_arrays_methods_a} to={AppRoute.Main}>Домой</Link>
            <h1>Методы массивов JavaScript</h1>
            <button onClick={switchTheme}></button>
        </div>

        <div className="method">
            <h2>1. concat(...arrays)</h2>
            <p>Объединяет два или более массива.</p>
            <pre><code>let arr1 = [1, 2];
            let arr2 = [3, 4];
            console.log(arr1.concat(arr2)); // [1, 2, 3, 4]</code></pre>
        </div>

        <div className="method">
            <h2>2. copyWithin(target, start, end)</h2>
            <p>Копирует часть массива в другое место внутри того же массива.</p>
            <pre><code>let arr = [1, 2, 3, 4];
            console.log(arr.copyWithin(0, 2)); // [3, 4, 3, 4]</code></pre>
        </div>

        <div className="method">
            <h2>3. entries()</h2>
            <p>Возвращает новый объект-итератор, содержащий пары ключ/значение для каждого индекса массива.</p>
            <pre><code>let arr = ['a', 'b', 'c'];
            let iterator = arr.entries();
            console.log(iterator.next().value); // [0, "a"]</code></pre>
        </div>

        <div className="method">
            <h2>4. every(callback)</h2>
            <p>Проверяет, удовлетворяют ли все элементы массива условию, заданному в переданной функции.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.every(num =&gt; num &gt; 0)); // true</code></pre>
        </div>

        <div className="method">
            <h2>5. fill(value, start, end)</h2>
            <p>Заполняет все элементы массива заданным значением от начального до конечного индекса.</p>
            <pre><code>let arr = new Array(5);
            arr.fill(0);
            console.log(arr); // [0, 0, 0, 0, 0]</code></pre>
        </div>

        <div className="method">
            <h2>6. filter(callback)</h2>
            <p>Создает новый массив со всеми элементами, прошедшими проверку в переданной функции.</p>
            <pre><code>let arr = [1, 2, 3, 4];
            console.log(arr.filter(num =&gt; num &gt; 2)); // [3, 4]</code></pre>
        </div>

        <div className="method">
            <h2>7. find(callback)</h2>
            <p>Возвращает значение первого найденного элемента в массиве, который удовлетворяет условию.</p>
            <pre><code>let arr = [5, 12, 8, 130, 44];
            console.log(arr.find(num =&gt; num &gt; 10)); // 12</code></pre>
        </div>

        <div className="method">
            <h2>8. findIndex(callback)</h2>
            <p>Возвращает индекс первого элемента в массиве, который удовлетворяет условию.</p>
            <pre><code>let arr = [5, 12, 8, 130, 44];
            console.log(arr.findIndex(num =&gt; num &gt; 10)); // 1</code></pre>
        </div>

        <div className="method">
            <h2>9. flat(depth)</h2>
            <p>Создает новый массив с подмассивами, склеенными до указанной глубины.</p>
            <pre><code>let arr = [1, [2, [3]]];
            console.log(arr.flat(2)); // [1, 2, 3]</code></pre>
        </div>

        <div className="method">
            <h2>10. flatMap(callback)</h2>
            <p>Сначала применяет функцию к каждому элементу массива и затем объединяет результаты в новый массив.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.flatMap(num =&gt; [num * 2])); // [2, 4, 6]</code></pre>
        </div>

        <div className="method">
            <h2>11. forEach(callback)</h2>
            <p>Выполняет указанную функцию один раз для каждого элемента массива.</p>
            <pre><code>let arr = [1, 2, 3];
            arr.forEach(num =&gt; console.log(num)); // Выведет каждый элемент</code></pre>
        </div>

        <div className="method">
            <h2>12. includes(value, fromIndex)</h2>
            <p>Проверяет наличие указанного значения в массиве.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.includes(2)); // true</code></pre>
        </div>

        <div className="method">
            <h2>13. indexOf(value, fromIndex)</h2>
            <p>Возвращает первый индекс указанного значения в массиве или -1, если значение не найдено.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.indexOf(2)); // 1</code></pre>
        </div>

        <div className="method">
            <h2>14. isArray(value)</h2>
            <p>Статический метод для проверки является ли переданное значение массивом.</p>
            <pre><code>console.log(Array.isArray([1, 2])); // true</code></pre>
        </div>

        <div className="method">
            <h2>15. join(separator)</h2>
            <p>Объединяет все элементы массива в строку с указанным разделителем.</p>
            <pre><code>let arr = ['Hello', 'World'];
            console.log(arr.join(' ')); // "Hello World"</code></pre>
        </div>

        <div className="method">
            <h2>16. keys()</h2>
            <p>Возвращает новый объект-итератор с ключами (индексами) массива.</p>
            <pre><code>let arr = ['a', 'b', 'c'];
            let iterator = arr.keys();
            console.log(iterator.next().value); // 0</code></pre>
        </div>

        <div className="method">
            <h2>17. lastIndexOf(value, fromIndex)</h2>
            <p>Возвращает последний индекс указанного значения в массиве или -1.</p>
            <pre><code>let arr = [1, 2, 3, 1];
            console.log(arr.lastIndexOf(1)); // 3</code></pre>
        </div>

        <div className="method">
            <h2>18. map(callback)</h2>
            <p>Создает новый массив с результатами вызова переданной функции для каждого элемента.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.map(num =&gt; num * 2)); // [2, 4, 6]</code></pre>
        </div>

        <div className="method">
            <h2>19. pop()</h2>
            <p>Удаляет последний элемент из массива и возвращает его.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.pop()); // 3
            console.log(arr); // [1, 2]</code></pre>
        </div>

        <div className="method">
            <h2>20. push(...elements)</h2>
            <p>Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.</p>
            <pre><code>let arr = [1, 2];
            arr.push(3);
            console.log(arr); // [1, 2, 3]</code></pre>
        </div>
        <div className="method">
            <h2>21. reduce(callback, initialValue)</h2>
            <p>Применяет функцию к аккумулятору и каждому элементу массива (слева направо), чтобы свести его к
                единственному значению.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.reduce((sum, num) =&gt; sum + num, 0)); // 6</code></pre>
        </div>
        <div className="method">
            <h2>22. reduceRight(callback, initialValue)</h2>
            <p>Применяет функцию к аккумулятору и каждому элементу массива (справа налево), чтобы свести его к
                единственному значению.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.reduceRight((sum, num) =&gt; sum + num, 0)); // 6</code></pre>
        </div>
        <div className="method">
            <h2>23. reverse()</h2>
            <p>Изменяет порядок элементов массива на обратный.</p>
            <pre><code>let arr = [1, 2, 3];
            arr.reverse();
            console.log(arr); // [3, 2, 1]</code></pre>
        </div>
        <div className="method">
            <h2>24. shift()</h2>
            <p>Удаляет первый элемент из массива и возвращает его.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.shift()); // 1
            console.log(arr); // [2, 3]</code></pre>
        </div>
        <div className="method">
            <h2>25. unshift(...elements)</h2>
            <p>Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.</p>
            <pre><code>let arr = [1, 2];
            arr.unshift(0);
            console.log(arr); // [0, 1, 2]</code></pre>
        </div>
        <div className="method">
            <h2>26. slice(startIndex, endIndex)</h2>
            <p>Возвращает новый массив с выбранными элементами из оригинального массива.</p>
            <pre><code>let arr = [1, 2, 3];
            console.log(arr.slice(1)); // [2, 3]</code></pre>
        </div>
        <div className="method">
            <h2>27. splice(startIndex, deleteCount, ...items)</h2>
            <p>Изменяет содержимое массива: удаляет существующие элементы и/или добавляет новые.</p>
            <pre><code>let arr = [1, 2, 3];
            arr.splice(1, 1);
            console.log(arr); // [1, 3]</code></pre>
        </div>
        <div className="method">
            <h2>28. sort(compareFunction)</h2>
            <p>Сортирует элементы массива на месте и возвращает отсортированный массив.</p>
            <pre><code>let arr = [3, 1, 4];
            arr.sort((a,b) =&gt; a - b);
            console.log(arr); // [1, 3, 4]</code></pre>
        </div>
        <div className="method">
            <h2>29. toLocaleString()</h2>
            <p>Возвращает строковое представление массива с учетом локали.</p>
            <pre><code>let arr = [1.5];
            console.log(arr.toLocaleString('en-US')); // "1.5"</code></pre>
        </div>
        <div className="method">
            <h2>30. toString()</h2>
            <p>Возвращает строковое представление массива.</p>
            <pre><code>let arr = [1, 'a', true];
            console.log(arr.toString()); // "1,a,true"</code></pre>
        </div>
    </main>

  );
}

export default JsArraysMethodsHelp;

