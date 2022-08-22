import { shallow, mount } from 'enzyme';
import ADBButton from './index';

describe('<ADBButton />', () => {
    it('Expects to add a button in to the DOM', () => {
        const wrapper = shallow(<ADBButton name="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check the length of the DOM', () => {
        const wrapper = shallow(<ADBButton name="test" />);
        expect(wrapper.length).toEqual(1);
    });

    it('Expects to find button HTML element with className test in the DOM', () => {
        const wrapper = mount(
            <ADBButton
                secondary={false}
                isShowEndIcon={false}
                formInput={'test'}
                fullWidth={true}
                isShowStartIcon={false}
                disabled={true}
                name="test"
                className="test"
                type="submit"
                StartIconArrow={'test'}
            />
        );
        expect(wrapper.find('button.test')).toHaveLength(1);
    });
    it('should take Button snapshot', () => {
        const component = shallow(<ADBButton name="test" className="test" type="submit" />);
        component.update();
        expect(component).toMatchSnapshot();
    });
});
