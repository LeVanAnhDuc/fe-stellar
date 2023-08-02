import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SelectYearOfBirth = ({ className }) => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Adjust this as needed
    const endYear = currentYear - 10; // Adjust this as needed

    const [birth, setBirth] = useState('');

    const years = [];
    for (let year = endYear; year >= startYear; year--) {
        years.push(year);
    }

    const handleChange = (e) => {
        const selectedYear = e.target.value;
        setBirth(selectedYear);
        console.log(selectedYear);
    };

    return (
        <Form.Select className={className} aria-label="Select Year of Birth" onChange={handleChange} value={birth}>
            <option value="">Enter year of birth</option>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </Form.Select>
    );
};

export default SelectYearOfBirth;
