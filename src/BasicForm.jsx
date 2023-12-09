import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const BasicForm = () => {
    const [firstName, setFirstName] = useLocalStorage("firstname", "");
    const [lastName, setLastName] = useLocalStorage("lastname", "");
    return (
        <div>
            <label htmlFor="firstname">FirstName</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <h1>Firstname:{firstName}</h1>
            <label htmlFor="lastname">LastName</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
            />
            <h1>LastName:{lastName}</h1>
        </div>
    )
}

export default BasicForm;

