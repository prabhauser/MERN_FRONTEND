import { Box } from '@mui/material';
import './index.scss';

type ChipsDataType = {
    header: string;
    count: Number;
    isActive: boolean;
    onClick?: any;
};

type ChipsType = {
    data: ChipsDataType[];
};

const CvsChips = (props: ChipsType) => {
    const { data } = props;

    const renderChips = () => {
        return data?.map((chip, idx) => {
            const chipKey = idx + 1;
            return (
                <Box
                    key={chipKey}
                    className={`${chip?.isActive ? 'chip activeChip' : 'chip inactiveChip'}`}
                    onClick={chip?.onClick}
                >
                    {chip?.header}
                    <span className="insideChip">{chip?.count}</span>
                </Box>
            );
        });
    };

    return <Box className="cvsChipsWrapper">{renderChips()}</Box>;
};

export default CvsChips;
