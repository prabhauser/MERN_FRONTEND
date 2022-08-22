import { shallow } from 'enzyme';
import ManuList from './index';

describe('MenuList', () => {
    describe('MenuList snapshot', () => {
        it('should take MenuList snapshot', () => {
            const component = shallow(<ManuList itemsArray={[]} openMenuList={() => {}} />);
            expect(component).toMatchSnapshot();
        });
    });
});
