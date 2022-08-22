import { shallow, mount } from 'enzyme';
import User from './index';

describe('Table body and header check', () => {
    const wrapper = shallow(
        <User
            selectable={false}
            headers={[
                { id: 'name', label: 'Name', alignRight: false },
                { id: 'company', label: 'Company', alignRight: false },
                { id: 'role', label: 'Role', alignRight: false },
                { id: 'isVerified', label: 'Verified', alignRight: false },
                { id: 'status', label: 'Status', alignRight: false },
                { id: 'Action', label: 'Action', alignLeft: true }
            ]}
            body={[
                {
                    avatarUrl: '/static/mock-images/avatars/avatar_1.jpg',
                    company: 'Dickinson Inc',
                    id: '20d16a21-2746-4c6e-9fb6-38113c10f634',
                    isVerified: true,
                    name: 'Monica Kilback',
                    role: 'Front End Developer',
                    status: 'Inactive'
                }
            ]}
            filteredUsers={[
                {
                    avatarUrl: '/static/mock-images/avatars/avatar_1.jpg',
                    company: 'Dickinson Inc',
                    id: '20d16a21-2746-4c6e-9fb6-38113c10f634',
                    isVerified: true,
                    name: 'Monica Kilback',
                    role: 'Front End Developer',
                    status: 'Inactive'
                }
            ]}
            filterName={''}
            orderBy={undefined}
            order={undefined}
            onRequestSort={() => {}}
            onSelectAllClick={() => {}}
            rowCount={0}
            page={0}
            setPageNumber={() => {}}
            selected={[]}
            onPageChange={() => {}}
            rowChange={() => {}}
            selectRow={() => {}}
        />
    );
    it('shows table body and headers', () => {
        expect(wrapper.find('body')).toBeTruthy;
        expect(wrapper.find('headers')).toBeTruthy;
    });
});
