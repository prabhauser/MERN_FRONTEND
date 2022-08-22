import createReducer from './reducers';

test('should return the initial state', () => {
    const state = createReducer({
        isLoading: false,
        err: null,
        response: {}
    });
    expect(state).toBeTruthy();
});
