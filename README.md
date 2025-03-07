# Blog-Stop

A simple blog application built with Node.js, Express, and EJS.

## Features
- Create and publish blog posts
- Delete posts
- Responsive design
- Toast notifications
- Local storage for data persistence

## Deployment Instructions

### Deploy on Render.com

1. Create a GitHub repository and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Render.com](https://render.com) and sign up/login

3. Click "New +" and select "Web Service"

4. Connect your GitHub repository

5. Configure the service:
   - Name: blog-stop (or your preferred name)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

6. Click "Create Web Service"

Your application will be deployed and you'll get a URL like `https://blog-stop.onrender.com`

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser 