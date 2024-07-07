[![Netlify Status](https://api.netlify.com/api/v1/badges/667a360e-aa3d-41e8-b814-a3aba7150f1e/deploy-status)](https://app.netlify.com/sites/ktscates-frontend-quiz-app/deploys)

# Frontend Quiz App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Components](#components)
  - [QuizComponent](#quizcomponent)
  - [HeaderComponent](#headercomponent)
- [Services](#services)
  - [QuizService](#quizservice)
- [Customization](#customization)
  - [Changing the Theme](#changing-the-theme)
- [Live Link](#live-link)

## Introduction

This is a simple frontend quiz application built with Angular. The app allows users to select a quiz subject, answer multiple-choice questions, and receive feedback on their answers.

## Features

- Select a quiz subject
- Answer multiple-choice questions
- Immediate feedback on answers (correct or incorrect)
- Navigation through questions
- Score tracking
- Dark and light theme toggle

## Technologies Used

- Angular
- TailwindCSS

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ktscates/frontend-quiz-app.git
   cd frontend-quiz-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the App

    ```bash
    ng serve
    ```
    Open your browser and navigate to `http://localhost:4200/`.

## Components

### QuizComponent

The main component for the quiz functionality, handling question display, answer selection, and feedback.

### HeaderComponent

The header component.

## Services

### QuizService

Service for fetching quiz questions.

## Customization

### Changing the Theme

The application supports both light and dark themes. You can toggle the theme using the theme switcher component.

## Live Link

You can access the deployed application at [Frontend Quiz App](https://ktscates-frontend-quiz-app.netlify.app/).
