import React from 'react';
import { Form } from 'react-bootstrap';

const SelectYearOfBirth = ({ className, value, handleChangeBirth }) => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Adjust this as needed
    const endYear = currentYear - 10; // Adjust this as needed

    const years = [];
    for (let year = endYear; year >= startYear; year--) {
        years.push(year);
    }

    const handleChange = (e) => {
        handleChangeBirth(e);
    };

    return (
        <Form.Select className={className} aria-label="Select Year of Birth" onChange={handleChange} value={value}>
            <option value="">Enter year of birth</option>
            {years.map((year, index) => (
                <option key={index} value={year}>
                    {year}
                </option>
            ))}
        </Form.Select>
    );
};

export default SelectYearOfBirth;
