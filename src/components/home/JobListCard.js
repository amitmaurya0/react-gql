import React, { Component } from 'react';


const JobListCard = ({ job: {id, title, company, cities, countries, remotes}}) => {
  return (
    <div className="job-card">
      <h4 className="job-title">{title}</h4>
      <div className="job-info-container">
        <div>
          <p className="company-name"><strong>Company:</strong> {company.name}</p>
          <p className="remote-work"><strong>Remote Work:</strong> {remotes.length ? 'Available' : 'Not Available'}</p>
        </div>
        <div>
          {
            cities.length > 0 && <p className="job-cities-container"><strong>Cities:</strong> {cities.map(city=><span key={city.name}>{city.name}</span>)}</p>
          }
          {
            countries.length > 0 && <p className="job-countries-container"><strong>Countries:</strong> {countries.map(country=><span key={country.name}>{country.name}</span>)}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default JobListCard;