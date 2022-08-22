import { shallow } from 'enzyme';
import StatusCard from './StatusCard';
const props = {
    totalV: { count: '0', handleClick: () => {} },
    busV: { count: '0', handleClick: () => {} },
    cvsV: { count: '0', handleClick: () => {} },
    createdV: { count: '0', handleClick: () => {} }
};

describe('status card', () => {
    const root = shallow(<StatusCard {...props} />);
    it('test the existence of TotalV props', () => {
        const wrapper = root.find('[data-testid="totalV"]').at(0);
        expect(wrapper).toBeTruthy();
    });
    it('test the existence of busV props', () => {
        const wrapper = root.find('[data-testid="busV"]').at(0);
        expect(wrapper).toBeTruthy();
    });
    it('test the existence of cvsV props', () => {
        const wrapper = root.find('[data-testid="cvsV"]').at(0);
        expect(wrapper).toBeTruthy();
    });
    it('test the existence of createdV props', () => {
        const wrapper = root.find('[data-testid="createdV"]').at(0);
        expect(wrapper).toBeTruthy();
    });
});
