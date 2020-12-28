import React from 'react';

const Trending = props => {

    const {repositories} = props;

    return (<div>
        {repositories.map(item => {
            return (
                <div>
                    <span>{item.name}</span>
                    <span>{item.stargazers_count}</span>
                </div>
            );
        })}
    </div>)
};

export default Trending;