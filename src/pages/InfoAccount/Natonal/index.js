import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const SelectCountry = ({ className, value, handleChangeNationality }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchUserName() {
            await axios
                .get('https://countriesnow.space/api/v0.1/countries')
                .then((response) => {
                    setCountries(response.data.data);
                })
                .catch((error) => {
                    console.error('Error fetching countries:', error);
                });
        }
        fetchUserName();
    }, []);

    const handleChange = (e) => {
        handleChangeNationality(e);
    };

    return (
        <Form.Select className={className} aria-label="Select Country" onChange={handleChange} value={value}>
            <option value="">Select a country</option>
            {countries.map((country) => (
                <option key={country.country} value={country.country}>
                    {country.country}
                </option>
            ))}
        </Form.Select>
    );
};

export default SelectCountry;
