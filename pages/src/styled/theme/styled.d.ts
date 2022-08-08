import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            family: string;
            weight: {
                medium: string;
                bold: string;
                xs: string;
            };
            size: {
                sm: string;
                xs: string;
                md: string;
                xss: string;
            };
            color: {
                primary: string;
                secondary: string;
                blue: {
                    blue_1: string;
                    blue_2: string;
                };
                red: {
                    red_1: string;
                    red_2: string;
                };
            }
        }
    }
}