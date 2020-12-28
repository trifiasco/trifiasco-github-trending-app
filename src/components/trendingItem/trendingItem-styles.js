import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flex: '0 0 100%',
        padding: '10px',
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
    languageIcon: {
        width: '12px',
        height: '12px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',

        backgroundColor: '#f1e05a',
        marginRight: '5px'
    },
    
});

export default useStyles;