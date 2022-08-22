import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ColorBellIcon from '../../../assets/images/ColorBell.svg';
import './NotificationList.scss';
type Props = {
    item: any;
    handleCloseUserMenu: any;
};

const NotificationList = (props: Props) => {
    const { item, handleCloseUserMenu } = props;
    return (
        <MenuItem
            key={item.id}
            onClick={handleCloseUserMenu}
            style={{ width: '250px', borderBottom: '1px solid rgba(204,208,213,0.6)' }}
        >
            <Box className="notifContiner">
                <Box style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
                    <img src={ColorBellIcon} alt="bell" />
                </Box>
                <Box style={{ width: '168px' }}>
                    <h5 className="title">{item.Title}</h5>
                    <span className="description">{item.Content}</span>
                    <div className="dateCont">
                        <span className="date">{item.Date}</span>
                        <span className="date">time</span>
                    </div>
                </Box>
            </Box>
        </MenuItem>
    );
};

export default NotificationList;
