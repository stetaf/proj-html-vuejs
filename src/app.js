/* App */

const app = new Vue({
    el: '#app',
    data: {
        siteLogo: './dist/img/logo-light.png',
        mainLinks: [
            {
                value: 'Home',
                url: '#'
            },
            {
                value: 'Courses',
                url: '#'
            },
            {
                value: 'Instructors',
                url: '#'
            },
            {
                value: 'Events',
                url: '#'
            },
            {
                value: 'Pages',
                url: '#'
            },
            {
                value: 'Elements',
                url: '#'
            }
        ],
        supportLinks: [
            {
                value: 'User dashboard',
                url: '#'
            },
            {
                value: 'Contact Us',
                url: '#'
            },
            {
                value: 'FAQ',
                url: '#'
            },
            {
                value: 'Course Offer',
                url: '#'
            },
            {
                value: 'Events',
                url: '#'
            }
        ],
        packages: [
            {
                name: 'Standard',
                price: '12'
            },
            {
                name: 'Professional',
                price: '59'
            },
            {
                name: 'Advanced',
                price: '88'
            }
        ],
        mainPost: {
            title: 'Contemporary Ideas',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil repellat incidunt velit eligendi nam quo voluptate soluta magni. Voluptates esse quos nesciunt alias quod?'
        },
        scrolled: false
    },
    methods: {
        scrollUp() {
            window.scrollTo(0, 0);
        }
    },
    mounted: function() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                this.scrolled = true;
            } else if (window.scrollY < 400) {
                this.scrolled = false;
            }
        })
    }
});