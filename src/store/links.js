const links = {
    state: {
        header: {
            link: "/",
            icon: "Logo.svg",
        },
        footer: {
            link: "/",
            icon: "Logo_black.svg",
        },
        other: [{
                id: 0,
                text: "Our coffee",
                link: "/our-coffee",
            },
            {
                id: 1,
                text: "For your pleasure",
                link: "/your-pleasure",
            },
            {
                id: 2,
                text: "Contact us",
                link: "/contact-us",
            },
            {
                id: 3,
                text: "Thank You",
                link: "/thanks",
            },
        ],
    },
    getters: {
        getHeaderLinks(state) {
            return {
                header: state.header,
                other: state.other
            }
        },
        getFooterLinks(state) {
            return {
                footer: state.footer,
                other: state.other
            }
        }
    }
}

export default links;