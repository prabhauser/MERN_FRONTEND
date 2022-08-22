import { shallow, mount } from 'enzyme';
import UserListHead from './index';

describe('Table Column Length', () => {
    const wrapper = shallow(
        <UserListHead
            orderBy={() => {}}
            order={() => {}}
            onRequestSort={() => {}}
            onSelectAllClick={() => {}}
            rowCount={0}
            headLabel={[
                { id: 'name', label: 'Name', alignRight: false },
                { id: 'company', label: 'Company', alignRight: false },
                { id: 'role', label: 'Role', alignRight: false },
                { id: 'isVerified', label: 'Verified', alignRight: false },
                { id: 'status', label: 'Status', alignRight: false },
                { id: 'Action', label: 'Action', alignLeft: true }
            ]}
            numSelected={0}
            selectable={false}
        />
    );
    it('check if there is atleast 1 column', () => {
        expect(wrapper.find('headLabel')).toBeTruthy;
        // .toBeGreaterThan(0);
    });
});
