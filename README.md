# EVC Prototype

This repository contains a prototype for an Entertainment Video Content (EVC) platform. The project is built using HTML, CSS, and vanilla JavaScript, and demonstrates a multi-page web application for video streaming, user authentication, and content management.

## Features

- **Multi-page layout**: Includes home, library, player, producer dashboard, settings, and authentication pages.
- **Authentication**: Login and signup forms with client-side validation for email, password, and user roles (user/producer).
- **Dynamic Navigation Bar**: Injected into each page using JavaScript for consistency.
- **Video Player**: Dedicated page for video playback with recommendations and comments.
- **Producer Dashboard**: Analytics and video management for content producers.
- **Settings**: User profile, appearance, language, payment, and device management.
- **Responsive Design**: Uses CSS Flexbox for layout and adapts to different screen sizes.

## File Structure

```
├── index.html         # Home page
├── login.html         # Login and signup page
├── library.html       # User's video library
├── player.html        # Video player page
├── epn.html           # Producer dashboard
├── settings.html      # User settings
├── navbar.js          # Navigation bar injection
├── script.js          # Main JavaScript (form validation, modal, slider)
├── styles.css         # Main stylesheet
├── navbar.css         # Navigation bar styles
├── images/            # Images and video assets
```
## Live Demo
[EVC Cinema} https://night-shadex.github.io/evc-cinema-website/

## How to Run

1. Clone the repository:
   ```
   git clone <repo-url>
   ```
2. Open the project folder in your code editor.
3. Open `index.html` in your browser to start using the prototype.

## Notes
- All authentication and data management is client-side only. No backend is included.
- Form validation is implemented in `script.js`.
- To enable real authentication and persistent data, backend integration is required.

## License
This project is for educational and prototyping purposes only.
