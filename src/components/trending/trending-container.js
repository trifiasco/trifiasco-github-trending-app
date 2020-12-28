import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Trending from './trending-view';
import useRepositories from './useRepositories';

const TrendingContainer = props => {
    const {repositories, loading} = useRepositories();
    return (
        <div>
            {loading && (
                <Backdrop open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            {!loading && (
                <Trending repositories={repositories}/>
            )}
        </div>
    );
};

export default TrendingContainer;