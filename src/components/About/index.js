import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faJs, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious frontend developer looking for a role to start my career with
                        the opportuniy to work with the latest technologies on challenging projects.
                    </p>
                    <p>
                        I'm quietly confident, curious and always working on improving my skills one bug
                        at a time.
                    </p>
                    <p>
                        If I had to define myself in one sentence that would be a family person, anime fan,
                        youtube fanatic, Dragon Ball enthusiast, and tech-obsessed.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color='#DD0031' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJs} color='#EFD81D' />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D2H' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;