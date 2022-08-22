import { FC } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Router from './router/index';

const theme = createTheme({
    typography: {
        fontFamily: ['Poppins'].join(',')
    }
});

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="app-container">
                <Router />
            </div>
        </ThemeProvider>
    );
};

export default App;
