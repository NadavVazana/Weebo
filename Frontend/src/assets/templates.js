// import { hero1, map1, form1, gallery1, mission1, card1, footer1 } from './wap'
export const exampleList = [
    {
        "_id": "5e28393890dd8888a06d4e44",
        "type": "container",
        "name": "Travel",
        "subcategory": "Explore",
        "imgUrl": `https://res.cloudinary.com/ds8xkm0ue/image/upload/v1663324375/Untitled_q0kmrd.png`,
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
                            "id": "wc02",
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
                        },


                    ]
                }, {
                    "id": "wc02",
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
                    "id": "wc02",
                    "type": "container",
                    "name": "card-1-container",
                    "cmps": [
                        {
                            "id": "wc02",
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
                            "id": "wc02",
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
                    "id": "wf02",
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
        }
            , {
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
        // "isPublic": true,
        "isEdit": true
    },
    {
        "_id": "5e28393890dd8888a06d4e43",
        "type": "container",
        "name": "Travel",
        "subcategory": "Explore",
        "imgUrl": `https://res.cloudinary.com/ds8xkm0ue/image/upload/v1663324375/Untitled_q0kmrd.png`,
        "createdBy": {
            "_id": "5e26e0b718a8888d4c995527",
            "fullname": "Noris Special",
            "imgUrl": "img.jpg",
        },
        "usersData": {
            "contacts": [{ "email": "noris@user.com", "msg": "Please send me stuff", "at": 123 }],
            "signups": [{ "email": "noris@user.com", "at": 123 }]
        },
        "cmps": [
            {
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
                            "isFocus": false,
                            "class": "logo",
                            "value": "Sinker."
                        },
                        "cmps": []
                    },
                    {
                        "id": "wh03",
                        "type": "container",
                        "name": "wap-container",
                        "cmps": [
                            {
                                "id": "wc02",
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
                        "id": "wc02",
                        "type": "container",
                        "name": "card-1-container",
                        "cmps": [
                            {
                                "id": "wc02",
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
                                "id": "wc02",
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
                        "id": "wf02",
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
            }
            , {
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
        // "isPublic": true,
        "isEdit": true
    }
    ,
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
        // "isPublic": true,
        "isEdit": true
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
                        "id": "wc02",
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

                "id": "wc02",
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
                "id": "wf02",
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
    }

}


export const Cards = {
    "wap-card-1": {
        "id": "wc01",
        "type": "container",
        "name": "wap-card-1",
        "cmps": [
            {
                "id": "wc02",
                "type": "container",
                "name": "card-1-container",
                "cmps": [
                    {
                        "id": "wc02",
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
                        "id": "wc02",
                        "type": "image",
                        "name": "wap-image",
                        "info": {
                            "image": "card1/card1.jpg"
                        },
                        "cmps": []
                    }]
            }
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
                        "id": "wc02",
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

                "id": "wc02",
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
                "id": "wc02",
                "type": "container",
                "name": "card-1-container",
                "cmps": [
                    {
                        "id": "wc02",
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
                        "id": "wc02",
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
                "id": "wf02",
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
    "_id": "5e28393890dd8888a06d4777",
    "type": "container",
    "name": "cooking",
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
                        "id": "wc02",
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
                "id": "wc02",
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
                        "id": "wh05",
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
                    "image": "hero2/cupcakes.png"
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
                        "id": "wh05",
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
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-2.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-3.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-4.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-5.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-6.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi01",
                        "type": "image",
                        "info": {
                            "image": "gallery-2/gallery-item-7.png"
                        },
                        "name": "gallery-2-image",
                        "cmps": []
                    },
                    {
                        "id": "whi01",
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
                "id": "wct01",
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
                                "id": "wct01",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct01",
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
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct01",
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
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct01",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct01",
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
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct01",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct01",
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
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct01",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct01",
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
                        "id": "wc01",
                        "type": "container",
                        "name": "wap-card-2-item",
                        "cmps": [
                            {
                                "id": "wct01",
                                "type": "text",
                                "name": "wap-card-2-item",
                                "info": {
                                    "value": "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
                                    "class": "testimonial"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wct01",
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
                                "id": "wf02",
                                "type": "text",
                                "name": "wap-text",
                                "info": {
                                    "class": "title",
                                    "value": "Contact Me"
                                },
                                "cmps": []
                            },
                            {
                                "id": "wf02",
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
                                        "id": "wf02",
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
                                "id": "wf02",
                                "type": "input",
                                "input_type": "text",
                                "info": {
                                    "placeholder": "Phone"
                                },
                                "name": "wap-input",
                                "cmps": []
                            },
                            {
                                "id": "wf02",
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
    // "isPublic": true,
    "isEdit": true
}



export const examples = [
    wapExample2
]