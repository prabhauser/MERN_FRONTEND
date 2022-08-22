import AppBar from '@material-ui/core/AppBar';
import { Box, Tab, Tabs } from '@mui/material';
import { useDispatch } from 'react-redux';
import { STORE_KEYS } from '../../constants/awsActions';
import { updateScreenIdentifiers } from '../../store/aws/awsSlice';
import './index.scss';

type ButtonTabsProp = {
    setSelectedTab: Function;
    selectedTab: Number;
    tabsArray: string[];
    className?: string;
    position?: string;
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const ButtonTabs = (props: ButtonTabsProp) => {
    const dispatch = useDispatch();
    const { setSelectedTab, tabsArray, className, selectedTab, position } = props;

    const displayHeader = tabsArray.map((tabHeader, index) => {
        const uniqueKey = index + 1;
        return (
            <Tab
                key={uniqueKey}
                label={tabHeader}
                onClick={() => {
                    setSelectedTab(index);
                    if (position !== 'relative') {
                        dispatch(
                            updateScreenIdentifiers({
                                storeKey: STORE_KEYS.KEY_IDS,
                                uniqueScreenIdentifier: { tabId: index }
                            })
                        );
                    }
                }}
                wrapped
                {...a11yProps(index)}
            />
        );
    });

    let styles;
    position === 'fixed'
        ? (styles = {
              boxShadow:
                  '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 11px -15px 10px -23px rgb(0 0 0 / 12%)'
          })
        : (styles = { boxShadow: 'none' });
    return (
        <Box sx={{ bgcolor: 'background.paper' }} className="tabContainer">
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <AppBar
                    position={position === 'fixed' ? 'fixed' : 'relative'}
                    color="default"
                    style={styles}
                    className={position === 'fixed' ? 'tabAppBar' : 'unfixTabAppBar'}
                >
                    <Tabs
                        className={className}
                        value={selectedTab}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        aria-label="scrollable auto tabs example"
                    >
                        {displayHeader}
                    </Tabs>
                </AppBar>
            </Box>
        </Box>
    );
};

export default ButtonTabs;
