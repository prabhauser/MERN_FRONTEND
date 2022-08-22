import { Snackbar, SnackbarProps, IconButtonProps } from '@material-ui/core';
import SnackbarMessage from './SnackbarMessage';
import WarningIcon from '../../../assets/images/warningIcon.svg';
import SuccessIcon from '../../../assets/images/greentick.svg';

type ComponentProps = {
    options?: any;
    handleClose: SnackbarProps['onClose'] & IconButtonProps['onClick'];
    className?: string;
    image?: any;
};

const SnackbarAlert = (props: ComponentProps) => {
    const { options, handleClose, className } = props;
    // const imageOption = options?.type === 'success' ? SuccessIcon : WarningIcon;
    const imageOption = options?.type === 'success' ? SuccessIcon : null;

    return (
        <Snackbar
            open={options?.open}
            autoHideDuration={3000}
            className={className}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
        >
            <SnackbarMessage image={imageOption} options={options} handleClose={handleClose} />
        </Snackbar>
    );
};

export default SnackbarAlert;
