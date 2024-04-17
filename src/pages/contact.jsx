import {useNavigate} from "react-router-dom";

function Contact() {

    const navigate = useNavigate();
    

    return (
        <>
            <div className="login">
                <h1>Contactez-Nous</h1>
                <input type="text" name="nom" placeholder="Noms" /><br /><br />
                <input type="text" name="sujet" placeholder="Sujet" /><br /><br />
                <input type="email" name="email" placeholder="Email" /><br /><br />
                <textarea rows="4" cols="25" placeholder="Message"></textarea><br /><br />

                <button>
                    Envoyer
                </button>
            </div>
        </>
    );
}

export default Contact;