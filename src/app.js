/* App */

const app = new Vue({
    el: '#app',
    data: {
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