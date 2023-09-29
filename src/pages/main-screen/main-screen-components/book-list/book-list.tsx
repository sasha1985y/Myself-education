import { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from '../../../../types/json-data.js';
import styles from './book-list.module.css';

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.npoint.io/e8ff29b917b01e838751');
      const data = response.data;
      setBooks(data as Book[]);
    }
    fetchData();
  }, []);

  return (
   /*<ol>
      {books.map((book) => (
        <li key={book.id}>
          <ul className={styles.main_booklist_ul}>
            <li><span>{book.title}</span></li>
            <li><progress value={book.progress} max={book.maxPages} className={styles.main_booklist_progress}></progress></li>
            <li><span>{book.progress} из {book.maxPages}</span></li>
          </ul>
        </li>
      ))}
    </ol>*/

    <ol>
      {books.map((book) => (
        <li>
          <ul className={styles.main_booklist_ul}>
            <li><span>{book.title}</span></li>
            <li key={book.id}>{book.progress} <meter low={parseInt(book.progress) + 1} high={parseInt(book.maxPages) - 1} max={book.maxPages} value={book.progress} style={{'width': parseInt(book.maxPages), 'background': 'linear-gradient(90deg, #fffb01 0%, #007bff 100%)'}}></meter> из {book.maxPages}.</li>
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default BookList;
