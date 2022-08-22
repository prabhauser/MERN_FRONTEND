import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@material-ui/core';
import './index.scss';

type DataType = {
    value?: any;
};

type ComponentProps = {
    dataArray?: DataType[];
    educationData?: any;
};

const SimpleAccordion = (props: ComponentProps) => {
    // const SimpleAccordion = () => {
    const { dataArray, educationData } = props;
    return (
        <div className="accordionMain">
            <Accordion
                style={{
                    borderRadius: '20px'
                }}
            >
                <AccordionSummary
                    className="iconDiv"
                    expandIcon={<ExpandMoreIcon />}
                    ara-controls="panel1a-content"
                    id="panel1a-header"
                    style={{
                        // borderRadius: '20px 20px 0px 0px',
                        borderRadius: '20px',
                        backgroundColor: '#E3ECF4'
                    }}
                >
                    <Typography className="heading">Grade Level Codes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="fieldWrapper">
                            {educationData ? (
                                <div>
                                    <Box className="fieldBox2">
                                        <Typography className="columns_alignment">
                                            {educationData?.map((ele: any) => {
                                                return (
                                                    <Typography className="gradeWrap">
                                                        <Typography className="numberBox">
                                                            <span className="numberLine">{ele.id}</span>
                                                        </Typography>
                                                        <span className="grade">{ele.content}</span>
                                                    </Typography>
                                                );
                                            })}
                                        </Typography>
                                    </Box>{' '}
                                </div>
                            ) : null}
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
export default SimpleAccordion;
