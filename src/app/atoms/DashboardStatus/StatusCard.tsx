import { Card, ButtonBase } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@material-ui/core';
import rigth from '../../../assets/images/rigth.svg';
import bgimg from '../../../assets/images/bgimg.svg';
import arrow from '../../../../src/assets/images/arrow.svg';
import cardarrow1 from '../../../../src/assets/images/cardarrow1.svg';
import cardarrow2 from '../../../../src/assets/images/cardarrow2.svg';
import cardarrow3 from '../../../../src/assets/images/cardarrow3.svg';
import cardarrow4 from '../../../../src/assets/images/cardarrow4.svg';
import Grid from '@mui/material/Grid';
import bus from '../../../assets/images/bus.svg';
import cvs from '../../../assets/images/cvs.svg';
import created from '../../../assets/images/created.svg';
import './DashboardStatus.scss';

type ComponentProps = {
    totalV: {
        count: string;
        handleClick: Function;
    };
    busV: {
        count: string;
        handleClick: Function;
    };
    cvsV: {
        count: string;
        handleClick: Function;
    };
    createdV: {
        count: string;
        handleClick: Function;
    };
};
const StatusCard = (props: ComponentProps) => {
    // const classes = useStyles();
    const { totalV, busV, cvsV, createdV } = props;
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid className="statuscard_row" container spacing={2}>
                    <Grid className="statuscard_clmn" item md={3}>
                        {/* <Item>xs=8</Item> */}
                        <div onClick={() => totalV.handleClick()}>
                            <Card className="TotalCard statuscard">
                                <Box className="statuscard_img">
                                    <img src={rigth} data-testid="profileImg1" className="img" />
                                </Box>

                                <Box className="statuscard_txt">
                                    <Typography className="value" data-testid="totalV">
                                        {totalV.count}
                                    </Typography>
                                    <Box>
                                        <Typography className="property">Total Requests</Typography>
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
                                <img src={bus} data-testid="profileImg2" className="img" />
                            </Box>

                            <Box className="statuscard_txt">
                                <Typography className="value" data-testid="busV">
                                    {busV.count}
                                </Typography>
                                <Typography className="property">BUS Requests</Typography>
                            </Box>

                            <Box className="statuscard_icon">
                                <img src={cardarrow2} alt="profile" className="arrow" />
                            </Box>
                        </Card>
                        {/* <Item>xs=4</Item> */}
                    </Grid>
                    <Grid className="statuscard_clmn" item md={3}>
                        <Card className="CvsCard statuscard">
                            <Box className="statuscard_img">
                                <img src={cvs} data-testid="profileImg" className="img" />
                            </Box>

                            <Box className="statuscard_txt">
                                <Typography className="value" data-testid="userId">
                                    {cvsV.count}
                                </Typography>
                                <Typography className="property">CVS Requests</Typography>
                            </Box>

                            <Box className="statuscard_icon">
                                <img src={cardarrow3} alt="profile" className="arrow" />
                            </Box>
                        </Card>
                        {/* <Item>xs=4</Item> */}
                    </Grid>
                    <Grid className="statuscard_clmn" item md={3}>
                        <Card className="CreatedCard statuscard">
                            <Box className="statuscard_img">
                                <img src={created} data-testid="profileImg" className="img" />
                            </Box>

                            <Box className="statuscard_txt">
                                <Typography className="value" data-testid="userId">
                                    {createdV.count}
                                </Typography>
                                <Typography className="property">Sessions & Visits</Typography>
                            </Box>

                            <Box className="statuscard_icon">
                                <img src={cardarrow4} alt="profile" className="arrow" />
                            </Box>
                        </Card>
                        {/* <Item>xs=8</Item> */}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
export default StatusCard;
