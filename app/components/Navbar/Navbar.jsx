'use client';
import Image from 'next/image';
import tulogo from '../../imgs/logo colonias.png';
import styles from '../Navbar/Navbar.module.css';
import { useState } from 'react';



const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    function openMenu() {setClicked((current) => !current);}


    return (
        <section className={styles}>
            <div className={styles.navbarcontainer}>
                <div>
                    <Image className={styles.logo}
                        src={tulogo}
                        height={50}
                        alt="Picture of the author"
                    />
                </div>

                <div className={styles.links}>
                    <h6 className={styles.link}>Inicio</h6>
                    <h6 className={styles.link}>Directorio</h6>
                    <button className={styles.primarybutton}>Unite</button>
                </div>
                
                <div className={styles.navigation} onClick={openMenu}>
                    ☰
                </div>
            </div>
            <div>
                    {clicked ?
                        <ul>
                            <h1 className={styles.link}>Our Product</h1>
                            <h1 className={styles.link}>FAQ</h1>
                            <h1 className={styles.link}>Testimonial</h1>
                        </ul>
                        : ''}
                </div>
        </section>
    )
}

export default Navbar