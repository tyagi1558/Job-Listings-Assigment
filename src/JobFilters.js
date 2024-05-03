import React, { useState } from 'react';

const JobFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    minExp: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    jobRole: '',
    minJdSalary
: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleFilter = () => {
   
    const isAnyFilterApplied = Object.values(filters).some(val => val !== '');
   
    if (isAnyFilterApplied) {
      onFilter(filters);
    
      setFilters({
        minExp: '',
        companyName: '',
        location: '',
        remote: '',
        techStack: '',
        jobRole: '',
        minBasePay: '',
      });
    }
  };
  const handleReset = () => {
    setFilters({
      minExp: '',
      companyName: '',
      location: '',
      remote: '',
      techStack: '',
      jobRole: '',
      minJdSalary: '',
    });
  };


  return (
    <div className="job-filters">
     <input
  type="number"
  name="minExp" 
  value={filters.minExp}
  placeholder="Min Experience"
  onChange={handleChange}
/>
      <input
        type="text"
        name="companyName"
        value={filters.companyName}
        placeholder="Company Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        value={filters.location}
        placeholder="Location"
        onChange={handleChange}
      />
      <input
        type="text"
        name="remote"
        value={filters.remote}
        placeholder="Remote/On-site"
        onChange={handleChange}
      />
      <input
        type="text"
        name="techStack"
        value={filters.techStack}
        placeholder="Tech Stack"
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobRole"
        value={filters.jobRole}
        placeholder="Role"
        onChange={handleChange}
      />
      <input
        type="number"
        name="minJdSalary
        "
        value={filters.minJdSalary
        }
        placeholder="Min Base Pay"
        onChange={handleChange}
      />
<button className="filter-button" onClick={handleFilter}>Apply</button>
<button className="reset-button" onClick={handleReset}>Reset</button>

    </div>
  );
};

export default JobFilters;