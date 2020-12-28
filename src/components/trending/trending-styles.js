import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#ffff',
        border: '1px solid #e1e4e8',
        borderRadius: '6px',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    container: {
        paddingTop: '40px',
        position: 'relative',
        paddingRight: '16px',
        paddingLeft: '16px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    toolbar: {
        padding: '16px',
        margin: '-1px -1px 0',
        backgroundColor: '#f6f8fa',
        border: '1px solid #e1e4e8)',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: '22px',
        fontWeight: '500'
    }
});

export default useStyles;