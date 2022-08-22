import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';
// import { ClassNames } from '@emotion/react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            '& .MuiInputBase-input': {
                padding: '18px'
            },
            '& legend': {
                width: '0%'
            }
        }
    }
}));

type ComponentProps = {
    name?: string;
    value: any;
    handleChange?: any;
    disabled?: boolean;
    showLabel?: boolean;
    busFormClass?: boolean;
    customLabel?: boolean;
    customLabelVal?: any;
};

export default function BasicDatePicker(props: ComponentProps) {
    const {
        name = '',
        value,
        handleChange,
        disabled,
        showLabel,
        busFormClass,
        customLabel = false,
        customLabelVal
    } = props;
    const classes = useStyles();
    const date = new Date();
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            {showLabel ? <span className="lable">Filter By Date</span> : null}
            {customLabel ? customLabelVal : null}
            <DatePicker
                value={value}
                onChange={handleChange}
                disabled={disabled}
                disableFuture
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => (
                    <TextField
                        name={name}
                        disabled={disabled}
                        {...params}
                        sx={{ width: '100%' }}
                        className={!busFormClass ? classes.root : ''}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
