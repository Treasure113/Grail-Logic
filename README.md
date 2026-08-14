# Gail Logic Website

The website is an online platform that provides brokerage services by
connecting traders with foreign exchange trading services. 
It is designed for beginner and professional traders. 

## Overview

The project is a responsive website developed for Grail Logic to provide users with information 
about the company's services and trading solutions.

The application was built using React and Vite, with Tailwindcss used for styling
and responsive layouts. 
It is designed to work across desktop, tablet, and mobile devices. 

## Features

- Responsive landing page
- Company information and services
- Pricing information
- FAQs section
- Contact page
- User authentication and account management
- Trading dashboard
- User settings and preferences
- Customer support

## Tech Stack

- **React** — UI development
- **Vite** — Development server and build tooling
- **JSX** — UI markup syntax
- **Tailwind CSS** — Styling and responsive design

## Getting Started

### Prerequisites 
Before running the website, make sure you have:
- Node.js installed
- Git installed

### Installation

1. Clone the repository: 

```bash
git clone <repository-url>
```

2. Navigate to project directory:

```bash
cd <project-directory>
```

3. Install the project dependencies:

```bash
npm install
```
### Running the Development Server

```bash
npm run dev
```
The application will be available at:

```text
http://localhost:5173
```

### Project Structure
├── Grail-Logic/
│   ├── AuthPages/ # Authentication and account access pages
│   ├── CompanyPage/  # Company information pages
│   ├── ContactPage/ # Contact and inquiry pages
│   ├── DashboardPage/ # User trading dashboard and trading views
│   ├── FAQsPage/ # Frequently asked questions
│   ├── HomePage/ # Main landing page
│   ├── PricingPage/ # Pricing information and company privacy policy
│   └── TandCPage/ # User terms and conditions 
├── src/
│   ├── assets/ # Static asessts
│   ├── components/ # Components and ui
│   ├── App.css # Application-level styles
│   ├── App.jsx # Root React component
│   ├── index.css # Global styles
│   ├── main.jsx  # Application entry point

## Available Scripts
### `npm run dev`

Runs the Vite developement server 

### `npm run build`

Creates an optimized production build.
