import Breadcrumbs from '@mui/material/Breadcrumbs';
import useStyles from './style';
import { withRouter } from 'react-router-dom';
import { paths } from '../../constants/paths';

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            {location.hash == `#${paths.LOGIN.path[0]}` || location.hash == `#${paths.LOGIN.path[1]}` ? null : (
                <div className={classes.body}>
                    <Breadcrumbs separator="|" className={classes.Footer}>
                        <span className={classes.textHolder} data-testid="mail">
                            support@dswd.com
                        </span>
                        <span className={classes.textHolder} data-testid="copyRigth">
                            Copyright © 2021 DSWD. All rights reserved.
                        </span>
                        <span className={classes.textHolder} data-testid="phoneNumber">
                            (+63)5378697580
                        </span>
                    </Breadcrumbs>
                </div>
            )}
        </div>
    );
};

export default withRouter(Footer);
