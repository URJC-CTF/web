export default {
    modules: [
        {
            is_published: true,
            module: 1,
            name: 'OSINT y Estego',
            icon: 'hugeicons:earth', // https://icon-sets.iconify.design/hugeicons/earth/
            lessons: [
                'Introducción a los CTFs',
            ],
            slides: [
                {
                    name: 'Introducción al curso',
                    link: '/mod1/sesion0.pdf'
                },
                {
                    name: 'OSINT y Stego',
                    link: '/mod1/sesion1.pdf'
                }
            ],
            tools: [
                {
                    name: 'OSINT Framework',
                    link: 'https://osintframework.com'
                },
                {
                    name: 'Aperi Solve',
                    link: 'https://www.aperisolve.com',
                },
            ],
            resources: [
                {
                    name: 'Lo que sea',
                    link: 'https://links'
                }
            ]
        },

        {
            is_published: false,
            module: 2,
            name: 'Forense',
            icon: 'hugeicons:property-search',
            lessons: [
                'Análisis con wireshark',
            ],
            slides: [ 
                {
                    name: 'Análisis forense',
                    link: '/mod2/sesion1.pdf'
                }
            ],
            tools: [
                {
                    name: 'OSINT Framework',
                    link: 'https://osintframework.com'
                },
                {
                    name: 'Aperi Solve',
                    link: 'https://www.aperisolve.com',
                },
            ],
            resources: [
                {
                    name: 'Lo que sea',
                    link: 'https://links'
                }
            ]
        },

        {
            is_published: false,
            module: 3,
            name: 'Criptografía',
            icon: 'hugeicons:math',
            lessons: [
                'RSA',
            ],
            slides: [ 
                {
                    name: 'Análisis forense',
                    link: '/mod2/sesion1.pdf'
                }
            ],
            tools: [
                {
                    name: 'OSINT Framework',
                    link: 'https://osintframework.com'
                },
                {
                    name: 'Aperi Solve',
                    link: 'https://www.aperisolve.com',
                },
            ],
            resources: [
                {
                    name: 'Lo que sea',
                    link: 'https://links'
                }
            ]
        },

        {
            is_published: false,
            module: 4,
            name: 'Hacking Web',
            icon: 'hugeicons:web-security',
            lessons: [
                'Las partes de una URL',
                'Métodos HTTP',
                'Cookies',
                'IDOR',
                /*
                'Directory Traveresal / LFI',
                'XSS',
                'SQL Injection',
                'Command Injection'
                */
            ],
            slides: [ 
                {
                    name: 'Introducción a la Web',
                    link: '/mod4/sesion1.pdf'
                }
                /*
                {
                    name: 'Vulnerabilidades Web',
                    link: '/mod4/sesion2.pdf'
                }
                */
            ],
            tools: [
                {
                    name: 'BurpSuite',
                    link: 'https://portswigger.net/burp/releases/professional-community-2024-7-6?requestededition=community'
                },
                {
                    name: 'Insomnia',
                    link: 'https://insomnia.rest'
                }
            ],
            resources: [
                {
                    name: 'MDN Web Docs',
                    link: 'https://developer.mozilla.org/en-US/'
                },
                {
                    name: 'PortSwigger - Web Security Academy',
                    link: 'https://portswigger.net/web-security'
                }
            ]
        },

        {
            is_published: false,
            module: 5,
            name: 'Blockchain',
            icon: 'hugeicons:ethereum-rectangle',
            lessons: [
                'RSA',
            ],
            slides: [ 
                {
                    name: 'Análisis forense',
                    link: '/mod2/sesion1.pdf'
                }
            ],
            tools: [
                {
                    name: 'OSINT Framework',
                    link: 'https://osintframework.com'
                },
                {
                    name: 'Aperi Solve',
                    link: 'https://www.aperisolve.com',
                },
            ],
            resources: [
                {
                    name: 'Lo que sea',
                    link: 'https://links'
                }
            ]
        },

        {
            is_published: false,
            module: 6,
            name: 'Binary Exploitation',
            icon: 'hugeicons:binary-code',
            lessons: [
                'Heap Feng Shui',
            ],
            slides: [ 
                {
                    name: 'Análisis forense',
                    link: '/mod2/sesion1.pdf'
                }
            ],
            tools: [
                {
                    name: 'OSINT Framework',
                    link: 'https://osintframework.com'
                },
                {
                    name: 'Aperi Solve',
                    link: 'https://www.aperisolve.com',
                },
            ],
            resources: [
                {
                    name: 'Lo que sea',
                    link: 'https://links'
                }
            ]
        },

    ]
}