import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';
import cardarrow1 from '../../../../src/assets/images/cardarrow1.svg';
import cardarrow2 from '../../../../src/assets/images/cardarrow2.svg';
import Grid from '@mui/material/Grid';
import TotalCVSRequewst from '../../../assets/images/cvs.svg';
import SessionAndVisit from '../../../assets/images/created.svg';
import './DashboardStatus.scss';

type ComponentProps = {
    totalCvsRequest: {
        count: string;
        handleClick: Function;
    };
    sessionVisits: {
        count: string;
        handleClick: Function;
    };
};
const StatusCardForSWA = (props: ComponentProps) => {
    // const classes = useStyles();
    const { totalCvsRequest, sessionVisits} = props;
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid className="statuscard_row" container spacing={2}>
                    <Grid className="statuscard_clmn" item md={3}>
                        <div onClick={() => totalCvsRequest.handleClick()}>
                            <Card className="TotalCard statuscard">
                                <Box className="statuscard_img">
                                    <img src={TotalCVSRequewst} data-testid="profileImg1" className="img" />
                                </Box>

                                <Box className="statuscard_txt">
                                    <Typography className="value" data-testid="totalV">
                                        {totalCvsRequest.count}
                                    </Typography>
                                    <Box>
                                        <Typography className="property">Total CVS Requests</Typography>
                                    </Box>
                                </Box>

                                <Box className="statuscard_icon">
                                    <img src={cardarrow1} alt="profile" className="arrow" />
                                </Box>
                            </Card>
                        </div>
                    </Grid>
                    <Grid className="statuscard_clmn" item md={3}>
                        <Card className="BusCard statuscard">
                            <Box className="statuscard_img">
                                <img src={SessionAndVisit} data-testid="profileImg2" className="img" />
                            </Box>

                            <Box className="statuscard_txt">
                                <Typography className="value" data-testid="busV">
                                    {sessionVisits.count}
                                </Typography>
                                <Typography className="property"> Sessions & Visits </Typography>
                            </Box>

                            <Box className="statuscard_icon">
                                <img src={cardarrow2} alt="profile" className="arrow" />
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
export default StatusCardForSWA;
