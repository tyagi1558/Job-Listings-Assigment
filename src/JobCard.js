import React, { useState } from 'react';

const JobCard = ({ job }) => {
 
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
    imageUrl,
    estimatedSalary
  } = job;

  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const toggleDescriptionExpansion = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleApplyClick = () => {
    if (jdLink) {
      window.location.href = jdLink;
    }
  };

  const getEstimatedSalary = () => {
    if (minJdSalary && maxJdSalary) {
      return `${minJdSalary} - ${maxJdSalary} ${salaryCurrencyCode}`;
    } else if (estimatedSalary) {
      return estimatedSalary;
    } else {
      return 'Not specified';
    }
  };

  const handleNullValue = (value) => {
    return value === null ? 'Not specified' : value;
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        {logoUrl && <img src={logoUrl} alt="Company Logo" className="logo" />}
        {imageUrl && <img src={imageUrl} alt="Job Image" className="job-image" />}
        <div>
          <h2>{companyName}</h2>
          {jobRole && <p className="job-role">{jobRole}</p>}
          {location && <p className="location">{location}</p>}
        </div>
      </div>
      <div>
        {getEstimatedSalary() && <p className="estimated-salary">Estimated Salary: {getEstimatedSalary()}</p>}
      </div>
      <div className="job-card-details">
        <div>
          <h3 style={{paddingRight:210}}>About Company</h3>
          <div style={{paddingRight:280}}>
            <p>About us</p>
          </div>
          {jobDetailsFromCompany && (
  <>
    <p className={`job-description ${isDescriptionExpanded ? 'expanded' : ''}`} onClick={toggleDescriptionExpansion}>
      {!isDescriptionExpanded ? jobDetailsFromCompany.slice(0, 100) + '...' : jobDetailsFromCompany}
    </p>
    {!isDescriptionExpanded && (
      <span className="show-more-button" onClick={toggleDescriptionExpansion}></span>
    )}
  </>
)}

        </div>
      </div>
      <p className="experience"><span>Min Experience:</span> {handleNullValue(minExp)} years</p>
      <button className="apply-button" onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default JobCard;
