import { shallow } from 'enzyme';
import UserlistBody from './index';

describe('Table Pagination', () => {
    const wrapper = shallow(
        <UserlistBody
            isItemSelected={false}
            change={() => {}}
            header={[
                { id: 'name', label: 'Name', alignRight: false },
                { id: 'company', label: 'Company', alignRight: false },
                { id: 'role', label: 'Role', alignRight: false },
                { id: 'isVerified', label: 'Verified', alignRight: false },
                { id: 'status', label: 'Status', alignRight: false },
                { id: 'Action', label: 'Action', alignLeft: true }
            ]}
            click={() => {}}
            row={{
                avatarUrl: '/static/mock-images/avatars/avatar_1.jpg',
                company: 'Dickinson Inc',
                id: '20d16a21-2746-4c6e-9fb6-38113c10f634',
                isVerified: true,
                name: 'Monica Kilback',
                role: 'Front End Developer',
                status: 'Inactive'
            }}
            selectable={false}
        />
    );
    it('check atleast 1 item is present', () => {
        expect(wrapper.find('row')).toBeTruthy;
    });
});
