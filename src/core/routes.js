export const routes = [
    {
        title: 'Home',
        route: '/',    },
    {
        title: 'Gallery',
        route: '',
        dropdown: [
            {
                title: 'All',
                route: '/gallery',
            },
            {
            title: 'Engagement',
            route: '/engagement',
        },
        {
            title: 'Wedding',
            route: '/wedding',
        },
            {
            title: 'Family',
            route: '/family',
        },
    ]

    },
    {
        title: 'About',
        route: '',
        dropdown: [
            {
                title: 'About Us',
                route: '/about-us',
        },
            {
                title: 'FAQs',
                route: '/faqs',
        },
        ]
    },
   
    {
        title: 'Contact',
        route: '/contact',
    },
]