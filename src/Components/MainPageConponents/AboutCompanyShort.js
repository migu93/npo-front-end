import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import ActionAreaCard from "./ActionAreaCard";
import monitoring from '../../images/monitoring.png'
import laserScan from '../../images/LaserScan.jpg'
import basedStantion from '../../images/basedStantion.png'
import AirPhoto from '../../images/AirPhoto.png'
const AboutCompany = () => {
    const features = [
        {
            title: 'Innovation',
            description: 'We constantly strive to bring new and creative ideas to life.',
        },
        {
            title: 'Quality',
            description: 'We focus on delivering high-quality products and services.',
        },
        {
            title: 'Teamwork',
            description: 'Our team collaborates and supports each other to achieve success.',
        },
        {
            title: 'Customer Focus',
            description: 'We put our customers first, ensuring their satisfaction is our top priority.',
        },
    ];

    const FeatureBox = styled(Paper)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3),
        minHeight: 220,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }));

    return (
            <Box sx={{ py: 8 }}>
                <Typography variant="h3" align="left" gutterBottom>
                    О компании
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                    ООО «НПО «Градиент» - это современная компания, которая оказывает профессиональные услуги по выполнению маркшейдерских, топографо-геодезических работ, обработке данных дистанционного зондирования, лазерного сканирования, а также аэрофотосъёмки и автоматического деформационного мониторинга.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Автоматический мониторинг'}
                                        altText={'Автоматический мониторинг'}
                                        description={'Автоматический мониторинг'}
                                        imageUrl={monitoring}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Аэрофотосъемка'}
                                        altText={'Аэрофотосъемка'}
                                        description={'Аэрофотосъемка'}
                                        imageUrl={AirPhoto}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Лазерное сканирование'}
                                        altText={'Лазерное сканирование'}
                                        description={'Лазерное сканирование'}
                                        imageUrl={laserScan}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Базовые станции'}
                                        altText={'Базовые станции'}
                                        description={'Базовые станции'}
                                        imageUrl={basedStantion}/>
                    </Grid>
                </Grid>
        </Box>
    );
};

export default AboutCompany;
