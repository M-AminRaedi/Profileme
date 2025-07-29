import { Helmet } from 'react-helmet-async';

// آرایه‌ای از متادیتاها برای هر صفحه
const pageMetaData = [
    {
        title: 'صفحه نخست',
        description: 'این صفحه اصلی وبسایت است.',
        ogImage: '/images/home-og.jpg', // اختیاری
    },
    {
        title: 'درباره من',
        description: 'اطلاعات درباره من و مهارت‌هایم.',
        ogImage: '/images/about-og.jpg',
    },
    {
        title: 'رزومه من',
        description: 'رزومه حرفه‌ای من.',
        ogImage: '/images/resume-og.jpg',
    },
    {
        title: ' نمونه کارهای من',
        description: 'نمونه‌کارهای من در این صفحه نمایش داده می‌شود.',
        ogImage: '/images/work-og.jpg',
    },
    {
        title: 'نظرات و کامنت ها',
        description: 'نظرات کاربران درباره من.',
        ogImage: '/images/comments-og.jpg',
    },
    {
        title: 'ارتباط با ما',
        description: 'برای تماس با من از این صفحه استفاده کنید.',
        ogImage: '/images/contact-og.jpg',
    },
];

const HelmetPage = ({ pageNumber }) => {
    return (
        <Helmet>
            <title>{pageMetaData[pageNumber].title}</title>
            <meta name="description" content={pageMetaData[pageNumber].description} />
            {pageMetaData[pageNumber].ogImage && (
                <meta property="og:image" content={pageMetaData[pageNumber].ogImage} />
            )}
        </Helmet>
    );
};

export default HelmetPage;