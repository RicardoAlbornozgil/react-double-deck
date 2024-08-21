import useLocalStorage from './useLocalStorage';
import axios from 'axios';

/**
 * Custom hook to handle data fetching and state management using Axios.
 * @param {string} key - The key to store the data under in localStorage.
 * @param {string} baseUrl - The base URL for the API request.
 * @param {Function} formatData - Optional function to format the fetched data.
 * @returns {Array} - Array containing the data, a function to add data, and a function to clear data.
 */
function useAxios(key, baseUrl, formatData = data => data) {
  const [data, setData] = useLocalStorage(key, []);
  const [error, setError] = useState(null);

  const addData = async (urlEnd = '') => {
    try {
      const response = await axios.get(`${baseUrl}${urlEnd}`);
      setData(data => [...data, formatData(response.data)]);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    }
  };

  const clearData = () => {
    setData([]);
  };

  return [data, addData, clearData, error];
}

export default useAxios;
