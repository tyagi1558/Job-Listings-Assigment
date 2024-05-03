import React, { useState, useEffect } from 'react';
import fetchJobListings from './jobService';
import JobCard from './JobCard';
import JobFilters from './JobFilters';

const App = () => {
  const [allJobListings, setAllJobListings] = useState([]);
  const [filteredJobListings, setFilteredJobListings] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMoreJobs = async () => {
    setLoading(true);
    try {
      const moreJobs = await fetchJobListings(offset);
      setAllJobListings(prevJobListings => [...prevJobListings, ...moreJobs]);
      setOffset(prevOffset => prevOffset + 10);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreJobs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100
      ) {
        fetchMoreJobs();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, allJobListings, offset]);

  const applyFilters = (filters) => {

    const filteredJobs = allJobListings.filter(job => {
      const minExperienceMatch = !filters.minExp || job.minExp >= parseInt(filters.minExp);
      const companyNameMatch = !filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase());
      const jobRoleMatch = !filters.jobRole || job.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase());
      const locationMatch = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());

      const minBasePayMatch = !filters.minJdSalary || job.minJdSalary >= parseInt(filters.minJdSalary);
      return minExperienceMatch && companyNameMatch && locationMatch && minBasePayMatch && jobRoleMatch;
    });

    setFilteredJobListings(filteredJobs);
  };

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <JobFilters onFilter={applyFilters} />
      <div className="job-list">
        {(filteredJobListings.length > 0 ? filteredJobListings : allJobListings).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;
