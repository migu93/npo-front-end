import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MainPageExpirienceBlock from "../Components/MainPageConponents/MainPageExpirienceBlock";
import AboutCompanyShort from "../Components/MainPageConponents/AboutCompanyShort";
import Certificates from "../Components/MainPageConponents/SerteficationsBlock";
import Customers from "../Components/MainPageConponents/Our-customers";

function MainPage() {
    return (
        <>
            <Box color={'black'} sx={{py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" gutterBottom align="center">
                        ООО "НПО "Градиент"
                    </Typography>
                    <Typography variant="h5" align="center" color="white">
                        «Научно-производственное объединение «Градиент»
                    </Typography>
                </Container>
            </Box>

            <MainPageExpirienceBlock/>
            <Container>
                <AboutCompanyShort/>
                <Certificates/>
                <Customers/>
            </Container>
        </>
    );
}

export default MainPage;