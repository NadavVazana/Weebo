// Tips & Tricks
// Use the isPublic to allow cloning the wap
// Focus on make it easy to demo over supporting full customization
// Support adding full-blown-component rather than letting the user add stuff manually 
// (Delete is easy to implement later)
// Support several themes for components (CSS only)
// default FLEX is your friend, handle media proprtion correctly
// Here are some components:
// wap-header, wap-footer, wap-container
// wap-gallery (photos: {url, title,txt})
// wap-map (center,zoom,markers), 
// wap-video (url, iframe) 
// wap-social (socials) 
// wap-signup => wapService
// wap-chat
// wap-contact-us => wapService
// wap-navbar

// Edit Mode:
// wap-header-edit  / wap-header
// wap-social-edit  / wap-social

// Split work
// wap-details : render the predefined JSON
// wap-header, wap-map (dummy - map-photo)
// wap-container

// wap-edit
// wap-header-edit, wap-chat-edit (config - bot delay time)  
// edit...
// Adding a component:
// *. User select WapCmp from <select>
// *. WapCmp is added at the bottom
// *. Let the user <select> After which WapCmp it should be added
// *. add <select> for theme (themes are hard coded in wapService.getThemesFor(wapCmp.type))
// Save button
// Homepage
// render 3 waps links
// support clone
// reset button?

// DASHBOARD
// visits, contact-us, signups




// eslint-disable-next-line no-unused-vars

export var wapCopy = {
	"_id": {
		"1": "5e28393890dd7201a06d4e44",
		"2": "5e28393890dd7777a06d4e44"
	},
	"type": "container",
	"name": { "1": "Travel", "2": "Health & Beauty" },
	"imgUrl": {
		"1": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
		"2": "https://images.squarespace-cdn.com/content/5ce592c8732098000152407a/a5aef4b2-4b9c-4279-b780-57302c077519/image-asset.jpeg?content-type=image%2Fjpeg&format=750w"
	},
	"createdBy": {
		"_id": "5e26e0b718a0891d4c995527",
		"fullname": "Hekro Special",
		"imgUrl": "img.jpg",
	},
	"usersData": {
		"contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
		"signups": [{ "email": "user@user.com", "at": 123 }]
	},


	// "id": "wc02",
	// "type": "container",
	// "name": "wap-header",
	// "cmps": [

	// ]

	"cmps": [ 
		header1,
		hero1,
		mission1,
		card1,
		form1,
		footer1
	],
	// "isPublic": true,
	"isEdit": true
}


// HEADER 1
export const header1 = {
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
		}
	]
}

// HERO 1
export const hero1 = {
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
		// {
		// 	"id": "whe04",
		// 	"type": "image",
		// 	"name": "wap-image",
		// 	"info": {
		// 		"image":"hero1/hero1.jpg"
		// 	},
		// 	"cmps": []
		// },
		{
			"id": "whe05",
			"type": "button",
			"name": "wap-button",
			"info": {
				"class": "hero-item-3",
				"value": "Learn more"
			},
			"cmps": []
		}
	]
}

// FROM 1
export const form1 = {
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



// FOOTER 1
export const footer1 = {
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

// GALLERY 1
export const gallery1 = {
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

// MAP 1
export const map1 = {
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


export const card1 = {
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
							"cmps": [

							]
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
							"cmps": [

							]
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
					"cmps": [

					]
				}]
		}

	]
}


export const mission1 = {
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
			"cmps": [

			]
		},
		{
			"id": "wm03",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "paragraph",
				"value": "Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help."
			},
			"cmps": [


			]
		},
	]
}

