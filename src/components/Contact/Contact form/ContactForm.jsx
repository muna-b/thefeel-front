import React, { useState } from 'react'
import classNames from './ContactForm.module.css'

function ContactForm() {
    const [firstname, setFirstname] = useState ();
    const [lastname, setLastname] = useState ();
    const [email, setEmail] = useState ();
    const [phoneNumber, setPhoneNumber] = useState ();

    const [ select, setSelect ] = useState ();
    const onClickSelect = (event) => {

        setSelect(event.target.value)
    };
    const [ message, setMessage ] = useState ();
    const onChangeMessage = (eventMsg) => {
        setMessage(eventMsg.target.value)
    }
    
    const formData = [
        { value: firstname, name: 'firstname', type: 'text' ,label: "Prénom: ", onChange: setFirstname, required: true},
        { value: lastname, name: 'lastname', type: 'text' ,label: "Nom: ", onChange: setLastname, required: true},
        { value: email, name: 'email', type: 'email' ,label: "Email: ", onChange: setEmail, required: true},
        { value: phoneNumber, name: 'phoneNumber', type: 'tel' ,label: "Téléphone: ", onChange: setPhoneNumber, required: true},    ]

    const onChangeHandler = async (event) => {
        event.preventDefault()
        const response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                phoneNumber,
                select,
                message,              

            })
        })
        await response.json()
    }
    return (
        <div className={classNames.container}>
                <form onSubmit= {onChangeHandler}>
                    <div className={classNames.row}>
                        {formData.map(object => {
                            return (
                                <div>
                                    <input 
                                    placeholder={object.label}
                                    type={object.type} 
                                    value={object.value}
                                    name={object.name} 
                                    onChange={ (ev) =>  object.onChange(ev.target.value) } 
                                    required={object.required} 
                                    />
                                </div>
                            )
                        })
                        }  

                    </div>
                    <br/>
                    <div>
                        <select value = { select } onChange= { onClickSelect } name="" id="">
                        <option value="no" disabled>Seletionnez un objet</option>
                            <option value="Informations">Informations</option>
                            <option value="Devis">Devis</option>
                            <option value="Partenariat">Partenariat</option>
                            <option value="Autres">Autres</option>
                        </select>
                    </div>
                    <br/>
                    <div className={classNames.message}>
                        <textarea 
                        value={ message }
                        onChange= { onChangeMessage }
                        name="message"
                        placeholder="message"
                        required
                        />
                    </div>

                    <div className={classNames.span}>
                        <input value="" type="checkbox" required/>
                        <span>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la Politique de confidentialité.</span>
                    </div>
                    <br/>
                    <button type="submit">Envoyer</button>

                </form>
        </div>
    )
}

export default ContactForm
