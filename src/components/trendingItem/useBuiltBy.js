import {useState, useEffect} from 'react';
import axios from 'axios';

const useRepositories = (apiUrl) => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    
    const fetchContributors = async () => {
      setLoading(true);
      const response = await axios.get(apiUrl);
      const listData = response.data;
      setContributors(listData);
      setLoading(false);
    };

    useEffect(() => {
        if(!fetched){
            fetchContributors();
            setFetched(true);
        }
    }, [fetched]);
    
    return {contributors, loading};
};

export default useRepositories;