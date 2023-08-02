import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const SelectCountry = ({ className }) => {
    const [countries, setCountries] = useState([]);
    const [national, setNational] = useState('');

    useEffect(() => {
        axios
            // .get('https://restcountries.com/v3.1/all')
            .get('https://countriesnow.space/api/v0.1/countries')
            .then((response) => {
                setCountries(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleChange = (e) => {
        const selectedCountry = e.target.value;
        setNational(selectedCountry);
    };

    return (
        <Form.Select className={className} aria-label="Select Country" onChange={handleChange} value={national}>
            <option value="">Select a country</option>
            {/* {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                    {country.name.common}
                </option>
            ))} */}
            {countries.map((country) => (
                <option key={country.country} value={country.country}>
                    {country.country}
                </option>
            ))}
        </Form.Select>
    );
};

export default SelectCountry;
