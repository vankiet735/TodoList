import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
    font: {
        family: `'Open Sans', sans-serif`,
        weight: {
            medium: '500',
            bold: '700',
            xs: '300',
        },
        size: {
            sm: '14px',
            xs: '12px',
            xss: '16px',
            md: '18px'
        },
        color: {
            primary: '#f5222d',
            secondary: '#52c41a',
            blue: {
                blue_1: '#0000FF',
                blue_2: '#0000EE'
            },
            red: {
                red_1: '#FF3030',
                red_2: 'yellow'
            }
        }
    }
};

export default Theme;