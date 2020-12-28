import React from 'react';
import TrendingItem from '../trendingItem';
import useStyles from './trending-styles';

const Trending = props => {

    const {repositories} = props;

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <div className={classes.toolbar}>
                    <div className={classes.heading}>Repositories</div>
                </div>
                {repositories.map(item => {
                return (
                    <div>
                        <TrendingItem item={item} />
                    </div>
                );
            })}
            </div>
            
        </div>
    )
};

export default Trending;