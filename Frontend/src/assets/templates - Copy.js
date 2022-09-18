// import { header1, hero1, map1, form1, gallery1, mission1, card1, footer1 } from './wap'

// const example1 = {
//     "_id": "5e28393890dd8888a06d4e44",
//     "type": "container",
//     "name": "Travel",
//     "subcategory": "Explore",
//     "imgUrl": `https://res.cloudinary.com/ds8xkm0ue/image/upload/v1663324375/Untitled_q0kmrd.png`,
//     "createdBy": {
//         "_id": "5e26e0b718a8888d4c995527",
//         "fullname": "Noris Special",
//         "imgUrl": "img.jpg",
//     },
//     "usersData": {
//         "contacts": [{ "email": "noris@user.com", "msg": "Please send me stuff", "at": 123 }],
//         "signups": [{ "email": "noris@user.com", "at": 123 }]
//     },
//     "cmps": [{
//         "id": "wh01",
//         "type": "container",
//         "name": "wap-header-1",
//         "drag": "true",
//         "cmps": [
//             {
//                 "id": "wh02",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "logo",
//                     "value": "Bailard Foundation"
//                 },
//                 "cmps": []
//             },
//             {
//                 "id": "wh03",
//                 "type": "container",
//                 "name": "wap-container",
//                 "cmps": [
//                     {
//                         "id": "wc02",
//                         "type": "text",
//                         "name": "wap-text",
//                         "info": {
//                             "class": "nav-item",
//                             "value": "About"
//                         },
//                         "cmps": []
//                     },
//                     {
//                         "id": "wh04",
//                         "type": "text",
//                         "name": "wap-text",
//                         "info": {
//                             "class": "nav-item",
//                             "value": "News"
//                         },
//                         "cmps": []
//                     },
//                     {
//                         "id": "wh05",
//                         "type": "text",
//                         "name": "wap-text",
//                         "info": {
//                             "class": "nav-item",
//                             "value": "Read Me"
//                         },
//                         "cmps": []
//                     },
//                     {
//                         "id": "wh05",
//                         "type": "button",
//                         "name": "wap-button",
//                         "info": {
//                             "class": "nav-item",
//                             "value": "Take Action"
//                         },
//                         "cmps": []
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "id": "whe01",
//         "type": "container",
//         "name": "wap-hero-1",
//         "drag": "true",
//         "cmps": [
//             {
//                 "id": "whe02",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "hero-item-1",
//                     "value": "Sustainability"
//                 },
//                 "cmps": []
//             },
//             {
//                 "id": "whe03",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "hero-item-2",
//                     "value": "Starts With You"
//                 },
//                 "cmps": []
//             },
//             {
//                 "id": "whe05",
//                 "type": "button",
//                 "name": "wap-button",
//                 "info": {
//                     "class": "hero-item-3",
//                     "value": "Learn more"
//                 },
//                 "cmps": []
//             }
//         ]
//     },
//     {
//         "id": "wm01",
//         "type": "container",
//         "name": "wap-mission-1",
//         "cmps": [
//             {
//                 "id": "wm02",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "title",
//                     "value": "We conserve land through outreach and restoration."
//                 },
//                 "cmps": []
//             },
//             {
//                 "id": "wm03",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "paragraph",
//                     "value": "Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help."
//                 },
//                 "cmps": []
//             },
//         ]
//     },
//     {
//         "id": "wc01",
//         "type": "container",
//         "name": "wap-card-1",
//         "cmps": [
//             {
//                 "id": "wc02",
//                 "type": "container",
//                 "name": "card-1-container",
//                 "cmps": [
//                     {
//                         "id": "wc02",
//                         "type": "image",
//                         "name": "wap-image",
//                         "info": {
//                             "image": "card1/card1.jpg"
//                         },
//                         "cmps": [
//                         ]
//                     },
//                     {
//                         "id": "wc03",
//                         "type": "container",
//                         "name": "info-container",

//                         "cmps": [
//                             {
//                                 "id": "wc03",
//                                 "type": "text",
//                                 "name": "wap-text",
//                                 "info": {
//                                     "class": "title",
//                                     "value": "Our Organization"
//                                 },
//                                 "cmps": [

//                                 ]
//                             },
//                             {
//                                 "id": "wc04",
//                                 "type": "text",
//                                 "name": "wap-text",
//                                 "info": {
//                                     "class": "paragraph",
//                                     "value": "Find out about our mission, methods, and the results of our decades of advocacy."
//                                 },
//                                 "cmps": [
//                                 ]
//                             },
//                             {
//                                 "id": "wc05",
//                                 "type": "button",
//                                 "name": "wap-button",
//                                 "info": {
//                                     "class": "button",
//                                     "value": "Learn more"
//                                 },
//                                 "cmps": []
//                             }]
//                     },
//                 ]
//             },
//             {
//                 "id": "wc03",
//                 "type": "container",
//                 "name": "card-2-container",
//                 "cmps": [
//                     {
//                         "id": "wc03",
//                         "type": "container",
//                         "name": "info-container",
//                         "cmps": [
//                             {
//                                 "id": "wc03",
//                                 "type": "text",
//                                 "name": "wap-text",
//                                 "info": {
//                                     "class": "title",
//                                     "value": "Our Organization"
//                                 },
//                                 "cmps": [
//                                 ]
//                             },
//                             {
//                                 "id": "wc04",
//                                 "type": "text",
//                                 "name": "wap-text",
//                                 "info": {
//                                     "class": "paragraph",
//                                     "value": "Find out about our mission, methods, and the results of our decades of advocacy."
//                                 },
//                                 "cmps": [
//                                 ]
//                             },
//                             {
//                                 "id": "wc05",
//                                 "type": "button",
//                                 "name": "wap-button",
//                                 "info": {
//                                     "class": "button",
//                                     "value": "Learn more"
//                                 },
//                                 "cmps": []
//                             },
//                         ]
//                     },
//                     {
//                         "id": "wc02",
//                         "type": "image",
//                         "name": "wap-image",
//                         "info": {
//                             "image": "card1/card1.jpg"
//                         },
//                         "cmps": []
//                     }]
//             }
//         ]
//     },
//     {
//         "id": "wf01",
//         "type": "container",
//         "name": "wap-form-1",
//         "drag": "true",
//         "cmps": [
//             {
//                 "id": "wf02",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "title",
//                     "value": "Subscribe"
//                 },
//                 "cmps": [

//                 ]
//             },
//             {
//                 "id": "wf02",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "paragraph",
//                     "value": "Sign up with your email address to receive news and updates."
//                 },
//                 "cmps": [

//                 ]
//             },
//             {
//                 "id": "wf03",
//                 "type": "container",
//                 "name": "wap-form",
//                 "cmps": [{
//                     "id": "wf01",
//                     "type": "input",
//                     "input_type": "email",
//                     "info": {
//                         "placeholder": "Email Address"
//                     },
//                     "name": "wap-input",
//                     "cmps": []
//                 },
//                 {
//                     "id": "wf02",
//                     "type": "button",
//                     "info": {
//                         "class": "button",
//                         "value": "Sign Up"
//                     },
//                     "name": "wap-button",
//                     "cmps": []
//                 }]
//             }
//         ]
//     },
//     {
//         "id": "wft01",
//         "type": "container",
//         "name": "wap-footer-1",
//         "drag": "true",
//         "cmps": [
//             {
//                 "id": "wft02",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "logo",
//                     "value": "Weebo."
//                 },
//                 "cmps": []
//             },
//             {
//                 "id": "wft03",
//                 "type": "text",
//                 "name": "wap-text",
//                 "info": {
//                     "class": "rights",
//                     "value": "all rights reserved Ⓒ 2022"
//                 },
//                 "cmps": []
//             }

//         ]
//     }
//     ],
//     // "isPublic": true,
//     "isEdit": true
// }


// const example2 = {
//     "_id": "5e28393890dd7777a06d4e44",
//     "type": "container",
//     "name": "Health & Beauty",
//     "subcategory": "Wellness",
//     "imgUrl": `https://images.squarespace-cdn.com/content/5ce592c8732098000152407a/a5aef4b2-4b9c-4279-b780-57302c077519/image-asset.jpeg?content-type=image%2Fjpeg&format=750w`,
//     "createdBy": {
//         "_id": "5e26e0b718a7777d4c995527",
//         "fullname": "Special Noris",
//         "imgUrl": "img.jpg",
//     },
//     "usersData": {
//         "contacts": [{ "email": "spacial@user.com", "msg": "Please send me stuff", "at": 123 }],
//         "signups": [{ "email": "spacial@user.com", "at": 123 }]
//     },
//     "cmps": [],
//     // "isPublic": true,
//     "isEdit": true
// }

// export const examples = [
//     example1,
//     example2
// ]