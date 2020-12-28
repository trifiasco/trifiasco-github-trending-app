import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Trending from './trending-view';

const TrendingContainer = props => {


    const [repositories, setRepositories] = useState([]);
    const apiUrl = 'https://api.github.com/search/repositories'
    
    const fetchRepos = async () => {
      const response = await axios.get(apiUrl, {
          params: {
              sort: 'stars',
              order: 'desc',
              q: 'created:<2020-12-27'
          }
      });
      const listData = response.data;
      setRepositories(listData.items);
    }

    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if(!fetched){
            fetchRepos();
            setFetched(true);
        }
    }, [fetched] )

    return (<Trending repositories={repositories}/>);
};

export default TrendingContainer;