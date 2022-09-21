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
                {"id": "wm07",
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
                }]},
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
    "wap-header-2":{
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
    "wap-hero-2-1":{
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
    }
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
    "wap-form-2":  {
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

    "wap-gallery-2":  {
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
            {"id": "wm07",
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
            }]},
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
    "wap-card-3":  {
        "id": "wc03",
        "type": "container",
        "name": "wap-card-3",
        "cmps": [
            {
                "id": "wc902",
                "type": "text",
                "name": "wap-text",
                "info": {
                    "class": "title",
                    "value": "We conserve land through outreach and restoration."
                },
                "cmps": []
            },
            {
                "id": "wc78903",
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
    "wap-header-2":{
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

    "wap-form-2":  {
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
    "wap-hero-2-1":{
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
    "wap-card-3":  {
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
    "wap-gallery-2":  {
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
        "id": "whe01",
        "type": "container",
        "name": "wap-hero-2-2",
        "drag": "true",
        "cmps": [
            {
                "id": "whi01",
                "type": "video",
                "info": {
                    "video":"https://res.cloudinary.com/ds8xkm0ue/video/upload/v1663762774/file_q8zifv.mp4"
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



export const examples = [

    wapExample2
]