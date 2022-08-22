import { useContext } from 'react';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useHistory } from 'react-router-dom';
import { Stack, Avatar, Checkbox, TableRow, TableCell, Typography, ListItemText, MenuItem } from '@mui/material';
import Label from '../../Label';
import UserMoreMenu from '../../CustomTableMenu/index';
import './tableRow.scss';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import PermissionsContext from '../../../context/PermissionsContext';
import { ROLES } from '../../../constants/constants';

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
        simpleTable = false
    } = props;
    const { id, name, role, status, company, avatarUrl, isVerified } = row;
    const history = useHistory();
    const orderList = header.map((ele: any) => {
        return ele.id;
    });

    const userData = useContext(PermissionsContext);
    // .splice(-1);
    // orderList.splice(-1);

    // const routeToSupervisor = (ele: any) => {
    //     console.log(ele);
    //     history.push({
    //         pathname: '/dashboard/supervisor-detail',
    //         state: {
    //             params: ele
    //         }
    //     });
    // };

    // function mapOrder(array, order, key) {
    //   [array].sort(function (a, b) {
    //     var A = a[key],
    //       B = b[key];

    //     if (order.indexOf(A) > order.indexOf(B)) {
    //       return 1;
    //     } else {
    //       return -1;
    //     }
    //   });

    //   return array;
    // }

    // /**
    //  * Example:
    //  */

    // var item_array, item_order, ordered_array;

    // item_array = [
    //   { id: 2, label: "Two" },
    //   { id: 3, label: "Three" },
    //   { id: 5, label: "Five" },
    //   { id: 4, label: "Four" },
    //   { id: 1, label: "One" },
    // ];

    // ordered_array = mapOrder(row, orderList, "name");
    // console.log("Ordered:", JSON.stringify(ordered_array));
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
        'memberName'
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
        if (ele === 'municipalLinks' && icon) {
            return (
                <TableCell align="left" key={cellKey}>
                    {row[ele]} <InfoIcon className="infoIcon" />
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
                    {row[ele]} <InfoIcon className="infoIcon" />
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
                                    : status === 'Supervisor Approved' || status === 'ACTIVE' || status === 'Approved'
                                    ? 'success'
                                    : status === 'Supervisor Rejected'
                                    ? 'rejected'
                                    : status === 'Approval Pending'
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
                            <UserMoreMenu click={() => handler(row, ele)} />
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
                        <ListItemText primary="Remove" primaryTypographyProps={{ variant: 'body2' }} />
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
    // console.log(displayArray);
    return (
        <TableRow
            hover
            key={id}
            tabIndex={-1}
            role="checkbox"
            selected={isItemSelected}
            aria-checked={isItemSelected}
            onClick={() => click(row)}
            className={!simpleTable ? 'tableRow' : 'tableRow noHighlight'}
        >
            {selectable ? (
                <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} onChange={(event: any) => change(event, id)} />
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
