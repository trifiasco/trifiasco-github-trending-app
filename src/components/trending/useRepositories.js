import {useState, useEffect} from 'react';
import axios from 'axios';

const useRepositories = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const apiUrl = 'https://api.github.com/search/repositories'
    
    const fetchRepos = async () => {
      setLoading(true);
      const response = await axios.get(apiUrl, {
          params: {
            sort: 'stars',
            order: 'desc',
            q: `created:<${new Date().toISOString()}`
          }
      });
      const listData = response.data;
      setRepositories(listData.items);
      setLoading(false);
    };

    useEffect(() => {
        if(!fetched){
            fetchRepos();
            setFetched(true);
        }
    }, [fetched]);

    return {repositories, loading};
};

export default useRepositories;