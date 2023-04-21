import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import schema from "../images/schem.jpg";
import Container from "@mui/material/Container";
import React from "react";

function ContactsPage() {
    return (
        <Container>
            <Typography variant="h4" mt={4} align='left' gutterBottom>
                Контакты
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
                Вы можете обратиться к нам по телефону, по электронной почте или договориться о встрече в нашем офисе. Будем рады помочь вам и ответить на все ваши вопросы.
            </Typography>
            <Typography my={3} variant='h5'>
                Адрес офиса в Волгограде:
            </Typography>
            <Typography my={3}>
                400001, г. Волгоград, ул. Канунникова, 6/1, помещение 1<br/>
                ост. Площадь Чекистов, офисное здание возле фабрики «Конфил».<br/>
                Время работы: с 8:30 до 17:30
            </Typography>
            <Typography>
                E-mail: office@npo-gradient.ru
            </Typography>
            <Typography mb={13}>
                Тел./Факс: +7 (8442) 60 55 30
            </Typography>
        </Container>
    );
}

export default ContactsPage;