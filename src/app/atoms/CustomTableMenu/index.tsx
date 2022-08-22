import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import './index.scss';

interface Props {
    click: any;
    removeFn?: any;
}
export default function UserMoreMenu(props: Props) {
    const { click, removeFn = () => {} } = props;
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton ref={ref} onClick={() => setIsOpen(true)}>
                <Icon className="customTableMenuAction" icon={moreVerticalFill} width={20} height={20} />
            </IconButton>

            <Menu
                open={isOpen}
                anchorEl={ref.current}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: { width: 118, maxWidth: '100%', borderRadius: '10px' }
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                onClick={() => setIsOpen(false)}
            >
                {/* component={RouterLink} to="#" */}
                <MenuItem sx={{ color: 'text.secondary' }} className="table_actionmenu">
                    {/* <ListItemIcon>
                        <Icon icon={editFill} width={24} height={24} />
                    </ListItemIcon> */}
                    <ListItemText primary="View" primaryTypographyProps={{ variant: 'body2' }} onClick={click} />
                </MenuItem>

                <MenuItem sx={{ color: 'text.secondary' }} className="table_actionmenu">
                    {/* <ListItemIcon>
                        <Icon icon={trash2Outline} width={24} height={24} />
                    </ListItemIcon> */}
                    <ListItemText primary="Remove" primaryTypographyProps={{ variant: 'body2' }} onClick={removeFn} />
                </MenuItem>
            </Menu>
        </>
    );
}
