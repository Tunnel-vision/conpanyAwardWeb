import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/companies/${id}`)
      .then(response => response.json())
      .then(data => setCompany(data))
      .catch(error => console.error('Error fetching company details:', error));
  }, [id]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="company-details">
      <h2>{company.name}</h2>
      <img src={company.logo} alt={`${company.name} logo`} />
      <p>{company.description}</p>
      <h3>Awards</h3>
      <ul>
        {company.awards.map((award, index) => (
          <li key={index} className="award-item">
            <h4>{award.title}</h4>
            <p>{award.content}</p>
            <p>{award.date}</p>
            {award.photo && <img src={award.photo} alt={`Award ${index + 1}`} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyDetails;
