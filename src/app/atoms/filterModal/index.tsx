import Drawer from '../filterDrawer/index';
import { useState } from 'react';
import { Container } from '@mui/material';
import ADBButton from '../Button';
import Dropdown from '../DropDown/index';
import DatePicker from '../DatePicker/index';
import '../AssignmentModal/index.scss';
import './index.scss';

type Props = {
    drawerClose: any;
    toggleDrawer: Function;
    drawerState: { right: boolean };
    drawerHeader: string;
    isDropdown: boolean;
    isSingleDropdown?: boolean;
    dropdownProps?: any[];
    buttonsLabel: string[];
    buttonClick?: any;
    handleCancel?: any;
    isDateField: boolean;
    dateFieldProps?: any;
};

const FilterTable = (props: Props) => {
    const {
        drawerClose,
        drawerState,
        drawerHeader,
        dropdownProps,
        isDropdown,
        toggleDrawer,
        buttonsLabel,
        buttonClick,
        isDateField,
        dateFieldProps,
        handleCancel
    } = props;

    const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    const renderButtons = () => {
        return (
            <div className="btn-cancel-add" style={{ width: '100%', margin: '0 auto' }}>
                <ADBButton
                    name={buttonsLabel[0]}
                    handleClick={handleCancel}
                    secondary={true}
                    className="cancel-btn"
                    type="button"
                    variant="contained"
                    disabled={false}
                />
                <ADBButton
                    disabled={false}
                    name={buttonsLabel[1]}
                    handleClick={buttonClick}
                    type="button"
                    className="add-btn"
                    variant="contained"
                />
            </div>
        );
    };

    return (
        <Drawer
            status={drawerState}
            handlerOpen={toggleDrawer('right', true)}
            handlerClose={toggleDrawer('right', false)}
            drawerHeader={drawerHeader}
        >
            <Container>
                <div className="filter-modal">
                    {isDropdown &&
                        dropdownProps &&
                        dropdownProps.map((dropdownItem, index) => {
                            const arrKey = index + 1;
                            return (
                                <div key={arrKey} className="DropDown body">
                                    <Dropdown
                                        onChange={dropdownItem.onChange}
                                        name={dropdownItem.name}
                                        items={dropdownItem.items}
                                        label={dropdownItem.label}
                                        value={dropdownItem.value}
                                        fullWidth={true}
                                        disabled={dropdownItem.disabled ? dropdownItem.disabled : false}
                                    />
                                </div>
                            );
                        })}
                    {isDropdown ? (
                        <div>
                            <br />
                        </div>
                    ) : (
                        <br />
                    )}
                    {isDateField && (
                        <div className="filterDatepicker">
                            <DatePicker
                                value={dateFieldProps?.value}
                                handleChange={dateFieldProps?.onChange}
                                showLabel={true}
                            />
                        </div>
                    )}

                    <div className="assignment-modal">{renderButtons()}</div>
                </div>
            </Container>
        </Drawer>
    );
};

export default FilterTable;
