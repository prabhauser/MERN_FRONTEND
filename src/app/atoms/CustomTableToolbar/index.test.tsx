import { shallow, mount } from 'enzyme';
import UserListToolbar from './index';

describe('Table Toolbar', () => {
    const wrapper = shallow(
        <UserListToolbar
            numSelected={0}
            onFilterName={() => {}}
            drawerOpen={undefined}
            displayInput={true}
            text={{ title: 'Total Municipal Links', subTitle: '50 Supervisors' }}
            filterName={''}
        />
    );
    it('Expects to add input in to the DOM', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
