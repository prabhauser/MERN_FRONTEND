import { makeStyles } from '@material-ui/core';
import { fontSize } from '@mui/system';
import theme from '../../../utilities/theme/theme.module.scss';

export default makeStyles(() => {
    return {
        Footer: {
            height: '47px',
            width: '100vw',
            backgroundColor: '#32355A',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            color: `${theme.s900bgtxt} !important`
        },

        body: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0px',
            marginTop: '20px'
        },
        textHolder: {
            alignItems: 'center !important',
            display: 'flex !important',
            justifyContent: 'center !important',
            height: '15px',
            fontFamily: 'PoppinsSemiBold',
            fontSize: '10px',
            color: `${theme.s900bgtxt} !important`
        }
    };
});
