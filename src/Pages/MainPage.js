import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {Grid, Paper} from "@mui/material";


function MainPage() {
    return (
        <>
            <Box sx={{ bgcolor: 'primary.main', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" gutterBottom align="center" color="white">
                        ООО "НПО "Градиент"
                    </Typography>
                    <Typography variant="h5" align="center" color="white">
                        Professional Surveying, Topographic, and Geodetic Services
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ my: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, height: '100%' }}>
                            <Typography variant="h6" gutterBottom>
                                Our Services
                            </Typography>
                            <Typography>
                                NPO Gradient LLC provides a wide range of professional services, including:
                            </Typography>
                            <ul>
                                <li>Surveying, topographic and geodetic works</li>
                                <li>Remote sensing data processing</li>
                                <li>Laser scanning</li>
                                <li>Aerial photography</li>
                                <li>Automatic deformation monitoring</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, height: '100%' }}>
                            <Typography variant="h6" gutterBottom>
                                About Us
                            </Typography>
                            <Typography>
                                NPO Gradient LLC is a modern company that specializes in providing top-quality surveying, topographic, and geodetic services. Our experienced team of professionals is dedicated to delivering accurate and reliable results to meet the unique needs of our clients.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ bgcolor: 'secondary.main', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" gutterBottom align="center" color="white">
                        Get in Touch
                    </Typography>
                    <Typography variant="h6" align="center" color="white">
                        Contact us today to discuss your project and learn more about our services.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button variant="contained" color="primary" size="large">
                            Contact Us
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default MainPage;