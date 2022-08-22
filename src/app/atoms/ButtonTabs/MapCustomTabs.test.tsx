import { shallow } from 'enzyme';
import MapCustomTabs from './MapCustomTabs';

describe('MapCustomTabs', () => {
    describe('MapCustomTabs snapshot', () => {
        const tabsArray = [
            'Supervisors',
            'Municipal Links(ML)',
            'SWA',
            'Health Facilities',
            'Educational Facilities',
            'Households'
        ];
        it('should take customtab snapshot', () => {
            const component = shallow(
                <MapCustomTabs
                    tabsArray={tabsArray}
                    navigateTab={() => void 0}
                    currTab={0}
                    setCurrTab={() => {}}
                    className={'test'}
                    position={'relative'}
                />
            );
            expect(component).toMatchSnapshot();
        });
    });
});
