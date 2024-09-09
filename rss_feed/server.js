// server.js

const express = require('express');
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());

// Sample data
const jobs = [
  {
    id: 1,
    company_name: 'Tillamook County',
    post_title: 'Information Services Director',
    job_category: 'Business & Management',
    part_time_full_time: 'Full Time',
    location: '',
    job_post_date: 'July 23, 2024',
    apply_link: 'https://www.prothman.com/open-recruitments/?jobId=3214',
    created_at: '2024-08-06T03:14:07.485Z',
    updated_at: '2024-08-06T03:14:07.485Z',
    details: 'Information Services DirectorTillamook County, Oregon...'
  },
  // Add more job objects here
];

// Define your routes
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
