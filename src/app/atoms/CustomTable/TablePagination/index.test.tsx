import { shallow } from 'enzyme';
import TablePaginationActions from './index';

describe('Table Pagination', () => {
    const wrapper = shallow(
        <TablePaginationActions count={0} page={0} rowsPerPage={0} onPageChange={() => {}} setPageNumber={() => {}} />
    );
    it('check atleast 1 item is present', () => {
        expect(wrapper.find('count')).toBeTruthy;
    });
    it('Check the length of the DOM', () => {
        expect(wrapper.length).toEqual(1);
    });
    it('should take Table snaapshot', () => {
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
    });
});
