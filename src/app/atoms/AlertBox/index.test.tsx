import { shallow } from 'enzyme';
import AlertBox from './index';

describe('AlertBox Component', () => {
    it('should take AlertBox snapshot', () => {
        const component = shallow(
            <AlertBox
                leftBtnPress={() => {}}
                rightBtnPress={() => {}}
                entityDetails={{ entityName: 'test', entityOld: 'test', entityNew: 'test' }}
                handleClose={() => {}}
                isOpen={false}
            />
        );
        expect(component).toMatchSnapshot();
    });
});
