import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import './filterDrawer.scss';
import CloseImg from '../../../assets/images/modalClose.svg';

type Props = {
    status: any;
    handlerOpen: any;
    handlerClose: any;
    children: any;
    drawerHeader?: any;
};

export default function TemporaryDrawer(props: Props) {
    const { status, handlerOpen, handlerClose, children, drawerHeader } = props;
    // eslint-disable-next-line no-shadow
    const list = () => (
        <Box
            // sx={{ width: status === 'top' || status === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            className="drawer"
        >
            <div
                style={{
                    width: '100%',
                    backgroundColor: '#F9FAFB',
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center'
                }}
            >
                {/* <Button onClick={handlerClose} style={{ float: 'left', zIndex: '9999' }}>
                    X
                </Button> */}
                <img
                    src={CloseImg}
                    onClick={handlerClose}
                    style={{ marginRight: '20px', marginLeft: '10px', cursor: 'pointer' }}
                />
                <span style={{ fontFamily: 'PoppinsSemiBold', fontSize: '18px' }} className="drawerHeader">
                    {drawerHeader ? drawerHeader : 'Filters'}
                </span>
            </div>

            <Divider />
            <List>{children}</List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Drawer disableEnforceFocus anchor={'right'} open={status['right']} onClose={handlerClose}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
