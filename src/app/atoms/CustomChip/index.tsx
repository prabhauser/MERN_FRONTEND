import theme from '../../../utilities/theme/theme.module.scss';
import './styles.scss';
import { useEffect, useState } from 'react';

type CustomChipType = {
    all: boolean;
    active: boolean;
    inactive: boolean;
    values: Number[];
    allText?: any;
    activeText?: any;
    inactiveText?: any;
    dotRequired: boolean;
    click?: any;
    resetBadge?: boolean;
};

const RedDot = () => {
    return (
        <div
            style={{
                width: '10px',
                height: '10px',
                backgroundColor: `${theme.red}`,
                borderRadius: '50px',
                marginTop: '2px',
                marginRight: '7px'
            }}
        ></div>
    );
};

const GreenDot = () => {
    return (
        <div
            style={{
                width: '10px',
                height: '10px',
                backgroundColor: `${theme.green}`,
                borderRadius: '50px',
                marginTop: '2px',
                marginRight: '7px'
            }}
        ></div>
    );
};

const ColorChips = (props: CustomChipType) => {
    const {
        all,
        active,
        inactive,
        values,
        allText,
        activeText,
        inactiveText,
        dotRequired,
        click = () => {},
        resetBadge = false
    } = props;
    const [activeTile, setActiveTile] = useState<string>('All');

    useEffect(() => {
        if (resetBadge && all) {
            setActiveTile('All');
            // click('All');
        } else if (resetBadge && !all) {
            setActiveTile('Active');
        }
    });

    return (
        <div className="mainBadge">
            {all ? (
                <span
                    className={
                        activeTile == 'All' || activeTile == 'Health' || activeTile == '' ? 'badge' : 'badge whiteBadge'
                    }
                    onClick={() => {
                        setActiveTile('All');
                        click('All');
                    }}
                >
                    {allText ? allText : 'All'}
                    <span className="insideBadge">{values[0]}</span>
                </span>
            ) : null}

            {active ? (
                <span
                    className={activeTile == 'Active' || activeTile == 'Eduation' ? 'badge' : 'badge whiteBadge'}
                    onClick={() => {
                        setActiveTile('Active');
                        click('ACTIVE');
                    }}
                >
                    {dotRequired ? <GreenDot /> : null}
                    {activeText ? activeText : 'Active'}
                    <span className="insideBadge">{values[1]}</span>
                </span>
            ) : null}

            {inactive ? (
                <span
                    className={activeTile == 'Inactive' || activeTile == 'FDS' ? 'badge' : 'badge whiteBadge'}
                    onClick={() => {
                        setActiveTile('Inactive');
                        click('INACTIVE');
                    }}
                >
                    {dotRequired ? <RedDot /> : null}
                    {inactiveText ? inactiveText : 'Inactive'}
                    <span className="insideBadge">{values[2]}</span>
                </span>
            ) : null}
        </div>
    );
};
export default ColorChips;
