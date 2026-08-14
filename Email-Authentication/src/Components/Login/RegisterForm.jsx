import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";
import { auth } from '../../FireBase/firebase';
import { NavLink } from 'react-router';

const RegisterForm = () => {

    const [error, setError] = useState("");
    const [regInfo, setRegInfo] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setRegInfo(false);

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            await sendEmailVerification(user);

            setRegInfo(true);

            alert("Check your Gmail for verification.");
        } 
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="hero bg-base-200 min-h-screen">

            <form onSubmit={handleSubmit}>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">

                        {/* Email */}
                        <label className="input validator">

                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    />

                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </g>
                            </svg>

                            <input
                                type="email"
                                name="email"
                                placeholder="mail@site.com"
                                required
                            />

                        </label>

                        <div className="validator-hint hidden">
                            Enter valid email address
                        </div>

                        {/* Password */}
                        <input
                            type="password"
                            name="password"
                            className="input validator"
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least 8 characters, including a number, lowercase letter, and uppercase letter"
                        />

                        <div className="validator-hint">
                            Must contain:
                            <br />
                            At least 8 characters
                            <br />
                            At least one number
                            <br />
                            At least one lowercase letter
                            <br />
                            At least one uppercase letter
                        </div>

                        <button className="btn btn-neutral">
                            Register
                        </button>

                    </div>

                    {/* Firebase error */}
                    {error && (
                        <p className="text-red-500 px-4 pb-2">
                            {error}
                        </p>
                    )}

                    {/* Successful registration */}
                    {regInfo && (
                        <p className="px-4 pb-4">
                            Registration successful. Please{" "}
                            <NavLink
                                to="/login"
                                className="text-blue-500"
                            >
                                Login
                            </NavLink>
                        </p>
                    )}

                </div>

            </form>

        </section>
    );
};

export default RegisterForm;