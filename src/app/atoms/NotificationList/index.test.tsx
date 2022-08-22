import { shallow } from 'enzyme';
import NotificationList from './index';

describe('<NotificationList />', () => {
    it('should take NotificationList snapshot', () => {
        const component = shallow(<NotificationList item={'Notificationvalues'} handleCloseUserMenu={() => {}} />);
        component.update();
        expect(component).toMatchSnapshot();
    });
});
