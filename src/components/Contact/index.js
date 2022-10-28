import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.prevenDefault();

        emailjs
            .sendForm(
                'service_rot0v24',
                'template_sr480i6',
                form.current,
                'AI4H-oLhM0E7nz64g'
            )
            .then(
                () => {
                    alert('Message successfuly submitted!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in job opportunities - especially ambitious or large projects.
                        However, if you have anoother request or any questions, don't hesitate to
                        contact me using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>

                                <li>
                                    <input placeholder="subject" type="text" name="subject" required />
                                </li>

                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>

                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>

                            </ul>
                        </form>

                    </div>

                </div>
                <div className="info-map">
                    Lucas Túlio,
                    <br />
                    Brazil,
                    <br />
                    Fortaleza <br />
                    <span>lucastuliolima@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-3.731862, -38.526669]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-3.731862, -38.526669]}>
                            <Popup>Lucas lives here, come have some coffee!</Popup>
                        </Marker>

                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;