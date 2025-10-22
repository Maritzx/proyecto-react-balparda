import { useState } from "react";
import { Form } from "react-router";

export default function FormCheckout( props ) {
    //formulario controlado
    const [ formData, setFormData ] = useState( {
        username: "",
        phone: "",
        email: ""
    } );
    function handleSubmit( event ) {
        event.preventDefault();
        props.handleCheckout( formData );
    }

    function handlesInputChange(event) {
        const value = event.target.value;
        const inputName = event.target.name;
        const newFormData = { ...formData };
        newFormData[ inputName ] = value;
        setFormData( newFormData ); 

    function resetForm() {
        setFormData( {
            username: "",
            phone: "",
            email: ""
        } );
        }

    return (
        <div>
            <h4>Completa tus datos</h4>
            <form onSubmit={handleSubmit}>
                <label>Nombre
            <input 
            value = { FormData.username }
            onChange= { handlesInputChange }
            name="username"
            type="text"
            placeholder= "Mauricio"
            required
            />
                </label>
                <label>Email
            <input 
            value={formData.email}
            onChange={handlesInputChange}
            name="email"
            type="email"
            placeholder="mauricio@mauricio.com"
            required
            />
                </label>
                <label>Telefono
            <input 
            value={formData.phone}
            onChange={handlesInputChange}
            name="phone"
            type="tel"
            placeholder="123456"
            required
            />
                </label>
                <label>
                    <button type="submit">Enviar</button>
                    <button type= "button" onClick={resetForm}>Reiniciar formulario</button>
                
                </label>
            </form>
        </div>
    )           
}
}
