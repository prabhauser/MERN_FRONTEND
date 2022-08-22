import { shallow } from 'enzyme';
import ButtonTab from './index';

describe('ButtonTab', () => {
    describe('ButtonTab snapshot', () => {
        const tabsArray = [
            'Supervisors',
            'Municipal Links(ML)',
            'SWA',
            'Health Facilities',
            'Educational Facilities',
            'Households'
        ];
        it('should take ButtonTab snapshot', () => {
            const component = shallow(
                <ButtonTab tabsArray={tabsArray} setSelectedTab={() => void 0} selectedTab={0} />
            );
            expect(component).toMatchSnapshot();
        });
    });
});
