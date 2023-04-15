import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MainPageExpirienceBlock from "../Components/MainPageExpirienceBlock";
import Carousel from "../Components/Сarousel";


function MainPage() {
    return (
        <>
            <Box sx={{ bgcolor: 'primary.main', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" gutterBottom align="center" color="white">
                        ООО "НПО "Градиент"
                    </Typography>
                    <Typography variant="h5" align="center" color="white">
                        «Научно-производственное объединение «Градиент»
                    </Typography>
                </Container>
            </Box>

            <Carousel/>

            <MainPageExpirienceBlock/>

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