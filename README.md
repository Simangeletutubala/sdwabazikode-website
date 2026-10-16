# Sdwabazikode Transportation & Security Solutions

A responsive business website developed for Sdwabazikode Transportation & Security Solutions to showcase the company's services, provide business contact information, and allow potential clients to submit enquiries online.

## 🌐 Overview

The website provides visitors with information about the business and a convenient way to contact the company. It is built using React and Vite, with a contact form connected to a backend email service.

## ✨ Features

- Responsive layout for desktop, tablet, and mobile devices
- Business information and service presentation
- Navigation between website pages
- Contact and enquiry form
- Backend email handling for enquiries
- Client-side form submission and feedback
- Netlify deployment support

## 🛠️ Technologies Used

- **React** — user interface development
- **Vite** — development server and build tool
- **JavaScript** — application functionality
- **HTML5 and CSS3** — structure and styling
- **React Router** — page navigation
- **Lucide React** — interface icons
- **Node.js and Express** — local backend for handling enquiries
- **Nodemailer** — email delivery
- **Netlify Functions** — serverless contact form handling in production
- **Git and GitHub** — version control and source code management

## 📂 Project Structure

```text
sdwabazikode-website/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── netlify/
│   └── functions/
│       └── contact.mjs
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── .gitignore
└── README.md
```

*Note: The structure above is illustrative. Update it if your actual project folders or filenames differ.*

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Simangeletutubala/sdwabazikode-website.git
   ```

2. Open the project folder:

   ```bash
   cd sdwabazikode-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## 📧 Contact Form Configuration

The contact form uses environment variables to configure email delivery. Configure the required variables in your local environment and in your Netlify site settings.

Required environment variable names may include:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `SMTP_TO`
- `SMTP_SECURE`

**Security:** Never commit real passwords, Google App Passwords, API keys, or other credentials to GitHub. Keep secrets out of frontend code and build files. Configure production credentials in Netlify's environment variable settings for use by the serverless function.

For local development, use a private `.env` file if your local backend requires one. Ensure `.env` files and logs containing sensitive information are excluded from version control.

## 🏗️ Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

The production build is generated in the `dist/` directory.

## ☁️ Deployment

The website is configured for deployment on Netlify.

1. Connect the GitHub repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Configure the required environment variables securely.
5. Ensure the Netlify Function for the contact form is present and correctly configured.
6. Deploy the website and test the contact form.

## 🔒 Security Notes

- Do not expose email credentials in client-side React code.
- Do not commit `.env` files or SMTP logs containing private information.
- Validate incoming contact form submissions on the server.
- Test email delivery after deployment.

## 👩‍💻 Developer

**Simangele Tutubala**

GitHub: [Simangeletutubala](https://github.com/Simangeletutubala)

## 📄 License

This project was developed as a business website project. Contact the repository owner for permission before reusing or redistributing the source code.

## 📸 Website Screenshots

### Homepage
![Sdwabazikode Homepage](<Screenshot 2026-10-17 003643.png>)

### Services
![Sdwabazikode Services](<Screenshot 2026-10-17 003730.png>)

### Contact Form
![Sdwabazikode Contact Form](<Screenshot 2026-10-17 003813.png>)

## 🌐 Live Website

Visit the [Sdwabazikode Transportation & Security Solutions website](https://sdwabazikode-transport-security.netlify.app/).


[Visit Sdwabazikode Transportation & Security Solutions](https://sdwabazikode-transport-security.netlify.app/)
