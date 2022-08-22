import { shallow } from 'enzyme';
import Loader from './index';

describe('Loader', () => {
    describe('Loader snapshot', () => {
        it('should take Loader snapshot', () => {
            const component = shallow(<Loader />);
            expect(component).toMatchSnapshot();
        });
    });
});
