import ButtonTabs from './index';

type Props = {
    navigateTab: Function;
    tabsArray: string[];
    currTab: Number;
    setCurrTab: Function;
    className?: string;
    position?: string;
};

const MapCustomTabs = (props: Props) => {
    const { tabsArray, currTab, setCurrTab, navigateTab, className, position } = props;
    return (
        <div className="pad-cont-10">
            <ButtonTabs
                tabsArray={tabsArray}
                selectedTab={currTab}
                setSelectedTab={setCurrTab}
                className={className}
                position={position}
            />
            {navigateTab()}
        </div>
    );
};

export default MapCustomTabs;
