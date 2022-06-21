import { useState } from "react";

function Input({ type = 'text', name, value = '', valueUpdate, label, options, }) {

    const [inputValue, setInputValue] = useState(value);

    const onValueChanged = (event) => {
        setInputValue(event.target.value);
        if (valueUpdate && typeof valueUpdate === 'function') {
            valueUpdate(event.target.value);
        }
    }

    if (type === "textarea") {
        return (
            <>
                <br></br>
                {label}
                <br></br>
                <textarea
                    onChange={onValueChanged}
                    name={name}
                    value={inputValue}
                    label={label}
                    className="form-control"
                />
                <br></br>
            </>
        );
    }
    if (type === "range") {
        return (
            <>
                <br></br>
                {label}
                <br></br>
                <input
                type={type}
                    onChange={onValueChanged}
                    name={name}
                    value={inputValue}
                    label={label}
                    min="0" 
                    max="100"
                    className="form-control"
                />
                <br></br>
            </>
        );
    }
    if (type === "select") {
        return (
            <>
                <br></br>
                {label}
                <br></br>
                <select
                    type={type}
                    onChange={onValueChanged}
                    name={name}
                    value={inputValue}
                    label={label}
                    className="form-control">
                    {options.map((op) => (
                        <option key={op}>{op}</option>
                    ))}
                    
                </select>
                <br></br>
            </>
        );
    }
    if (type === "radio") {
        return (
            <>
                <br></br>
                {label}
                <br></br>
                {options.map((op) => (
                    <div>
                        <label>{op}</label>
                        <input
                            key={op}
                            type={type}
                            onChange={onValueChanged}
                            name={name}
                            value={op}
                            label={label}
                            className="form-control"
                        />
                    </div>
                ))}
                <br></br>
            </>
        );
    }
    if (type === "checkbox") {
        return (
            <>
                <br></br>
                {label}
                <br></br>
                {options.map((op) => (
                    <div>
                        <label>{op}</label>
                        <input
                            key={op}
                            type={type}
                            onChange={onValueChanged}
                            name={name}
                            value={op}
                            label={label}
                            className="form-control"
                        />
                    </div>
                ))}
                <br></br>
            </>
        );
    }

    return (
        <>
            <br></br>
            {label}
            <br></br>
            <input
                key={name}
                type={type}
                onChange={onValueChanged}
                name={name}
                value={inputValue}
                label={label}
                className="form-control"
            />
            <br></br>
        </>
    );
}

export default Input;