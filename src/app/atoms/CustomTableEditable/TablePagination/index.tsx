import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import LastPageIcon from "@mui/icons-material/LastPage";
import { CodeOutlined } from '@material-ui/icons';
import './TablePagination.scss';
interface Props {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: any;
    setPageNumber: any;
}

const TablePaginationActions = (props: Props) => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange, setPageNumber } = props;
    const [pageNosArray, setPageNosArray] = useState<any>([]);
    useEffect(() => {
        const pageNumberArray = [];
        const newCount = Math.ceil(count / 10);
        for (let i = 1; i <= newCount; i++) {
            pageNumberArray.push(i);
        }
        setPageNosArray(pageNumberArray);
    }, []);
    //   const handleFirstPageButtonClick = (event) => {
    //     onPageChange(event, 0);
    //   };

    //   const handleLastPageButtonClick = (event) => {
    //     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    //   };
    const handleBackButtonClick = (event: any) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: any) => {
        onPageChange(event, page + 1);
    };

    const handlePageChange = (evt: any) => {
        onPageChange(evt, evt.target.value - 1);
    };

    const PageDropdown =
        pageNosArray &&
        pageNosArray.map((ele: any) => {
            return (
                <option value={ele} selected={page === ele - 1 ? true : false} key={ele}>
                    {ele}
                </option>
            );
        });

    return (
        <div className="tablePaginator">
            <div className="pageDropdown">
                <span style={{ fontSize: '12px' }} className="desktopPageNo">
                    The page you're on
                </span>
                <span style={{ fontSize: '12px' }} className="MobilePageNo">
                    page
                </span>

                <select onChange={handlePageChange} className="pageSelector">
                    {PageDropdown}
                </select>
            </div>

            <Box sx={{ flexShrink: 0, ml: 1.5, position: 'absolute', top: '10%', right: '3%' }}>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                    className="arrowIcon"
                >
                    {theme.direction === 'rtl' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                </IconButton>

                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                    className="arrowIcon"
                >
                    {theme.direction === 'rtl' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                </IconButton>
            </Box>
        </div>
    );
};

export default TablePaginationActions;
