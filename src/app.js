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
        reviewsContent: {
            name: [
                'Joan Collins',
                'Jeri Gallagher',
                'Nydia Leilah'
            ],
            text: [
                '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum iusto iure cum tenetur aspernatur quod dolorem nesciunt consectetur. In consequatur ratione cum praesentium quidem nesciunt minus aperiam reprehenderit porro laboriosam! Ut voluptatem sequi atque."',
                '"Proin ac ullamcorper quam. In urna enim, accumsan eget quam a, mollis auctor quam. Vestibulum mi est, porta ac felis ut, vestibulum sodales sapien. Praesent aliquam rhoncus neque nec porta. Pellentesque congue ante justo, ac."',
                '"Vestibulum condimentum facilisis ullamcorper. Sed pharetra diam eget metus faucibus, id rutrum magna placerat. Fusce pharetra, ipsum a lobortis feugiat, nulla nulla venenatis turpis, et euismod urna magna ac neque. Nunc imperdiet mauris vitae orci iaculis, ut aliquam libero tincidunt."'
            ],
            images: [
                "./dist/img/testimonials-standard-2.png",
                "./dist/img/testimonials-standard-3.png",
                "./dist/img/testimonials-standard-4.png"
            ],
        },
        onlineCourses: [
            {
                title: 'Android Developer',
                teacher: 'David Sanders',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'programming',
                img: './dist/img/course-5-f-img.jpg',
                price: '0'
            },
            {
                title: 'Web Designing',
                teacher: 'Jennifer Powell',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'programming',
                img: './dist/img/course-6-f-img.jpg',
                price: '0'
            },
            {
                title: 'Financial Modeling',
                teacher: 'Edward Bowman',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'business',
                img: './dist/img/blog-post-2.jpg',
                price: '20'
            },
            {
                title: 'Business Management',
                teacher: 'Charley Hughie',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'business',
                img: './dist/img/course-2-f-img.jpg',
                price: '39'
            },
            {
                title: 'HTML5 Coding',
                teacher: 'Talbot Garret',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'programming',
                img: './dist/img/course-11-f-img.jpg',
                price: '0'
            },
            {
                title: 'Marketing Fundamentals',
                teacher: 'Barnaby Roscoe',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'business',
                img: './dist/img/course-9-f-img.jpg',
                price: '19'
            },
            {
                title: 'Animation 101',
                teacher: 'Zackary Matthew',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'programming',
                img: './dist/img/course-3-f-img.jpg',
                price: '0'
            },
            {
                title: 'Budgeting Rules',
                teacher: 'Martin Dallas',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'business',
                img: './dist/img/blog-post-5.jpg',
                price: '59'
            },
            {
                title: 'Learn-by-Doing',
                teacher: 'Milburn Ern',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
                students: '1',
                tag: 'business',
                img: './dist/img/blog-post-1.jpg',
                price: '20'
            },
        ],
        currPoss: {
            title: 'Learning Possibilities',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti sunt at placeat accusamus ipsam suscipit delectus ipsum officiis animi harum hic, eum, voluptatem quisquam consequuntur, reiciendis ex ullam. Eum?',
            list: [
                    'We enrich lives through learning.',
                    'Maximizing potential through individual attention.',
                    'The trusted name for specialized training',
                    'People teach. People learn. This is where they connect.'
            ],
            img: './dist/img/h12-tabs-icon-1.png'
        },
        possibilities: [
            {
                title: 'Learning Possibilities',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti sunt at placeat accusamus ipsam suscipit delectus ipsum officiis animi harum hic, eum, voluptatem quisquam consequuntur, reiciendis ex ullam. Eum?',
                list: [
                        'We enrich lives through learning.',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training',
                        'People teach. People learn. This is where they connect.'
                ],
                img: './dist/img/h12-tabs-icon-1.png'
            },
            {
                title: 'Aliquam tempus',
                text: 'Cras molestie sapien eu ante ornare, quis eleifend augue consectetur. Proin in justo eu orci vestibulum pulvinar ut a odio. Mauris diam augue, malesuada fringilla orci ut, egestas imperdiet purus. Curabitur euismod odio et ante.',
                list: [
                        'Sed eu congue tortor, at posuere eros. Nam rhoncus nunc.We enrich lives through learning.',
                        'Nam sollicitudin tempus leo, ut placerat sapien semper sed. Mauris.',
                        'Aliquam non condimentum metus. Duis sit amet volutpat enim. Duis.',
                        'Suspendisse eget mattis mauris. Sed aliquet velit nisi. Maecenas hendrerit.'
                    ],
                img: './dist/img/h12-tabs-icon-2.png'
            },
            {
                title: 'Quisque quis',
                text: 'In ultrices nibh lorem, sagittis egestas nulla vehicula et. In mattis est a sem faucibus, at interdum felis consequat. Vivamus urna sem, egestas in tincidunt.',
                list: [
                        'Pellentesque in lectus sit amet risus sodales imperdiet aliquam vitae.',
                        'In mattis efficitur risus sit amet commodo. Fusce nisi lacus.',
                        'Nunc ultricies risus eget porttitor vestibulum. Nunc varius fermentum libero.',
                        'Fusce ultricies ex lorem, in ullamcorper elit ultrices eu. Praesent.'
                    ],
                img: './dist/img/h12-tabs-icon-3.png'
            },
            {
                title: 'Nulla iaculis',
                text: 'Donec dapibus odio eget aliquam varius. Fusce elementum risus vel ligula vulputate pellentesque. Nunc porttitor, ex nec luctus bibendum, mauris turpis sollicitudin est, id malesuada.',
                list: [
                        'Vestibulum eget quam felis. Nullam placerat lectus ipsum, et dapibus.',
                        'Suspendisse nibh metus, condimentum ac pulvinar bibendum, vulputate rutrum magna.',
                        'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
                        'Etiam nec libero rhoncus, vestibulum justo et, tempor nunc. Morbi.'
                    ],
                img: './dist/img/h12-tabs-icon-4.png'
            },
            {   
                title: 'Nullam dapibus',
                text: 'Sed sit amet tempor risus. Sed in ipsum id dolor sollicitudin sagittis ac eu lacus. Vestibulum maximus lacinia sem et bibendum. Donec vel suscipit nisi.',
                list: [
                        'Maecenas luctus magna ac aliquam lobortis. Donec tortor enim, suscipit.',
                        'Vestibulum pretium nisi posuere nibh euismod, id pulvinar lacus convallis.',
                        'Phasellus tincidunt bibendum laoreet. Ut scelerisque lectus interdum, sollicitudin turpis.',
                        'Cras eleifend varius tincidunt. Integer eget elit lacus. Pellentesque mollis.'
                    ],
                img: './dist/img/h12-tabs-icon-5.png'
            },
            {
                title: 'Fusce vehicula',
                text: 'Donec gravida in nisl a feugiat. Vivamus porta cursus ligula, eget pretium sem consectetur sit amet. Nulla facilisi. Ut a dui consequat, dictum lacus nec.',
                list: [
                        'Sed malesuada interdum augue laoreet lobortis. Aliquam dapibus nulla libero.',
                        'Phasellus ligula dui, malesuada vel rutrum sit amet, cursus quis.',
                        'Ut pretium purus sed euismod sodales. Integer nec felis mi.',
                        'Phasellus vel laoreet lectus. Vestibulum commodo vulputate vestibulum. Vivamus eget.'
                    ],
                img: './dist/img/h12-tabs-icon-6.png'
            }
        ],
        poss: '0',
        scrolled: false
    },
    methods: {
        /**
         * ### scrollUp
         * Scrolls the window object to X:Y [0:0]
         */
        scrollUp() {
            window.scrollTo(0, 0);
        },
        /**
         * ### getCartItems
         * Returns the amount of items in the shopping cart
         * @returns number of cartItems
         */
        getCartItems() {
            return this.cartItems;
        },
        /**
         * ### changePoss
         * Change the current possibilities screen
         * @param {Number} id 
         */
        changePoss(id) {
            this.currPoss = this.possibilities[id];
            this.poss = id;
        }
    },
    mounted: function() {
        this.currPoss = this.possibilities[0];
        // Adds an event listener to catch the scroll action and show/hide the scroll-top button
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                this.scrolled = true;
            } else if (window.scrollY < 400) {
                this.scrolled = false;
            }
        });
        // Handles the counter for the multiple slider in the website, and changes the header background-image accordingly
        let introSlider = setInterval(() => {
            ((this.introCounter + 1) > this.introContent.images.length - 1) ? this.introCounter = 0 : this.introCounter++;
            document.querySelector('header').style.backgroundImage = this.introContent.images[this.introCounter];
        }, 3000);
    }
});