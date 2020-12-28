import React from 'react';
import {StarBorderOutlined, CallSplitOutlined} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import useStyles from './trendingItem-styles';

const TrendingItem = props => {
    const {item, contributors, loading} = props;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <div className={classes.info}>
                    <h3>
                        <a href={item.html_url}>{item.owner.login}/{item.name}</a>
                    </h3>
                    <Button variant="outlined">
                        <StarBorderOutlined />
                        Star
                    </Button>
                </div>
                
                <p>{item.description}</p>
                <div className={classes.info}>
                    <div>
                        <span className={classes.languageIcon}></span>
                        <span>{item.language}</span>
                    </div>
                    <div style={{display: 'flex'}}>
                        <StarBorderOutlined />
                        <span>
                            {item.stargazers_count}
                        </span>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CallSplitOutlined />
                        <span>{item.forks_count}</span>
                    </div>
                    <div>
                        {!loading && (
                            contributors.map(c => {
                                return (
                                    <a href={c.html_url}>
                                        <img src={c.avatar_url} alt={c.login} className={classes.contributorIcon} title={c.login} />
                                    </a>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TrendingItem;