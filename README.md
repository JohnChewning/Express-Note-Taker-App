# Express Note Taker App

A simple note-taking application built with Express.js.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

## Description

The Express.js Note Taker App is a web application that allows users to create, view, and delete notes. It utilizes Express.js for server-side functionality, allowing seamless interaction with the application.

## Features

- Create and save notes.
- View existing notes.
- Delete notes when they are no longer needed.

## Installation

To run the Note Taker App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/express-note-taker.git
    ```

2. Install Dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the application:

    ```bash
    npm start
    ```
2. Open your web browser and visit http://localhost:3001 to access the Note Taker App.

3. The home page will display existing notes, and you can click on "Get Started" to create new notes.

4. To create a new note, click on the "Note Title" and "Note Text" fields, enter your content, and click the save icon.

5. Your new note will be added to the list on the left-hand side. To view or delete a note, click on the corresponding entry.

6. To delete a note, click on the trash can icon next to the note you want to remove.

7. Continue creating, viewing, and deleting notes as needed.

## API Routes
- GET /notes: Retrieve existing notes.
- POST /notes: Create and save a new note.
- DELETE /notes/:id: Delete a specific note by ID.

## License
