import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import styles from './main-screen.module.css';
import BookList from './main-screen-components/book-list/book-list.tsx';

function MainScreen(): JSX.Element {
  return (
    <>
      <main className={styles.page_main_style}>
        <Helmet>
          <title>Образование v.98</title>
        </Helmet>
        <blockquote cite="https://habr.com/ru/articles/249983/">
          <section>
            <h2 className={styles.page_main_style_header}>Специальная база для моего самообразования</h2>
            <p className={styles.page_main_text_plagiarism}>Первый уровень из CS (computer science) — Специальная база. Это стартовая площадка для любого программиста по
          четырем фронтам:
            </p>
            <ol className={styles.page_main_text_plagiarism}>
              <li>арифметические основы ЭВМ (системы счисления и операции с числами, логические операции);</li>
              <li>физические основы ЭВМ (полупроводники, транзисторы, логические элементы, схемы, интегральные микросхемы);
              </li>
              <li>теория алгоритмов (алгоритмы и структуры данных; сложность, эффективность; способы представления информации
            в памяти);
              </li>
              <li>языки программирования (задача и понятие ЯП, уровни, типы языков, абстракция, уровни абстракции,
            трансляция/компиляция, шаблоны, принципы, парадигмы — обзор).
              </li>
            </ol>
          </section>
          <section>
            <h2 className={styles.page_main_style_header}>Основы</h2>
            <p className={styles.page_main_text_plagiarism}>Уровнем выше располагаются дисциплины, которые являются базовыми именно в программировании. По-этому я назвал
          этот уровень Основы. В него входят:
            </p>
            <ol className={styles.page_main_text_plagiarism}>
              <li>архитектура ЭВМ (процессоры, микроархитектура, память, шины, ввод/вывод);</li>
              <li>обработка информации (теория информации, статистика, модели, поиск данных, лингвистические аспекты,
            обработка информации средствами табличных процессоров);
              </li>
              <li>основы C/C++ (базовые свойства языка, синтаксис, указатели, ввод/вывод, массивы, основы STL).</li>
            </ol>
          </section>
          <section>
            <h2 className={styles.page_main_style_header}>Уровень 1</h2>
            <p className={styles.page_main_text_plagiarism}>Следом за Основами идет Уровень 1. Это первый прикладной уровень, и особо нетерпеливые могут начать
          коммерческую практику, овладев этим уровнем. Он включает 5 дисциплин:
            </p>
            <ol className={styles.page_main_text_plagiarism}>
              <li>основы ASM (развитие архитектуры ЭВМ в направлении программирования, написание простейших драйверов и
            алгоритмов, ассемблерные вставки в C/C++);
              </li>
              <li>C/C++ (ООП, разработка прикладных приложений, библиотеки, WinAPI, make utils, параллельное
            программирование).
              </li>
              <li>операционные системы (архитектура ОС, процессы, межпроцессное взаимодействие, потоки, планирование, работы с
            памятью и переферией, POSIX-системы);
              </li>
              <li>системный анализ (предметная область, бизнес-процессы, потоки, диаграммы, принципы и теория системного
            анализа);
              </li>
              <li>базы данных (теория множеств, виды СУБД, реляционные СУБД, модели данных, SQL, конкретные БД).</li>
            </ol>
          </section>
          <section>
            <h2 className={styles.page_main_style_header}>Уровень 2</h2>
            <p className={styles.page_main_text_plagiarism}>Следующий уровень — Уровень 2 — развивает предыдущий. Кстати, компьютерные сети попали в него только по той
          причине,
          что для их изучения желательно (но не обязательно) предварительно освоить операционные системы. По развитости
          этот
          предмет ближе все-таки к первому уровню.

          Уровень 2 включает:
            </p>
            <ol className={styles.page_main_text_plagiarism}>
              <li>разработку ПО (жизненный цикл ПО, этапы разработки, основы ведения программных проектов, инструменты);</li>
              <li>анализ данных (Data Mining, OLAP, машинное обучение, нейронные сети, ИИ);</li>
              <li>компьютерные сети (по уровням стеков TCP/IP и/или ISO/OSI “от и до”, протоколы, сетевое программирование на
            C/C++);
              </li>
              <li>языки программирования с управляемым кодом (управляемый код, виртуальные машины, сборщики мусора,
            юнит-тестирование, собственно практика на C# или Java);
              </li>
            </ol>
          </section>
          <section>
            <h2 className={styles.page_main_style_header}>Уровень 3</h2>
            <p className={styles.page_main_text_plagiarism}>Уровень 3 — последний уровень для среднего программиста. Он самый объемный и включает только те дисциплины,
          которые непосредственно связаны с разработкой ПО. Всего их получилось 6:
            </p>
            <ol className={styles.page_main_text_plagiarism}>
              <li>разработка UI и юзабилити (принципы построения интерфейсов пользователя);</li>
              <li>управление командами и проектами (методологии разработки и другие вопросы управления);</li>
              <li>тестирование ПО (обзорно: виды тестирования, инструменты);</li>
              <li>веб-технологии (HTTP-протокол, веб-сервер, CGI, кэширование и проксирование, клиентское программирование);
              </li>
              <li>распределенные системы (архитектуры распределенных систем, протоколы сетевого взаимодействия компонентов,
            инструменты, принципы, подходы к построению распределенных систем, отказоустойчивость, большие данные, высокие
            нагрузки);
              </li>
              <li>интерпретируемые языки программирования (особенности, основы по двум-трем языкам, практика по одному-двум
            языкам: JS, PHP, Python, Ruby).
              </li>
            </ol>
          </section>
          <a href="https://habrastorage.org/r/w1560/files/162/f32/330/162f32330d67457e939798c5d7d3814e.png" className={styles.page_main_text_plagiarism}>граф скиллов
        программиста
          </a>
        </blockquote>
        <span className={styles.page_main_text_plagiarism}>Текст, раскрашенный этим цветом</span><br></br>
        <a href="https://habr.com/ru/articles/249983/" className={styles.page_main_link_plagiarism}>из статьи другого автора</a>
        <section>
          <h3 className={styles.page_main_style_header}>Совет от чата GPT</h3>
          <ol>
            <li>Как работает компьютер - Рон Уайт</li>
            <li>Электроника для начинающих - Кэтрин М. Хеллер</li>
            <li>Алгоритмы на Python - Брайан К. Донован</li>
            <li>Язык программирования Си - Брайан Керниган и Деннис Ритчи</li>
          </ol>
          <p>Эти книги позволят ознакомиться с основами компьютерной науки, включая арифметические и физические основы,
            алгоритмы и структуры данных, а также языки программирования. Они написаны доступным языком и подойдут для
            начинающих программистов.
          </p>
        </section>
        <h3 className={styles.page_main_style_header}>Книги, которые я "читаю"</h3>
        <BookList />
      </main>
      <footer className={styles.page_main_style_footer}>
        <ol className={styles.page_main_style_footer_links}>
          <li><Link to={AppRoute.Html}>Шпаргалка по HTML</Link></li>
          <li><Link to={AppRoute.Css}>Шпаргалка по CSS</Link></li>
          <li><Link to={AppRoute.Js}>Шпаргалка по JS</Link></li>
          <li><Link to={AppRoute.Json}>Шпаргалка по JSON</Link></li>
          <li><Link to={AppRoute.Ts}>Шпаргалка по TypeScript</Link></li>
          <li><Link to={AppRoute.CodePen}>Code Pen лучшее</Link></li>
          <li><Link to={AppRoute.Developing}>Помощь в разработке (некоторые сервисы)</Link></li>
          <li><Link to={AppRoute.ProgLangsCollection}>Коллекция инфы про языки программирования</Link></li>
          <li><Link to={AppRoute.Python}>Шпаргалка по Python</Link></li>
          <li><Link to={AppRoute.JsArraysMethods}>Шпаргалка по методам массивов JS</Link></li>
          <li><Link to={AppRoute.JsObjectsMethods}>Шпаргалка по методам объектов JS</Link></li>
        </ol>
        <div className={styles.page_main_style_footer_author_img}></div>
      </footer>
    </>
  );
}

export default MainScreen;
