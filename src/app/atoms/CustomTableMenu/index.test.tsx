import { shallow } from 'enzyme';
import CustomTableMenu from './index';

describe('<CustomTableMenu />', () => {
    it('should take tablemenu snapshot', () => {
        const component = shallow(<CustomTableMenu click={() => {}} />);
        component.update();
        expect(component).toMatchSnapshot();
    });
});
