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
            "id": "wh01gdfgdf",
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
            "id": "whe0gfdgdfg1",
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
            "id": "wf0hgfhfgh1",
            "type": "container",
            "name": "wap-form-1",
            "drag": "true",
            "cmps": [
                {
                    "id": "wf021",
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
                        "id": "wf0hfghfgh1",
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
        "id": "wh0kjhkhjk1",
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
        "id": "wh0jghjghjgh1",
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
                            "value": "Home",
                            "navigate": "home"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh04",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Baking Workshops",
                            "navigate": "card"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh05",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Contact Me",
                            "navigate": "form"
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
    "wap-header-3": {
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
    "wap-header-4": {
        "id": "533245346346fdfgdfhg",
        "type": "container",
        "name": "wap-header-4",
        "drag": "true",
        "cmps": [
            {
                "id": "3f3bb6yhxza12133",
                "type": "image",
                "name": "logo",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62960096ee2cee660d3eba55_tattoo_9_c9nkzz.png"
                }
            },
            {
                "id": "44g4btbzpoeF4FPdlf",
                "type": "container",
                "name": "header-nav",
                "drag": "true",
                "cmps": [

                    {
                        "id": "nadavazana1",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "abous us",
                            "class": "header-item"
                        }
                    },
                    {
                        "id": "nadavazana2",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "portfolio",
                            "class": "header-item"
                        }
                    },
                    {
                        "id": "nadavazana3",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "team",
                            "class": "header-item"
                        }
                    },
                    {
                        "id": "nadavazana",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "contact",
                            "class": "header-item"
                        }
                    },
                ]
            },
            {
                "id": "4grgj4rg49g4gk",
                "type": "image",
                "name": "burger",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62962b29040efba9910c47cb_mob_menu_mjwyx4.png"
                }
            }
        ]
    },
    "wap-header-5": {
        "id": "daffo304r0vl0rvlz",
        "type": "container",
        "name": "wap-header-5",
        "drag": "true",
        "cmps": [
            {
                "id": "rgo94gj9ij4g9o5j4",
                "type": "container",
                "name": "logo-container",
                "cmps": [
                    {
                        "id": "rr3f444g4g4gv",
                        "type": "image",
                        "name": "logo",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196749/momentum/fc7570_226c5fa99a9241d59128fe58b7a54073_mv2_uc6wnn.png"
                        }
                    },
                    {
                        "id": "4f4ghgorpozzdvlo",
                        "type": "text",
                        "name": "logo-text",
                        "info": {
                            "value": "Space Ghosts"
                        }
                    }
                ]
            },
            {
                "id": "3fg344vvrvfrrb",
                "type": "container",
                "name": "header-nav",
                "cmps": [
                    {
                        "id": "3f3fbpgtbpglbz",
                        "type": "text",
                        "name": "nav-item",
                        "info": {
                            "value": "Key Features",
                            "class": "nav-item"
                        }
                    },
                    {
                        "id": "3f3fbpds3f",
                        "type": "text",
                        "name": "nav-item",
                        "info": {
                            "value": "Screenshots",
                            "class": "nav-item"
                        }
                    },
                    {
                        "id": "3f3fbpgfgbbpglbz",
                        "type": "text",
                        "name": "nav-item",
                        "info": {
                            "value": "Press",
                            "class": "nav-item"
                        }
                    },
                ]
            },
            {
                "id": "4gvttoxzpz11w",
                "type": "image",
                "name": "burger",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196859/momentum/icons8-menu-50_dquoqz.png"
                }
            }
        ]
    },
}

export const Heroes = {
    "wap-hero-1": {
        "id": "whe0fgdfg1",
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
        "id": "whe0dfgdfgdfg1",
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
        "id": "whe0fgdgdf1",
        "type": "container",
        "name": "wap-hero-2-2",
        "drag": "true",
        "cmps": [
            {
                "id": "whi01",
                "type": "video",
                "info": {
                    "video": "https://res.cloudinary.com/ds8xkm0ue/video/upload/v1663762774/file_q8zifv.mp4"
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
    "wap-hero-3": {
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
    "wap-hero-4": {
        "id": "4t4gfZwdf4r1",
        "type": "container",
        "name": "wap-hero-4",
        "drag": "true",
        "cmps": [
            {
                "id": "4t4gfZwdf4rfefef1",
                "type": "container",
                "name": "hero-container4",
                "drag": "true",
                "cmps": [
                    {
                        "id": "3f3fgfdvvdvdvvdv",
                        "type": "text",
                        "name": "hero-title",
                        "info": {
                            "value": "old school tattoo shøp",
                            "class": "hero-title"
                        }
                    },
                    {
                        "id": "43f4g4gdvcstfgyhty",
                        "type": "button",
                        "name": "hero-button",
                        "info": {
                            "value": "See More"
                        }
                    }
                ]
            }
        ]
    },
    "wap-hero-5": {
        "id": "12rf34f94vkbkokbr",
        "type": "container",
        "name": "wap-hero-5",
        "drag": "true",
        "cmps": [
            {
                "id": "rvokgb0k50b505b",
                "type": "container",
                "name": "hero-grid",
                "cmps": [
                    {
                        "id": "rvokgdccxd0b505b",
                        "type": "container",
                        "name": "hero-title",
                        "cmps": [
                            {
                                "id": "2r2gfgog4g4godf",
                                "type": "text",
                                "info": {
                                    "value": "Space Ghosts",
                                    "class": "title"
                                }
                            },
                            {
                                "id": "2r2gcvcvcvkzpodf",
                                "type": "text",
                                "info": {
                                    "value": "New game from Space-It Industries ltd.",
                                    "class": "subtitle"
                                }
                            },
                            {
                                "id": "2r2gfgodfdgkzpodf",
                                "type": "text",
                                "info": {
                                    "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
                                    "class": "paragraph"
                                }
                            },
                            {
                                "id": "rvokgdd0b4g4505b",
                                "type": "container",
                                "name": "hero-dl-btns",
                                "cmps": [
                                    {
                                        "id": "4tg4og1zkr5gohkt",
                                        "type": "image",
                                        "name": "apple-dl",
                                        "info": {
                                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_2ceee2afeafa4aa083bc3d48986bb811_mv2_tov5cv.png"
                                        }
                                    },
                                    {
                                        "id": "4tg4ogkr5g553gohkt",
                                        "type": "image",
                                        "name": "apple-dl",
                                        "info": {
                                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_83a62c92abd54d60915647751731bc62_mv2_iccizj.png"
                                        }
                                    }
                                ]
                            },
                        ]
                    },

                    {
                        "id": "rvaokgzzdd0b4g4505b",
                        "type": "container",
                        "name": "hero-phone-img",
                        "cmps": [
                            {
                                "id": "5gvfgpzlamrtyu",
                                "type": "image",
                                "name": "apple-dl",
                                "info": {
                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664198414/momentum/ghosts_in_phone_moztny.png"
                                }
                            }
                        ]
                    },

                ]
            },
            {
                "id": "4350450454fkdofkdf",
                "type": "image",
                "name": "bottom-image",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664200467/momentum/fc7570_139fa2837b294043ae48017be2af17e9_mv2_ao11fe.png"
                }
            }
        ]
    },
}

export const Forms = {
    "wap-form-1": {
        "id": "wf0gfhfgh1",
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
                    "id": "wf01sdasdas",
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
        "id": "wf0hgnghng1",
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
    "wap-form-3": {
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
    "wap-form-4": {
        "id": "3ffgrgio9ofk4ck",
        "type": "container",
        "name": "wap-form-4",
        "drag": "true",
        "cmps": [
            {
                "id": "4f4hgfgokoskgg",
                "type": "container",
                "name": "text-container",
                "cmps": [
                    {
                        "id": "3wertjh3et5g08",
                        "type": "text",
                        "name": "title",
                        "info": {
                            "value": "CONTACT",
                            "class": "title"
                        }
                    },
                    {
                        "id": "3wertjh3dgt5g08",
                        "type": "text",
                        "name": "title",
                        "info": {
                            "value": "ask us anything",
                            "class": "subtitle"
                        }
                    }
                ]
            },
            {
                "id": "43fg4hgrtgiu5yh4r",
                "type": "form",
                "name": "form-inputs",
                "info": {
                    "input1": {
                        "tag": "input",
                        "placeholder": "Name",
                        "type": "text",
                        "name": "name"
                    },
                    "input2": {
                        "tag": "input",
                        "placeholder": "Email",
                        "type": "email",
                        "name": "email"
                    },
                    "input3": {
                        "tag": "textarea",
                        "placeholder": "Your message",
                        "type": "text",
                        "name": "msg"
                    }

                }
            }
        ]
    },
    "wap-form-5": {
        "id": "34bthtokbhtohbktobkt",
        "type": "container",
        "name": "wap-form-5",
        "drag": "true",
        "cmps": [
            {
                "id": "43t4g4g4g4g4h4h4h",
                "type": "image",
                "name": "bg-image",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196749/momentum/fc7570_07257cf95ed8425ea8303b7d45519ecb_mv2_rj8quh.png"
                }
            },
            {
                "id": "rejmgt9ork5jg45otg",
                "type": "container",
                "name": "form-container",
                "cmps": [
                    {
                        "id": "3r34grtotgrt",
                        "type": "text",
                        "name": "form-title",
                        "info": {
                            "value": "Subscribe",
                            "class": "form-title"
                        }
                    },
                    {
                        "id": "3r34grtotgrt",
                        "type": "text",
                        "name": "form-title",
                        "info": {
                            "value": "Never miss an update!",
                            "class": "form-subtitle"
                        }
                    },
                    {
                        "id": "4tg4g4jg94jvg9vrjvd",
                        "type": "form",
                        "name": "form-input",
                        "info": {
                            "input1": {
                                "tag": "input",
                                "placeholder": "Your email",
                                "type": "email",
                                "name": "email"
                            },
                        }
                    }
                ]
            }
        ]
    },
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
    },
    "wap-footer-5": {
        "id": "4g45igj5ghe80tr",
        "type": "container",
        "name": "wap-footer-5",
        "drag": "true",
        "cmps": [
            {
                "id": "4t45eohtt5987gh5",
                "type": "container",
                "name": "footer-image-container",
                "cmps": [
                    {
                        "id": "3rt43grbrrrggr",
                        "type": "image",
                        "name": "orange",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_25b43534e2494c909e8a83826be0551c_mv2_z7gpzc.png"
                        }
                    },
                    {
                        "id": "4t5gj5okgj5g",
                        "type": "text",
                        "name": "footer-text",
                        "info": {
                            "value": "Download and Play Now",
                            "class": "footer-text"
                        }
                    }
                ]
            },
            {
                "id": "rvokjltrb4g4505b",
                "type": "container",
                "name": "footer-dl-btns",
                "cmps": [
                    {
                        "id": "4tgznumu4rohkt",
                        "type": "image",
                        "name": "apple-dl",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_2ceee2afeafa4aa083bc3d48986bb811_mv2_tov5cv.png"
                        }
                    },
                    {
                        "id": "4tga1qaaz3t5mjumt",
                        "type": "image",
                        "name": "apple-dl",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_83a62c92abd54d60915647751731bc62_mv2_iccizj.png"
                        }
                    }
                ]
            },
            {
                "id": "wroejiefoj4gi9gt8",
                "type": "text",
                "name": "footer-cr",
                "info": {
                    "value": "© 2023 by Space Alien. Proudly created with Weebo",
                    "class": "footer-cr"
                }
            }
        ]
    }
}

export const Galleries = {

    "wap-gallery-2": {
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
    "wap-gallery-3": {
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
    "wap-gallery-4": {
        "id": "qazrfvyhnujm",
        "type": "container",
        "name": "wap-gallery-4",
        "drag": "true",
        "cmps": [
            {
                "id": "3ffzzplmokn",
                "type": "container",
                "name": "gallery-text-cont",
                "cmps": [
                    {
                        "id": "3ffzzplmokn",
                        "type": "container",
                        "name": "text-cont",
                        "cmps": [
                            {
                                "id": "3fvvgddfss",
                                "type": "text",
                                "name": "latest-works",
                                "info": {
                                    "value": "latest works",
                                    "class": "title"
                                }
                            },
                            {
                                "id": "3fvvgddfss",
                                "type": "text",
                                "name": "latest-works",
                                "info": {
                                    "value": "take a look around our portfolio",
                                    "class": "paragraph"
                                }
                            },

                        ]
                    },
                    {
                        "id": "3ffvzpfglg",
                        "type": "button",
                        "name": "helloitritbritbritnr",
                        "info": {
                            "value": "View More"
                        }
                    }
                ]
            },
            {
                "id": "3rfrtgbgbngn",
                "type": "text",
                "name": "section-title",
                "info": {
                    "value": "works",
                    "class": "section-title"
                }
            },
            {
                "id": "frogkrgk40g40kg",
                "type": "container",
                "name": "gallery",
                "cmps": [
                    {
                        "id": "image1212114234235",
                        "type": "image",
                        "name": "image1",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099021/PAtattoo/62a1ccb322ec1639e7570420_629df1397d1e47d216c189db_photo_2_1_q1atgk.jpg"
                        }
                    },
                    {
                        "id": "image1212erc234235",
                        "type": "image",
                        "name": "image2",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df37c5fd8cf1f80ff02a3_1_photo_1_ytz0wt.png"
                        }
                    },
                    {
                        "id": "imsd22erc234235",
                        "type": "image",
                        "name": "image3",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df43339b6d1edf3c5f27b_photo_5_1_gy1t9f.png"
                        }
                    },
                    {
                        "id": "imsd22erc23423221",
                        "type": "image",
                        "name": "image4",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62a1cf835dabff578916d2a2_tattoo_projects_2_sthjlh.png"
                        }
                    },
                    {
                        "id": "imsd22erc23423221",
                        "type": "image",
                        "name": "image5",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df1200629524217af86a5_photo_3_1_naxcaz.png"
                        }
                    },

                ]
            }
        ]
    },
    "wap-gallery-5": {
        "id": "34ggrgrbrbrbrbrtbtbrtb",
        "type": "container",
        "name": "wap-gallery-5",
        "drag": "true",
        "cmps": [
            {
                "id": "4g4g4g5h5h5hgfgxz",
                "type": "text",
                "name": "gallery-title",
                "info": {
                    "value": "Game Screens",
                    "class": "gallery-title"
                }
            },
            {
                "id": "34vfhthtphrzza",
                "type": "container",
                "name": "gallery-container",
                "cmps": [
                    {
                        "id": "3fg3grgb4g4g4g",
                        "type": "image",
                        "name": "gallery-item",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_c65de2275a5f4f80b2e2ddf5bc8003da_mv2_b4jd0d.png"
                        }
                    },
                    {
                        "id": "3fg3grgb4442ssh6g",
                        "type": "image",
                        "name": "gallery-item",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_79f980e6bd8b4829865f687e0618046a_mv2_sytvyw.png"
                        }
                    },
                    {
                        "id": "3fg3789mnplkjazg",
                        "type": "image",
                        "name": "gallery-item",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_1104a76eb025434fb7589e0edcfbae6a_mv2_mjx77v.png"
                        }
                    }
                ]
            }
        ]
    },
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
    },
    "wap-map-3": {
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
    },
    "wap-map-4": {
        "id": "4g4gfigroifgkreogk",
        "type": "container",
        "name": "wap-map-4",
        "drag": "true",
        "cmps": [
            {
                "id": "43t4g4gozzda",
                "type": "container",
                "name": "text-container",
                "cmps": [
                    {
                        "id": "43t4g4gozzsaa",
                        "type": "container",
                        "name": "text-container-container",
                        "cmps": [
                            {
                                "id": "4grgpzpowped",
                                "type": "text",
                                "name": "title",
                                "info": {
                                    "class": "title",
                                    "value": "address"
                                }
                            },
                            {
                                "id": "4grdfdgpzpowped",
                                "type": "text",
                                "name": "paragraph",
                                "info": {
                                    "class": "paragraph",
                                    "value": "14 tottenham road, london, england"
                                }
                            },
                        ]
                    },
                    {
                        "id": "43tdf4g4gg45da",
                        "type": "container",
                        "name": "text-container-container",
                        "cmps": [
                            {
                                "id": "4grgpzpofd444twped",
                                "type": "text",
                                "name": "title",
                                "info": {
                                    "class": "title",
                                    "value": "information"
                                }
                            },
                            {
                                "id": "zz4grdfdgpzpowped",
                                "type": "text",
                                "name": "paragraph",
                                "info": {
                                    "class": "paragraph",
                                    "value": "info@yourdomain.com (+68) 12004509"
                                }
                            },
                        ]
                    },
                ]
            },
            {
                "id": "43fgijrigj4g94j9",
                "type": "map",
                "name": "map",
                "info": {
                    "coors": {
                        "lat": 32.0853,
                        "lng": 34.7818
                    }
                }
            },
        ]
    }
}


export const Cards = {
    "wap-card-1": {
        "id": "wc01dfsdfsd",
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
        "id": "wc01fsdfsd",
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
                        "id": "wc0fsdfdfsd1",
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
    "wap-card-1-1": {
        "id": "wm01fdsfdfvvsd",
        "type": "container",
        "name": "wap-card-1-1",
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
    },
    "wap-card-3": {
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
    "wap-card-3-1": {
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
    "wap-card-4": {
        "id": "32kokfedkfekfkf",
        "type": "container",
        "name": "wap-card-4",
        "drag": "true",
        "cmps": [
            {
                "id": "32kokfedkre343ffkf",
                "type": "container",
                "name": "card-container1",
                "drag": "true",
                "cmps": [
                    {
                        "id": "43tg4vbb4srsfsf",
                        "type": "text",
                        "name": "card-title",
                        "info": {
                            "value": "about",
                            "class": "card-title"
                        }
                    },
                    {
                        "id": "3f33gffgfghfh",
                        "type": "container",
                        "name": "cont1",
                        "cmps": [
                            {
                                "id": "21kokfeeggee43ffkf",
                                "type": "container",
                                "name": "text-container1",
                                "drag": "true",
                                "cmps": [
                                    {
                                        "id": "333tg4gfbfb",
                                        "type": "text",
                                        "name": "title",
                                        "info": {
                                            "value": "about us",
                                            "class": "title"
                                        }
                                    },
                                    {
                                        "id": "333tg4gfbfb",
                                        "type": "text",
                                        "name": "title",
                                        "info": {
                                            "value": "ultimate experiences with story, emotion and purpose",
                                            "class": "paragraph"
                                        }
                                    }
                                ]
                            },
                            {
                                "id": "21kokfe42ffkf",
                                "type": "container",
                                "name": "text-container2",
                                "drag": "true",
                                "cmps": [
                                    {
                                        "id": "333tg4gfef43bfb",
                                        "type": "text",
                                        "name": "text-bold",
                                        "info": {
                                            "value": "Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum",
                                            "class": "text-bold"
                                        }
                                    },
                                    {
                                        "id": "333tg4g4g4gfbfb",
                                        "type": "text",
                                        "name": "text-regular",
                                        "info": {
                                            "value": "Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Eros mus.",
                                            "class": "text-reg"
                                        }
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "id": "3f33gffgfgh533h",
                        "type": "container",
                        "name": "cont2",
                        "cmps": [
                            {
                                "id": "343fvawpepert",
                                "type": "image",
                                "name": "image",
                                "info": {
                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664108687/PAtattoo/shulamit_wry9ek.jpg"
                                }
                            },
                            {
                                "id": "3534534f33gffgfgh533h",
                                "type": "container",
                                "name": "text-container2",
                                "cmps": [
                                    {
                                        "id": "3f3bfibjrogjb59ohb",
                                        "type": "text",
                                        "name": "quote",
                                        "info": {
                                            "value": "Our mission is to produce the highest quality work for every clients, on every project with full of energy we have",
                                            "class": "quote"
                                        }
                                    },
                                    {
                                        "id": "3r34v44b4bb",
                                        "type": "text",
                                        "name": "name",
                                        "info": {
                                            "value": "Shulamit Vaknin",
                                            "class": "name"
                                        }
                                    },
                                    {
                                        "id": "3r34v444gg4gb4bb",
                                        "type": "text",
                                        "name": "role",
                                        "info": {
                                            "value": "ART DIRECTOR PATATTOO",
                                            "class": "role"
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        "id": "3f33dgdffgfghf533h",
                        "type": "container",
                        "name": "cont3",
                        "cmps": [
                            {
                                "id": "3f33dgdffdfddffdfg",
                                "type": "container",
                                "name": "item",
                                "cmps": [
                                    {
                                        "id": "3f33adgdffdfdagffdfg",
                                        "type": "container",
                                        "name": "image-container",
                                        "cmps": [
                                            {
                                                "id": "4vfZodO440F",
                                                "type": "container",
                                                "name": "backdrop",
                                                "cmps": []
                                            },
                                            {
                                                "id": "44g4vvczz",
                                                "type": "image",
                                                "info": {
                                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/62973346142ee17af616fa63_icon_3_bjs1j1.png"
                                                }
                                            },

                                        ]
                                    },
                                    {
                                        "id": "5h5bfzZzZz",
                                        "type": "container",
                                        "name": "text-container",
                                        "cmps": [
                                            {
                                                "id": "dsddfjdjfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "digital solutions",
                                                    "class": "title"
                                                }
                                            },
                                            {
                                                "id": "dsddfjdjfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                    "class": "paragraph"
                                                }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "3f33dr3fdfg",
                                "type": "container",
                                "name": "item",
                                "cmps": [
                                    {
                                        "id": "3f33adgdf34agffdfg",
                                        "type": "container",
                                        "name": "image-container",
                                        "cmps": [
                                            {
                                                "id": "4vfZgdg40F",
                                                "type": "container",
                                                "name": "backdrop",
                                                "cmps": []
                                            },
                                            {
                                                "id": "44dgczz",
                                                "type": "image",
                                                "info": {
                                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/629733496e481f7394bc0f6c_icon_1_bf9xep.png"
                                                }
                                            },

                                        ]
                                    },
                                    {
                                        "id": "5h5bdgzZz",
                                        "type": "container",
                                        "name": "text-container",
                                        "cmps": [
                                            {
                                                "id": "dsdf334jfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "laser removal",
                                                    "class": "title"
                                                }
                                            },
                                            {
                                                "id": "dsgDjdjfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                    "class": "paragraph"
                                                }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "3fgdgdffdfg",
                                "type": "container",
                                "name": "item",
                                "cmps": [
                                    {
                                        "id": "2kfdfdagffdfg",
                                        "type": "container",
                                        "name": "image-container",
                                        "cmps": [
                                            {
                                                "id": "4vfZod33zz2zzx",
                                                "type": "container",
                                                "name": "backdrop",
                                                "cmps": []
                                            },
                                            {
                                                "id": "44gnhh54",
                                                "type": "image",
                                                "info": {
                                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/629733499117b8dd61028f82_icon_2_edhhf1.png"
                                                }
                                            },

                                        ]
                                    },
                                    {
                                        "id": "5dfdfzdf3Zz",
                                        "type": "container",
                                        "name": "text-container",
                                        "cmps": [
                                            {
                                                "id": "dsddddfzzzd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "tattoo cover up",
                                                    "class": "title"
                                                }
                                            },
                                            {
                                                "id": "dsddft4lmfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                    "class": "paragraph"
                                                }
                                            },
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }, {
                "id": "32kokfe3v3vghdkfekfkf",
                "type": "container",
                "name": "card-container2",
                "drag": "true",
                "cmps": [

                ]
            }, {
                "id": "32kokffghfghfgedkfekfkf",
                "type": "container",
                "name": "card-container3",
                "drag": "true",
                "cmps": [

                ]
            },
        ]
    },
    "wap-card-5": {
        "id": "eork340kg05rvbkrt",
        "type": "container",
        "name": "wap-card-5",
        "drag": "true",
        "cmps": [
            {
                "id": "32rijg9itjr5gb95r4jh49",
                "type": "container",
                "name": "card-container",
                "cmps": [
                    {
                        "id": "3gokgk4gokg4",
                        "type": "image",
                        "name": "ghost-gif",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196750/momentum/fc7570_13825f90a3ee4eb7899ef4f9154c5772_mv2_tycvor.gif"
                        }
                    },
                    {
                        "id": "32rzaitjr5gb95r4jh49",
                        "type": "container",
                        "name": "card-text",
                        "cmps": [
                            {
                                "id": "2fgk04k0g04g",
                                "type": "text",
                                "info": {
                                    "value": "Key Features",
                                    "class": "title"
                                }
                            },
                            {
                                "id": "2fgkazkffgf0g04g",
                                "type": "text",
                                "info": {
                                    "value": "The ultimate pen and paper RPG simulation experience.",
                                    "class": "feature"
                                }
                            },
                            {
                                "id": "2fgka4fgf0g04g",
                                "type": "text",
                                "info": {
                                    "value": " Level up and get your hands on more gold to unlock epic items and gear for your party.",
                                    "class": "feature"
                                }
                            },
                            {
                                "id": "2fgkazkffgggzza04g",
                                "type": "text",
                                "info": {
                                    "value": "Fight and explore your way through a perilous fantasy world to defeat the dark mage.",
                                    "class": "feature"
                                }
                            },
                            {
                                "id": "2qefzkffgf0g04g",
                                "type": "text",
                                "info": {
                                    "value": "As the game master, you can set up the fights yourself and choose how many monsters to battle.",
                                    "class": "feature"
                                }
                            },
                        ]
                    },
                ]
            },
        ]
    },
}

export const All = {
    "wap-card-4": {
        "id": "32kokfedkfekfkf",
        "type": "container",
        "name": "wap-card-4",
        "drag": "true",
        "cmps": [
            {
                "id": "32kokfedkre343ffkf",
                "type": "container",
                "name": "card-container1",
                "drag": "true",
                "cmps": [
                    {
                        "id": "43tg4vbb4srsfsf",
                        "type": "text",
                        "name": "card-title",
                        "info": {
                            "value": "about",
                            "class": "card-title"
                        }
                    },
                    {
                        "id": "3f33gffgfghfh",
                        "type": "container",
                        "name": "cont1",
                        "cmps": [
                            {
                                "id": "21kokfeeggee43ffkf",
                                "type": "container",
                                "name": "text-container1",
                                "drag": "true",
                                "cmps": [
                                    {
                                        "id": "333tg4gfbfb",
                                        "type": "text",
                                        "name": "title",
                                        "info": {
                                            "value": "about us",
                                            "class": "title"
                                        }
                                    },
                                    {
                                        "id": "333tg4gfbfb",
                                        "type": "text",
                                        "name": "title",
                                        "info": {
                                            "value": "ultimate experiences with story, emotion and purpose",
                                            "class": "paragraph"
                                        }
                                    }
                                ]
                            },
                            {
                                "id": "21kokfe42ffkf",
                                "type": "container",
                                "name": "text-container2",
                                "drag": "true",
                                "cmps": [
                                    {
                                        "id": "333tg4gfef43bfb",
                                        "type": "text",
                                        "name": "text-bold",
                                        "info": {
                                            "value": "Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum",
                                            "class": "text-bold"
                                        }
                                    },
                                    {
                                        "id": "333tg4g4g4gfbfb",
                                        "type": "text",
                                        "name": "text-regular",
                                        "info": {
                                            "value": "Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Eros mus.",
                                            "class": "text-reg"
                                        }
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "id": "3f33gffgfgh533h",
                        "type": "container",
                        "name": "cont2",
                        "cmps": [
                            {
                                "id": "343fvawpepert",
                                "type": "image",
                                "name": "image",
                                "info": {
                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664108687/PAtattoo/shulamit_wry9ek.jpg"
                                }
                            },
                            {
                                "id": "3534534f33gffgfgh533h",
                                "type": "container",
                                "name": "text-container2",
                                "cmps": [
                                    {
                                        "id": "3f3bfibjrogjb59ohb",
                                        "type": "text",
                                        "name": "quote",
                                        "info": {
                                            "value": "Our mission is to produce the highest quality work for every clients, on every project with full of energy we have",
                                            "class": "quote"
                                        }
                                    },
                                    {
                                        "id": "3r34v44b4bb",
                                        "type": "text",
                                        "name": "name",
                                        "info": {
                                            "value": "Shulamit Vaknin",
                                            "class": "name"
                                        }
                                    },
                                    {
                                        "id": "3r34v444gg4gb4bb",
                                        "type": "text",
                                        "name": "role",
                                        "info": {
                                            "value": "ART DIRECTOR PATATTOO",
                                            "class": "role"
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        "id": "3f33dgdffgfghf533h",
                        "type": "container",
                        "name": "cont3",
                        "cmps": [
                            {
                                "id": "3f33dgdffdfddffdfg",
                                "type": "container",
                                "name": "item",
                                "cmps": [
                                    {
                                        "id": "3f33adgdffdfdagffdfg",
                                        "type": "container",
                                        "name": "image-container",
                                        "cmps": [
                                            {
                                                "id": "4vfZodO440F",
                                                "type": "container",
                                                "name": "backdrop",
                                                "cmps": []
                                            },
                                            {
                                                "id": "44g4vvczz",
                                                "type": "image",
                                                "info": {
                                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/62973346142ee17af616fa63_icon_3_bjs1j1.png"
                                                }
                                            },

                                        ]
                                    },
                                    {
                                        "id": "5h5bfzZzZz",
                                        "type": "container",
                                        "name": "text-container",
                                        "cmps": [
                                            {
                                                "id": "dsddfjdjfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "digital solutions",
                                                    "class": "title"
                                                }
                                            },
                                            {
                                                "id": "dsddfjdjfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                    "class": "paragraph"
                                                }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "3f33dr3fdfg",
                                "type": "container",
                                "name": "item",
                                "cmps": [
                                    {
                                        "id": "3f33adgdf34agffdfg",
                                        "type": "container",
                                        "name": "image-container",
                                        "cmps": [
                                            {
                                                "id": "4vfZgdg40F",
                                                "type": "container",
                                                "name": "backdrop",
                                                "cmps": []
                                            },
                                            {
                                                "id": "44dgczz",
                                                "type": "image",
                                                "info": {
                                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/629733496e481f7394bc0f6c_icon_1_bf9xep.png"
                                                }
                                            },

                                        ]
                                    },
                                    {
                                        "id": "5h5bdgzZz",
                                        "type": "container",
                                        "name": "text-container",
                                        "cmps": [
                                            {
                                                "id": "dsdf334jfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "laser removal",
                                                    "class": "title"
                                                }
                                            },
                                            {
                                                "id": "dsgDjdjfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                    "class": "paragraph"
                                                }
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "3fgdgdffdfg",
                                "type": "container",
                                "name": "item",
                                "cmps": [
                                    {
                                        "id": "2kfdfdagffdfg",
                                        "type": "container",
                                        "name": "image-container",
                                        "cmps": [
                                            {
                                                "id": "4vfZod33zz2zzx",
                                                "type": "container",
                                                "name": "backdrop",
                                                "cmps": []
                                            },
                                            {
                                                "id": "44gnhh54",
                                                "type": "image",
                                                "info": {
                                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/629733499117b8dd61028f82_icon_2_edhhf1.png"
                                                }
                                            },

                                        ]
                                    },
                                    {
                                        "id": "5dfdfzdf3Zz",
                                        "type": "container",
                                        "name": "text-container",
                                        "cmps": [
                                            {
                                                "id": "dsddddfzzzd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "tattoo cover up",
                                                    "class": "title"
                                                }
                                            },
                                            {
                                                "id": "dsddft4lmfd",
                                                "type": "text",
                                                "name": "title",
                                                "info": {
                                                    "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                    "class": "paragraph"
                                                }
                                            },
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }, {
                "id": "32kokfe3v3vghdkfekfkf",
                "type": "container",
                "name": "card-container2",
                "drag": "true",
                "cmps": [

                ]
            }, {
                "id": "32kokffghfghfgedkfekfkf",
                "type": "container",
                "name": "card-container3",
                "drag": "true",
                "cmps": [

                ]
            },
        ]
    },
    "wap-card-5": {
        "id": "eork340kg05rvbkrt",
        "type": "container",
        "name": "wap-card-5",
        "drag": "true",
        "cmps": [
            {
                "id": "32rijg9itjr5gb95r4jh49",
                "type": "container",
                "name": "card-container",
                "cmps": [
                    {
                        "id": "3gokgk4gokg4",
                        "type": "image",
                        "name": "ghost-gif",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196750/momentum/fc7570_13825f90a3ee4eb7899ef4f9154c5772_mv2_tycvor.gif"
                        }
                    },
                    {
                        "id": "32rzaitjr5gb95r4jh49",
                        "type": "container",
                        "name": "card-text",
                        "cmps": [
                            {
                                "id": "2fgk04k0g04g",
                                "type": "text",
                                "info": {
                                    "value": "Key Features",
                                    "class": "title"
                                }
                            },
                            {
                                "id": "2fgkazkffgf0g04g",
                                "type": "text",
                                "info": {
                                    "value": "The ultimate pen and paper RPG simulation experience.",
                                    "class": "feature"
                                }
                            },
                            {
                                "id": "2fgka4fgf0g04g",
                                "type": "text",
                                "info": {
                                    "value": " Level up and get your hands on more gold to unlock epic items and gear for your party.",
                                    "class": "feature"
                                }
                            },
                            {
                                "id": "2fgkazkffgggzza04g",
                                "type": "text",
                                "info": {
                                    "value": "Fight and explore your way through a perilous fantasy world to defeat the dark mage.",
                                    "class": "feature"
                                }
                            },
                            {
                                "id": "2qefzkffgf0g04g",
                                "type": "text",
                                "info": {
                                    "value": "As the game master, you can set up the fights yourself and choose how many monsters to battle.",
                                    "class": "feature"
                                }
                            },
                        ]
                    },
                ]
            },
        ]
    },
    "wap-map-4": {
        "id": "4g4gfigroifgkreogk",
        "type": "container",
        "name": "wap-map-4",
        "drag": "true",
        "cmps": [
            {
                "id": "43t4g4gozzda",
                "type": "container",
                "name": "text-container",
                "cmps": [
                    {
                        "id": "43t4g4gozzsaa",
                        "type": "container",
                        "name": "text-container-container",
                        "cmps": [
                            {
                                "id": "4grgpzpowped",
                                "type": "text",
                                "name": "title",
                                "info": {
                                    "class": "title",
                                    "value": "address"
                                }
                            },
                            {
                                "id": "4grdfdgpzpowped",
                                "type": "text",
                                "name": "paragraph",
                                "info": {
                                    "class": "paragraph",
                                    "value": "14 tottenham road, london, england"
                                }
                            },
                        ]
                    },
                    {
                        "id": "43tdf4g4gg45da",
                        "type": "container",
                        "name": "text-container-container",
                        "cmps": [
                            {
                                "id": "4grgpzpofd444twped",
                                "type": "text",
                                "name": "title",
                                "info": {
                                    "class": "title",
                                    "value": "information"
                                }
                            },
                            {
                                "id": "zz4grdfdgpzpowped",
                                "type": "text",
                                "name": "paragraph",
                                "info": {
                                    "class": "paragraph",
                                    "value": "info@yourdomain.com (+68) 12004509"
                                }
                            },
                        ]
                    },
                ]
            },
            {
                "id": "43fgijrigj4g94j9",
                "type": "map",
                "name": "map",
                "info": {
                    "coors": {
                        "lat": 32.0853,
                        "lng": 34.7818
                    }
                }
            },
        ]
    },
    "wap-gallery-4": {
        "id": "qazrfvyhnujm",
        "type": "container",
        "name": "wap-gallery-4",
        "drag": "true",
        "cmps": [
            {
                "id": "3ffzzplmokn",
                "type": "container",
                "name": "gallery-text-cont",
                "cmps": [
                    {
                        "id": "3ffzzplmokn",
                        "type": "container",
                        "name": "text-cont",
                        "cmps": [
                            {
                                "id": "3fvvgddfss",
                                "type": "text",
                                "name": "latest-works",
                                "info": {
                                    "value": "latest works",
                                    "class": "title"
                                }
                            },
                            {
                                "id": "3fvvgddfss",
                                "type": "text",
                                "name": "latest-works",
                                "info": {
                                    "value": "take a look around our portfolio",
                                    "class": "paragraph"
                                }
                            },

                        ]
                    },
                    {
                        "id": "3ffvzpfglg",
                        "type": "button",
                        "name": "helloitritbritbritnr",
                        "info": {
                            "value": "View More"
                        }
                    }
                ]
            },
            {
                "id": "3rfrtgbgbngn",
                "type": "text",
                "name": "section-title",
                "info": {
                    "value": "works",
                    "class": "section-title"
                }
            },
            {
                "id": "frogkrgk40g40kg",
                "type": "container",
                "name": "gallery",
                "cmps": [
                    {
                        "id": "image1212114234235",
                        "type": "image",
                        "name": "image1",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099021/PAtattoo/62a1ccb322ec1639e7570420_629df1397d1e47d216c189db_photo_2_1_q1atgk.jpg"
                        }
                    },
                    {
                        "id": "image1212erc234235",
                        "type": "image",
                        "name": "image2",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df37c5fd8cf1f80ff02a3_1_photo_1_ytz0wt.png"
                        }
                    },
                    {
                        "id": "imsd22erc234235",
                        "type": "image",
                        "name": "image3",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df43339b6d1edf3c5f27b_photo_5_1_gy1t9f.png"
                        }
                    },
                    {
                        "id": "imsd22erc23423221",
                        "type": "image",
                        "name": "image4",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62a1cf835dabff578916d2a2_tattoo_projects_2_sthjlh.png"
                        }
                    },
                    {
                        "id": "imsd22erc23423221",
                        "type": "image",
                        "name": "image5",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df1200629524217af86a5_photo_3_1_naxcaz.png"
                        }
                    },

                ]
            }
        ]
    },
    "wap-gallery-5": {
        "id": "34ggrgrbrbrbrbrtbtbrtb",
        "type": "container",
        "name": "wap-gallery-5",
        "drag": "true",
        "cmps": [
            {
                "id": "4g4g4g5h5h5hgfgxz",
                "type": "text",
                "name": "gallery-title",
                "info": {
                    "value": "Game Screens",
                    "class": "gallery-title"
                }
            },
            {
                "id": "34vfhthtphrzza",
                "type": "container",
                "name": "gallery-container",
                "cmps": [
                    {
                        "id": "3fg3grgb4g4g4g",
                        "type": "image",
                        "name": "gallery-item",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_c65de2275a5f4f80b2e2ddf5bc8003da_mv2_b4jd0d.png"
                        }
                    },
                    {
                        "id": "3fg3grgb4442ssh6g",
                        "type": "image",
                        "name": "gallery-item",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_79f980e6bd8b4829865f687e0618046a_mv2_sytvyw.png"
                        }
                    },
                    {
                        "id": "3fg3789mnplkjazg",
                        "type": "image",
                        "name": "gallery-item",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_1104a76eb025434fb7589e0edcfbae6a_mv2_mjx77v.png"
                        }
                    }
                ]
            }
        ]
    },
    "wap-footer-5": {
        "id": "4g45igj5ghe80tr",
        "type": "container",
        "name": "wap-footer-5",
        "drag": "true",
        "cmps": [
            {
                "id": "4t45eohtt5987gh5",
                "type": "container",
                "name": "footer-image-container",
                "cmps": [
                    {
                        "id": "3rt43grbrrrggr",
                        "type": "image",
                        "name": "orange",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_25b43534e2494c909e8a83826be0551c_mv2_z7gpzc.png"
                        }
                    },
                    {
                        "id": "4t5gj5okgj5g",
                        "type": "text",
                        "name": "footer-text",
                        "info": {
                            "value": "Download and Play Now",
                            "class": "footer-text"
                        }
                    }
                ]
            },
            {
                "id": "rvokjltrb4g4505b",
                "type": "container",
                "name": "footer-dl-btns",
                "cmps": [
                    {
                        "id": "4tgznumu4rohkt",
                        "type": "image",
                        "name": "apple-dl",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_2ceee2afeafa4aa083bc3d48986bb811_mv2_tov5cv.png"
                        }
                    },
                    {
                        "id": "4tga1qaaz3t5mjumt",
                        "type": "image",
                        "name": "apple-dl",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_83a62c92abd54d60915647751731bc62_mv2_iccizj.png"
                        }
                    }
                ]
            },
            {
                "id": "wroejiefoj4gi9gt8",
                "type": "text",
                "name": "footer-cr",
                "info": {
                    "value": "© 2023 by Space Alien. Proudly created with Weebo",
                    "class": "footer-cr"
                }
            }
        ]
    },
    "wap-form-4": {
        "id": "3ffgrgio9ofk4ck",
        "type": "container",
        "name": "wap-form-4",
        "drag": "true",
        "cmps": [
            {
                "id": "4f4hgfgokoskgg",
                "type": "container",
                "name": "text-container",
                "cmps": [
                    {
                        "id": "3wertjh3et5g08",
                        "type": "text",
                        "name": "title",
                        "info": {
                            "value": "CONTACT",
                            "class": "title"
                        }
                    },
                    {
                        "id": "3wertjh3dgt5g08",
                        "type": "text",
                        "name": "title",
                        "info": {
                            "value": "ask us anything",
                            "class": "subtitle"
                        }
                    }
                ]
            },
            {
                "id": "43fg4hgrtgiu5yh4r",
                "type": "form",
                "name": "form-inputs",
                "info": {
                    "input1": {
                        "tag": "input",
                        "placeholder": "Name",
                        "type": "text",
                        "name": "name"
                    },
                    "input2": {
                        "tag": "input",
                        "placeholder": "Email",
                        "type": "email",
                        "name": "email"
                    },
                    "input3": {
                        "tag": "textarea",
                        "placeholder": "Your message",
                        "type": "text",
                        "name": "msg"
                    }

                }
            }
        ]
    },
    "wap-form-5": {
        "id": "34bthtokbhtohbktobkt",
        "type": "container",
        "name": "wap-form-5",
        "drag": "true",
        "cmps": [
            {
                "id": "43t4g4g4g4g4h4h4h",
                "type": "image",
                "name": "bg-image",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196749/momentum/fc7570_07257cf95ed8425ea8303b7d45519ecb_mv2_rj8quh.png"
                }
            },
            {
                "id": "rejmgt9ork5jg45otg",
                "type": "container",
                "name": "form-container",
                "cmps": [
                    {
                        "id": "3r34grtotgrt",
                        "type": "text",
                        "name": "form-title",
                        "info": {
                            "value": "Subscribe",
                            "class": "form-title"
                        }
                    },
                    {
                        "id": "3r34grtotgrt",
                        "type": "text",
                        "name": "form-title",
                        "info": {
                            "value": "Never miss an update!",
                            "class": "form-subtitle"
                        }
                    },
                    {
                        "id": "4tg4g4jg94jvg9vrjvd",
                        "type": "form",
                        "name": "form-input",
                        "info": {
                            "input1": {
                                "tag": "input",
                                "placeholder": "Your email",
                                "type": "email",
                                "name": "email"
                            },
                        }
                    }
                ]
            }
        ]
    },
    "wap-hero-4": {
        "id": "4t4gfZwdf4r1",
        "type": "container",
        "name": "wap-hero-4",
        "drag": "true",
        "cmps": [
            {
                "id": "4t4gfZwdf4rfefef1",
                "type": "container",
                "name": "hero-container4",
                "drag": "true",
                "cmps": [
                    {
                        "id": "3f3fgfdvvdvdvvdv",
                        "type": "text",
                        "name": "hero-title",
                        "info": {
                            "value": "old school tattoo shøp",
                            "class": "hero-title"
                        }
                    },
                    {
                        "id": "43f4g4gdvcstfgyhty",
                        "type": "button",
                        "name": "hero-button",
                        "info": {
                            "value": "See More"
                        }
                    }
                ]
            }
        ]
    },
    "wap-hero-5": {
        "id": "12rf34f94vkbkokbr",
        "type": "container",
        "name": "wap-hero-5",
        "drag": "true",
        "cmps": [
            {
                "id": "rvokgb0k50b505b",
                "type": "container",
                "name": "hero-grid",
                "cmps": [
                    {
                        "id": "rvokgdccxd0b505b",
                        "type": "container",
                        "name": "hero-title",
                        "cmps": [
                            {
                                "id": "2r2gfgogkzpodsdgsgdf",
                                "type": "text",
                                "info": {
                                    "value": "Space Ghosts",
                                    "class": "title"
                                }
                            },
                            {
                                "id": "2r2gfas132gogkzpodf",
                                "type": "text",
                                "info": {
                                    "value": "New game from Space-It Industries ltd.",
                                    "class": "subtitle"
                                }
                            },
                            {
                                "id": "2r2gfgodfdgkzpodf",
                                "type": "text",
                                "info": {
                                    "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
                                    "class": "paragraph"
                                }
                            },
                            {
                                "id": "rvokgdd0b4g4505b",
                                "type": "container",
                                "name": "hero-dl-btns",
                                "cmps": [
                                    {
                                        "id": "4tg4ogksdsdr5gohkt",
                                        "type": "image",
                                        "name": "apple-dl",
                                        "info": {
                                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_2ceee2afeafa4aa083bc3d48986bb811_mv2_tov5cv.png"
                                        }
                                    },
                                    {
                                        "id": "4tg4ogkfdfdzr5gohkt",
                                        "type": "image",
                                        "name": "apple-dl",
                                        "info": {
                                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_83a62c92abd54d60915647751731bc62_mv2_iccizj.png"
                                        }
                                    }
                                ]
                            },
                        ]
                    },

                    {
                        "id": "rvaokgzzdd0b4g4505b",
                        "type": "container",
                        "name": "hero-phone-img",
                        "cmps": [
                            {
                                "id": "5gvfgpzlamrtyu",
                                "type": "image",
                                "name": "apple-dl",
                                "info": {
                                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664198414/momentum/ghosts_in_phone_moztny.png"
                                }
                            }
                        ]
                    },

                ]
            },
            {
                "id": "4350450454fkdofkdf",
                "type": "image",
                "name": "bottom-image",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664200467/momentum/fc7570_139fa2837b294043ae48017be2af17e9_mv2_ao11fe.png"
                }
            }
        ]
    },
    "wap-header-4": {
        "id": "533245346346fdfgdfhg",
        "type": "container",
        "name": "wap-header-4",
        "drag": "true",
        "cmps": [
            {
                "id": "3f3bb6yhxza12133",
                "type": "image",
                "name": "logo",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62960096ee2cee660d3eba55_tattoo_9_c9nkzz.png"
                }
            },
            {
                "id": "44g4btbzpoeF4FPdlf",
                "type": "container",
                "name": "header-nav",
                "drag": "true",
                "cmps": [

                    {
                        "id": "nadavazana1",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "abous us",
                            "class": "header-item"
                        }
                    },
                    {
                        "id": "nadavazana2",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "portfolio",
                            "class": "header-item"
                        }
                    },
                    {
                        "id": "nadavazana3",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "team",
                            "class": "header-item"
                        }
                    },
                    {
                        "id": "nadavazana",
                        "type": "text",
                        "name": "header-item",
                        "info": {
                            "value": "contact",
                            "class": "header-item"
                        }
                    },
                ]
            },
            {
                "id": "4grgj4rg49g4gk",
                "type": "image",
                "name": "burger",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62962b29040efba9910c47cb_mob_menu_mjwyx4.png"
                }
            }
        ]
    },
    "wap-header-5": {
        "id": "daffo304r0vl0rvlz",
        "type": "container",
        "name": "wap-header-5",
        "drag": "true",
        "cmps": [
            {
                "id": "rgo94gj9ij4g9o5j4",
                "type": "container",
                "name": "logo-container",
                "cmps": [
                    {
                        "id": "rr3f444g4g4gv",
                        "type": "image",
                        "name": "logo",
                        "info": {
                            "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196749/momentum/fc7570_226c5fa99a9241d59128fe58b7a54073_mv2_uc6wnn.png"
                        }
                    },
                    {
                        "id": "4f4ghgorpozzdvlo",
                        "type": "text",
                        "name": "logo-text",
                        "info": {
                            "value": "Space Ghosts"
                        }
                    }
                ]
            },
            {
                "id": "3fg344vvrvfrrb",
                "type": "container",
                "name": "header-nav",
                "cmps": [
                    {
                        "id": "3f3fbpgtbpglbz",
                        "type": "text",
                        "name": "nav-item",
                        "info": {
                            "value": "Key Features",
                            "class": "nav-item"
                        }
                    },
                    {
                        "id": "3f3fbpds3f",
                        "type": "text",
                        "name": "nav-item",
                        "info": {
                            "value": "Screenshots",
                            "class": "nav-item"
                        }
                    },
                    {
                        "id": "3f3fbpgfgbbpglbz",
                        "type": "text",
                        "name": "nav-item",
                        "info": {
                            "value": "Press",
                            "class": "nav-item"
                        }
                    },
                ]
            },
            {
                "id": "4gvttoxzpz11w",
                "type": "image",
                "name": "burger",
                "info": {
                    "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196859/momentum/icons8-menu-50_dquoqz.png"
                }
            }
        ]
    },

    "wap-header-1": {
        "id": "wh01324243242",
        "type": "container",
        "name": "wap-header-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wh02423423",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Bailard Foundation"
                },
                "cmps": []
            },
            {
                "id": "wh03423423",
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
    "wap-header-2": {
        "id": "wh0dsfsdf2",
        "type": "container",
        "name": "wap-header-2",
        "drag": "true",
        "cmps": [

            {
                "id": "wh0dsfsdf3",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Sweet Pies"
                },
                "cmps": []
            },
            {
                "id": "wh03432423",
                "type": "container",
                "name": "wap-container",
                "cmps": [
                    {
                        "id": "wc0dsfsdf22",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Home"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh044dsfdf234",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "nav-item",
                            "value": "Baking Workshops"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh0542dfsf3423",
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
                "id": "wi0sdfsdf1",
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

    "wap-form-2": {
        "id": "wf0dfsfds1",
        "type": "container",
        "name": "wap-form-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wffsdfsd07",
                "type": "container",
                "name": "wap-form",
                "cmps": [
                    {
                        "id": "fc1sdfsd01",
                        "type": "container",
                        "name": "form-container",
                        "cmps": [
                            {
                                "id": "wfsdfdfsd025",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Contact Me"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wf01sdfsd211",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "paragraph",
                                    "value": "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
                                },
                                "cmps": []
                            },
                            {
                                "id": "ficsdffsdf01",
                                "type": "container",
                                "name": "form-input-container",
                                "cmps": [
                                    {
                                        "id": "wffsdfsdf01",
                                        "type": "input",
                                        "input_type": "text",
                                        "info": {
                                            "placeholder": "Name"
                                        },
                                        "name": "wap-input",
                                        "cmps": []
                                    },
                                    {
                                        "id": "wf02fsdfds6",
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
                                "id": "wf0fsdfsdf27",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Phone"
                                },
                                "name": "wap-input",
                                "cmps": []
                            },
                            {
                                "id": "wfsdfsdfsd04",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Type your message here..."
                                },
                                "name": "wap-input-textarea",
                                "cmps": []
                            },
                            {
                                "id": "wh0sdfsdfs8",
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
    "wap-hero-2-1": {
        "id": "whe0fsdf1",
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
                        "id": "wh054324324",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "My Story"
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh01fdsfsd21",
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
                "id": "whivbnvbn01",
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
        "id": "whekhjkhj01",
        "type": "container",
        "name": "wap-hero-2-2",
        "drag": "true",
        "cmps": [
            {
                "id": "whi0ytutyjnmj1",
                "type": "video",
                "info": {
                    "video": "https://res.cloudinary.com/ds8xkm0ue/video/upload/v1663762774/file_q8zifv.mp4"
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
                        "id": "wh0jghjgh5",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "title",
                            "value": "The Baking Workshops"
                        },
                        "cmps": []
                    },
                    {
                        "id": "whmnmhjmm06",
                        "type": "text",
                        "name": "wap-text",
                        "info": {
                            "class": "paragraph",
                            "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. "
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh0,jk,jk,8",
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

    "wap-card-1": {
        "id": "wc0132423423",
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
                        "id": "wc03khjkhjkjh",
                        "type": "container",
                        "name": "info-container",

                        "cmps": [
                            {
                                "id": "wc0kjhkhjkhjkm3",
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
                                "id": "wc04khjkhjk",
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
                                "id": "wcmnhmhjmhj05",
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
                "id": "wc03mjhhjmhjmhj",
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
        "id": "wm01khjkjh",
        "type": "container",
        "name": "wap-map-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wm0khjkhj2",
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
                "id": "wm0khjkhj3",
                "type": "map",
                "name": "wap-map",
                "cmps": [

                ]
            }
        ]
    },

    "wap-footer-1": {
        "id": "wft01khjm",
        "type": "container",
        "name": "wap-footer-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wftkjh02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "logo",
                    "value": "Weebo."
                },
                "cmps": []
            },
            {
                "id": "wfkhjmjht03",
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
        "id": "wfmhjmjhm01",
        "type": "container",
        "name": "wap-form-1",
        "drag": "true",
        "cmps": [
            {
                "id": "wf0khjk24",
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
                "id": "wf0jkhkhjkj3",
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
                "id": "wf07khjkh",
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
        "id": "whe0khjkhjk1",
        "type": "container",
        "name": "wap-hero-1",
        "drag": "true",
        "cmps": [
            {
                "id": "whejkjhk02",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "hero-item-1",
                    "value": "Sustainability"
                },
                "cmps": []
            },
            {
                "id": "whe0kjhkhj3",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "hero-item-2",
                    "value": "Starts With You"
                },
                "cmps": []
            },

            {
                "id": "whkjhkjhe05",
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
    "wap-card-2": {
        "id": "wc02432423",
        "type": "container",
        "name": "wap-card-2",
        "cmps": [
            {
                "id": "wct0jkjh12",
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
    "wap-card-3": {
        "id": "wc03324234",
        "type": "container",
        "name": "wap-card-3",
        "cmps": [
            {
                "id": "wc90khj2",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "We conserve land through outreach and restoration."
                },
                "cmps": []
            },
            {
                "id": "wc7mhj8903",
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
    "wap-gallery-2": {
        "id": "wg0jkhkjh1",
        "type": "container",
        "name": "wap-gallery-2",
        "drag": "true",
        "cmps": [
            {
                "id": "wg02kjhkhj",
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
                "id": "wg03kjhkhj",
                "type": "container",
                "name": "wap-gallery-sweetpies",
                "cmps": [
                    {
                        "id": "whijhkhj01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-1.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi0khjkhj2",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-2.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whijhkjhk03",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-3.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi0khjkhj4",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-4.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi05khjkhj",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-5.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi0jkhkhj6",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-6.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whihjkhkhjkhm07",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-7.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whihjchgm08",
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
        "id": "wh01fsdfsd",
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
        "id": "whe01gfdgdf",
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
        "id": "whe0kjhkhjkhj1",
        "type": "container",
        "name": "wap-hero-2-2",
        "drag": "true",
        "cmps": [
            {
                "id": "whi01",
                "type": "video",
                "info": {
                    "video": "https://res.cloudinary.com/ds8xkm0ue/video/upload/v1663762774/file_q8zifv.mp4"
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
        "id": "wf0fdgdfgd1",
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
                                        "id": "bgfbgfb",
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

export const wapExample4 = {
    "_id": "63315d8388b5a7567ab940e3",
    "type": "container",
    "name": "PAtattoo",
    "subcategory": "Tattoo Shop",
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
            "id": "533245346346fdfgdfhg",
            "type": "container",
            "name": "wap-header-4",
            "drag": "true",
            "cmps": [
                {
                    "id": "3f3bb6yhxza12133",
                    "type": "image",
                    "name": "logo",
                    "info": {
                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62960096ee2cee660d3eba55_tattoo_9_c9nkzz.png"
                    }
                },
                {
                    "id": "44g4btbzpoeF4FPdlf",
                    "type": "container",
                    "name": "header-nav",
                    "drag": "true",
                    "cmps": [

                        {
                            "id": "nadavazana1",
                            "type": "text",
                            "name": "header-item",
                            "info": {
                                "value": "abous us",
                                "class": "header-item"
                            }
                        },
                        {
                            "id": "nadavazana2",
                            "type": "text",
                            "name": "header-item",
                            "info": {
                                "value": "portfolio",
                                "class": "header-item"
                            }
                        },
                        {
                            "id": "nadavazana3",
                            "type": "text",
                            "name": "header-item",
                            "info": {
                                "value": "team",
                                "class": "header-item"
                            }
                        },
                        {
                            "id": "nadavazana",
                            "type": "text",
                            "name": "header-item",
                            "info": {
                                "value": "contact",
                                "class": "header-item"
                            }
                        },
                    ]
                },
                {
                    "id": "4grgj4rg49g4gk",
                    "type": "image",
                    "name": "burger",
                    "info": {
                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62962b29040efba9910c47cb_mob_menu_mjwyx4.png"
                    }
                }
            ]
        },
        // Hero
        {
            "id": "4t4gfZwdf4r1",
            "type": "container",
            "name": "wap-hero-4",
            "drag": "true",
            "cmps": [
                {
                    "id": "4t4gfZwdf4rfefef1",
                    "type": "container",
                    "name": "hero-container4",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "3f3fgfdvvdvdvvdv",
                            "type": "text",
                            "name": "hero-title",
                            "info": {
                                "value": "old school tattoo shøp",
                                "class": "hero-title"
                            }
                        },
                        {
                            "id": "43f4g4gdvcstfgyhty",
                            "type": "button",
                            "name": "hero-button",
                            "info": {
                                "value": "See More"
                            }
                        }
                    ]
                }
            ]
        },
        // Card
        {
            "id": "32kokfedkfekfkf",
            "type": "container",
            "name": "wap-card-4",
            "drag": "true",
            "cmps": [
                {
                    "id": "32kokfedkre343ffkf",
                    "type": "container",
                    "name": "card-container1",
                    "drag": "true",
                    "cmps": [
                        {
                            "id": "43tg4vbb4srsfsf",
                            "type": "text",
                            "name": "card-title",
                            "info": {
                                "value": "about",
                                "class": "card-title"
                            }
                        },
                        {
                            "id": "3f33gffgfghfh",
                            "type": "container",
                            "name": "cont1",
                            "cmps": [
                                {
                                    "id": "21kokfeeggee43ffkf",
                                    "type": "container",
                                    "name": "text-container1",
                                    "drag": "true",
                                    "cmps": [
                                        {
                                            "id": "333tg4gfbfb",
                                            "type": "text",
                                            "name": "title",
                                            "info": {
                                                "value": "about us",
                                                "class": "title"
                                            }
                                        },
                                        {
                                            "id": "333tg4gfbfb",
                                            "type": "text",
                                            "name": "title",
                                            "info": {
                                                "value": "ultimate experiences with story, emotion and purpose",
                                                "class": "paragraph"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "id": "21kokfe42ffkf",
                                    "type": "container",
                                    "name": "text-container2",
                                    "drag": "true",
                                    "cmps": [
                                        {
                                            "id": "333tg4gfef43bfb",
                                            "type": "text",
                                            "name": "text-bold",
                                            "info": {
                                                "value": "Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum",
                                                "class": "text-bold"
                                            }
                                        },
                                        {
                                            "id": "333tg4g4g4gfbfb",
                                            "type": "text",
                                            "name": "text-regular",
                                            "info": {
                                                "value": "Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Eros mus.",
                                                "class": "text-reg"
                                            }
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            "id": "3f33gffgfgh533h",
                            "type": "container",
                            "name": "cont2",
                            "cmps": [
                                {
                                    "id": "343fvawpepert",
                                    "type": "image",
                                    "name": "image",
                                    "info": {
                                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664108687/PAtattoo/shulamit_wry9ek.jpg"
                                    }
                                },
                                {
                                    "id": "3534534f33gffgfgh533h",
                                    "type": "container",
                                    "name": "text-container2",
                                    "cmps": [
                                        {
                                            "id": "3f3bfibjrogjb59ohb",
                                            "type": "text",
                                            "name": "quote",
                                            "info": {
                                                "value": "Our mission is to produce the highest quality work for every clients, on every project with full of energy we have",
                                                "class": "quote"
                                            }
                                        },
                                        {
                                            "id": "3r34v44b4bb",
                                            "type": "text",
                                            "name": "name",
                                            "info": {
                                                "value": "Shulamit Vaknin",
                                                "class": "name"
                                            }
                                        },
                                        {
                                            "id": "3r34v444gg4gb4bb",
                                            "type": "text",
                                            "name": "role",
                                            "info": {
                                                "value": "ART DIRECTOR PATATTOO",
                                                "class": "role"
                                            }
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "id": "3f33dgdffgfghf533h",
                            "type": "container",
                            "name": "cont3",
                            "cmps": [
                                {
                                    "id": "3f33dgdffdfddffdfg",
                                    "type": "container",
                                    "name": "item",
                                    "cmps": [
                                        {
                                            "id": "3f33adgdffdfdagffdfg",
                                            "type": "container",
                                            "name": "image-container",
                                            "cmps": [
                                                {
                                                    "id": "4vfZodO440F",
                                                    "type": "container",
                                                    "name": "backdrop",
                                                    "cmps": []
                                                },
                                                {
                                                    "id": "44g4vvczz",
                                                    "type": "image",
                                                    "info": {
                                                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/62973346142ee17af616fa63_icon_3_bjs1j1.png"
                                                    }
                                                },

                                            ]
                                        },
                                        {
                                            "id": "5h5bfzZzZz",
                                            "type": "container",
                                            "name": "text-container",
                                            "cmps": [
                                                {
                                                    "id": "dsddfjdjfd",
                                                    "type": "text",
                                                    "name": "title",
                                                    "info": {
                                                        "value": "digital solutions",
                                                        "class": "title"
                                                    }
                                                },
                                                {
                                                    "id": "dsddfjdjfd",
                                                    "type": "text",
                                                    "name": "title",
                                                    "info": {
                                                        "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                        "class": "paragraph"
                                                    }
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "3f33dr3fdfg",
                                    "type": "container",
                                    "name": "item",
                                    "cmps": [
                                        {
                                            "id": "3f33adgdf34agffdfg",
                                            "type": "container",
                                            "name": "image-container",
                                            "cmps": [
                                                {
                                                    "id": "4vfZgdg40F",
                                                    "type": "container",
                                                    "name": "backdrop",
                                                    "cmps": []
                                                },
                                                {
                                                    "id": "44dgczz",
                                                    "type": "image",
                                                    "info": {
                                                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/629733496e481f7394bc0f6c_icon_1_bf9xep.png"
                                                    }
                                                },

                                            ]
                                        },
                                        {
                                            "id": "5h5bdgzZz",
                                            "type": "container",
                                            "name": "text-container",
                                            "cmps": [
                                                {
                                                    "id": "dsdf334jfd",
                                                    "type": "text",
                                                    "name": "title",
                                                    "info": {
                                                        "value": "laser removal",
                                                        "class": "title"
                                                    }
                                                },
                                                {
                                                    "id": "dsgDjdjfd",
                                                    "type": "text",
                                                    "name": "title",
                                                    "info": {
                                                        "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                        "class": "paragraph"
                                                    }
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "3fgdgdffdfg",
                                    "type": "container",
                                    "name": "item",
                                    "cmps": [
                                        {
                                            "id": "2kfdfdagffdfg",
                                            "type": "container",
                                            "name": "image-container",
                                            "cmps": [
                                                {
                                                    "id": "4vfZod33zz2zzx",
                                                    "type": "container",
                                                    "name": "backdrop",
                                                    "cmps": []
                                                },
                                                {
                                                    "id": "44gnhh54",
                                                    "type": "image",
                                                    "info": {
                                                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099023/PAtattoo/629733499117b8dd61028f82_icon_2_edhhf1.png"
                                                    }
                                                },

                                            ]
                                        },
                                        {
                                            "id": "5dfdfzdf3Zz",
                                            "type": "container",
                                            "name": "text-container",
                                            "cmps": [
                                                {
                                                    "id": "dsddddfzzzd",
                                                    "type": "text",
                                                    "name": "title",
                                                    "info": {
                                                        "value": "tattoo cover up",
                                                        "class": "title"
                                                    }
                                                },
                                                {
                                                    "id": "dsddft4lmfd",
                                                    "type": "text",
                                                    "name": "title",
                                                    "info": {
                                                        "value": "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration",
                                                        "class": "paragraph"
                                                    }
                                                },
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }, {
                    "id": "32kokfe3v3vghdkfekfkf",
                    "type": "container",
                    "name": "card-container2",
                    "drag": "true",
                    "cmps": [

                    ]
                }, {
                    "id": "32kokffghfghfgedkfekfkf",
                    "type": "container",
                    "name": "card-container3",
                    "drag": "true",
                    "cmps": [

                    ]
                },
            ]
        },
        // gallery
        {
            "id": "qazrfvyhnujm",
            "type": "container",
            "name": "wap-gallery-4",
            "drag": "true",
            "cmps": [
                {
                    "id": "3ffzzplmokn",
                    "type": "container",
                    "name": "gallery-text-cont",
                    "cmps": [
                        {
                            "id": "3ffzzplmokn",
                            "type": "container",
                            "name": "text-cont",
                            "cmps": [
                                {
                                    "id": "3fvvgddfss",
                                    "type": "text",
                                    "name": "latest-works",
                                    "info": {
                                        "value": "latest works",
                                        "class": "title"
                                    }
                                },
                                {
                                    "id": "3fvvgddfss",
                                    "type": "text",
                                    "name": "latest-works",
                                    "info": {
                                        "value": "take a look around our portfolio",
                                        "class": "paragraph"
                                    }
                                },

                            ]
                        },
                        {
                            "id": "3ffvzpfglg",
                            "type": "button",
                            "name": "helloitritbritbritnr",
                            "info": {
                                "value": "View More"
                            }
                        }
                    ]
                },
                {
                    "id": "3rfrtgbgbngn",
                    "type": "text",
                    "name": "section-title",
                    "info": {
                        "value": "works",
                        "class": "section-title"
                    }
                },
                {
                    "id": "frogkrgk40g40kg",
                    "type": "container",
                    "name": "gallery",
                    "cmps": [
                        {
                            "id": "image1212114234235",
                            "type": "image",
                            "name": "image1",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099021/PAtattoo/62a1ccb322ec1639e7570420_629df1397d1e47d216c189db_photo_2_1_q1atgk.jpg"
                            }
                        },
                        {
                            "id": "image1212erc234235",
                            "type": "image",
                            "name": "image2",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df37c5fd8cf1f80ff02a3_1_photo_1_ytz0wt.png"
                            }
                        },
                        {
                            "id": "imsd22erc234235",
                            "type": "image",
                            "name": "image3",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df43339b6d1edf3c5f27b_photo_5_1_gy1t9f.png"
                            }
                        },
                        {
                            "id": "imsd22erc23423221",
                            "type": "image",
                            "name": "image4",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/62a1cf835dabff578916d2a2_tattoo_projects_2_sthjlh.png"
                            }
                        },
                        {
                            "id": "imsd22erc23423221",
                            "type": "image",
                            "name": "image5",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664099022/PAtattoo/629df1200629524217af86a5_photo_3_1_naxcaz.png"
                            }
                        },

                    ]
                }
            ]
        },
        // form
        {
            "id": "3ffgrgio9ofk4ck",
            "type": "container",
            "name": "wap-form-4",
            "drag": "true",
            "cmps": [
                {
                    "id": "4f4hgfgokoskgg",
                    "type": "container",
                    "name": "text-container",
                    "cmps": [
                        {
                            "id": "3wertjh3et5g08",
                            "type": "text",
                            "name": "title",
                            "info": {
                                "value": "CONTACT",
                                "class": "title"
                            }
                        },
                        {
                            "id": "3wertjh3dgt5g08",
                            "type": "text",
                            "name": "title",
                            "info": {
                                "value": "ask us anything",
                                "class": "subtitle"
                            }
                        }
                    ]
                },
                {
                    "id": "43fg4hgrtgiu5yh4r",
                    "type": "form",
                    "name": "form-inputs",
                    "info": {
                        "input1": {
                            "tag": "input",
                            "placeholder": "Name",
                            "type": "text",
                            "name": "name"
                        },
                        "input2": {
                            "tag": "input",
                            "placeholder": "Email",
                            "type": "email",
                            "name": "email"
                        },
                        "input3": {
                            "tag": "textarea",
                            "placeholder": "Your message",
                            "type": "text",
                            "name": "name"
                        }

                    }
                }
            ]
        },
        // Map
        {
            "id": "4g4gfigroifgkreogk",
            "type": "container",
            "name": "wap-map-4",
            "drag": "true",
            "cmps": [
                {
                    "id": "43t4g4gozzda",
                    "type": "container",
                    "name": "text-container",
                    "cmps": [
                        {
                            "id": "43t4g4gozzsaa",
                            "type": "container",
                            "name": "text-container-container",
                            "cmps": [
                                {
                                    "id": "4grgpzpowped",
                                    "type": "text",
                                    "name": "title",
                                    "info": {
                                        "class": "title",
                                        "value": "address"
                                    }
                                },
                                {
                                    "id": "4grdfdgpzpowped",
                                    "type": "text",
                                    "name": "paragraph",
                                    "info": {
                                        "class": "paragraph",
                                        "value": "14 tottenham road, london, england"
                                    }
                                },
                            ]
                        },
                        {
                            "id": "43tdf4g4gg45da",
                            "type": "container",
                            "name": "text-container-container",
                            "cmps": [
                                {
                                    "id": "4grgpzpofd444twped",
                                    "type": "text",
                                    "name": "title",
                                    "info": {
                                        "class": "title",
                                        "value": "information"
                                    }
                                },
                                {
                                    "id": "zz4grdfdgpzpowped",
                                    "type": "text",
                                    "name": "paragraph",
                                    "info": {
                                        "class": "paragraph",
                                        "value": "info@yourdomain.com (+68) 12004509"
                                    }
                                },
                            ]
                        },
                    ]
                },
                {
                    "id": "43fgijrigj4g94j9",
                    "type": "map",
                    "name": "map",
                    "info": {
                        "coors": {
                            "lat": 32.0853,
                            "lng": 34.7818
                        }
                    }
                },
            ]
        }

    ],
    "isPublished": false
}

export const wapExample5 = {
    "_id": "63315d83885ca7567ab91488",
    "type": "container",
    "name": "Space Ghosts",
    "subcategory": "App Landing Page",
    "imgUrl": `https://res.cloudinary.com/dowk59699/image/upload/v1664269751/momentum/spaceghosts_template_preview_z05zdx.png`,
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
            "id": "daffo304r0vl0rvlz",
            "type": "container",
            "name": "wap-header-5",
            "drag": "true",
            "cmps": [
                {
                    "id": "rgo94gj9ij4g9o5j4",
                    "type": "container",
                    "name": "logo-container",
                    "cmps": [
                        {
                            "id": "rr3f444g4g4gv",
                            "type": "image",
                            "name": "logo",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196749/momentum/fc7570_226c5fa99a9241d59128fe58b7a54073_mv2_uc6wnn.png"
                            }
                        },
                        {
                            "id": "4f4ghgorpozzdvlo",
                            "type": "text",
                            "name": "logo-text",
                            "info": {
                                "value": "Space Ghosts"
                            }
                        }
                    ]
                },
                {
                    "id": "3fg344vvrvfrrb",
                    "type": "container",
                    "name": "header-nav",
                    "cmps": [
                        {
                            "id": "3f3fbpgtbpglbz",
                            "type": "text",
                            "name": "nav-item",
                            "info": {
                                "value": "Key Features",
                                "class": "nav-item"
                            }
                        },
                        {
                            "id": "3f3fbpds3f",
                            "type": "text",
                            "name": "nav-item",
                            "info": {
                                "value": "Screenshots",
                                "class": "nav-item"
                            }
                        },
                        {
                            "id": "3f3fbpgfgbbpglbz",
                            "type": "text",
                            "name": "nav-item",
                            "info": {
                                "value": "Press",
                                "class": "nav-item"
                            }
                        },
                    ]
                },
                {
                    "id": "4gvttoxzpz11w",
                    "type": "image",
                    "name": "burger",
                    "info": {
                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196859/momentum/icons8-menu-50_dquoqz.png"
                    }
                }
            ]
        },
        // Hero
        {
            "id": "12rf34f94vkbkokbr",
            "type": "container",
            "name": "wap-hero-5",
            "drag": "true",
            "cmps": [
                {
                    "id": "rvokgb0k50b505b",
                    "type": "container",
                    "name": "hero-grid",
                    "cmps": [
                        {
                            "id": "rvokgdccxd0b505b",
                            "type": "container",
                            "name": "hero-title",
                            "cmps": [
                                {
                                    "id": "2r2gsdsgdgfgogkzpodf",
                                    "type": "text",
                                    "info": {
                                        "value": "Space Ghosts",
                                        "class": "title"
                                    }
                                },
                                {
                                    "id": "2r2gfg4g4g4gzogkzpodf",
                                    "type": "text",
                                    "info": {
                                        "value": "New game from Space-It Industries ltd.",
                                        "class": "subtitle"
                                    }
                                },
                                {
                                    "id": "2r2gfgodfdgkzpodf",
                                    "type": "text",
                                    "info": {
                                        "value": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
                                        "class": "paragraph"
                                    }
                                },
                                {
                                    "id": "rvokgdd0b4g4505b",
                                    "type": "container",
                                    "name": "hero-dl-btns",
                                    "cmps": [
                                        {
                                            "id": "k4tg4ogkr5gohkt",
                                            "type": "image",
                                            "name": "apple-dl",
                                            "info": {
                                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_2ceee2afeafa4aa083bc3d48986bb811_mv2_tov5cv.png"
                                            }
                                        },
                                        {
                                            "id": "4tg4ogkr5gohktla",
                                            "type": "image",
                                            "name": "apple-dl",
                                            "info": {
                                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_83a62c92abd54d60915647751731bc62_mv2_iccizj.png"
                                            }
                                        }
                                    ]
                                },
                            ]
                        },

                        {
                            "id": "rvaokgzzdd0b4g4505b",
                            "type": "container",
                            "name": "hero-phone-img",
                            "cmps": [
                                {
                                    "id": "5gvfgpzlamrtyu",
                                    "type": "image",
                                    "name": "apple-dl",
                                    "info": {
                                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664198414/momentum/ghosts_in_phone_moztny.png"
                                    }
                                }
                            ]
                        },

                    ]
                },
                {
                    "id": "4350450454fkdofkdf",
                    "type": "image",
                    "name": "bottom-image",
                    "info": {
                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664200467/momentum/fc7570_139fa2837b294043ae48017be2af17e9_mv2_ao11fe.png"
                    }
                }
            ]
        },
        // Card
        {
            "id": "eork340kg05rvbkrt",
            "type": "container",
            "name": "wap-card-5",
            "drag": "true",
            "cmps": [
                {
                    "id": "32rijg9itjr5gb95r4jh49",
                    "type": "container",
                    "name": "card-container",
                    "cmps": [
                        {
                            "id": "3gokgk4gokg4",
                            "type": "image",
                            "name": "ghost-gif",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196750/momentum/fc7570_13825f90a3ee4eb7899ef4f9154c5772_mv2_tycvor.gif"
                            }
                        },
                        {
                            "id": "32rzaitjr5gb95r4jh49",
                            "type": "container",
                            "name": "card-text",
                            "cmps": [
                                {
                                    "id": "2fgk04k0g04g",
                                    "type": "text",
                                    "info": {
                                        "value": "Key Features",
                                        "class": "title"
                                    }
                                },
                                {
                                    "id": "2fgkazkffgf0g04g",
                                    "type": "text",
                                    "info": {
                                        "value": "The ultimate pen and paper RPG simulation experience.",
                                        "class": "feature"
                                    }
                                },
                                {
                                    "id": "2fgka4fgf0g04g",
                                    "type": "text",
                                    "info": {
                                        "value": " Level up and get your hands on more gold to unlock epic items and gear for your party.",
                                        "class": "feature"
                                    }
                                },
                                {
                                    "id": "2fgkazkffgggzza04g",
                                    "type": "text",
                                    "info": {
                                        "value": "Fight and explore your way through a perilous fantasy world to defeat the dark mage.",
                                        "class": "feature"
                                    }
                                },
                                {
                                    "id": "2qefzkffgf0g04g",
                                    "type": "text",
                                    "info": {
                                        "value": "As the game master, you can set up the fights yourself and choose how many monsters to battle.",
                                        "class": "feature"
                                    }
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        // Gallery
        {
            "id": "34ggrgrbrbrbrbrtbtbrtb",
            "type": "container",
            "name": "wap-gallery-5",
            "drag": "true",
            "cmps": [
                {
                    "id": "4g4g4g5h5h5hgfgxz",
                    "type": "text",
                    "name": "gallery-title",
                    "info": {
                        "value": "Game Screens",
                        "class": "gallery-title"
                    }
                },
                {
                    "id": "34vfhthtphrzza",
                    "type": "container",
                    "name": "gallery-container",
                    "cmps": [
                        {
                            "id": "3fg3grgb4g4g4g",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_c65de2275a5f4f80b2e2ddf5bc8003da_mv2_b4jd0d.png"
                            }
                        },
                        {
                            "id": "3fg3grgb4442ssh6g",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_79f980e6bd8b4829865f687e0618046a_mv2_sytvyw.png"
                            }
                        },
                        {
                            "id": "3fg3789mnplkjazg",
                            "type": "image",
                            "name": "gallery-item",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/84770f_1104a76eb025434fb7589e0edcfbae6a_mv2_mjx77v.png"
                            }
                        }
                    ]
                }
            ]
        },
        // Form
        {
            "id": "34bthtokbhtohbktobkt",
            "type": "container",
            "name": "wap-form-5",
            "drag": "true",
            "cmps": [
                {
                    "id": "43t4g4g4g4g4h4h4h",
                    "type": "image",
                    "name": "bg-image",
                    "info": {
                        "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196749/momentum/fc7570_07257cf95ed8425ea8303b7d45519ecb_mv2_rj8quh.png"
                    }
                },
                {
                    "id": "rejmgt9ork5jg45otg",
                    "type": "container",
                    "name": "form-container",
                    "cmps": [
                        {
                            "id": "3r34grtotgrt",
                            "type": "text",
                            "name": "form-title",
                            "info": {
                                "value": "Subscribe",
                                "class": "form-title"
                            }
                        },
                        {
                            "id": "3r34grtotgrt",
                            "type": "text",
                            "name": "form-title",
                            "info": {
                                "value": "Never miss an update!",
                                "class": "form-subtitle"
                            }
                        },
                        {
                            "id": "4tg4g4jg94jvg9vrjvd",
                            "type": "form",
                            "name": "form-input",
                            "info": {
                                "input1": {
                                    "tag": "input",
                                    "placeholder": "Your email",
                                    "type": "email",
                                    "name": "email"
                                },
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "4g45igj5ghe80tr",
            "type": "container",
            "name": "wap-footer-5",
            "drag": "true",
            "cmps": [
                {
                    "id": "4t45eohtt5987gh5",
                    "type": "container",
                    "name": "footer-image-container",
                    "cmps": [
                        {
                            "id": "3rt43grbrrrggr",
                            "type": "image",
                            "name": "orange",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_25b43534e2494c909e8a83826be0551c_mv2_z7gpzc.png"
                            }
                        },
                        {
                            "id": "4t5gj5okgj5g",
                            "type": "text",
                            "name": "footer-text",
                            "info": {
                                "value": "Download and Play Now",
                                "class": "footer-text"
                            }
                        }
                    ]
                },
                {
                    "id": "rvokjltrb4g4505b",
                    "type": "container",
                    "name": "footer-dl-btns",
                    "cmps": [
                        {
                            "id": "4tgznumu4rohkt",
                            "type": "image",
                            "name": "apple-dl",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_2ceee2afeafa4aa083bc3d48986bb811_mv2_tov5cv.png"
                            }
                        },
                        {
                            "id": "4tga1qaaz3t5mjumt",
                            "type": "image",
                            "name": "apple-dl",
                            "info": {
                                "image": "https://res.cloudinary.com/dowk59699/image/upload/v1664196748/momentum/fc7570_83a62c92abd54d60915647751731bc62_mv2_iccizj.png"
                            }
                        }
                    ]
                },
                {
                    "id": "wroejiefoj4gi9gt8",
                    "type": "text",
                    "name": "footer-cr",
                    "info": {
                        "value": "© 2023 by Space Alien. Proudly created with Weebo",
                        "class": "footer-cr"
                    }
                }
            ]
        }
    ],
    // "isPublic": true,
    "isEdit": true
}

export const examples = [

    wapExample4
]

