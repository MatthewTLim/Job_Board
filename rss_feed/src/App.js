import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch jobs from the API
  const fetchJobs = () => {
    setLoading(true);
    fetch('http://localhost:5000/jobs')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data); // Update jobs state with fetched data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch jobs initially
    fetchJobs();

    // Set up polling
    const intervalId = setInterval(fetchJobs, 5000); // Poll every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Job Listings</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching jobs: {error.message}</p>}
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="job-listing">
              <h2>{job.post_title}</h2>
              <h3>Company: {job.company_name}</h3>
              <p><strong>Category:</strong> {job.job_category}</p>
              <p><strong>Type:</strong> {job.part_time_full_time}</p>
              <p><strong>Location:</strong> {job.location || 'Not specified'}</p>
              <p><strong>Posted on:</strong> {job.job_post_date}</p>
              <p><strong>Details:</strong> {job.details}</p>
              <a href={job.apply_link} target="_blank" rel="noopener noreferrer">
                Apply Here
              </a>
            </li>
          ))
        ) : (
          <p>No job listings available.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
