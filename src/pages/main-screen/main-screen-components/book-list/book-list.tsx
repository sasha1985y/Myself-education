import { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from '../../../../types/json-data.js';
import styles from './book-list.module.css';
import 'animate.css';
import classNames from 'classnames';

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.npoint.io/e8ff29b917b01e838751');
      const data = response.data;
      setBooks(data as Book[]);
    }
    fetchData();
  }, []);

  const handleMouseOver = (id: number) => {
    setHoveredItemId(id);
  };

  const handleMouseOut = () => {
    setHoveredItemId(null);
  };

  return (
    <ol>
      {books.map((book) => (
        <li key={book.id}>
          <ul className={styles.main_booklist_ul}>
            <li><span>{book.title}</span></li>
            <li className={classNames('animate__animated', {'animate__headShake': book.id === hoveredItemId})} onMouseOver={() => handleMouseOver(book.id)} onMouseOut={handleMouseOut}>
              <div className={styles.main_booklist_meter_background}>{book.progress}<meter low={parseInt(book.progress) + 1} high={parseInt(book.maxPages) - 1} max={book.maxPages} value={book.progress} style={{ 'width': parseInt(book.maxPages), 'background': 'linear-gradient(90deg, #fffb01 0%, #007bff 100%)' }}></meter>{book.maxPages}.</div>
              {/* <div className={styles.main_booklist_meter_background}>{book.progress}
                <meter
                  low={parseInt(book.progress) + 1}
                  high={parseInt(book.maxPages) - 1}
                  max={book.maxPages}
                  value={book.progress}
                  style={{ width: '100%', background: 'linear-gradient(90deg, #fffb01 0%, #007bff 100%)' }}
                ></meter>
              </div> */}
            </li>
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default BookList;
