# FindIt

FindIt is a web application designed as a 'Where's Waldo'-style game featuring various themes and characters. Players can search for hidden objects or characters within detailed illustrations.

## Live Demo

[FindIt on Netlify](findit-hek.netlify.app)

## Tech Stack

-   **Frontend:** React with React Router for navigation
-   **Backend:** Node.js with Express
-   **Database:** Prisma ORM
-   **Hosting:** Netlify

## Features

-   Interactive image search gameplay
-   React Router for seamless navigation
-   Backend API with Express for game logic and user data
-   Prisma for efficient database management

## Installation

To set up FindIt locally:

1.  Clone the repository:

    ```bash
    git clone [https://github.com/yourusername/findit.git](https://github.com/yourusername/findit.git)
    cd findit
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the frontend:

    ```bash
    npm start
    ```

4.  Navigate to the backend folder, install dependencies, and start the server:

    ```bash
    cd backend
    npm install
    npm start
    ```

## Environment Variables

Ensure you set up a `.env` file in the backend directory with necessary variables:

```
DATABASE_URL=your_prisma_database_url
PORT=your_preferred_port
```

## Deployment

The frontend is hosted on Netlify at [findit-hek.netlify.app](findit-hek.netlify.app).
The backend can be hosted on services like Heroku, Vercel, or Render.

## Contributing

Feel free to submit issues or pull requests to improve the project.

## License

MIT License
