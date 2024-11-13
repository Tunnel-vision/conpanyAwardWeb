import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/CompanyDetails';
import SearchSuggestions from './components/SearchSuggestions';
import Fuse from 'fuse.js';

function App() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/companies')
      .then(response => response.json())
      .then(data => {
        setCompanies(data);
        const fuse = new Fuse(data, {
          keys: ['name'],
          threshold: 0.3,
        });
        setSuggestions(fuse);
      })
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 2) {
      const results = suggestions.search(term);
      setCompanies(results.map(result => result.item));
    } else {
      fetch('http://localhost:3001/companies')
        .then(response => response.json())
        .then(data => setCompanies(data))
        .catch(error => console.error('Error fetching companies:', error));
    }
  };

  const handleCompanySelect = (companyId) => {
    navigate(`/company/${companyId}`);
  };

  return (
    <div>
      <h1>Company Awards App</h1>
      <div style={{ position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Search for a company..." 
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm.length > 2 && (
          <SearchSuggestions 
            suggestions={suggestions.search(searchTerm).map(result => result.item.name)} 
            onSelect={(name) => {
              setSearchTerm(name);
              const company = companies.find(c => c.name.toLowerCase() === name.toLowerCase());
              if (company) handleCompanySelect(company.id);
            }}
          />
        )}
      </div>
      <Routes>
        <Route path="/" element={<CompanyList companies={companies} onSelect={handleCompanySelect} />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
