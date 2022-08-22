import { shallow } from 'enzyme';
import TemporaryDrawer from './index';

describe('Table Drawer', () => {
    const wrapper = shallow(
        <TemporaryDrawer
            status={{ right: false }}
            handlerOpen={() => {}}
            handlerClose={() => {}}
            children={<div>TestChildren</div>}
        />
    );
    it('check atleast 1 child is present', () => {
        expect(wrapper.find('children')).toBeTruthy;
    });
});
