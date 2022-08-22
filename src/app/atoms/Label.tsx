import { alpha, styled } from '@mui/material/styles';

type LabelType = {
    children?: any;
    color: 'default' | 'primary' | 'synced' | 'info' | 'success' | 'warning' | 'error' | 'rejected';
    variant: 'filled' | 'outlined' | 'ghost';
};

type RootStyleType = {
    ownerState: {
        color: LabelType['color'];
        variant: LabelType['variant'];
    };
};

const RootStyle = styled('span')((props: RootStyleType) => {
    const { color, variant } = props.ownerState;

    const styleGhost = (colorVal: string) => {
        if (colorVal === 'error') {
            return {
                color: '#d32f2f',
                backgroundColor: alpha('#f44336', 0.16)
            };
        } else if (colorVal === 'success') {
            return {
                color: '#388e3c',
                backgroundColor: alpha('#4caf50', 0.16)
            };
        } else if (colorVal === 'warning') {
            //for Approval pending status in requests
            return {
                color: '#EB7725',
                backgroundColor: '#FFE9DA'
            };
        } else if (colorVal === 'synced') {
            return {
                color: '#00B5D0',
                backgroundColor: '#C1F7FF'
            };
        } else if (colorVal === 'rejected') {
            return {
                color: '#D0021B',
                backgroundColor: '#FFE6E9'
            };
        }
    };

    return {
        height: 22,
        minWidth: 22,
        lineHeight: 0,
        borderRadius: 8,
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: '0px 8px',
        color: '#424242',
        fontSize: '0.75rem',
        fontFamily: 'poppins',
        backgroundColor: '#e0e0e0',
        fontWeight: 700,

        ...(color !== 'default'
            ? {
                  ...(variant === 'ghost' && { ...styleGhost(color) })
              }
            : {
                  ...(variant === 'outlined' && {
                      backgroundColor: 'transparent',
                      color: 'rgba(0, 0, 0, 0.87)',
                      border: '1px solid #9e9e9e'
                  }),
                  ...(variant === 'ghost' && {
                      color: 'rgba(0, 0, 0, 0.54)',
                      backgroundColor: '#9e9e9e'
                  })
              })
    };
});

export default function Label(props: LabelType) {
    const { color = 'default', variant = 'ghost', children, ...other } = props;
    return (
        <RootStyle ownerState={{ color, variant }} {...other}>
            {children}
        </RootStyle>
    );
}
