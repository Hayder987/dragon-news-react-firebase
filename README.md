Dragoon News is a responsive front-end web application build with react that delivers real-time news articles on a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless user experience across devices and secure login functionality using firebase authentication.let's build the project together. 😎

## [live-Link] (https://dragonnews-auth-react.web.app/category/01)

### [Netlify] (https://dragon-news-hdr.netlify.app/category/01)

# Technology Used

- React for UI development
- React-DOM for DOM manipulation
- Firebase for authentication
- State Management with Context API: Centralized state management across the application using Context API for seamless data flow.
- Efficient Component Management with React Hooks: Utilize React Hooks like useState, useEffect, and custom hooks for managing component lifecycle and state, ensuring responsive and dynamic content updates.
- React-Fast-Marquee for animated marquee components
- Moment for date and time manipulation
- Prop-Types for type-checking
- React-Icons for icons
- React-Loader-Spinner for loading spinners
- React-Rating-Stars-Component for user rating
- React-Toastify for toast notifications
- Tailwind CSS and DaisyUI for styling

# Features

- Real-Time News Updates: Stay updated with the latest news from various categories.
- User Authentication: Secure login/signup functionality powered by Firebase.
- Smooth Scrolling News Marquee: Engage users with a scrolling news marquee, implemented with React-Fast-Marquee.
- Responsive UI: Fully responsive, utilizing Tailwind CSS and DaisyUI components for a consistent look across devices.
- Interactive Components: Rating system for articles, with React-Rating-Stars-Component.
- Custom Icons and Loaders: Enriched user experience with icons from React-Icons and loaders from React-Loader-Spinner.
- Moment.js: Easily display dates and times in a user-friendly format.
- Toasts and Notifications: Alerts and messages handled elegantly with React-Toastify.

## API Documentation
The Dragoon News project utilizes the Programming Hero News API to fetch news categories, articles by category, and detailed news information. Below are the endpoints used in this project.

## Base URL
The base URL for the API is: https://openapi.programming-hero.com/api

## Endpoints
Get All News Categories

URL: /news/categories
Full URL: https://openapi.programming-hero.com/api/news/categories
Method: GET
Description: Retrieves a list of all available news categories.
Get All News in a Category

### URL Format: /news/category/{category_id}
Full URL Example: https://openapi.programming-hero.com/api/news/category/01
Method: GET
Description: Retrieves all news articles within a specified category.
Path Parameter:
category_id (string): The unique ID of the category.
Get News Detail by ID

### URL Format: /news/{news_id}
Full URL Example: https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
Method: GET
Description: Retrieves detailed information about a specific news article.
Path Parameter:
news_id (string): The unique ID of the news article.
Layout Documentation
There will be three layour for the project. watch below designs to understand layout structure/