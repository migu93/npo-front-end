// src/YandexMap.js
import React, { useEffect, useRef } from 'react';

const YandexMap = ({ center, zoom, placemark }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const { ymaps } = window;

        ymaps.ready(() => {
            const map = new ymaps.Map(mapContainer.current, {
                center,
                zoom,
            });

            const officePlacemark = new ymaps.Placemark(placemark, {
                balloonContent: 'Our Office',
            });

            map.geoObjects.add(officePlacemark);
        });
    }, [center, zoom, placemark]);

    return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default YandexMap;
