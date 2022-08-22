import { shallow } from 'enzyme';
import DatePicker from './index';

describe('<DatePicker />', () => {
    it('should take DatePicker snapshot', () => {
        const component = shallow(<DatePicker />);
        component.update();
        expect(component).toMatchSnapshot();
    });
});
