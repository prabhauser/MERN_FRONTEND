import React from 'react';
import { FormControlLabel, Checkbox, CheckboxProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import theme from '../../../utilities/theme/theme.module.scss';
import { unit } from '../../constants/constants';

type ComponentProps = CheckboxProps & {
    name?: string;
    label?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    value?: boolean;
    disabled?: boolean;
    isChecked?: boolean;
    className?: string;
    containerClassName?: string;
    labelPlacement?: any;
};

const checkboxStyle = {
    root: {
        color: `${theme.s900Bg}`,
        '& .MuiIconButton-colorSecondary:hover': {
            backgroundColor: `${theme.s100Bg}!important`
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: `${theme.s050Bg}!important`
        },
        '& .MuiCheckbox-root': {
            color: `${theme.s100Bg} !important`
        },
        '&$checked': {
            color: `${theme.red}`
        },
        '&:hover': {
            backgroundColor: 'inherit'
        },
        '& .MuiTypography-body1': {
            fontSize: `${unit.spacing * 3.5}px`,
            padding: `0 ${unit.spacing * 4}px`,
            marginTop: '1px'
        },
        '&.MuiFormControlLabel-root': {
            marginLeft: '0',
            padding: `${unit.spacing * 2.5}px 0`
        }
    },
    bold: {
        color: `${theme.s900Bg}`
    },
    normal: {
        color: `${theme.red}`
    }
};

export const useStyles = makeStyles(() => ({
    ...checkboxStyle
}));

const CheckBox = (props: ComponentProps) => {
    const classes = useStyles();
    const {
        handleChange,
        name,
        label,
        value,
        disabled,
        isChecked,
        className,
        containerClassName,
        labelPlacement,
        ...rest
    } = props;
    return (
        <div className={containerClassName}>
            <FormControlLabel
                control={
                    <Checkbox
                        name={name}
                        checked={isChecked === undefined || isChecked === null ? false : isChecked}
                        disabled={disabled}
                        onChange={handleChange}
                        value={value === undefined || value === null ? '' : value}
                        {...rest}
                    />
                }
                label={label}
                labelPlacement={labelPlacement}
                classes={{
                    label: isChecked ? classes.bold : classes.normal,
                    root: className
                }}
            />
        </div>
    );
};

export default CheckBox;
