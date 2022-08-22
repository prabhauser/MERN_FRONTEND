import { useContext } from 'react';
import { sentenceCase } from 'change-case';
import { useHistory } from 'react-router-dom';
import { Stack, Avatar, Checkbox, TableRow, TableCell, Typography, ListItemText, MenuItem } from '@mui/material';
import Label from '../../Label';
import UserMoreMenu from '../../CustomTableMenu/index';
import './tableRow.scss';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InfoIconImg from '../../../../assets/images/info.svg';
import PermissionsContext from '../../../context/PermissionsContext';
import { ROLES } from '../../../constants/constants';
import MenuList from '../../TrailPopover';

interface Props {
    isItemSelected: boolean;
    change: any;
    header: any;
    click: any;
    row: any;
    selectable: boolean;
    route?: any;
    editMenu?: boolean;
    link?: boolean;
    icon?: boolean;
    isRequestPage?: boolean;
    isTableImageReqd?: boolean;
    simpleTable?: boolean;
    partialData?: any;
    removeFn?: any;
}
const UserlistBody = (props: Props) => {
    const {
        isItemSelected,
        click,
        row,
        selectable,
        change,
        header,
        route,
        editMenu,
        link,
        icon,
        isRequestPage = false,
        isTableImageReqd = true,
        simpleTable = false,
        partialData,
        removeFn = () => {}
    } = props;

    const { id, name, role, status, company, avatarUrl, isVerified, updateRequestId } = row;

    const history = useHistory();
    const orderList = header.map((ele: any) => {
        return ele.id;
    });

    const userData = useContext(PermissionsContext);
    const handler = (rows: any, ele: any) => {
        if (route) {
            route(row, ele);
        } else {
            return;
        }
    };

    const linkArray = [
        'name',
        'householdID',
        'requestedBy',
        'hhId',
        'grantee',
        'facilityName',
        'requestedTo',
        'memberName',
        'phlHouseHoldId'
    ];
    const displayArray = orderList.map((ele: any, index: number) => {
        const cellKey = index + 1;
        if (linkArray.includes(ele) === true) {
            if (link) {
                return (
                    <TableCell component="th" scope="row" padding="none" key={cellKey} style={{ paddingLeft: '10px' }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {ele != 'grantee' && ele == 'name' && isTableImageReqd ? (
                                <Avatar alt={row[ele]} src={'https://minimal-kit-react.vercel.app' + avatarUrl} />
                            ) : null}
                            <Typography
                                variant="subtitle2"
                                noWrap
                                style={{
                                    fontFamily: 'PoppinsSemiBold !important',
                                    color: '#0F1A8B',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                                // onClick={() => routeToSupervisor(row)}
                                onClick={() => handler(row, ele)}
                            >
                                {row[ele]}
                            </Typography>
                            {/* {ele === 'facilityName' ? <div className="forceMajeure">Force Majeure</div> : null} */}
                        </Stack>
                    </TableCell>
                );
            } else {
                return (
                    <TableCell component="th" scope="row" padding="none" key={cellKey} style={{ paddingLeft: '10px' }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {ele != 'grantee' && isTableImageReqd ? (
                                <Avatar alt={row[ele]} src={'https://minimal-kit-react.vercel.app' + avatarUrl} />
                            ) : null}
                            <Typography
                                variant="subtitle2"
                                noWrap
                                style={{
                                    fontFamily: 'PoppinsSemiBold !important'
                                }}
                                // onClick={() => routeToSupervisor(row)}
                                onClick={() => handler(row, ele)}
                            >
                                {row[ele]}
                            </Typography>
                            {/* {ele === 'facilityName' ? <div className="forceMajeure">Force Majeure</div> : null} */}
                        </Stack>
                    </TableCell>
                );
            }
        }
        if (ele == 'isVerified') {
            return (
                <TableCell align="left" key={cellKey}>
                    {isVerified ? 'Yes' : 'No'}
                </TableCell>
            );
        }
        if (ele === 'ML_COUNT' && icon) {
            {
                //  console.log(row);
            }
            return (
                <TableCell align="left" key={cellKey}>
                    {/* <InfoIcon className="infoIcon" /> */}
                    <div className="iconClass">
                        {row[ele]}
                        <MenuList
                            itemsArray={[
                                {
                                    avatarURL:
                                        'https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_2.jpg',
                                    userName: 'Joey Mathew'
                                },
                                {
                                    avatarURL:
                                        'https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_1.jpg',
                                    userName: 'Dominic Fernandez'
                                }
                            ]}
                            src={InfoIconImg}
                        />
                    </div>
                </TableCell>
            );
        }
        if (ele === 'parentGroups' && icon) {
            return (
                <TableCell align="left" key={cellKey}>
                    {row[ele]} <InfoIcon className="infoIcon" />
                </TableCell>
            );
        }
        if (ele === 'assignedMls' && icon) {
            return (
                <TableCell align="left" key={cellKey}>
                    {row[ele]}
                    <InfoIcon className="infoIcon" />
                </TableCell>
            );
        }

        if (ele === 'status') {
            return (
                <TableCell align="left" key={cellKey}>
                    {status ? (
                        <Label
                            variant="ghost"
                            color={
                                status === 'INACTIVE'
                                    ? 'error'
                                    : status === 'Supervisor Approved' ||
                                      status === 'ACTIVE' ||
                                      status === 'Approved' ||
                                      status === 'Approved by supervisor'
                                    ? 'success'
                                    : status === 'Supervisor Rejected' || status === 'Rejected by supervisor'
                                    ? 'rejected'
                                    : status === 'Approval Pending' || status === 'Approval pending'
                                    ? 'warning'
                                    : 'synced'
                            }
                        >
                            {sentenceCase(status)}
                        </Label>
                    ) : null}
                </TableCell>
            );
        }
        if (ele === 'Action') {
            if (!editMenu) {
                if (userData?.role === ROLES.admin && !isRequestPage) {
                    return (
                        <TableCell align="left" key={cellKey}>
                            <UserMoreMenu click={() => handler(row, ele)} removeFn={() => removeFn(row)} />
                        </TableCell>
                    );
                } else if (userData?.role === ROLES.supervisor || isRequestPage) {
                    return (
                        <TableCell align="left" className="onlyRemoveText" key={cellKey}>
                            <ListItemText
                                onClick={() => handler(row, ele)}
                                primary="View"
                                primaryTypographyProps={{ variant: 'body2' }}
                            />
                        </TableCell>
                    );
                }
            } else {
                return (
                    <TableCell key={cellKey} align="left" className="onlyRemoveText">
                        {/* <MenuItem sx={{ color: 'text.secondary' }} className="table_actionmenu"> */}
                        <ListItemText
                            primary="Remove"
                            primaryTypographyProps={{ variant: 'body2' }}
                            onClick={() => removeFn(row)}
                        />
                        {/* </MenuItem> */}
                    </TableCell>
                );
            }
        }
        return (
            <TableCell align="left" key={cellKey}>
                {row[ele] == 0 ? <span style={{ color: 'red' }}>{row[ele]}</span> : <span>{row[ele]}</span>}
            </TableCell>
        );
    });
    return (
        <TableRow
            hover
            key={id ? id : updateRequestId}
            tabIndex={-1}
            role="checkbox"
            selected={isItemSelected}
            aria-checked={isItemSelected}
            // onClick={() => click(row)}
            className={!simpleTable ? 'tableRow' : 'tableRow noHighlight'}
        >
            {/* {selectable && isRequestPage && status === 'Approval pending' ? (
                <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} onChange={(event: any) => change(event, id)} />
                </TableCell>
            ) : selectable && isRequestPage && status !== 'Approval pending' ? (
                <TableCell padding="checkbox">
                    <Checkbox disabled={true} />
                </TableCell>
            ) : null}

            {selectable && !isRequestPage ? (
                <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} onChange={(event: any) => change(event, id)} />
                </TableCell>
            ) : null} */}
            {selectable ? (
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        onChange={(event: any) => change(event, id)}
                        disabled={status !== 'Approval pending' && partialData ? true : false}
                    />
                </TableCell>
            ) : //  (
            //     <TableCell padding="checkbox"></TableCell>
            // )
            null}

            {displayArray}
            {/* <TableCell align="left">
                <UserMoreMenu click={() => handler(row)} />
            </TableCell> */}
        </TableRow>
    );
};

export default UserlistBody;
