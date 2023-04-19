import {Grid, Typography} from "@mui/material";
import Carousel from "./Сarousel";

export default function Certificates() {

    const certificates = [
        {
            title: 'Certificate 1',
            imageUrl: '/path/to/certificate1.jpg',
            altText: 'Certificate 1',
            link: 'https://example.com/certificate1',
        },
        {
            title: 'Certificate 2',
            imageUrl: '/path/to/certificate2.jpg',
            altText: 'Certificate 2',
            link: 'https://example.com/certificate2',
        },
        // ... other certificates
    ];

    return (
        <div>
            <Typography mb={5} variant="h3" component="h3" gutterBottom>
                Сертификаты и лицензии
            </Typography>

            <Typography mb={5} variant="subtitle1" align="left" gutterBottom>
                Для организации работ компания обладает необходимыми лицензиями и сертификатами
            </Typography>

            <Grid container spacing={4} justifyContent="center" mb={10}>

                <Carousel/>
            </Grid>
        </div>
    );
}
