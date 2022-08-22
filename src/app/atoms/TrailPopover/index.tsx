import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu, MenuItem, Typography } from '@mui/material';
import './index.scss';

type ListType = {
    avatarURL: string;
    userName: string;
};

type MenuProps = {
    itemsArray: ListType[];
    src?: any;
    // handleCloseMenuList?: () => void;
    // openMenuList?: any;
};

const MenuList = (props: MenuProps) => {
    const element = document.getElementById('anchor-button');
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose(event: any) {
        setAnchorEl(null);
    }
    const { itemsArray, src } = props;
    const renderMenuList = () => {
        return itemsArray?.map((item, idx) => {
            const menuKey = idx + 1;
            return (
                <MenuItem key={menuKey}>
                    <img className="menuImage" src={item?.avatarURL} alt=" " />
                    <Typography className="menuItem"> {item?.userName}</Typography>
                </MenuItem>
            );
        });
    };

    return (
        <div>
            <Button
                id="anchor-button"
                aria-owns={anchorEl ? 'simple-menu' : ''}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                className="popOverButton"
            >
                <img src={src} />
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                keepMounted
                container={element}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                className="hoverCard"
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                {renderMenuList()}
            </Menu>
        </div>
    );
};

export default MenuList;
