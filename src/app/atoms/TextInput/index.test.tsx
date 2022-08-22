import { shallow, mount } from 'enzyme';
import Input from './index';

describe('Input Component Tests', () => {
    it('Expects to add input in to the DOM', () => {
        const wrapper = shallow(<Input name="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check the length of the DOM', () => {
        const wrapper = shallow(<Input name="test" />);
        expect(wrapper.length).toEqual(1);
    });

    it('should check the value from input box', () => {
        const wrapper = mount(<Input defaultValue="testValue" name="edituser-name" />);

        expect(wrapper.props().defaultValue).toEqual('testValue');
    });

    it('should check Input box name and ID', () => {
        const wrapper = mount(<Input name="edituser-name" id="username" />);
        expect(wrapper.props().name).toEqual('edituser-name');
        expect(wrapper.props().id).toEqual('username');
    });

    it('should check empty Input box name and ID', () => {
        const wrapper = mount(<Input name="" id="" />);
        expect(wrapper.props().name).toEqual('');
        expect(wrapper.props().id).toEqual('');
    });

    it('should check the placeholder from input box', () => {
        const wrapper = mount(<Input placeholder="Username" name="edituser-name" />);
        expect(wrapper.props().placeholder).toEqual('Username');
    });

    it('should check empty placeholder from input box', () => {
        const wrapper = mount(<Input placeholder="" name="edituser-name" />);
        expect(wrapper.props().placeholder).toEqual('');
    });

    it('Expects to find button HTML element with className test in the DOM', () => {
        const wrapper = shallow(<Input formInput="test" type="text" />);
        expect(wrapper.find('WithStyles(ForwardRef(TextField)).test')).toHaveLength(1);
    });

    it('Expects to see the input type password', () => {
        const wrapper = mount(<Input formInput="test" type="password" />);
        expect(wrapper.props().type).toEqual('password');
    });

    it('Expects to see the input type text', () => {
        const wrapper = mount(<Input formInput="test" type="text" />);
        expect(wrapper.props().type).toEqual('text');
    });
    it('should take Textbox snapshot', () => {
        const component = shallow(
            <Input
                id={'test'}
                name={'input'}
                value={'input'}
                label={'input'}
                onChange={() => {}}
                helperText={''}
                maxLength={10}
                readOnly={false}
                disabled={false}
                inputRef={() => {}}
                placeholder={'test'}
                style={'test'}
                fullWidth={true}
                startAdornment={<img alt="startimg" />}
                endAdornment={<img alt="endimg" />}
                isIcon={false}
                className={'input'}
                formInput="test"
                type="text"
            />
        );
        component.update();
        expect(component).toMatchSnapshot();
    });
});
