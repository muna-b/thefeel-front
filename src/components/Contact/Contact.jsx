import React from 'react'
import { Link } from 'react-router-dom'
import classNames from './Contact.module.css';

function Contact() {
    // const [open, setOpen] = useState(false);
    // const [hidden, setHidden] = useState(true);
    // const onClick = () => {
	// 	setOpen(!open)
    //     setHidden(hidden)
	// }

    return (
        // <div className={classNames.contactBox}>
            <div className={classNames.mainContainer}>
                <div className = {classNames.test}>
                </div>
                <button className = {classNames.contactButton}>
                    <Link to = '/contact'>
                        Nous contacter <i className="far fa-edit"></i>
                    </Link>
                </button>
           
        </div>
        // </div>
    )
}

export default Contact
