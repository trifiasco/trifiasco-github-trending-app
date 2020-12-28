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
      const expectedDataLength = Math.min(5, listData.length);
      setContributors(listData.slice(0, expectedDataLength));
      setLoading(false);
    };

    useEffect(() => {
        if(!fetched){
            fetchContributors();
            setFetched(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetched]);
    
    return {contributors, loading};
};

export default useRepositories;