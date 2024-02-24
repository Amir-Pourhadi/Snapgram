<div align="center">

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=Amir-Pourhadi_Snapgram)  
[![wakatime](https://wakatime.com/badge/github/Amir-Pourhadi/Snapgram.svg)](https://wakatime.com/badge/github/Amir-Pourhadi/Snapgram)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Amir-Pourhadi_Snapgram&metric=ncloc)](https://sonarcloud.io/dashboard?id=Amir-Pourhadi_Snapgram)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1276c11a-d85a-4dec-baa5-820f44922660/deploy-status)](https://app.netlify.com/sites/amir-snapgram/deploys)  
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Amir-Pourhadi_Snapgram&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Amir-Pourhadi_Snapgram)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Amir-Pourhadi_Snapgram&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=Amir-Pourhadi_Snapgram)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Amir-Pourhadi_Snapgram&metric=security_rating)](https://sonarcloud.io/dashboard?id=Amir-Pourhadi_Snapgram)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Amir-Pourhadi_Snapgram&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Amir-Pourhadi_Snapgram)

<h3 align="center">A Social Media Application</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://youtu.be/_W3R2VwRyF4" target="_blank"><b>JavaScript Mastery</b></a> YouTube.
    </div>
</div>

## 🤖 Introduction

Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and
explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user
experience.

## ⚙️ Tech Stack

- React.js
- Appwrite
- React Query
- TypeScript
- ShadCN
- Tailwind CSS
- Cypress E2E Testing

## 🔋 Features

👉 **Authentication System**: A robust authentication system ensuring security and user privacy

👉 **Explore Page**: Homepage for users to explore posts, with a featured section for top creators

👉 **Like and Save Functionality**: Enable users to like and save posts, with dedicated pages for managing liked and
saved content

👉 **Detailed Post Page**: A detailed post page displaying content and related posts for an immersive user experience

👉 **Profile Page**: A user profile page showcasing liked posts and providing options to edit the profile

👉 **Browse Other Users**: Allow users to browse and explore other users' profiles and posts

👉 **Create Post Page**: Implement a user-friendly create post page with effortless file management, storage, and
drag-drop feature

👉 **Edit Post Functionality**: Provide users with the ability to edit the content of their posts at any time

👉 **Responsive UI with Bottom Bar**: A responsive UI with a bottom bar, enhancing the mobile app feel for seamless
navigation

👉 **React Query Integration**: Incorporate the React Query (TanStack Query) data fetching library for, Auto caching to
enhance performance, Parallel queries for efficient data retrieval, First-class Mutations, etc

👉 **Backend as a Service (BaaS) - Appwrite**: Utilize Appwrite as a Backend as a Service solution for streamlined
backend development, offering features like authentication, database, file storage, and more

👉 **Cypress as Testing**: Write end-to-end tests, that can run in CI/CD, locally, etc.

and many more, including code architecture and re-usability

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [yarn](https://yarnpkg.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Amir-Pourhadi/Snapgram.git
```

**Installation**

Install the project dependencies using npm:

```bash
yarn
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on
the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
