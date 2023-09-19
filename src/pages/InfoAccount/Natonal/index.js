import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const SelectCountry = ({ className, value, handleChangeNationality }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let ignore = false;
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
        !ignore && fetchUserName();

        return () => {
            ignore = true;
        };
    }, []);

    const handleChange = (e) => {
        handleChangeNationality(e);
    };

    return (
        <Form.Select className={className} aria-label="Select Country" onChange={handleChange} value={value}>
            <option value="">Select a country</option>
            {countries.map((country, index) => (
                <option key={index} value={country.country}>
                    {country.country}
                </option>   
            ))}
        </Form.Select>
    );
};

export default SelectCountry;
