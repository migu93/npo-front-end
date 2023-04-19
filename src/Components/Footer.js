import { Box, Container, Grid, Typography } from '@mui/material';
import {useTheme} from "@mui/material/styles";
export default function Footer() {
    const theme = useTheme();
    return (
        <Box
            mt={5}
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                padding: '32px 0',
                borderTop: '1px solid #444',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography>123 Main Street</Typography>
                        <Typography>City, State 12345</Typography>
                        <Typography>Phone: (123) 456-7890</Typography>
                        <Typography>Email: info@example.com</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Services
                        </Typography>
                        <ul>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Typography>Twitter</Typography>
                        <Typography>Facebook</Typography>
                        <Typography>LinkedIn</Typography>
                        <Typography>Instagram</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
