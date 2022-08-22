import { shallow, mount } from 'enzyme';
import CheckBox from './index';

describe('Checkbox Component Tests', () => {
    it('Expects to add a checkbox in to the DOM', () => {
        const wrapper = shallow(<CheckBox name="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check the length of the DOM', () => {
        const wrapper = shallow(<CheckBox name="test" />);
        expect(wrapper.length).toEqual(1);
    });

    it('Expects to find Checkbox HTML element in the DOM', () => {
        const wrapper = mount(<CheckBox name="test" />);
        expect(wrapper.find('WithStyles(ForwardRef(Checkbox))').getElements().length).toEqual(1);
    });

    test('check the box', async () => {
        const wrapper = mount(<CheckBox name="test" />);
        const input = wrapper.find('input[type="checkbox"]');
        input.simulate('change', { target: { checked: true } });
    });

    it('should take checkbox snapshot', () => {
        const component = shallow(
            <CheckBox
                name={'test'}
                label={'test'}
                handleChange={() => {}}
                value={true}
                disabled={false}
                isChecked={false}
                className={'check'}
                containerClassName={'container'}
                labelPlacement={true}
            />
        );
        component.update();
        expect(component).toMatchSnapshot();
    });
});
