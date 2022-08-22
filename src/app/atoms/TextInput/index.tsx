import { TextField, TextFieldProps, makeStyles, InputAdornment } from '@material-ui/core';
import { unit } from '../../constants/constants';
import theme from '../../../utilities/theme/theme.module.scss';

type ComponentProps = {
    id?: string;
    name?: string;
    value?: string;
    label?: string;
    type?: string;
    onChange?: Function;
    helperText?: string;
    maxLength?: number;
    placeholder?: string;
    formInput?: string;
    className?: string;
    readOnly?: Boolean;
    disabled?: Boolean;
    inputRef?: Function;
    style?: string;
    fullWidth?: Boolean;
    startAdornment?: any;
    endAdornment?: any;
    isIcon?: Boolean;
} & TextFieldProps;

const useStyles = makeStyles({
    root: {
        flexDirection: 'row',
        '& .MuiInputAdornment-positionStart': {
            marginBottom: '4px',
            marginLeft: '5px',
            marginRight: '20px'
        },
        '& .MuiInputAdornment-positionEnd ': {
            marginBottom: '1px'
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${theme.s300Bg}`
        },
        '& .MuiOutlinedInput-root': {
            height: '50px',
            backgroundColor: `${theme.white}`,
            borderRadius: '10px',
            borderWidth: '1.5px',
            borderColor: `${theme.s050Bg}`,
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
            //style the border of field on focus
            '&.Mui-focused fieldset': {
                borderWidth: '2px',
                borderColor: `${theme.s300Bg}`
            }
        },
        // style the helpertext
        '& .MuiFormHelperText-root': {
            color: `${theme.error}`,
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: 0,
            marginTop: '5px',
            marginBottom: '-25px'
        }
    },
    redOutline: {
        border: '2px solid #FF001F !important',
        borderRadius: '10px',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        },
        '& .MuiOutlinedInput-root': {
            border: 'none',
            '&.Mui-focused fieldset': {
                border: 'none'
            }
        }
    },
    //tod0 - style the placeholder text
    input: {
        '&::placeholder': {
            fontStyle: 'italic'
        }
    },
    //style the text of field with icon
    inputWithicon: {
        '& .MuiInputBase-input': {
            color: `${theme.s900Bg}`,
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: '600',
            lineHeight: '21px',
            marginLeft: '30px'
        }
    },
    //style the input text of field
    inputWithoutIcon: {
        '& .MuiInputBase-input': {
            color: `${theme.s900Bg}`,
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: '600',
            lineHeight: '21px'
        }
    },
    inputLabel: {
        fontSize: `${unit.spacing * 4}px`,
        lineHeight: '17px',
        letterSpacing: '-0.16px',
        color: `${theme.s300Bg}`
    },
    disabledComponent: {
        opacity: 0.6
    },
    iconStart: {
        position: 'absolute',
        marginTop: '30px',
        zIndex: 9
    }
});

const TextInput = (props: ComponentProps) => {
    const classes = useStyles();
    const {
        name,
        id,
        value,
        label,
        helperText,
        maxLength,
        placeholder,
        className,
        formInput,
        readOnly,
        disabled,
        inputRef,
        style,
        type,
        onChange,
        fullWidth,
        startAdornment,
        endAdornment,
        isIcon,
        ...rest
    } = props;
    const startAdor = startAdornment && <InputAdornment position="start"> {startAdornment} </InputAdornment>;
    const endAdor = endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>;

    return (
        <div
            className={`${disabled ? classes.disabledComponent : ''}
        ${classes.root}
        `}
            style={style}
        >
            {isIcon && <div className={classes.iconStart}>{startAdor}</div>}
            <TextField
                color="primary"
                id={id}
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={`${formInput ? formInput : ''} ${isIcon ? classes.inputWithicon : classes.inputWithoutIcon}
                ${helperText ? classes.redOutline : ''}`}
                value={value}
                helperText={helperText}
                inputRef={inputRef}
                fullWidth={fullWidth}
                inputProps={{
                    maxLength: maxLength
                }}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                    readOnly: readOnly ? true : false,
                    disabled: disabled ? true : false,
                    startAdornment: isIcon ? '' : startAdor,
                    endAdornment: endAdor,
                    classes: { input: classes.input }
                }}
                {...rest}
            />
        </div>
    );
};

export default TextInput;
