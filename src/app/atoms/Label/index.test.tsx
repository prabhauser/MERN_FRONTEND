import { shallow, mount } from 'enzyme';
import Label from './index';

describe('Input Component Tests', () => {
    it('Expects to add input in to the DOM', () => {
        const wrapper = shallow(<Label label="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check the length of the DOM', () => {
        const wrapper = shallow(<Label label="test" />);
        expect(wrapper.length).toEqual(1);
    });
    it('should take Label snapshot', () => {
        const component = shallow(<Label label="test" className="test" />);
        component.update();
        expect(component).toMatchSnapshot();
    });
});
