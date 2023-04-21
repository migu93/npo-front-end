import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import schema from '../images/schem.jpg'
import React from "react";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";

function AboutUsPage() {
    return (
        <Container>
            <Typography variant="h4" mt={4} align='left' gutterBottom>
                О компании
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
                ООО «НПО «Градиент» - это современная компания, которая оказывает профессиональные услуги по выполнению маркшейдерских, топографо-геодезических работ, обработке данных дистанционного зондирования, лазерного сканирования, а также аэрофотосъёмки и автоматического деформационного мониторинга.
            </Typography>
            <Typography>
                Система менеджмента качества инженерных изысканий сертифицирована по ГOCT ISO 9001-2011 (ISO 9001:2008).
                Штат предприятия укомплектован квалифицированными специалистами, обученными и аттестованными в соответствии с требованиями законодательства РФ, Ростехнадзора России и других надзорных органов.
                Компания придает большое значение и уделяет много внимания обучению и повышению квалификации сотрудников. При производстве работ нами используется только современное оборудование и программное обеспечение Leica Geosystems, что способствует оказанию качественных услуг в сфере маркшейдерии и геодезии.
            </Typography>
            <Box my={3} display={'flex'} justifyContent={'center'}>
                <img src={schema} width={700}></img>
            </Box>
        </Container>
    );
}

export default AboutUsPage;