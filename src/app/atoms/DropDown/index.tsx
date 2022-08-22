import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl, Select, MenuItem, FormHelperText, SelectProps } from '@material-ui/core';
import theme from '../../../utilities/theme/theme.module.scss';
import Label from '../Label/index';

type ItemsType = {
    name: string;
    type?: string;
    code: string;
    disabled?: boolean;
};

interface DropDownProps {
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    value?: any;
    items?: ItemsType[];
    name: string;
    label: any;
    disabled?: boolean;
    style?: any;
    className?: string;
    type?: string;
    required?: boolean;
    helperText?: string;
    variant?: SelectProps['variant'];
    control?: Function;
    isIcon?: boolean;
    fullWidth?: boolean;
}

const useStyles = makeStyles(() => ({
    formControl: {
        margin: 0,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: `1.5px solid ${theme.s100Bg}`
        },
        '& .MuiSelect-icon': {
            color: `${theme.p800Bg}`
        },

        '& .MuiInputLabel-formControl': {
            transform: 'translate(12px, 20px) scale(1)'
        },
        '& .MuiOutlinedInput-root': {
            //height: '50px',
            backgroundColor: `${theme.white}`,
            borderRadius: '10px',
            borderWidth: '1.5px',
            borderColor: `${theme.s100Bg}`,
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
            //style the border of field on focus
            '&.Mui-focused fieldset': {
                borderWidth: '1.5px',
                borderColor: `${theme.darkenGray}`
            }
        },

        '& .MuiSelect-select:focus': {
            backgroundColor: 'transparent'
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
    paper: {
        width: '100%'
    },

    dropdownStyle: {
        color: `${theme.p900Bg}`,
        fontSize: '14px',
        letterSpacing: '0',
        fontWeight: 500,
        lineHeight: '21px',
        marginTop: '9px'
    },
    disabledComponent: {
        opacity: 0.6
    },
    inputStyleIcon: {
        '& .MuiSelect-selectMenu': {
            color: `${theme.p900Bg}`,
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: 500,
            lineHeight: '21px',
            marginLeft: '30px'
        }
    },
    inputStyleWithoutIcon: {
        '& .MuiSelect-selectMenu': {
            color: `${theme.p900Bg}`,
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: 500,
            lineHeight: '21px'
        }
    },
    label: {
        height: '17px',
        // width: '80px',
        opacity: 0.5,
        color: '#2C333A',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: 0,
        marginBottom: '12px'
    },
    optionStyle: {
        color: `${theme.p900Bg}`,
        fontSize: '14px',
        letterSpacing: '0',
        // fontWeight: 600,
        lineHeight: '21px',
        padding: '12px 0px 3px 14px'
    },

    iconStart: {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '10px',
        zIndex: 9
    }
}));

export default function DropDown(props: DropDownProps) {
    const classes = useStyles();
    const { value, items, helperText, name, disabled, variant, required, isIcon, onChange, label, fullWidth, ...rest } =
        props;

    return (
        <div
            id="parent"
            className={`${classes.paper} ${disabled ? classes.disabledComponent : ''}`}
            style={props.style}
        >
            {label == '' ? null : <Label label={props.label} className={classes.label} />}
            <FormControl
                fullWidth
                className={`${classes.formControl} ${isIcon ? classes.inputStyleIcon : classes.inputStyleWithoutIcon}`}
                required={required}
                variant={variant}
            >
                <Select
                    fullWidth={fullWidth}
                    name={name}
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                    classes={{
                        disabled: disabled ? classes.disabledComponent : ''
                    }}
                    MenuProps={{
                        classes: { paper: classes.dropdownStyle },
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }
                    }}
                    inputProps={{
                        disabled: disabled ? true : false
                    }}
                    control={props.control}
                    {...rest}
                >
                    {items?.map((item: ItemsType, i: number) => {
                        const itemId = i + 1;
                        return (
                            <MenuItem key={itemId} value={item.code} className={classes.optionStyle}>
                                {props.type == 'with' ? (
                                    item?.type
                                ) : (
                                    <span className={classes.optionStyle}>{item?.name}</span>
                                )}
                            </MenuItem>
                        );
                    })}
                </Select>
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </div>
    );
}
