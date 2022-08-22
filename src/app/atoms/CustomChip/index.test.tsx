import { shallow, mount } from 'enzyme';
import CustomChip from './index';
import { render, screen } from '@testing-library/react';

describe('CustomChip Component Tests', () => {
    it('should take CustomChip snapshot', () => {
        const component = shallow(
            <CustomChip all={true} active={active} inactive={inactive} values={values} dotRequired={false} />
        );
        component.update();
        expect(component).toMatchSnapshot();
    });
    let all = true;
    let active = false;
    let inactive = false;
    const values = [10, 20, 30];
    it('Expects to have All chip in the DOM', () => {
        render(<CustomChip all={true} active={active} inactive={inactive} values={values} dotRequired={false} />);
        const element = screen.getByText(/All/i);
        expect(element).toBeInTheDocument();
    });
    all = false;
    active = true;
    inactive = false;
    it('Expects to have Active chip in the DOM', () => {
        render(<CustomChip all={true} active={active} inactive={inactive} values={values} dotRequired={false} />);
        const element = screen.getByText(/Active/i);
        expect(element).toBeInTheDocument();
    });
    all = false;
    active = false;
    inactive = true;
    it('Expects to have Inactive chip in the DOM', () => {
        render(<CustomChip all={true} active={active} inactive={inactive} values={values} dotRequired={false} />);
        const element = screen.getByText(/Inactive/i);
        expect(element).toBeInTheDocument();
    });
    all = true;
    active = false;
    inactive = true;
    it('Expects to have both All and Inactive chips in the DOM', () => {
        render(<CustomChip all={true} active={active} inactive={inactive} values={values} dotRequired={false} />);
        const allElement = screen.getByText(/All/i);
        const inactiveElement = screen.getByText(/Inactive/i);
        expect(allElement).toBeInTheDocument();
        expect(inactiveElement).toBeInTheDocument();
    });
});
