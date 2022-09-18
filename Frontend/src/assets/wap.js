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

export var wap = {
	"_id": "5e28393890dd7201a06d4e44",
	"type": "container",
	"name": "HairDresser Baluta Marketing Site",
	"imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
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

	"cmps": [],
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
			"styles": {
				"fontSize": '14px',
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
					"styles": {
						"fontSize": '14px',
					},
					"cmps": []
				},
				{
					"id": "whc04",
					"type": "text",
					"name": "wap-text",
					"info": {
						"class": "nav-item",
						"value": "News"
					},
					"styles": {
						"fontSize": '14px',
					},
					"cmps": []
				},
				{
					"id": "whc05",
					"type": "text",
					"name": "wap-text",
					"info": {
						"class": "nav-item",
						"value": "Read Me"
					},
					"styles": {
						"fontSize": '14px',
					},
					"cmps": []
				},
				{
					"id": "whc08",
					"type": "button",
					"name": "wap-button",
					"info": {
						"class": "nav-item",
						"value": "Take Action"
					},
					"styles": {
						"fontSize": '14px',
					},
					"cmps": []
				},
				
			]
		},
		{
			"id": "wc02",
			"type": "image",
			"info": {
				"image": "icons/hamburger.png"
			},
			"name": "wap-hamburger-1",
			"cmps": [

			]}
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
			"id": "whec02",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "hero-item-1",
				"value": "Sustainability"
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": []
		},
		{
			"id": "whec03",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "hero-item-2",
				"value": "Starts With You"
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": []
		},

		{
			"id": "whec05",
			"type": "button",
			"name": "wap-button",
			"info": {
				"class": "hero-item-3",
				"value": "Learn more",
			},
			"styles": {
				"fontSize": '14px',
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
			"id": "wfc02",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "title",
				"value": "Subscribe"
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": [

			]
		},
		{
			"id": "wfc03",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "paragraph",
				"value": "Sign up with your email address to receive news and updates."
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": [

			]
		},
		{
			"id": "wf07",
			"type": "container",
			"name": "wap-form",
			"cmps": [{
				"id": "wfc01",
				"type": "input",
				"input_type": "email",
				"info": {
					"placeholder": "Email Address"
				},
				"name": "wap-input",
				"cmps": []
			},
			{
				"id": "wfc06",
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
			"id": "wftc02",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "logo",
				"value": "Weebo."
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": []
		},
		{
			"id": "wftc03",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "rights",
				"value": "all rights reserved Ⓒ 2022"
			},
			"styles": {
				"fontSize": '14px',
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
			"styles": {
				"fontSize": '14px',
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
			"id": "wmc02",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "title",
				"value": "Where are we?"
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": [

			]
		},
		{
			"id": "wmc03",
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
			"id": "wcc02",
			"type": "container",
			"name": "card-1-container",
			"cmps": [
				{
					"id": "wccc02",
					"type": "image",
					"name": "wap-image",
					"info": {
						"image": "card1/card1.jpg"
					},
					"cmps": [
					]
				},
				{
					"id": "wccc03",
					"type": "container",
					"name": "info-container",

					"cmps": [
						{
							"id": "wcccc0365",
							"type": "text",
							"name": "wap-text",
							"info": {
								"class": "title",
								"value": "Our Organization"
							},
							"styles": {
								"fontSize": '14px',
							},
							"cmps": [

							]
						},
						{
							"id": "wcccc065",
							"type": "text",
							"name": "wap-text",
							"info": {
								"class": "paragraph",
								"value": "Find out about our mission, methods, and the results of our decades of advocacy."
							},
							"styles": {
								"fontSize": '14px',
							},
							"cmps": [
							]
						},
						{
							"id": "wcccc034",
							"type": "button",
							"name": "wap-button",
							"info": {
								"class": "button",
								"value": "Learn more"
							},
							"styles": {
								"fontSize": '14px',
							},
							"cmps": []
						}]
				},
			]
		},
		{
			"id": "wcc03",
			"type": "container",
			"name": "card-2-container",
			"cmps": [
				{
					"id": "wccc03",
					"type": "container",
					"name": "info-container",
					"cmps": [
						{
							"id": "wcccc03",
							"type": "text",
							"name": "wap-text",
							"info": {
								"class": "title",
								"value": "Our Organization"
							},
							"styles": {
								"fontSize": '14px',
							},
							"cmps": [
							]
						},
						{
							"id": "wcccc04",
							"type": "text",
							"name": "wap-text",
							"info": {
								"class": "paragraph",
								"value": "Find out about our mission, methods, and the results of our decades of advocacy."
							},
							"styles": {
								"fontSize": '14px',
							},
							"cmps": [
							]
						},
						{
							"id": "wcccc05",
							"type": "button",
							"name": "wap-button",
							"info": {
								"class": "button",
								"value": "Learn more"
							},
							"styles": {
								"fontSize": '14px',
							},
							"cmps": []
						},
					]
				},
				{
					"id": "wcc02",
					"type": "image",
					"name": "wap-image",
					"info": {
						"image": "card1/card1.jpg"
					},
					"styles": {
						"fontSize": '14px',
					},
					"cmps": []
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
			"id": "wmc02",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "title",
				"value": "We conserve land through outreach and restoration."
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": []
		},
		{
			"id": "wmc03",
			"type": "text",
			"name": "wap-text",
			"info": {
				"class": "paragraph",
				"value": "Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help."
			},
			"styles": {
				"fontSize": '14px',
			},
			"cmps": []
		},
	]
}

export const Example1 = {
	'wap-header-1': header1,
	'wap-card-1': card1,
	'wap-hero-1': hero1,
	'wap-mission-1': mission1,
	'wap-form-1': form1,
	'wap-footer-1': footer1,

}

