Web Application Design Documentation

Project – Sally Sweet Shop
Developed By – M.F. ARSHAD AHAMED 

1. Application Design and Responsiveness
Our application is meticulously designed to ensure it fits for purpose across various devices including mobiles, tablets, and desktops.
•	Design Overview
•	Wireframes - Created for pages - Home, About, Product, Profile.
•	Tool Used - Adobe Illustrator 2020.
•	Alternative Tools - Figma, Adobe XD.
•	Logo - Adobe Illustrator 2020 (Logo, Favicon, Wordmark)
•	Responsiveness:
•	Media Queries - Implemented for screen widths of 1920px and 768px.
•	Navigation Bar - Toggle menu incorporated for enhanced usability on smaller screens.
2. Client-Side JavaScript Framework: Vue
•	Components:
•	Created Components - Header, Footer, EventCard, ProductCard, UpButton.
•	Component Integration
	Used in App.vue: Header, Footer, UpButton.
	Used in HomePage (Views): Event Card.
	Used in HomePage and ProductView (Views): ProductCard.
•	Data Management
•	Efficient handling of data flow between components.
•	Passing data between components: From App.vue (Top Component) to Footer Component.	
	Data - Developer Name
3. Styling and Configuration
Utilizing Tailwindcss for a modern and responsive design.
•	Framework Usage
•	Styling - Application styled using tailwindcss.
•	Custom Classes - Applied in ProfileView.vue.
•	Configuration:
•	Media Queries - Custom settings for responsive design in Header.vue and Footer.vue.
•	Tailored Colors - Added 15 custom colors in tailwind.config.js.
4. Data Consumption
Showcasing the ability to fetch data from various sources.
•	Data Sources:
•	Internal JSON - Used in AboutView.vue and Footer.vue.
•	External JSON - Stored Product and Event Details in db.json within the db folder.
•	Third-Party APIs - Utilized RestAPI, tested with Postman for "Get" requests in HomePage.vue and Productpage.vue. And Used Currency Convertor API in Productpage.vue, and Google Map Api in HomePage.vue and AboutPage.vue
 
5. User Authentication
Implementing secure user authentication methods.
•	Methods:
•	Firebase Auth: Options for Sign in With Email and Gmail in Login Page
•	Security Method: Add session time out for 2 mins to secure login session in Header.vue.
•	Configuration: Set up in main.js.
Development Tools and Technologies
	Main Tools: VSCode, Postman, Web Browser.
	Framework: Vue.js version 3.
	Styling: Tailwind CSS.
	Package Management: Npm (Node Package Manager).
Dependencies
•	List of Key Dependencies:
	FontAwesome, Axios, Firebase, json-server, postcss-cli, vue-router, autoprefixer, postcss, Tailwind CSS, Vite.
Routing and Styling
•	Router Configuration: Defined in Index.js.
•	Main Styling: Tailwind CSS integrated in Main.css.

User Requirements Fulfillment
1.	Promoting Physical Shop - Popup screen, location map, opening hours, and contact details.
2.	Event and Private Function Promotion - Event showcase and room booking features.
3.	Subscription Encouragement - Subscribe button added at footer and when click button it goes to login page. You can login using Gmail or your personal email address. Then the user can print or download vouchers. And Top banner added at Header to indicate to purchase voucher by login. 
4.	Product Showcase - Created Product Showcase and ProductView page with button called “Calll for Order”. And added a button on Header to order on Call.


