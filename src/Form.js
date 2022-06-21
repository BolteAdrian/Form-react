import { useEffect, useState } from "react";
import Input from "./Input";
import './Form.css';

function Form() {

    const [formFields, setFormFields] = useState({ firstname: '', lastname: '', email: '', message: '' });

    const fields = [{
        name: 'firstname',
        type: 'text',
        label: 'First name'
    },
    {
        name: 'lastname',
        type: 'text',
        label: 'Last name'
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email'
    },
    {
        name: 'message',
        type: 'textarea',
        label: 'Message'
    },
    {
        name: 'date',
        type: 'date',
        label: 'Date'
    },
    {
        name: 'range',
        type: 'range',
        label: 'Range(0-100)'
    },
    {
        name: 'gender',
        type: 'radio',
        label: 'Gender',
        options: ['male', 'female', 'other']
    },
    {
        name: 'file',
        type: 'file',
        label: 'File',
    },
    {
        name: 'programe',
        type: 'checkbox',
        label: 'Programe',
        options: ['C', 'C++', 'C#']
    },
    {
        name: 'country',
        type: 'select',
        label: 'Country',
        options: ['UK', 'USA', 'France', 'Germany']
    }


    ]

    //creeaza un JSON cu nume camp:valoare
    const onInputValueUpdated = (fieldname, value) => {
        setFormFields({
            ...formFields,
            [fieldname]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //arata in console valorile din campuri
    useEffect(() => {
        console.log(formFields);
    }, [formFields]);

    return (
        <div >
            <h1>Formular</h1>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <Input key={field.id} {...field} value={formFields[field.name]} valueUpdate={(newValue) => onInputValueUpdated(field.name, newValue)} label={field.label} options={field.options} />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}



export default Form;