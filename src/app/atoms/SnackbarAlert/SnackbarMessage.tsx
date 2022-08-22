import { Grid, IconButton, IconButtonProps, makeStyles } from '@material-ui/core';
import theme from '../../../utilities/theme/theme.module.scss';
import closeIcon from '../../../assets/images/icon_close_white.svg';

type ComponentProps = {
    options: any;
    handleClose: IconButtonProps['onClick'];
    image?: any;
};

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '20px',
        padding: '10px 14px',
        maxWidth: '100vw',
        width: 'max-content',
        position: 'absolute',
        top: '0px !important'
        // minWidth: '30vw',
        // width: '100% !important'
    },
    orangeBackground: {
        backgroundColor: theme.orange,
        boxShadow: '0 3px 24px 0 rgba(255,146,69,0.4)'
    },
    whiteBackground: {
        zIndex: -999,
        display: 'none'
    },
    greenBackground: {
        background: 'linear-gradient(270deg, #12BB7E 0%, #12BB74 100%)',
        boxShadow: '0 3px 24px 0 rgba(18,187,125,0.4)'
    },
    greyBackground: {
        backgroundColor: 'black',
        color: 'white',
        boxShadow: 'black'
    },
    message: {
        marginLeft: 10,
        marginRight: 20,
        fontSize: '1em',
        color: 'white',
        '& img': {
            marginRight: '10px',
            width: '23px'
        }
    }
}));

const SnackbarMessage = (props: ComponentProps) => {
    const classes = useStyles();
    const backgroundClass = `${classes.container} ${
        props?.options?.type === 'success'
            ? classes.greenBackground
            : props?.options?.type === 'reject'
            ? classes.greyBackground
            : props?.options?.type === 'remark'
            ? classes.orangeBackground
            : classes.whiteBackground
    }`;
    const messageArr = ['success', 'reject', 'remark'];
    return (
        <Grid className={backgroundClass}>
            <Grid className={classes.message}>
                <img src={props.image} />
                {props?.options?.message}
            </Grid>
            <Grid>
                <IconButton
                    onClick={props.handleClose}
                    // className={
                    //     props?.options?.type === 'success' || props?.options?.type === 'reject'
                    //         ? ''
                    //         : classes.whiteBackground
                    // }
                    className={messageArr.includes(props?.options?.type) == true ? '' : classes.whiteBackground}
                >
                    <img src={closeIcon} />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default SnackbarMessage;
