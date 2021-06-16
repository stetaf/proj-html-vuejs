/* App */

const app = new Vue({
    el: '#app',
    data: {
        siteLogo: './dist/img/logo-light.png',
        cartItems: '0',
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
                price: '12',
                courses: '2',
                time: '15',
                products: [
                    {
                        name: 'Web Designing',
                        value: true
                    },
                    {
                        name: 'Human-centered Design',
                        value: true
                    },
                    {
                        name: 'Basic Marketing',
                        value: false
                    },
                    {
                        name: 'Python for Everybody',
                        value: false
                    },
                    {
                        name: 'Android developer',
                        value: false
                    },
                    {
                        name: 'Business English',
                        value: false
                    }
                ],
                img: './dist/img/h5-custom-icon-7.png'
            },
            {
                name: 'Professional',
                price: '59',
                courses: '4',
                time: '30',
                products: [
                    {
                        name: 'Web Designing',
                        value: true
                    },
                    {
                        name: 'Human-centered Design',
                        value: true
                    },
                    {
                        name: 'Basic Marketing',
                        value: true
                    },
                    {
                        name: 'Python for Everybody',
                        value: true
                    },
                    {
                        name: 'Android developer',
                        value: false
                    },
                    {
                        name: 'Business English',
                        value: false
                    }
                ],
                img: './dist/img/h5-custom-icon-8.png'
            },
            {
                name: 'Advanced',
                price: '88',
                courses: '6',
                time: '30',
                products: [
                    {
                        name: 'Web Designing',
                        value: true
                    },
                    {
                        name: 'Human-centered Design',
                        value: true
                    },
                    {
                        name: 'Basic Marketing',
                        value: true
                    },
                    {
                        name: 'Python for Everybody',
                        value: true
                    },
                    {
                        name: 'Android developer',
                        value: true
                    },
                    {
                        name: 'Business English',
                        value: true
                    }
                ],
                img: './dist/img/h5-custom-icon-9.png'
            }
        ],
        popularCourses: [
            {
                name: 'Business English',
                author: 'Preston Marshall',
                url: '#'
            },
            {
                name: 'Social Computing',
                author: 'David Sanders',
                url: '#'
            },
            {
                name: 'Learn Spanish',
                author: 'Jennie King',
                url: '#'
            }
        ],
        socialLinks: [
            {
                name: 'Twitter',
                icon: 'fab fa-twitter',
                url: '#'
            },
            {
                name: 'Instagram',
                icon: 'fab fa-instagram',
                url: '#'
            },
            {
                name: 'Facebook',
                icon: 'fab fa-facebook-f',
                url: '#'
            }
        ],
        introCounter: '0',
        introContent: {
            title: [
                'Contemporary Ideas',
                'Trusted In-Home Tutoring',
                'Learning Possibilities'
            ],
            text: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil repellat incidunt velit eligendi nam quo voluptate soluta magni. Voluptates esse quos nesciunt alias quod?',
                'Pellentesque arcu augue, pulvinar eget justo vitae, consectetur sodales quam. Mauris eu lorem cursus risus pellentesque maximus. Nulla quis nisl a urna gravida lobortis. Quisque quis magna velit. Proin ut.',
                'Sed rhoncus dignissim accumsan. Mauris tristique est eu quam volutpat, sit amet imperdiet arcu efficitur. Praesent tincidunt ullamcorper mauris, eget tincidunt nisl. Ut ex metus, rutrum sed rhoncus sed, cursus.'
            ],
            images: [
                "url('./dist/img/course-9-f-img.jpg')",
                "url('./dist/img/course-10-f-img.jpg')",
                "url('./dist/img/course-11-f-img.jpg')"
            ],
        },
        scrolled: false
    },
    methods: {
        scrollUp() {
            window.scrollTo(0, 0);
        },
        getCartItems() {
            return this.cartItems;
        }
    },
    mounted: function() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                this.scrolled = true;
            } else if (window.scrollY < 400) {
                this.scrolled = false;
            }
        });
        let introSlider = setInterval(() => {
            ((this.introCounter + 1) > this.introContent.images.length - 1) ? this.introCounter = 0 : this.introCounter++;
            document.querySelector('header').style.backgroundImage = this.introContent.images[this.introCounter];
        }, 3000);
    }
});