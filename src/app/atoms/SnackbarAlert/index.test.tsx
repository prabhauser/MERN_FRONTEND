import { shallow } from 'enzyme';
import SnackbarAlert from './index';

describe('SnackbarAlert', () => {
    describe('SnackbarAlert snapshot', () => {
        it('should take SnackbarAlert snapshot', () => {
            const component = shallow(
                <SnackbarAlert
                    className={'snackbar alert'}
                    image={<img alt="test" />}
                    options={'option'}
                    handleClose={() => {}}
                />
            );
            expect(component).toMatchSnapshot();
        });
    });
});
