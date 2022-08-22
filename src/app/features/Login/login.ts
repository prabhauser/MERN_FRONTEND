const formValidations = [
    {
        id: 'userName',
        validationType: 'string',
        rules: [
            {
                type: 'required',
                params: ['Please enter Username']
            },
            {
                type: 'max',
                params: [30, 'Username should be max 30 characters']
            }
        ]
    },
    {
        id: 'password',
        validationType: 'string',
        rules: [
            {
                type: 'required',
                params: ['Please enter Password']
            },
            {
                type: 'max',
                params: [50, 'Password length should be max 50 characters']
            }
        ]
    }
];

export { formValidations };
