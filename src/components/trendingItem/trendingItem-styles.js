import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flex: '0 0 100%',
    },

    container: {
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',

        padding: '16px',
        listStyleType: 'none',
        borderTop: '1px solid #eaecef',
        
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        height: '20px'
    },
    languageIcon: {
        width: '12px',
        height: '12px',
        border: '1px solid transparent',
        borderRadius: '50%',
        display: 'inline-block',

        backgroundColor: ({languageColor}) => languageColor,
        marginRight: '5px',
        marginTop: '2px'
    },

    contributorIcon: {
        height: '20px',
        width: '20px',
        borderRadius: '50%'
    },
    starButton: {
        fontSize: '12px',
        lineHeight: '20px',
        textTransform: 'none'
    },
    repoName: {
        margin: '0'
    },
    description: {
        paddingRight: '24px',
        marginTop: '4px',
        marginBottom: '4px',
        color: '#586069',
        fontSize: '14px',
        lineHeight: '1.5'
    },
    language: {
        fontSize: '12px',
        color: '#586069',
        lineHeight: '1.5'
    },
    starCount: {
        fontSize: '12px',
        color: '#586069',
        lineHeight: '1.5'
    },
    forked: {
        fontSize: '12px',
        color: '#586069',
        lineHeight: '1.5'
    },
    builtBy: {
        fontSize: '12px',
        color: '#586069',
        lineHeight: '1.5',
        display: 'flex'
    },
    builtByLabel: {
        marginRight: '5px'
    }
    
});

export default useStyles;