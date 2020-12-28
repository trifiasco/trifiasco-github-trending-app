import React from 'react';
import {StarBorderOutlined, CallSplitOutlined} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import colors from './colors.json';
import useStyles from './trendingItem-styles';

const TrendingItem = props => {
    const {item, contributors, loading} = props;
    const languageColor = colors[item.language];
    const classes = useStyles({languageColor});

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <div className={classes.info}>
                    <h3 className={classes.repoName}>
                        <a href={item.html_url}>{item.owner.login}/{item.name}</a>
                    </h3>
                    <Button variant="outlined" classes={{label: classes.starButton}}>
                        <StarBorderOutlined/>
                        Star
                    </Button>
                </div>
                
                <p className={classes.description}>{item.description}</p>
                <div className={classes.info}>
                    <div style={{display: 'flex'}}>
                        <span className={classes.languageIcon}></span>
                        <span className={classes.language}>{item.language}</span>
                    </div>
                    <div style={{display: 'flex'}}>
                        <StarBorderOutlined classes={{root: classes.icon}}/>
                        <span className={classes.starCount}>
                            {item.stargazers_count}
                        </span>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CallSplitOutlined />
                        <span className={classes.forked}>{item.forks_count}</span>
                    </div>
                    <div>
                        <span className={classes.builtBy}>
                        <span className={classes.builtByLabel}>
                            built by
                        </span>
                        {!loading && (
                            contributors.map(c => {
                                return (
                                    <a href={c.html_url}>
                                        <img src={c.avatar_url} alt={c.login} className={classes.contributorIcon} title={c.login} />
                                    </a>
                                )
                            })
                        )}
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TrendingItem;