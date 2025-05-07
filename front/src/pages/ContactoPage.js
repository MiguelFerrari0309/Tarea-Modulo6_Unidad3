import './../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
    <main class="holder contacto">
        <div>
            <h2>Contacto:</h2>
            <form action="" method="" class="formulario">
             <p>
                <label for="nombre">Nombre</label>
                <input type="text" name=""/>
             </p>
             <p>
                <label for="email">Email</label>
                <input type="text" name=""/>
             </p>
             <p>
                <label for="telefono">Telefono</label>
                <input type="text" name=""/>
             </p>
             <p>
                <label for="mensaje">Mensaje</label>
                <textarea name=""></textarea>
             </p>
             <p class="acciones"><input type="submit" value="Enviar" /></p>
            </form>
        </div>

        <div class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Puede contactarse para nosotros para cualquier tipo de consulta, o donación mediante los siguientes medios</p>
            <ul>
                <li>Telefono: 1132904287</li>
                <li>Email: miguel.ferrari0309@gmail.com</li>
                <li>Instagram: --------------</li>
                <li>Facebook: ---------------</li>
                <li>X: ----------------</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactoPage;