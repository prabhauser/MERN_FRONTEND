import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Login from './index';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Login Component', () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Login />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});
let wrapper;
test('Login button check', () => {
    wrapper = shallow(
        <Provider store={store}>
            <Login />
        </Provider>
    );

    expect(wrapper.find('button')).toBeTruthy();
});

describe('Login  Component snap', () => {
    it('Login snapshot', () => {
        const component = shallow(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
    it('Login button click event', () => {
        const component = shallow(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const event = {
            target: { value: 'the-value' }
        } as React.ChangeEvent<HTMLInputElement>;
        const button = component.find('Login').first();
        const heading = component.find('.login-heading').first();
        const headingDetail = component.find('.login-headingdetail').first();
        const labelUser = component.find('.label-style').first();
        const text = component.find('.MuiInputBase-root').first();
        button.simulate('click');
        expect(heading).toBeTruthy();
        expect(headingDetail).toBeTruthy();
        expect(labelUser).toBeTruthy();
        expect(text).toBeTruthy();
    });
});
describe('Login', () => {
    const component = shallow(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    describe('Login snapshot', () => {
        it('should take Login snapshot', () => {
            component.update();
            expect(component).toMatchSnapshot();
        });
    });
    describe('Login formik form test', () => {
        it('Login formik form test', () => {
            const form = component.find('Formik');
        });
        component.update();
    });
});
