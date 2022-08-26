import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, IconButton, makeStyles } from '@material-ui/core';
import VisibilityIcon from '../../../assets/images/visibility.svg';
import VisibilityOffIcon from '../../../assets/images/visibilityoff.svg';
import PersonIcon from '../../../assets/images/person.svg';
import PasswordLockIcon from '../../../assets/images/password_lock.svg';
import Logo from '../../../assets/images/dswd_logo_login.png';
import Flag from '../../../assets/images/Banner.jpeg';
import Label from '../../atoms/Label/index';
import TextInput from '../../atoms/TextInput/index';
import Button from '../../atoms/Button/index';
import SnackbarAlert from '../../atoms/SnackbarAlert';
import { setToLocalStorage } from '../../../utilities/storage/storageUtility';
import YupSchemaGeneration from './yup-wrapper';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { formValidations as VALIDATIONS } from './login';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './index.scss';
import theme from '../../../utilities/theme/theme.module.scss';
import { executeAWSAction, resetAWSErr, updateScreenIdentifiers } from '../../store/aws/awsSlice';
import { awsSelector } from '../../store/aws/awsSelector';
import { paths } from '../../constants/paths';
import { ACTION_CODES, SCREEN_CODES, STORE_KEYS } from '../../constants/awsActions';

type LoginFormType = {
    userName: string;
    password: string;
};

const useStyles = makeStyles({
    loginInputAlign: {
        marginTop: '9px'
    },
    loginButtonAlign: {
        marginTop: '49px'
    },
    graylabel: {
        color: `${theme.p900Bg}`
    }
});

//Snackbar options
const options = {
    DEFAULT: {
        message: '',
        open: false,
        type: ''
    },
    SUCCESS: {
        message: 'Updated Successfully!',
        open: true
    },
    ERROR: {
        message: 'Internal Server Error!',
        type: 'reject',
        open: true
    }
};

const Login = () => {
    const awsStateSelector = createStructuredSelector({
        awsSlice: awsSelector()
    });
    const { awsSlice: awsState } = useSelector(awsStateSelector);

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState(options.DEFAULT);
    const [disableLogin, setDisableLogin] = useState(true);
    const history = useHistory();
    const [validationSchema, setValidationSchema] = useState({});
    const [initialValues] = useState({
        userName: '',
        password: ''
    });
    const classes = useStyles();

    useEffect(() => {
        const yupSchema = VALIDATIONS?.reduce(YupSchemaGeneration, {});
        setValidationSchema(Yup.object().shape(yupSchema));
    }, []);

    const handleClick = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (values: LoginFormType) => {
        const bundle = {
            payload: {
                screenCode: SCREEN_CODES.COMMON,
                actionCode: ACTION_CODES.LOGIN,
                reqObj: {
                    loginUserId: values?.userName,
                    password: values?.password
                }
            },
            uniqueScreenIdentifier: { isLoggedIn: true },
            storeKey: STORE_KEYS.LOGIN_DATA
        };
        // dispatch(executeAWSAction(bundle));
    };

    const handleSnackbarError = (err: any) => {
        const snackbarError = {
            message: 'Invalid login, Please try again.',
            type: 'reject',
            open: true
        };
        setSnackbarOptions(snackbarError);
    };

    useEffect(() => {
        if (awsState?.err) {
            handleSnackbarError(awsState?.err);
            dispatch(resetAWSErr());
        }
    }, [awsState?.err]);

    const closeSnackbar = () => setSnackbarOptions(options.DEFAULT);

    return (
        <Container disableGutters component="main" className="login-page">
            <SnackbarAlert className="login-snackbar" options={snackbarOptions} handleClose={closeSnackbar} />

            <div className="row mar-0">
                <div className="login-left col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pad-0">
                    <div style={{ margin: '100px 0px 0px 50px' }}>
                        {' '}
                        New User ?
                        <div style={{ width: '200px' }}>
                            {' '}
                            <Button
                                formInput={classes.loginButtonAlign}
                                fullWidth={true}
                                name="Sign Up1"
                                variant="contained"
                            />
                        </div>
                        <div style={{ width: '200px' }}>
                            {' '}
                            <Button
                                formInput={classes.loginButtonAlign}
                                fullWidth={true}
                                name="Sign Up2"
                                variant="contained"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pad-0">
                    <div className=" login-container d-flex flex-column">
                        <div className={` login-heading ${classes.graylabel}`}>Login</div>
                        <div className={` login-headingdetail ${classes.graylabel}`}>
                            Please login with below credentials
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleSubmit(values);
                            }}
                        >
                            {(formikprops: FormikProps<LoginFormType>) => {
                                const { values, isValid, handleChange, handleBlur, errors, touched } = formikprops;
                                return (
                                    <Form>
                                        <div>
                                            <Label label={'User Name*'} />
                                            <TextInput
                                                variant="outlined"
                                                maxLength={30}
                                                autoFocus={true}
                                                fullWidth={true}
                                                type="text"
                                                name="userName"
                                                value={values.userName}
                                                autoComplete={'off'}
                                                formInput={classes.loginInputAlign}
                                                startAdornment={
                                                    <IconButton tabIndex="-1" className="person-icon">
                                                        <img src={PersonIcon} />
                                                    </IconButton>
                                                }
                                                onChange={(e) => {
                                                    setDisableLogin(false);
                                                    handleChange(e);
                                                }}
                                                onBlur={handleBlur}
                                                helperText={errors.userName && touched.userName ? errors.userName : ''}
                                            />
                                            <Label className={'password-class'} label={'Password*'} />
                                            <TextInput
                                                variant="outlined"
                                                maxLength={50}
                                                fullWidth={true}
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                formInput={classes.loginInputAlign}
                                                startAdornment={
                                                    <IconButton tabIndex="-1" className="passwordlock-icon">
                                                        <img src={PasswordLockIcon} />
                                                    </IconButton>
                                                }
                                                endAdornment={
                                                    <IconButton
                                                        tabIndex="-1"
                                                        className="password-eye"
                                                        onClick={handleClick}
                                                    >
                                                        {showPassword ? (
                                                            <img src={VisibilityIcon} />
                                                        ) : (
                                                            <img src={VisibilityOffIcon} />
                                                        )}
                                                    </IconButton>
                                                }
                                                value={values.password}
                                                onChange={(e) => {
                                                    setDisableLogin(false);
                                                    handleChange(e);
                                                }}
                                                onBlur={handleBlur}
                                                helperText={errors.password && touched.password ? errors.password : ''}
                                            />
                                            <Button
                                                formInput={classes.loginButtonAlign}
                                                fullWidth={true}
                                                name="Login"
                                                disabled={disableLogin || !isValid}
                                                type="submit"
                                                variant="contained"
                                            />
                                            <div
                                                className={`d-flex row no-gutters align-items-center login-footer ${classes.graylabel}`}
                                            >
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pad-0 footer-copyrights">
                                                    Copyright © 2021 DSWD. All rights reserved.
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 pad-0 align-items-end footer-support">
                                                    support@dswd.com
                                                </div>
                                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pad-0 footer-contact">
                                                    (+63)5378697580
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;
