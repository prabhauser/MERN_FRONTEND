import { Box, Menu, MenuItem, Typography, Container } from '@mui/material';
import './index.scss';

type ListType = {
    avatarURL: string;
    userName: string;
};

type MenuProps = {
    itemsArray: ListType[];
    handleCloseMenuList?: () => void;
    openMenuList: any;
};
const MenuList = (props: MenuProps) => {
    const { itemsArray, handleCloseMenuList, openMenuList } = props;
    const renderMenuList = () => {
        return itemsArray?.map((item, idx) => {
            const menuKey = idx + 1;
            return (
                <MenuItem key={menuKey}>
                    <img className="menuImage" src={item?.avatarURL} alt="image" />
                    <Typography className="menuItem"> {item?.userName}</Typography>
                </MenuItem>
            );
        });
    };
    return (
        <Container>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
                <Menu
                    open={Boolean(openMenuList)}
                    anchorEl={openMenuList}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    onMouseOut={handleCloseMenuList}
                    className="infoMenu"
                    sx={{
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    {renderMenuList()}
                </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'block', md: 'none' } }}>
                <Menu
                    open={Boolean(openMenuList)}
                    anchorEl={openMenuList}
                    onMouseOut={handleCloseMenuList}
                    className="infoMenu"
                    sx={{
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    {renderMenuList()}
                </Menu>
            </Box>
        </Container>
    );
};
export default MenuList;
