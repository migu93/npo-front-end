import {Grid, Typography} from "@mui/material";
import Carousel2 from "./Carousel2";

export default function Certificates() {


    return (
        <div>
            <Typography mb={5} variant="h3" component="h3" gutterBottom>
                Сертификаты и лицензии
            </Typography>

            <Typography mb={5} variant="subtitle1" align="left" gutterBottom>
                Для организации работ компания обладает необходимыми лицензиями и сертификатами
            </Typography>

            <Grid container spacing={4} justifyContent="center" mb={10}>

                <Carousel2/>
            </Grid>
        </div>
    );
}
