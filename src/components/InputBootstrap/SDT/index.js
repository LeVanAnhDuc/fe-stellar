import Form from 'react-bootstrap/Form';

import { useState } from 'react';
function InputSDT({ className, label = true, children }) {
    const [phone, setPhone] = useState('');

    const [isValidPhone, setIsValidPhone] = useState(true);

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const validatePhone = () => {
        const phonePattern = /^\d{10,12}$/;
        setIsValidPhone(phonePattern.test(phone));
    };
    return (
        <>
            {label ? <Form.Label>Số điện thoại</Form.Label> : null}
            <Form.Control
                className={className}
                required
                type="tel"
                placeholder="Enter phone number (10-12 digits)"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={validatePhone}
                pattern="[0-9]{10,12}"
                defaultValue=""
            />
            {children}
            {!isValidPhone && <Form.Control.Feedback type="invalid">Please enter a valid phone.</Form.Control.Feedback>}
        </>
    );
}

export default InputSDT;
