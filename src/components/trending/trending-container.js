import React, {useEffect, useState} from 'react';
import Trending from './trending-view';

const TrendingContainer = props => {


    const [repositories, setRepositories] = useState([]);
    const apiUrl = 'https://api.github.com/search/repositories'
    
    const fetchRepos = async () => {
      const list = fetch(`${apiUrl}?sort=stars&order=desc&q=language:javascript&q=created:<2020-12-27`).then( res => res.json()).then(r => setRepositories(r.items));
    }

    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if(!fetched){
            fetchRepos();
            setFetched(true);
        }
    }, [fetched] )
  

    console.log('list: ', repositories);

    return (<Trending repositories={repositories}/>);
};

export default TrendingContainer;