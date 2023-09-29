import axios from 'axios';
import { Book } from '../types/json-data.ts';

async function fetchBooks(): Promise<Book[]> {
  const response = await axios.get('https://api.npoint.io/e8ff29b917b01e838751');
  const data = response.data;
  return data as Book[];
}

export default fetchBooks().then((books: Book[]) => {
  return books;
});

console.log( fetchBooks());

//const BACKEND_URL = 'https://api.npoint.io/e8ff29b917b01e838751';
//const REQUEST_TIMEOUT = 1000;

/*const createAPI = () => {

  return axios.get(BACKEND_URL, { timeout: REQUEST_TIMEOUT })
    .then((response) => {
      response.data;
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    })

};

const appJsonData = createAPI();
export { appJsonData };*/

