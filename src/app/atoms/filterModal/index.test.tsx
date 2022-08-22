import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import FilterTable from './index';

describe('Table Drawer', () => {
    type Anchor = 'right';
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
    };
    // const [provinceValue, setProvinceValue] = React.useState();
    const provinceArray = [
        { label: 'Abra', value: 'Abra' },
        { label: 'Bataan', value: 'Bataan' },
        { label: 'Catanduanes', value: 'Catanduanes' },
        { label: 'Gulmaras', value: 'Gulmaras' }
    ];
    const provinceObj = {
        name: '',
        items: provinceArray,
        label: 'Select Province',
        value: '',
        onChange: () => {}
    };
    const dropdownArray = [provinceObj];
    const wrapper = shallow(
        <FilterTable
            isDropdown={true}
            isSingleDropdown={false}
            drawerHeader={'Filters'}
            toggleDrawer={toggleDrawer}
            drawerClose={toggleDrawer('right', false)}
            drawerState={{ right: false }}
            buttonsLabel={['Cancel', 'Apply']}
            dropdownProps={dropdownArray}
        />
    );
    it('should have header', () => {
        expect(wrapper.find('drawerHeader')).toBeTruthy;
    });
    it('should have dropdownprops', () => {
        expect(wrapper.find('dropdownProps')).toBeRequired;
    });
});
