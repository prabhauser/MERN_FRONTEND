import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import DropDown from './index';

describe('DropDown', () => {
    describe('DropDown snapshot', () => {
        it('should take DropDown snapshot', () => {
            const component = shallow(
                <DropDown
                    label={'test'}
                    value={'test'}
                    items={[
                        { label: '1', value: '1' },
                        { label: '2', value: '2' },
                        { label: '3', value: '3' },
                        { label: '4', value: '4' }
                    ]}
                    style={'test'}
                    className={'dropdown'}
                    endAdornment={<img alt="test" />}
                    startAdornment={<img alt="test" />}
                    type={'string'}
                    required={false}
                    helperText={''}
                    variant={'outlined'}
                    control={() => {}}
                    isIcon={false}
                    onChange={() => {}}
                    name={'test'}
                />
            );
            expect(component).toMatchSnapshot();
        });
    });
    describe('Dropdown should have the label text', () => {
        const { getByText } = render(<DropDown label={'Test Dropdown'} onChange={() => {}} name={'test'} />);
        expect(getByText('Test Dropdown')).toBeInTheDocument();
    });
});
