# Job_Board

This repository contains the "Job_Board" project, which includes a web scraper, an API, and a frontend for collecting and providing data related to job listings. The project is organized into submodules: `Web_Scraper_v1`, `tech_job_api`, and a frontend (React app). This is still a WIP (Work in Progress).

## Justification for Using Submodules

The decision to use submodules for the web scraper, API, and frontend is based on the following considerations:

1. **Modularity and Separation of Concerns**: Each submodule serves a distinct purpose: the web scraper (`Web_Scraper_v1`) is responsible for gathering job listings, the API (`tech_job_api`) provides a standardized way to access and manipulate that data, and the frontend handles user interactions. This separation allows each component to be developed, tested, and deployed independently.

2. **Ease of Maintenance and Updates**: Using submodules makes it easier to maintain and update individual parts of the project. For example, if there are changes or improvements to the scraping logic, they can be made in the `Web_Scraper_v1` submodule without impacting the API or frontend. Similarly, changes to the API or frontend can be made in isolation.

3. **Reusability**: Submodules allow each component to be reused across different projects. The web scraper or API could be utilized by other projects in the future, and keeping them in separate repositories facilitates this reuse.

4. **Collaboration and Version Control**: Submodules facilitate better collaboration by allowing teams or individuals to work on different parts of the project simultaneously. Each submodule has its own version control, which can help manage updates, rollbacks, and feature development more efficiently.

## Table of Contents

- [Setup](#setup)
- [Using the Web Scraper](#using-the-web-scraper)
- [Using the API](#using-the-api)
- [Running the API Locally](#running-the-api-locally)
- [Starting the Frontend](#starting-the-frontend)
- [Starting the Node.js Server](#starting-the-nodejs-server)
- [JSON Contract](#json-contract)
- [RSS Feed](#rss-feed)
- [Contributing](#contributing)

## Setup

### Prerequisites

Before setting up the project, ensure you have the following installed:

- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Bundler](https://bundler.io/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/)

### Cloning the Repository

To clone the repository along with its submodules, run:

```bash
git clone --recurse-submodules https://github.com/MatthewTLim/Job_Board.git
cd Job_Board
```

### Installing Dependencies

Navigate to each submodule directory and install the necessary dependencies:

1. **Web_Scraper_v1**:

   ```bash
   cd Web_Scraper_v1
   bundle install
   cd ..
   ```

2. **tech_job_api**:

   ```bash
   cd tech_job_api
   bundle install
   cd ..
   ```

## Using the Web Scraper

The `Web_Scraper_v1` submodule is responsible for scraping job listings from various sources. To use the scraper:

1. **Navigate to the Web_Scraper_v1 Directory**:

   ```bash
   cd Web_Scraper_v1
   ```

2. **Run the Scraper**:

   You can run the scraper with the following command:

   ```bash
   ruby sfrun.rb
   ```

   The scraper will collect job listings and store them in the specified output format (e.g., CSV, JSON).

## Using the API

The `tech_job_api` submodule provides an API for accessing the job listings collected by the scraper.

### Running the API Locally

To run the API locally:

1. **Navigate to the tech_job_api Directory**:

   ```bash
   cd tech_job_api
   ```

2. **Start the API Server**:

   You can start the API server with the following command:

   ```bash
   bin/rails server -p 4000
   ```

   The server will start, and you can access the API at `http://localhost:4000`.

3. **Accessing the API**:

   - **GET /jobs**: Retrieve a list of all job listings.
   - **GET /jobs/:id**: Retrieve a specific job listing by ID.

   You can interact with the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

### Database Setup

The API relies on a database, ensure it is properly set up and migrated. You can usually do this with the following commands:

1. **Set up the database**:

   ```bash
   bundle exec rake db:create db:migrate
   ```

## Starting the Frontend

To start the frontend React application:

1. **Navigate to the frontend directory**:

   ```bash
   cd path/to/frontend
   ```

2. **Install npm dependencies**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm start
   ```

   The frontend will be served at `http://localhost:3000`, and it will make requests to the API at `http://localhost:4000`.

## Starting the Node.js Server

If you have a Node.js server to run, follow these steps:

1. **Navigate to the directory containing your `server.js` file**:

   ```bash
   cd path/to/node_server
   ```

2. **Install npm dependencies**:

   ```bash
   npm install
   ```

3. **Start the Node.js server**:

   ```bash
   node server.js
   ```

   The server will start, and you can access it at `http://localhost:YOUR_PORT`.

## JSON Contract

The API returns job listings in JSON format. Each job object contains the following fields:

- `id`: The unique identifier for the job listing.
- `company_name`: The name of the company offering the job.
- `post_title`: The title of the job posting.
- `job_category`: The category of the job (e.g., Business & Management, Engineering).
- `part_time_full_time`: Indicates whether the job is part-time or full-time.
- `location`: The location of the job.
- `job_post_date`: The date when the job was posted.
- `apply_link`: A URL where users can apply for the job.
- `created_at`: The timestamp when the job listing was created in the database.
- `updated_at`: The timestamp when the job listing was last updated in the database.
- `details`: A detailed description of the job listing.

Ensure your React app handles this JSON format correctly to display job listings.

## RSS Feed

The API also provides an RSS feed for job listings. You can access the RSS feed at:

- **RSS Feed**: `http://localhost:4000/rss_feed`

This endpoint provides job listings in RSS format, which can be used by RSS readers to subscribe to updates.

## Contributing

If you would like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and test them.
4. Submit a pull request with a clear description of the changes.

--- 

Feel free to make any additional adjustments to align with your project's specifics.
