import { useState } from 'react';
import { Card, Table, TableRow, TableBody, TableCell, Container, TableContainer, TablePagination } from '@mui/material';
import { useEffect } from 'react';
import Scrollbar from '../Scrollbar';
import SearchNotFound from '../SearchNotFound';
import TableColumns from './TableColumns/index';
import { makeStyles } from '@material-ui/core/styles';
import TablePaginator from './TablePagination/index';
import TableRows from './TableRows/index';
import theme from '../../../utilities/theme/theme.module.scss';
import './index.scss';
const useStyles = makeStyles({
    root: {
        paddingLeft: '3px !important',
        paddingRight: '3px !important',
        '& .simplebar-placeholder': {
            minHeight: '400px !imortant',
            height: 'auto !important'
        },
        // '& .simplebar-content .MuiTableContainer-root': {
        //     overflowX: 'clip',
        //     minWidth: 'max-content'
        // },
        '& .MuiPaper-root': {
            // marginTop: '20px',
            borderRadius: '0px 0px 15px 15px'
        },
        '& .MuiTableCell-head .MuiButtonBase-root': {
            // fontSize: '14px',
            fontWeight: 500
        },
        '& *,.MuiTableCell-root, .MuiTypography-root,.MuiButtonBase-root': {
            // fontFamily: 'poppins'
            // fontSize: '13px'
        },

        '&  .MuiTableRow-root.Mui-selected': {
            backgroundColor: 'rgba(25, 118, 210, 0.20) !important'
        },

        // '& .MuiTableRow-root:nth-child(odd)': {
        //     backgroundColor: `${theme.s050Bg}`
        // },

        // '& .MuiTableRow-head': {
        //     backgroundColor: 'white !important'
        // },
        '& .MuiTablePagination-root .MuiToolbar-root ': {
            backgroundColor: '#E0E9EF'
        },
        '& .MuiToolbar-root': {
            backgroundColor: `${theme.s050Bg}`
        },
        '& .MuiTablePagination-spacer': {
            display: 'none'
        },
        '& .MuiTablePagination-displayedRows': {
            marginTop: '1rem',
            fontFamily: 'PoppinsSemiBold',
            fontSize: '12px'
        }
    }
});

interface Props {
    selectable: boolean;
    headers: any;
    body: any;
    filteredUsers: any;
    filterName: string;
    orderBy: any;
    order: any;
    onRequestSort: any;
    onSelectAllClick: any;
    rowCount: number;
    page: number;
    setPageNumber: Function;
    selected: any;
    onPageChange: any;
    rowChange: Function;
    selectRow: any;
    route?: any;
    drawerTable?: boolean;
    editMenu?: boolean;
    link?: boolean;
    icon?: boolean;
    isRequestPage?: boolean;
    pageNosArray: Number[];
    isTableImageReqd?: boolean;
    sortColumns?: any;
    simpleTable?: boolean;
    noDataMsg?: string;
    partialData?: any;
    removeFn?: any;
}

export default function User(props: Props) {
    const {
        selectable,
        headers,
        body,
        filteredUsers,
        filterName,
        orderBy,
        order,
        onRequestSort,
        onSelectAllClick,
        rowCount,
        page,
        setPageNumber,
        selected,
        onPageChange,
        rowChange,
        selectRow,
        route,
        drawerTable,
        editMenu,
        link,
        icon,
        isRequestPage = false,
        pageNosArray,
        isTableImageReqd = true,
        sortColumns,
        simpleTable = false,
        noDataMsg = '',
        partialData,
        removeFn = () => {}
    } = props;

    const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(body);
    }, []);
    const emptyRowDisplay = [];

    if (filteredUsers && filteredUsers.length > 0 && filteredUsers.length < 10) {
        for (let i = 0; i < filteredUsers?.length; i++) {
            emptyRowDisplay.push(i);
        }
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowCount) : 0;
    const isUserNotFound = filteredUsers.length === 0;
    return (
        <Container
            maxWidth="xl"
            className={!drawerTable ? classes.root + ' TableBase' : classes.root + ' DrawerTableBase'}
        >
            <Card>
                <Scrollbar sx={undefined}>
                    <TableContainer sx={!drawerTable ? { minWidth: 800 } : { minWidth: 300 }}>
                        <Table className="customtable">
                            <TableColumns
                                order={order}
                                orderBy={orderBy}
                                headLabel={headers}
                                data={filteredUsers}
                                rowCount={rowCount}
                                numSelected={selected?.length}
                                onRequestSort={onRequestSort}
                                onSelectAllClick={onSelectAllClick}
                                selectable={selectable}
                                sortColumns={sortColumns}
                                simpleTable={simpleTable}
                                partialData={partialData}
                            />
                            <TableBody>
                                {filteredUsers &&
                                    filteredUsers.length > 0 &&
                                    filteredUsers?.map((row: any) => {
                                        const {
                                            id,
                                            name,
                                            role,
                                            status,
                                            company,
                                            avatarUrl,
                                            isVerified,
                                            updateRequestId
                                        } = row;
                                        const isItemSelected = selected?.indexOf(id ? id : updateRequestId) !== -1;
                                        return (
                                            <TableRows
                                                key={id ? id : updateRequestId}
                                                isItemSelected={isItemSelected}
                                                click={() => selectRow(row)}
                                                header={headers}
                                                row={row}
                                                selectable={selectable}
                                                change={() => rowChange(id ? id : updateRequestId)}
                                                route={route}
                                                editMenu={editMenu}
                                                link={link}
                                                icon={icon}
                                                isRequestPage={isRequestPage}
                                                isTableImageReqd={isTableImageReqd}
                                                simpleTable={simpleTable}
                                                partialData={partialData}
                                                removeFn={() => removeFn(row)}
                                            />
                                        );
                                    })}
                                {filteredUsers && filteredUsers.length > 0 && filteredUsers.length < 10
                                    ? emptyRowDisplay.map((ele) => {
                                          return (
                                              <TableRow
                                                  key={ele}
                                                  style={{
                                                      height: '40px',
                                                      backgroundColor: 'white',
                                                      borderBottom: '0px'
                                                  }}
                                              >
                                                  <TableCell colSpan={12} style={{ borderBottom: '0px' }} />
                                              </TableRow>
                                          );
                                      })
                                    : null}
                                {emptyRows ? <TableRow style={{ height: 3 * emptyRows }}></TableRow> : null}

                                {/* {filteredUsers?.length == 0 ? (
                                    <TableRow className="emptyTable">
                                        <TableCell colSpan={12}>Nothing to display</TableCell>
                                    </TableRow>
                                ) : null} */}

                                {filteredUsers?.length == 0 && !filterName ? (
                                    <TableRow className="emptyTable">
                                        <TableCell colSpan={12} sx={{ py: 6 }}>
                                            {noDataMsg}
                                        </TableCell>
                                    </TableRow>
                                ) : null}
                                {filterName.length > 0 && isUserNotFound ? (
                                    <TableRow className="emptyTable">
                                        <TableCell colSpan={12} sx={{ py: 6 }}>
                                            <b>{filterName}</b> not found, please try another search term
                                        </TableCell>
                                    </TableRow>
                                ) : null}
                            </TableBody>

                            {/* {filterName.length > 0 && isUserNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={12} sx={{ py: 3 }}></TableCell>
                                    </TableRow>
                                </TableBody>
                            )} */}
                        </Table>
                    </TableContainer>
                </Scrollbar>
                {!simpleTable ? (
                    <TablePagination
                        className="table_pagination"
                        rowsPerPageOptions={[]}
                        component="div"
                        count={rowCount}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={onPageChange}
                        labelDisplayedRows={({ from, to, count }) =>
                            ` ${from}-${to} of  ${Math.ceil(count / 10)} pages`
                        }
                        ActionsComponent={() => (
                            <TablePaginator
                                count={rowCount}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={onPageChange}
                                setPageNumber={setPageNumber}
                                pageNosArray={pageNosArray}
                            />
                        )}
                    />
                ) : null}
            </Card>
        </Container>
    );
}
