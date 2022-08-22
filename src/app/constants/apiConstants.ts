export let BASEURL = process.env.REACT_APP_API_URL;

BASEURL = BASEURL ? BASEURL : 'http://18.142.59.41/adb-dev-server/api';

export const APIErrorMsg = 'Something went wrong';
export const APINwErrorMsg = 'Internal Server Error';
export const InvalidLogin = 'Invalid User ID or password';

export const APIURL = {
    LOGIN: `${BASEURL}/users/login`,
    AWS_DATA_USING_ACTION_CODE: `${BASEURL}/startExecution?`
};

export const GET_AWS_APIURL = (screenCode: string, actionCode: string) => {
    const url = new window.URL(APIURL.AWS_DATA_USING_ACTION_CODE);
    url.searchParams.set('screenCode', screenCode);
    url.searchParams.set('actionCode', actionCode);
    //return url.href;
    return url.toString();
};
