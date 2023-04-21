import React from 'react';
import BlogPost from "./BlogPost";
import image from '../../../images/monitoring.png'
import image2 from '../../../images/blog-post-img.png'

const AutomaticScanningPost = ({ post }) => {
    const content = [
        {
            type: 'paragraph',
            text: 'ООО «НПО «Градиент» уже 5 лет осуществляет Спутниковый автоматический мониторинг осадок и деформаций морских ледостойких стационарных платформ, расположенных в Каспийском море для ООО «ЛУКОЙЛ-НИЖНЕВОЛЖСКНЕФТЬ».',
        },
        {
            type: 'subheading',
            text: 'Важность мониторинга деформаций',
        },
        {
            type: 'paragraph',
            text: 'При произвольном пространственном воздействии нагрузок, воздействующих на морскую платформу, возникают деформации конструкции на изгиб, сдвиг и кручение, которые могут стать причиной повреждений конструктивных элементов и коммуникаций, нарушения целостности конструкции, повлиять на работу оборудования. Следовательно, важно проводить мониторинг и оценку величины деформации ледостойких платформ с целью определения величины допустимой степени повреждения конструкции для снижения вероятности аварий и обеспечения допустимого уровня безопасности. Мониторинг технического состояния должен выполняться в течение всего расчетного срока службы конструкции.',
        },

        {
            type: 'paragraph',
            text: 'Для мониторинга деформаций и осадок в режиме реального времени начиная с 2014 года смонтирована и введена в работу система спутникового мониторинга, состоящая из трех геодезических приемников Leica, которые установлены на трех углах платформы. Они в автоматическом режиме выполняют непрерывные спутниковые наблюдения и формируют суточные файлы измерений. Настройка и управление приёмниками осуществляется дистанционно с помощью программного обеспечения Leica GNSS Spider.',
        },
        {
            type: 'paragraph',
            text: 'Относительно одного из спутниковых приемников находящегося на ледостойкой платформе, назначенного в качестве базового, вычисляются ежесекундно трехмерные координаты смещений точек антенн на платформе. По каждой из антенн относительно базового приемника программой выполняется проверка по трем положениям – высота, плановое положение и планово-высотное положение. Точность определения смещений в режиме реального времени составляет от 50-70мм.',
        },
        {
            type: 'paragraph',
            text: 'При постобработке измерений в обработку загружаются 24-х часовые данные измерений и файлы точных эфемерид. Уравнивание сети выполняется относительно IGS – станций. Суть данного метода определения деформаций сводится к контролю смещений антенн спутниковых приемников ледостойкой платформы относительно IGS-станций. Точность определения деформаций 50-70 мм.',
        },
        {
            type: 'paragraph',
            text: 'Для высокоточного определения смещений и деформаций ледостойких платформ компания ООО «НПО «Градиент» создала и запатентовала программу Спутникового автоматического деформационного мониторинга (САДМ). САДМ использует программное обеспечение Bernese GPS и алгоритмы обработки спутниковых данных для получения высокоточных и надежных результатов даже при сверхдлинных базовых линиях. Программное обеспечение Bernese GPS широко используется в научной среде для определения координат, параметров орбит, изучения ионосферы, тропосферы, движения земной коры и определения множества других параметров и отвечает наивысшим стандартам качества в области высокоточной спутниковой геодезии. Передача файлов данных со спутниковых приемников ледостойких платформ осуществляется на специальный сервер.  Мониторинг выполняется круглосуточно в полностью автоматизированном режиме, с дискретностью 4 часа.',
        },
        {
            type: 'paragraph',
            text: 'Система спутникового мониторинга функционирует как сервис, что позволяет избежать сложной настрой программного обеспечения, обучения персонала и поддержки системы в работоспособном состоянии.',
        },
        {
            type: 'subheading',
            text: 'Наши проекты'
        },
        {
            type: 'image',
            url: image2,
            alt: 'Example image',
        },
        {
            type: 'subheading',
            text: '2016-2022',
        },
        {
            type: 'paragraph',
            text: 'Выполнение работ по спутниковому мониторингу смещений и осадок Морского ледостойкого стационарного комплекса-1 и Морского ледостойкого стационарного комплекса -2 им. В. Филановского.',
        },
        {
            type: 'paragraph',
            text: 'Выполнение работ по спутниковому мониторингу смещений и осадок Морского ледостойкого стационарного комплекса и Блок кондуктора им. Ю. Корчагина.',
        },

    ];

    return (
        <BlogPost
            title="Автоматическое сканирование"
            content={content}
            imageUrl={image}
            date="April 20, 2023"
        />
    );
};


export default AutomaticScanningPost;
