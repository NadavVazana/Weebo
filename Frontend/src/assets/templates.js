// import { hero1, map1, form1, gallery1, mission1, card1, footer1 } from './wap'
export const exampleList = [
    {
        "_id": "5e28393890dd8888a06d4771",
        "type": "container",
        "name": "Travel",
        "subcategory": "Explore",
        "imgUrl": "https://res.cloudinary.com/ds8xkm0ue/image/upload/v1663324375/Untitled_q0kmrd.png",
        "createdBy": {
            "_id": "5e26e0b718a8888d4c995527",
            "fullname": "Noris Special",
            "imgUrl": "img.jpg",
        },
        "usersData": {
            "contacts": [{ "email": "noris@user.com", "msg": "Please send me stuff", "at": 123 }],
            "signups": [{ "email": "noris@user.com", "at": 123 }]
        },
        "cmps": [{
            "id": "wh01",
            "type": "container",
            "name": "wap-header-1",
            "info": {
                "isFocus": false,

            },
            "drag": "true",
            "cmps": [
                {
                    "id": "wh02",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "class": "logo",
                        "value": "Bailard Foundation"
                    },
                    "cmps": []
                },
                {
                    "id": "wh03",
                    "type": "container",
                    "name": "wap-container",
                    "cmps": [
                        {
                            "id": "wh04",
                            "type": "text",
                            "name": "wap-text",
                            "info": {

                                "class": "nav-item",
                                "value": "About"
                            },
                            "cmps": []
                        },
                        {
                            "id": "wh05",
                            "type": "text",
                            "name": "wap-text",
                            "info": {
                                "class": "nav-item",
                                "value": "News"
                            },
                            "cmps": []
                        },
                        {
                            "id": "wh06",
                            "type": "text",
                            "name": "wap-text",
                            "info": {
                                "class": "nav-item",
                                "value": "Read Me"
                            },
                            "cmps": []
                        },
                        {
                            "id": "wh07",
                            "type": "button",
                            "name": "wap-button",
                            "info": {
                                "class": "nav-item",
                                "value": "Take Action"
                            },
                            "cmps": []
                        },


                    ]
                }, {
                    "id": "wh08",
                    "type": "image",
                    "info": {
                        "image": "icons/hamburger.png"
                    },
                    "name": "wap-hamburger-1",
                    "cmps": [
                    ]
                }
            ]
        }, {
            "id": "whe01",
            "type": "container",
            "name": "wap-hero-1",
            "drag": "true",
            "cmps": [
                {
                    "id": "whe02",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "isFocus": false,
                        "class": "hero-item-1",
                        "value": "Sustainability"
                    },
                    "cmps": []
                },
                {
                    "id": "whe03",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "class": "hero-item-2",
                        "value": "Starts With You"
                    },
                    "cmps": []
                },

                {
                    "id": "whe05",
                    "type": "button",
                    "name": "wap-button",
                    "info": {
                        "class": "hero-item-3",
                        "value": "Learn more",
                        "styles": {
                            "fontSize": '14px'
                        }
                    },
                    "cmps": []
                }
            ]
        }, {
            "id": "wm01",
            "type": "container",
            "name": "wap-mission-1",
            "cmps": [
                {
                    "id": "wm02",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "isFocus": false,
                        "class": "title",
                        "value": "We conserve land through outreach and restoration."
                    },
                    "cmps": []
                },
                {
                    "id": "wm03",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "class": "paragraph",
                        "value": "Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help."
                    },
                    "cmps": []
                },
            ]
        }, {
            "id": "wc01",
            "type": "container",
            "name": "wap-card-1",
            "info": {
                "isFocus": false,
            },
            "cmps": [
                {
                    "id": "wca02",
                    "type": "container",
                    "name": "card-1-container",
                    "cmps": [
                        {
                            "id": "wcai03",
                            "type": "image",
                            "name": "wap-image",
                            "info": {

                                "image": "card1/card1.jpg"
                            },
                            "cmps": [
                            ]
                        },
                        {
                            "id": "wca04",
                            "type": "container",
                            "name": "info-container",

                            "cmps": [
                                {
                                    "id": "wc03",
                                    "type": "text",
                                    "name": "wap-text",
                                    "info": {
                                        "class": "title",
                                        "value": "Our Organization"
                                    },
                                    "cmps": [

                                    ]
                                },
                                {
                                    "id": "wc04",
                                    "type": "text",
                                    "name": "wap-text",
                                    "info": {
                                        "class": "paragraph",
                                        "value": "Find out about our mission, methods, and the results of our decades of advocacy."
                                    },
                                    "cmps": [
                                    ]
                                },
                                {
                                    "id": "wc05",
                                    "type": "button",
                                    "name": "wap-button",
                                    "info": {
                                        "class": "button",
                                        "value": "Learn more"
                                    },
                                    "cmps": []
                                }]
                        },
                    ]
                },
                {
                    "id": "wca05",
                    "type": "container",
                    "name": "card-2-container",
                    "cmps": [
                        {
                            "id": "wca06",
                            "type": "container",
                            "name": "info-container",
                            "cmps": [
                                {
                                    "id": "wca07",
                                    "type": "text",
                                    "name": "wap-text",
                                    "info": {
                                        "class": "title",
                                        "value": "Our Organization"
                                    },
                                    "cmps": [
                                    ]
                                },
                                {
                                    "id": "wca08",
                                    "type": "text",
                                    "name": "wap-text",
                                    "info": {
                                        "class": "paragraph",
                                        "value": "Find out about our mission, methods, and the results of our decades of advocacy."
                                    },
                                    "cmps": [
                                    ]
                                },
                                {
                                    "id": "wca09",
                                    "type": "button",
                                    "name": "wap-button",
                                    "info": {
                                        "class": "button",
                                        "value": "Learn more"
                                    },
                                    "cmps": []
                                },
                            ]
                        },
                        {
                            "id": "wca010",
                            "type": "image",
                            "name": "wap-image",
                            "info": {
                                "image": "card1/card1.jpg"
                            },
                            "cmps": []
                        }]
                }
            ]
        }, {
            "id": "wf01",
            "type": "container",
            "name": "wap-form-1",
            "drag": "true",
            "cmps": [
                {
                    "id": "wf021",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "isFocus": false,
                        "class": "title",
                        "value": "Subscribe"
                    },
                    "cmps": [

                    ]
                },
                {
                    "id": "wf03",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "class": "paragraph",
                        "value": "Sign up with your email address to receive news and updates."
                    },
                    "cmps": [

                    ]
                },

                {
                    "id": "wf07",
                    "type": "container",
                    "name": "wap-form",
                    "cmps": [{
                        "id": "wf01",
                        "type": "input",
                        "input_type": "email",
                        "info": {
                            "placeholder": "Email Address"
                        },
                        "name": "wap-input",
                        "cmps": []
                    },
                    {
                        "id": "wf06",
                        "type": "button",
                        "info": {
                            "class": "button",
                            "value": "Sign Up"
                        },
                        "name": "wap-button",
                        "cmps": []
                    }]
                }
            ]
        },
        {
            "id": "wm01",
            "type": "container",
            "name": "wap-map-1",
            "drag": "true",
            "cmps": [
                {
                    "id": "wm07",
                    "type": "container",
                    "name": "wap-text-container",
                    "cmps": [
                        {
                            "id": "wm02",
                            "type": "text",
                            "name": "wap-text",
                            "info": {
                                "class": "title",
                                "value": "Where are we?"
                            },
                            "cmps": [

                            ]
                        },
                        {
                            "id": "wm03",
                            "type": "text",
                            "name": "wap-text",
                            "info": {
                                "class": "paragraph",
                                "value": "Find the nearest place you can volunteer!"
                            },
                            "cmps": [

                            ]
                        }]
                },
                {
                    "id": "wm03",
                    "type": "map",
                    "name": "wap-map",
                    "cmps": [

                    ]
                }
            ]
        },
        {
            "id": "wft01",
            "type": "container",
            "name": "wap-footer-1",
            "drag": "true",
            "cmps": [
                {
                    "id": "wft02",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "isFocus": false,
                        "class": "logo",
                        "value": "Weebo."
                    },
                    "cmps": []
                },
                {
                    "id": "wft03",
                    "type": "text",
                    "name": "wap-text",
                    "info": {
                        "class": "rights",
                        "value": "all rights reserved Ⓒ 2022"
                    },
                    "cmps": []
                }

            ]
        }],
        "isPublished": false,
    },
    {
        "_id": "empty",
        "type": "container",
        "name": "Health & Beauty",
        "subcategory": "Wellness",
        "imgUrl": `https://images.squarespace-cdn.com/content/5ce592c8732098000152407a/a5aef4b2-4b9c-4279-b780-57302c077519/image-asset.jpeg?content-type=image%2Fjpeg&format=750w`,
        "createdBy": {
            "_id": "5e26e0b718a7777d4c995527",
            "fullname": "Special Noris",
            "imgUrl": "img.jpg",
        },
        "usersData": {
            "contacts": [{ "email": "spacial@user.com", "msg": "Please send me stuff", "at": 123 }],
            "signups": [{ "email": "spacial@user.com", "at": 123 }]
        },
        "cmps": [],
        "isPublished": false
    },


]
export const emptyWap = {
    "_id": "empty",
    "type": "container",
    "name": "Health & Beauty",
    "subcategory": "Wellness",
    "imgUrl": `https://images.squarespace-cdn.com/content/5ce592c8732098000152407a/a5aef4b2-4b9c-4279-b780-57302c077519/image-asset.jpeg?content-type=image%2Fjpeg&format=750w`,
    "createdBy": {
        "_id": "5e26e0b718a7777d4c995527",
        "fullname": "Special Noris",
        "imgUrl": "img.jpg",
    },
    "usersData": {
        "contacts": [{ "email": "spacial@user.com", "msg": "Please send me stuff", "at": 123 }],
        "signups": [{ "email": "spacial@user.com", "at": 123 }]
    },
    "cmps": [],
    // "isPublic": true,
    "isEdit": true
}

export const Headers = {
    "wap-header-1": {
        "id": "wh01",
        "type": "container",
        "name": "wap-header-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wh02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Bailard Foundation"
                },
                "cmps": []
            },
            {
                "id": "wh03",
                "type": "container",
                "name": "wap-container",
                "cmps": [
                    {
                        "id": "wc0876672",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "About"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh04",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "News"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Read Me"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh08",
                        "type": "button",
                        "name": "wap-button",
                        "info": {
                            "class": "nav-item",
                            "value": "Take Action"
                        },
                        "cmps": []
                    }
                ]
            }, {

                "id": "wc021q1q2",
                "type": "image",
                "info": {
                    "image": "icons/hamburger.png"
                },
                "name": "wap-hamburger-1",
                "cmps": [

                ]

            }
        ]
    },
    "wap-header-2": {
        "id": "wh01",
        "type": "container",
        "name": "wap-header-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wh02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Sweet Pies"
                },
                "cmps": []
            },
            {
                "id": "wh03",
                "type": "container",
                "name": "wap-container",
                "cmps": [
                    {
                        "id": "wc022",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Home"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh04",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Baking Workshops"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Contact Me"
                        },
                        "cmps": []
                    },
                ]
            },
            {
                "id": "wi01",
                "type": "image",
                "info": {
                    "image": "icons/hamburger-header-2.png"
                },
                "name": "wap-hamburger-2",
                "cmps": [
                ]
            }
        ]
    }

}

export const Heroes = {
    "wap-hero-1": {
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-1",
        "drag": "true",
        "cmps": [
            {
                "id": "whe02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "hero-item-1",
                    "value": "Sustainability"
                },
                "cmps": []
            },
            {
                "id": "whe03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "hero-item-2",
                    "value": "Starts With You"
                },
                "cmps": []
            },

            {
                "id": "whe05",
                "type": "button",
                "name": "wap-button",
                "info": {
                    "class": "hero-item-3",
                    "value": "Learn more",
                    "styles": {
                        "fontSize": '14px'
                    }
                },
                "cmps": []
            }
        ]
    },
    "wap-hero-2-1": {
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-2-1",
        "drag": "true",
        "cmps": [
            {
                "id": "id121313",
                "type": "container",
                "name": "hero-item-1",
                "drag": "true",
                "cmps": [
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "My Story"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh0121",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "paragraph",
                            "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. "
                        },
                        "cmps": []
                    }
                ]
            },
            {
                "id": "whi01",
                "type": "image",
                "info": {
                    "image": "hero2/girl-cooking.png"
                },
                "name": "hero-2-image",
                "cmps": []
            }
        ]
    },
    "wap-hero-2-2":
    {
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-2-2",
        "drag": "true",
        "cmps": [
            {
                "id": "whi01",
                "type": "image",
                "info": {
                    "image": "hero2/cupcakes.jpg"
                },
                "name": "hero-2-image",
                "cmps": []
            },
            {
                "id": "id121313",
                "type": "container",
                "name": "hero-item-1",
                "drag": "true",
                "cmps": [

                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "The Baking Workshops"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh06",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "paragraph",
                            "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. "
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh08",
                        "type": "button",
                        "name": "wap-button",
                        "info": {
                            "class": "sweetpies-btn",
                            "value": "Book a Workshop"
                        },
                        "cmps": []
                    },
                ]
            },
        ]
    }
}

export const Forms = {
    "wap-form-1": {
        "id": "wf01",
        "type": "container",
        "name": "wap-form-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wf023",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Subscribe"
                },
                "cmps": [

                ]
            },
            {
                "id": "wf03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "paragraph",
                    "value": "Sign up with your email address to receive news and updates."
                },
                "cmps": [

                ]
            },
            {
                "id": "wf07",
                "type": "container",
                "name": "wap-form",
                "cmps": [{
                    "id": "wf01",
                    "type": "input",
                    "input_type": "email",
                    "info": {
                        "placeholder": "Email Address"
                    },
                    "name": "wap-input",
                    "cmps": []
                },
                {
                    "id": "wf06",
                    "type": "button",
                    "info": {
                        "class": "button",
                        "value": "Sign Up"
                    },
                    "name": "wap-button",
                    "cmps": []
                }]
            }
        ]
    },
    "wap-form-2": {
        "id": "wf01",
        "type": "container",
        "name": "wap-form-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wf07",
                "type": "container",
                "name": "wap-form",
                "cmps": [
                    {
                        "id": "fc101",
                        "type": "container",
                        "name": "form-container",
                        "cmps": [
                            {
                                "id": "wf025",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Contact Me"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wf01211",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
                                },
                                "cmps": []
                            },
                            {
                                "id": "fic01",
                                "type": "container",
                                "name": "form-input-container",
                                "cmps": [
                                    {
                                        "id": "wf01",
                                        "type": "input",
                                        "input_type": "text",
                                        "info": {
                                            "placeholder": "Name"
                                        },
                                        "name": "wap-input",
                                        "cmps": []
                                    },
                                    {
                                        "id": "wf026",
                                        "type": "input",
                                        "input_type": "email",
                                        "info": {
                                            "placeholder": "Email Address"
                                        },
                                        "name": "wap-input",
                                        "cmps": []
                                    },
                                ]
                            },
                            {
                                "id": "wf027",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Phone"
                                },
                                "name": "wap-input",
                                "cmps": []
                            },
                            {
                                "id": "wf04",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Type your message here..."
                                },
                                "name": "wap-input-textarea",
                                "cmps": []
                            },
                            {
                                "id": "wh08",
                                "type": "button",
                                "name": "wap-button",
                                "info": {
                                    "class": "nav-item",
                                    "value": "Submit"
                                },
                                "cmps": []
                            },
                        ]
                    },

                ]
            },

        ]
    }
}

export const Footers = {
    "wap-footer-1": {
        "id": "wft01",
        "type": "container",
        "name": "wap-footer-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wft02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Weebo."
                },
                "cmps": []
            },
            {
                "id": "wft03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "rights",
                    "value": "all rights reserved Ⓒ 2022"
                },
                "cmps": []
            }

        ]
    }
}

export const Galleries = {
    "wap-gallery-1": {
        "id": "wg01",
        "type": "container",
        "name": "wap-gallery-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wg02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Our Gallery"
                },
                "cmps": [

                ]
            },
            {
                "id": "wg03",
                "type": "gallery",
                "name": "wap-gallery",
                "info": {
                    "images": [{ "src": "gallery-1/cowboy", "alt": "cowboy" }, { "src": "gallery-1/piano", "alt": "piano" }, { "src": "gallery-1/woman-flowers", "alt": "flowers" }]
                },
                "cmps": []
            }
        ]
    },
    "wap-galerry-2": {
        "id": "wg01",
        "type": "container",
        "name": "wap-gallery-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wg02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Sweet Pies"
                },
                "cmps": [

                ]
            },
            {
                "id": "wg03",
                "type": "container",
                "name": "wap-gallery-sweetpies",
                "cmps": [
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-1.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi02",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-2.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi03",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-3.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi04",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-4.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi05",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-5.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi06",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-6.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi07",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-7.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi08",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-8.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                ]
            }
        ]
    }
}

export const Maps = {
    "wap-map-1": {
        "id": "wm01",
        "type": "container",
        "name": "wap-map-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wm07",
                "type": "container",
                "name": "wap-text-container",
                "cmps": [
                    {
                        "id": "wm02",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "Where are we?"
                        },
                        "cmps": [

                        ]
                    },
                    {
                        "id": "wm03",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "paragraph",
                            "value": "Find the nearest place you can volunteer!"
                        },
                        "cmps": [

                        ]
                    }]
            },
            {
                "id": "wm03",
                "type": "map",
                "name": "wap-map",
                "cmps": [

                ]
            }
        ]
    }

}


export const Cards = {
    "wap-card-1": {
        "id": "wc01",
        "type": "container",
        "name": "wap-card-1",
        "cmps": [
            {
                "id": "wca02",
                "type": "container",
                "name": "card-1-container",
                "cmps": [
                    {
                        "id": "wc020987",
                        "type": "image",
                        "name": "wap-image",
                        "info": {
                            "image": "card1/card1.jpg"
                        },
                        "cmps": [
                        ]
                    },
                    {
                        "id": "wc03",
                        "type": "container",
                        "name": "info-container",

                        "cmps": [
                            {
                                "id": "wc03",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Our Organization"
                                },
                                "cmps": [

                                ]
                            },
                            {
                                "id": "wc04",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "Find out about our mission, methods, and the results of our decades of advocacy."
                                },
                                "cmps": [
                                ]
                            },
                            {
                                "id": "wc05",
                                "type": "button",
                                "name": "wap-button",
                                "info": {
                                    "class": "button",
                                    "value": "Learn more"
                                },
                                "cmps": []
                            }]
                    },
                ]
            },
            {
                "id": "wc03",
                "type": "container",
                "name": "card-2-container",
                "cmps": [
                    {
                        "id": "wc03",
                        "type": "container",
                        "name": "info-container",
                        "cmps": [
                            {
                                "id": "wc03",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Our Organization"
                                },
                                "cmps": [
                                ]
                            },
                            {
                                "id": "wc04",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "Find out about our mission, methods, and the results of our decades of advocacy."
                                },
                                "cmps": [
                                ]
                            },
                            {
                                "id": "wc05",
                                "type": "button",
                                "name": "wap-button",
                                "info": {
                                    "class": "button",
                                    "value": "Learn more"
                                },
                                "cmps": []
                            },
                        ]
                    },
                    {
                        "id": "wc028783768",
                        "type": "image",
                        "name": "wap-image",
                        "info": {
                            "image": "card1/card1.jpg"
                        },
                        "cmps": []
                    }]
            }
        ]
    },
    "wap-card-2": {
        "id": "wc01",
        "type": "container",
        "name": "wap-card-2",
        "cmps": [
            {
                "id": "wct012",
                "type": "text",
                "name": "wap-card-2-title",
                "info": {
                    "value": "Testimonials",
                    "class": "title"
                },
                "cmps": []
            },
            {
                "id": "wc1010212",
                "type": "container",
                "name": "wap-card-2-grid",
                "cmps": [
                    {
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct013",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct021",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wc05",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct014",
                                "type": "image",
                                "name": "wap-card-2-item",
                                "info": {
                                    "image": "card2/card2-img.gif"
                                },
                                "cmps": []
                            },
                        ]
                    },
                    {
                        "id": "wc021",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct015",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct016",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wcc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct017",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct022",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wc02",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct018",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct023",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wc067",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct019",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct024",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    }
                ]
            },

        ]
    }
}


export const Missions = {
    "wap-mission-1": {
        "id": "wm01",
        "type": "container",
        "name": "wap-mission-1",
        "cmps": [
            {
                "id": "wm02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "We conserve land through outreach and restoration."
                },
                "cmps": []
            },
            {
                "id": "wm03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "paragraph",
                    "value": "Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help."
                },
                "cmps": []
            },
        ]
    }
}

export const All = {
    "wap-header-1": {
        "id": "wh01",
        "type": "container",
        "name": "wap-header-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wh02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Bailard Foundation"
                },
                "cmps": []
            },
            {
                "id": "wh03",
                "type": "container",
                "name": "wap-container",
                "cmps": [
                    {
                        "id": "wc027878",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "About"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh04",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "News"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Read Me"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh08",
                        "type": "button",
                        "name": "wap-button",
                        "info": {
                            "class": "nav-item",
                            "value": "Take Action"
                        },
                        "cmps": []
                    }
                ]
            }, {

                "id": "wc0223231",
                "type": "image",
                "info": {
                    "image": "icons/hamburger.png"
                },
                "name": "wap-hamburger-1",
                "cmps": [

                ]

            }
        ]
    },
    "wap-mission-1": {
        "id": "wma01",
        "type": "container",
        "name": "wap-mission-1",
        "cmps": [
            {
                "id": "wm02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "We conserve land through outreach and restoration."
                },
                "cmps": []
            },
            {
                "id": "wm03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "paragraph",
                    "value": "Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help."
                },
                "cmps": []
            },
        ]
    },
    "wap-card-1": {
        "id": "wc01",
        "type": "container",
        "name": "wap-card-1",
        "cmps": [
            {
                "id": "wc02456",
                "type": "container",
                "name": "card-1-container",
                "cmps": [
                    {
                        "id": "wc0212",
                        "type": "image",
                        "name": "wap-image",
                        "info": {
                            "image": "card1/card1.jpg"
                        },
                        "cmps": [
                        ]
                    },
                    {
                        "id": "wc03",
                        "type": "container",
                        "name": "info-container",

                        "cmps": [
                            {
                                "id": "wc03",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Our Organization"
                                },
                                "cmps": [

                                ]
                            },
                            {
                                "id": "wc04",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "Find out about our mission, methods, and the results of our decades of advocacy."
                                },
                                "cmps": [
                                ]
                            },
                            {
                                "id": "wc05",
                                "type": "button",
                                "name": "wap-button",
                                "info": {
                                    "class": "button",
                                    "value": "Learn more"
                                },
                                "cmps": []
                            }]
                    },
                ]
            },
            {
                "id": "wc03",
                "type": "container",
                "name": "card-2-container",
                "cmps": [
                    {
                        "id": "wc03",
                        "type": "container",
                        "name": "info-container",
                        "cmps": [
                            {
                                "id": "wc03",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Our Organization"
                                },
                                "cmps": [
                                ]
                            },
                            {
                                "id": "wc04",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "Find out about our mission, methods, and the results of our decades of advocacy."
                                },
                                "cmps": [
                                ]
                            },
                            {
                                "id": "wc05",
                                "type": "button",
                                "name": "wap-button",
                                "info": {
                                    "class": "button",
                                    "value": "Learn more"
                                },
                                "cmps": []
                            },
                        ]
                    },
                    {
                        "id": "wc024",
                        "type": "image",
                        "name": "wap-image",
                        "info": {
                            "image": "card1/card1.jpg"
                        },
                        "cmps": []
                    }]
            }
        ]
    },
    "wap-map-1": {
        "id": "wm01",
        "type": "container",
        "name": "wap-map-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wm02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Where are we?"
                },
                "cmps": [

                ]
            },
            {
                "id": "wm03",
                "type": "map",
                "name": "wap-map",
                "cmps": [

                ]
            }
        ]
    },
    "wap-gallery-1": {
        "id": "wg01",
        "type": "container",
        "name": "wap-gallery-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wg02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Our Gallery"
                },
                "cmps": [

                ]
            },
            {
                "id": "wg03",
                "type": "gallery",
                "name": "wap-gallery",
                "info": {
                    "images": [{ "src": "gallery-1/cowboy", "alt": "cowboy" }, { "src": "gallery-1/piano", "alt": "piano" }, { "src": "gallery-1/woman-flowers", "alt": "flowers" }]
                },
                "cmps": []
            }
        ]
    },
    "wap-footer-1": {
        "id": "wft01",
        "type": "container",
        "name": "wap-footer-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wft02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Weebo."
                },
                "cmps": []
            },
            {
                "id": "wft03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "rights",
                    "value": "all rights reserved Ⓒ 2022"
                },
                "cmps": []
            }

        ]
    },
    "wap-form-1": {
        "id": "wf01",
        "type": "container",
        "name": "wap-form-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wf024",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Subscribe"
                },
                "cmps": [

                ]
            },
            {
                "id": "wf03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "paragraph",
                    "value": "Sign up with your email address to receive news and updates."
                },
                "cmps": [

                ]
            },
            {
                "id": "wf07",
                "type": "container",
                "name": "wap-form",
                "cmps": [{
                    "id": "wf01",
                    "type": "input",
                    "input_type": "email",
                    "info": {
                        "placeholder": "Email Address"
                    },
                    "name": "wap-input",
                    "cmps": []
                },
                {
                    "id": "wf06",
                    "type": "button",
                    "info": {
                        "class": "button",
                        "value": "Sign Up"
                    },
                    "name": "wap-button",
                    "cmps": []
                }]
            }
        ]
    },
    "wap-hero-1": {
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-1",
        "drag": "true",
        "cmps": [
            {
                "id": "whe02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "hero-item-1",
                    "value": "Sustainability"
                },
                "cmps": []
            },
            {
                "id": "whe03",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "hero-item-2",
                    "value": "Starts With You"
                },
                "cmps": []
            },

            {
                "id": "whe05",
                "type": "button",
                "name": "wap-button",
                "info": {
                    "class": "hero-item-3",
                    "value": "Learn more",
                    "styles": {
                        "fontSize": '14px'
                    }
                },
                "cmps": []
            }
        ]
    },
}


export const wapExample2 = {
    "_id": "5e28393890dd8888a06d4772",
    "type": "container",
    "name": "cooking",
    "subcategory": "Wellness",
    "imgUrl": "../assets/img/templates/example-2.png",
    "createdBy": {
        "_id": "5e26e0b718a7777d4c995527",
        "fullname": "Special Noris",
        "imgUrl": "img.jpg",
    },
    "usersData": {
        "contacts": [{ "email": "spacial@user.com", "msg": "Please send me stuff", "at": 123 }],
        "signups": [{ "email": "spacial@user.com", "at": 123 }]
    },
    "cmps": [{
        "id": "wh01",
        "type": "container",
        "name": "wap-header-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wh02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Sweet Pies"
                },
                "cmps": []
            },
            {
                "id": "wh03",
                "type": "container",
                "name": "wap-container",
                "cmps": [
                    {
                        "id": "wc022",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Home"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh04",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Baking Workshops"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Contact Me"
                        },
                        "cmps": []
                    },
                ]
            },
            {
                "id": "wi01",
                "type": "image",
                "info": {
                    "image": "icons/hamburger-header-2.png"
                },
                "name": "wap-hamburger-2",
                "cmps": [
                ]
            }
        ]
    },
    {
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-2-1",
        "drag": "true",
        "cmps": [
            {
                "id": "id121313",
                "type": "container",
                "name": "hero-item-1",
                "drag": "true",
                "cmps": [
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "My Story"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh0121",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "paragraph",
                            "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. "
                        },
                        "cmps": []
                    }
                ]
            },
            {
                "id": "whi01",
                "type": "image",
                "info": {
                    "image": "hero2/girl-cooking.png"
                },
                "name": "hero-2-image",
                "cmps": []
            }
        ]
    },
    {
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-2-2",
        "drag": "true",
        "cmps": [
            {
                "id": "whi01",
                "type": "image",
                "info": {
                    "image": "hero2/cupcakes.jpg"
                },
                "name": "hero-2-image",
                "cmps": []
            },
            {
                "id": "id121313",
                "type": "container",
                "name": "hero-item-1",
                "drag": "true",
                "cmps": [

                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "The Baking Workshops"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh06",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "paragraph",
                            "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. "
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh08",
                        "type": "button",
                        "name": "wap-button",
                        "info": {
                            "class": "sweetpies-btn",
                            "value": "Book a Workshop"
                        },
                        "cmps": []
                    },
                ]
            },
        ]
    },
    {
        "id": "wg01",
        "type": "container",
        "name": "wap-gallery-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wg02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "Sweet Pies"
                },
                "cmps": [

                ]
            },
            {
                "id": "wg03",
                "type": "container",
                "name": "wap-gallery-sweetpies",
                "cmps": [
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-1.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi02",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-2.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi03",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-3.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi04",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-4.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi05",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-5.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi06",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-6.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi07",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-7.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi08",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-8.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                ]
            }
        ]
    },
    {
        "id": "wc01",
        "type": "container",
        "name": "wap-card-2",
        "cmps": [
            {
                "id": "wct012",
                "type": "text",
                "name": "wap-card-2-title",
                "info": {
                    "value": "Testimonials",
                    "class": "title"
                },
                "cmps": []
            },
            {
                "id": "wc1010212",
                "type": "container",
                "name": "wap-card-2-grid",
                "cmps": [
                    {
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct013",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct021",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wc05",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct014",
                                "type": "image",
                                "name": "wap-card-2-item",
                                "info": {
                                    "image": "card2/card2-img.gif"
                                },
                                "cmps": []
                            },
                        ]
                    },
                    {
                        "id": "wc021",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct015",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct016",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wcc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct017",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct022",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wc02",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct018",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct023",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    },
                    {
                        "id": "wc067",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct019",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct024",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "Some other text",
                                    "class": "testimonial-name"
                                },
                                "cmps": []
                            }
                        ]
                    }
                ]
            },

        ]
    },
    {
        "id": "wf01",
        "type": "container",
        "name": "wap-form-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wf07",
                "type": "container",
                "name": "wap-form",
                "cmps": [
                    {
                        "id": "fc101",
                        "type": "container",
                        "name": "form-container",
                        "cmps": [
                            {
                                "id": "wf025",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Contact Me"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wf01211",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
                                },
                                "cmps": []
                            },
                            {
                                "id": "fic01",
                                "type": "container",
                                "name": "form-input-container",
                                "cmps": [
                                    {
                                        "id": "wf01",
                                        "type": "input",
                                        "input_type": "text",
                                        "info": {
                                            "placeholder": "Name"
                                        },
                                        "name": "wap-input",
                                        "cmps": []
                                    },
                                    {
                                        "id": "wf026",
                                        "type": "input",
                                        "input_type": "email",
                                        "info": {
                                            "placeholder": "Email Address"
                                        },
                                        "name": "wap-input",
                                        "cmps": []
                                    },
                                ]
                            },
                            {
                                "id": "wf027",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Phone"
                                },
                                "name": "wap-input",
                                "cmps": []
                            },
                            {
                                "id": "wf04",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Type your message here..."
                                },
                                "name": "wap-input-textarea",
                                "cmps": []
                            },
                            {
                                "id": "wh08",
                                "type": "button",
                                "name": "wap-button",
                                "info": {
                                    "class": "nav-item",
                                    "value": "Submit"
                                },
                                "cmps": []
                            },
                        ]
                    },

                ]
            },

        ]
    },

    ],
    "isPublished": true
}


export const wapExample3 = {

    "_id": "34058349534609386034689",
    "type": "container",
    "name": "Barber Shop",
    "subcategory": "Health & Beauty",
    "imgUrl": `https://images.squarespace-cdn.com/content/5ce592c8732098000152407a/a5aef4b2-4b9c-4279-b780-57302c077519/image-asset.jpeg?content-type=image%2Fjpeg&format=750w`,
    "createdBy": {
        "_id": "5e26e0b718a7777d4c995527",
        "fullname": "Special Noris",
        "imgUrl": "img.jpg",
    },
    "usersData": {
        "contacts": [{ "email": "spacial@user.com", "msg": "Please send me stuff", "at": 123 }],
        "signups": [{ "email": "spacial@user.com", "at": 123 }]
    },
    "cmps": [
        // Header
        {
            "id": "figjr4th948ng934g4",
            "type": "container",
            "name": "wap-header-3",
            "drag": "true",
            "cmps": [
                {
                    "id": "dff443431j84jg84gj48g",
                    "type": "container",
                    "name": "logo",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "dff4849j84jg84gj48g",
                            "type": "image",
                            "name": "header-logo",
                            "drag": "true",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778344/hair%20and%20there/hair_and_there_rds3vp.png"
                            }
                        },
                        {
                            "id": "dfgt44g23efffgf",
                            "type": "text",
                            "name": "logo-text",
                            "drag": "true",
                            "info": {
                                "value": "Hair & There"
                            }
                        }
                    ]
                },

                {
                    "id": "948ng9gsdgsdgsdg34g4",
                    "type": "container",
                    "name": "header-nav",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "1qaz3edc4rv",
                            "type": "button",
                            "name": "nav-item",
                            "drag": "true",
                            "info": {
                                "value": "Home",
                            },
                            "cmps": []
                        },
                        {
                            "id": "1qaz3edc4rs",
                            "type": "button",
                            "name": "nav-item",
                            "drag": "true",
                            "info": {
                                "value": "About",
                            },
                            "cmps": []
                        },
                        {
                            "id": "1qaz3edc4rx",
                            "type": "button",
                            "name": "nav-item",
                            "drag": "true",
                            "info": {
                                "value": "Services",
                            },
                            "cmps": []
                        },
                        {
                            "id": "1qaz3edc4rdg",
                            "type": "button",
                            "name": "nav-item",
                            "drag": "true",
                            "info": {
                                "value": "Gallery",
                            },
                            "cmps": []
                        },
                        ,
                        {
                            "id": "1qaz3edc4rper",
                            "type": "button",
                            "name": "nav-item",
                            "drag": "true",
                            "info": {
                                "value": "Contact",
                            },
                            "cmps": []
                        }
                    ]
                },
                {
                    "id": "imagemegidish",
                    "type": "image",
                    "name": "burger",
                    "info": {
                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663800359/hair%20and%20there/wap3-burger_eyvicr.png"
                    }
                }
            ]
        },
        // Hero
        {
            "id": "128eje884v232b",
            "type": "container",
            "name": "wap-hero-3",
            "drag": "true",
            "cmps": [
                {
                    "id": "128eje884v2312b",
                    "type": "container",
                    "name": "hero-text-container",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "128eje884v232c",
                            "type": "text",
                            "name": "title1",
                            "drag": "true",
                            "info": {
                                "value": "Gentleman's",
                                "class": "title1"
                            }
                        },
                        {
                            "id": "128eje884v232d",
                            "type": "text",
                            "name": "title2",
                            "drag": "true",
                            "info": {
                                "value": "Barbershop",
                                "class": "title2"
                            }
                        },
                    ]
                },
            ]
        },
        // SECTION 
        {
            "id": "2irjfirg95j95gj95gh",
            "type": "container",
            "name": "wap-card-3",
            "drag": "true",
            "cmps": [
                {
                    "id": "3tgt6hn3c2c22zz",
                    "type": "container",
                    "name": "card-container",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "44frbgfnthrth",
                            "type": "text",
                            "name": "card-title",
                            "info": {
                                "value": "Our story",
                                "class": "card-title"
                            }
                        },
                        {
                            "id": "r4rvrn65jh6n",
                            "type": "container",
                            "name": "card-flex-cont",
                            "drag": "true",
                            "cmps": [
                                {
                                    "id": "r4rvrn6335jh6n",
                                    "type": "container",
                                    "name": "card-flex-item1",
                                    "drag": "true",
                                    "cmps": [
                                        {
                                            "id": "1qaz24tb5",
                                            "type": "image",
                                            "name": "card-image",
                                            "info": {
                                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778195/hair%20and%20there/43c038_88e1cc895937468ea9143ca69c933bf6_mv2_d_3104_4656_s_4_2_bwduct.png"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "id": "r411rvrn65jh6n",
                                    "type": "container",
                                    "name": "card-flex-item2",
                                    "drag": "true",
                                    "cmps": [
                                        {
                                            "id": "1qaz22214tb511",
                                            "type": "text",
                                            "name": "card-text",
                                            "info": {
                                                "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
                                            }
                                        },
                                        {
                                            "id": "1qaz22232214tb511",
                                            "type": "text",
                                            "name": "card-text",
                                            "info": {
                                                "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. "
                                            }
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },


            ]
        },
        // SECTION
        {
            "id": "2e3b5546m56m56m",
            "type": "container",
            "name": "wap-card-3-1",
            "cmps": [
                {
                    "id": "1dv59b59bm94kzzcxv5",
                    "type": "text",
                    "name": "title",
                    "info": {
                        "value": "Services",
                        "class": "title"
                    }
                },
                {
                    "id": "2e3b5546m56m3356m",
                    "type": "container",
                    "name": "services-container",
                    "cmps": [
                        {
                            "id": "2e3b5546mFC56m311356m",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "1dv59b59bm94kzzcxv5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Signature Haircut"
                                    }
                                },
                                {
                                    "id": "2dv59b54m94kzzcx43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$25"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "2e3b5546m562m3113562",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "1dv594b59bm94kzzc5xv5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Haircut"
                                    }
                                },
                                {
                                    "id": "1dv59b59bm94k3zzcx43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$20"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "2e3bgb46m31z6m",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "1dvm9b59bm94kzzcxv5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Beard Shaving"
                                    }
                                },
                                {
                                    "id": "1dv59b59bm94kzz1x43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$15"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "2e3b5546m56m3114m",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "1dv59b59bm94yhn5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Beard Trim"
                                    }
                                },
                                {
                                    "id": "1dz59brcbm94kzzcx43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$15"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "2e3b5546mzzqqa356m",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "1dv59bffget4kzzcxv5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Cut & Shave"
                                    }
                                },
                                {
                                    "id": "1dv59b34y34m94kzzcx43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$30"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "2e3b5541m311356m",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "1dv34559bm94kzzcxv5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Deep Tissue Shave"
                                    }
                                },
                                {
                                    "id": "1dv59b59bm345zzcx43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$22"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "2e3b5546m56m311356m",
                            "type": "container",
                            "name": "service-container",
                            "cmps": [
                                {
                                    "id": "159b5249bm94kzzcxv5",
                                    "type": "text",
                                    "name": "service",
                                    "info": {
                                        "value": "Eyebrow Threading"
                                    }
                                },
                                {
                                    "id": "1dv5943zzcx43v5",
                                    "type": "text",
                                    "name": "price",
                                    "info": {
                                        "value": "$10"
                                    }
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "23244gbgdzxzxz",
            "type": "container",
            "name": "wap-gallery-3",
            "cmps": [
                {
                    "id": "3f3v33zxdw0cvev",
                    "type": "text",
                    "name": "title",
                    "info": {
                        "value": "Gallery",
                        "class": "title"
                    }
                },
                {
                    "id": "3f3fvfr0vk0b0fbk",
                    "type": "container",
                    "name": "gallery-grid",
                    "cmps": [
                        {
                            "id": "3rfergijti9gjrt5",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778196/hair%20and%20there/b47b0e3204d54a93b13108b60de2f04a_rdhcii.png"
                            }
                        },
                        {
                            "id": "3rferg3ti9gjrt5",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778196/hair%20and%20there/35582aca6a1b40f1b7a54037875ee4bd_tmcqdb.png"
                            }
                        },
                        {
                            "id": "3rferg3341jrt5",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778195/hair%20and%20there/43c038_88f3e6d92c854de69c1ce087c35fe58c_mv2_d_3870_3264_s_4_2_omeoo7.png"
                            }
                        },
                        {
                            "id": "3r4rg3341jr4541",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778196/hair%20and%20there/bd10eec5564a47b78638ff005f18261d_ubwmqb.png"
                            }
                        },
                        {
                            "id": "7il9l9p4454343541",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778196/hair%20and%20there/f65e50d6e2b14d108a0b264f5e7399f9_vetsdq.png"
                            }
                        },
                        {
                            "id": "7il9l9p4541",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1663778195/hair%20and%20there/43c038_a552a6c92ff74bcb8994704fae8fe60f_mv2_d_3476_2812_s_4_2_dcuajr.png"
                            }
                        },
                    ]
                }
            ]
        },
        {
            "id": "r54tg4bg5b3Zs2fd",
            "type": "container",
            "name": "wap-form-3",
            "drag": "true",
            "cmps": [
                {
                    "id": "444g4OFKkf0fx03",
                    "type": "text",
                    "name": "title",
                    "info": {
                        "value": "Contact",
                        "class": "title"
                    }
                },
                {
                    "id": "1QA2ws3ED4rf",
                    "type": "container",
                    "name": "form",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "1qaz2Wf33edc4RFV",
                            "type": "input",
                            "input_type": "text",
                            "name": "fullname",
                            "info": {
                                "placeholder": "Full Name"
                            }
                        },
                        {
                            "id": "1qaz243636edc4RFV",
                            "type": "input",
                            "input_type": "email",
                            "name": "email",
                            "info": {
                                "placeholder": "Email"
                            }
                        },
                        {
                            "id": "1qaz2WSX3b54b44RFV",
                            "type": "input",
                            "input_type": "text",
                            "name": "subject",
                            "info": {
                                "placeholder": "Subject"
                            }
                        },
                        {
                            "id": "1qaz2WSX3b54b44R5TGB",
                            "type": "input",
                            "input_type": "text",
                            "name": "message",
                            "info": {
                                "placeholder": "Message"
                            }
                        },
                        {
                            "id": "1q3rv2WSX3b54b442",
                            "type": "button",
                            "name": "submit_btn",
                            "info": {
                                "value": "Submit",
                                "class": "button"
                            }
                        },
                    ]
                }
            ]
        },
        {
            "id": "1f94vm498gJF99j9jd",
            "type": "container",
            "name": "wap-map-3",
            "drag": "true",
            "cmps": [
                {
                    "id": "1f94vm44dbF99j9jd",
                    "type": "map",
                    "name": "wap-map",
                    "info": {
                        "coors": {
                            "lat": 31.6111,
                            "lng": 34.7685
                        }
                    },
                    "cmps": []
                },
                {
                    "id": "1f9e4vm4bfF8gJF99j9jd",
                    "type": "container",
                    "name": "text-info",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "1f9e4vm4bfF8h4435herF99j9jd",
                            "type": "text",
                            "name": "text-info",
                            "drag": "true",
                            "info": {
                                "value": "Opening hours",
                                "class": "title"
                            }
                        },
                        {
                            "id": "1f9e4rhbfF8gJF99j9jd",
                            "type": "text",
                            "name": "text-info",
                            "drag": "true",
                            "info": {
                                "value": "Mon - Fri: 7am - 10pm",
                                "class": "hours"
                            }
                        },
                        {
                            "id": "1f9e4vm4btne9jd",
                            "type": "text",
                            "name": "text-info",
                            "drag": "true",
                            "info": {
                                "value": "Saturday: 8am - 10pm",
                                "class": "hours"
                            }
                        },
                        {
                            "id": "1f9eeeb99j9jd",
                            "type": "text",
                            "name": "text-info",
                            "drag": "true",
                            "info": {
                                "value": "​Sunday: 8am - 11pm",
                                "class": "hours"
                            }
                        },
                    ]
                }
            ]
        }
    ],
    "isPublished": false

}


export const examples = [

    wapExample3
]

