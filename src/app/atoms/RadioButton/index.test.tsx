import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import RadioButton from './index';

describe('Radio Button Component', () => {
    it('Radio Button Screen snapshot', () => {
        const component = shallow(<RadioButton options={['first', 'second']} />);
        expect(component).toMatchSnapshot();
    });

    it('Radio button label should be in DOM', () => {
        const test1 = { title: 'Radio Label' };
        const test2 = {
            title: 'Test2'
        };

        const { getByText, queryByText } = render(<RadioButton options={['first', 'second']} label={test1.title} />);

        expect(getByText(test1.title)).toBeInTheDocument();
        expect(queryByText(test2.title)).toBeNull();
    });
});
