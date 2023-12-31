import Form from 'react-bootstrap/Form';

import { useState } from 'react';
function InputEmail({ className, label = true, children, value, handleChangeEmail }) {
    const [email, setEmail] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        handleChangeEmail(e);
    };

    const validateEmail = () => {
        // Sử dụng biểu thức chính quy (regex) để kiểm tra tính hợp lệ của email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(email));
    };

    return (
        <>
            {label ? <Form.Label>Email</Form.Label> : null}
            <Form.Control
                className={className}
                required
                type="email"
                placeholder="Enter email address"
                value={value}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                defaultValue=""
            />
            {children}
            {!isValidEmail && <Form.Control.Feedback type="invalid">Invalid email address</Form.Control.Feedback>}
        </>
    );
}

export default InputEmail;
