import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { unit } from '../../constants/constants';
import { TextField, Box } from '@mui/material';
import themeColors from '../../../utilities/theme/theme.module.scss';
import { Dialog, Button } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ADBButton from '../Button';
import closeIcon from '../../../assets/images/close-icon.svg';
import alertIcon from '../../../assets/images/alertIcon.svg';
import Label from '../Label/index';
import './index.scss';

type ComponentProps = {
    handleClose: React.MouseEventHandler<HTMLElement>;
    isOpen: boolean;
    leftBtnPress?: React.MouseEventHandler<HTMLButtonElement>;
    rightBtnPress?: React.MouseEventHandler<HTMLButtonElement>;
    entityDetails?: EntityDetails;
    modalContent?: any;
    modalHeader?: any;
    remark?: boolean;
    validateRemark?: any;
};
type EntityDetails = {
    entityName: string;
    entityOld: string;
    entityNew: string;
};

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: `${unit.spacing * 2}px`,
        '& .MuiDialog-paperWidthSm': {
            background: '#F1F3F6'
        }
    },
    closeButton: {
        position: 'absolute',
        right: `${unit.spacing}px`,
        top: `${unit.spacing}px`,
        color: `${themeColors.s100Bg}`
    },
    modalHeader: {
        fontSize: '22px'
    }
});

type DialogTitleType = {
    id: string;
    children?: any;
    classes?: any;
    onClose?: React.MouseEventHandler<HTMLElement>;
};

const DialogTitle = (props: DialogTitleType) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes?.root} {...other}>
            <Typography>{children}</Typography>
            <div className="alertImg">
                <img src={alertIcon} className="alertImg" />
            </div>
        </MuiDialogTitle>
    );
};

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

const AlertBox = (props: ComponentProps) => {
    const classesList = useStyles();
    const {
        handleClose,
        isOpen,
        leftBtnPress,
        rightBtnPress,
        entityDetails,
        modalContent,
        modalHeader,
        remark,
        validateRemark
    } = props;
    return (
        <div className="adbAlertbox">
            <Dialog
                PaperProps={{
                    // style: { borderRadius: 40, height: 458, width: 722 }
                    style: { borderRadius: 40, width: 722 }
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
                className="alertDialog"
            >
                <div className="cancel">
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        <img onClick={handleClose} src={closeIcon} />
                    </DialogTitle>
                </div>

                {modalContent ? (
                    <DialogContent dividers>
                        <Typography component={'span'} gutterBottom>
                            <div className="changedText">
                                <span
                                    className="textHeader"
                                    style={{ marginLeft: '0px !important', marginBottom: '20px' }}
                                >
                                    {modalHeader}
                                </span>
                                <br />
                                <span className="textValue coloredText" style={{ color: 'lightgrey' }}>
                                    {modalContent}
                                </span>
                            </div>
                        </Typography>
                    </DialogContent>
                ) : remark ? (
                    <Box component="form" noValidate autoComplete="off">
                        <h4 className="remarkHeader">Please type your remark to reject this request</h4>
                        <div className="remarkBox">
                            <Label label="Remarks" />
                            <textarea onChange={(ele) => validateRemark(ele)} />
                        </div>
                    </Box>
                ) : (
                    <DialogContent dividers>
                        <Typography component={'span'} gutterBottom>
                            <span className="textHolder">
                                Are you sure you want to change {entityDetails?.entityName}?
                            </span>
                            <br />
                            <br />
                            <div className="changedText">
                                <span className="textValue">
                                    You are about to change the {entityDetails?.entityName} from{' '}
                                </span>
                                <span className="text">
                                    {entityDetails?.entityOld} to {entityDetails?.entityNew}
                                </span>
                                <br />
                            </div>
                        </Typography>
                    </DialogContent>
                )}

                <DialogActions className="button">
                    <ADBButton
                        name={'No'}
                        handleClick={leftBtnPress}
                        secondary={true}
                        color="primary"
                        type="submit"
                        className="leftButton"
                    />
                    <ADBButton
                        name={'Yes'}
                        handleClick={rightBtnPress}
                        color="primary"
                        type="submit"
                        className="rightButton"
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AlertBox;
