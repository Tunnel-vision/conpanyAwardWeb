import React from 'react';
import { Link } from 'react-router-dom';

function CompanyList({ companies, onSelect }) {
  return (
    <ul className="company-list">
      {companies.map(company => (
        <li key={company.id} className="company-item" onClick={() => onSelect(company.id)} onTouchStart={() => onSelect(company.id)}>
          <img src={company.logo} alt={`${company.name} logo`} />
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default CompanyList;
