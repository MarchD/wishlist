import { createTheme } from '@mui/material'
import { grey, teal } from '@mui/material/colors'

export const themeMaterial = createTheme({
    palette: {
        background: {
            default: grey[50]
        },
        primary: {
            main: teal[500]
        }
    },
    typography: {
        fontFamily: '"Montserrat", "Helvetica", "sans-serif"',
        fontSize: 16,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '&:last-child': {
                        paddingBottom: 0,
                    },
                },
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                },
                gutters: {

                }

            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    border: '1px solid',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)'
                },
                content: {
                    display: 'flex',
                    justifyContent: 'space-between'
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '16px 0'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid #000'
                }
            }
        }
    },
})
