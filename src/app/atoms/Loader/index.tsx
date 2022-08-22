import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import Spinner from '../../../assets/images/loading-buffering.gif';
import './styles.scss';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 11111,
        backgroundColor: 'transparent',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    centerItems: {},
    centerBox: {
        width: '200px',
        height: '180px',
        borderRadius: '5px',
        boxShadow: '-10px 10px 20px 0 rgba(30, 30, 30, 0.05)',
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        lineHeight: '1.57',
        letterSpacing: '0.5px',
        color: '#58595b',
        '& span': {
            marginTop: '20px',
            marginLeft: '13px',
            width: '75px'
        }
    },
    loadingSpinnerStyle: {
        animation: '$spin 2000ms ${theme.transitions.easing.easeInOut}`',
        animationIterationCount: 'infinite'
    },
    '@keyframes spin': {
        from: {
            transform: ' rotate(0deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    }
});

const Loader = () => {
    const classes = useStyles();

    return (
        <Modal open={true} aria-labelledby="pageloader" aria-describedby="laodinghandler">
            <div className={classes.root}>
                <div className={classes.centerBox}>
                    <img style={{ width: '40px' }} src={Spinner} alt="loading..." />
                    <span className="loading">Loading</span>
                </div>
            </div>
        </Modal>
    );
};

export default Loader;
