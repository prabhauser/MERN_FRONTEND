import { shallow } from 'enzyme';
import Footer from './Footer';
const props = {
    mail: '',
    copyRigth: '',
    phoneNumber: ''
};

describe('Footer bar', () => {
    const root = shallow(<Footer />);
    it('test the existence of mail props', () => {
        const wrapper = root.find('[data-testid="mail"]').at(0);
        expect(wrapper).toBeTruthy();
    });
    it('should take Footer snapshot', () => {
        const component = shallow(<Footer />);
        component.update();
        expect(component).toMatchSnapshot();
    });
    it('test the existence of copyRigth props', () => {
        const wrapper = root.find('[data-testid="copyRigth"]').at(0);
        expect(wrapper).toBeTruthy();
    });
    it('test the existence of phoneNumber props', () => {
        const wrapper = root.find('[data-testid="phoneNumber"]').at(0);
        expect(wrapper).toBeTruthy();
    });
});
