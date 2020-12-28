import React from 'react';
import TrendingItem from './trendingItem-view';
import useBuiltBy from './useBuiltBy';

const TrendingItemContainer = props => {

    const {item} = props;
    const {contributors, loading} = useBuiltBy(item.contributors_url);

    return (
        <TrendingItem {...props} {...{contributors, loading}} />
    );
};

export default TrendingItemContainer;