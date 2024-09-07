# Weekly Reflection Form Website Project

## Overview

This project aims to develop a weekly reflection form website with an RPG-like design, allowing users to reflect on various aspects of their lives, such as physical health, career, mental health, and social interactions. The website features dynamic forms for each subject, and responses are used to update a character sheet automatically, leveraging Language Learning Models (LLMs) for insightful feedback.

## Features

- **User Authentication**: Secure login/logout functionality.
- **Dynamic Forms**: Weekly forms on different subjects for user reflection.
- **Character Sheet**: A visual representation of user progress updated based on form responses.
- **Insights and Feedback**: Automated insights generated from user responses to encourage personal growth.
- **RPG-like Design**: Engaging user interface with RPG elements to make the reflection process enjoyable.

## Tech Stack

- **Backend**: Golang
- **Frontend**: HTMX and Tailwind CSS for responsive design
- **Database**: PostgreSQL
- **CI/CD**: ArgoCD with Kustomize for deployment
- **User Management**: Ory Hydra for secure user authentication

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Go (version 1.15 or later)
- Node.js and npm (for Tailwind CSS)
- PostgreSQL

### Installation

1 **Clone the repository**

```bash
git clone https://github.com/yourusername/weekly-reflection-form-website.git
cd weekly-reflection-form-website
```

2 **Set up the environment**

Environment Variables Configuration for RPG Weekly Server :

```env

# Database Configuration

# The hostname of the database server.
# Default: localhost
DB_HOST=localhost

# The password for the database user. This field is required.
# Example: DB_PASSWORD=yourpassword
DB_PASSWORD=

# The name of the database.
# Default: forms
DB_NAME=forms

# The username for the database.
# Default: root
DB_USER=root

# The port number on which the database server is listening.
# Default: 5432
DB_PORT=5432

# A boolean flag indicating whether SSL is enabled for the database connection.
# Default: false
DB_SSL=false

# A boolean flag indicating whether to enable automatic migration of the database schema.
# Default: false
DB_AUTO_MIGRATE=false

# Server Configuration

# The port number on which the server will listen.
# Default: 4000
PORT=4000

# Debug Mode
# A boolean flag indicating whether to run the server in debug mode.
# Default: false
DEBUG_MODE=false
```

This `.env` file includes comments that describe each environment variable, its purpose, and its default value. You can customize the values as needed for your specific environment.

3 **Start the database**

Ensure PostgreSQL is running and accessible. Create the necessary database and user as defined in your `.env` file.

```bash
docker compuse up -d
```

4 **Run the application**

Backend:

```bash
cd server
go run .
```

Frontend:

```bash
cd front
bun install
bun start
```

5 **Access the application**

Open your web browser and navigate to `http://localhost:3000` (or the port you've configured).

## Contributing

Contributions are welcome! Please read our [Contributing Guide](.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project.
- Special thanks to the open-source projects that made this possible.
