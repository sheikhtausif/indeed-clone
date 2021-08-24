import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import { Header1 } from '../Home/Header1';
import { Head1 } from '../Home/Head1';
import styles from "../Home/landing.module.css";
import { Link, } from "react-router-dom";

import '../../App.css'
export const Sucess = () => {

    let user = JSON.parse(localStorage.getItem('user'))
    let comp = JSON.parse(localStorage.getItem('appliedJob')).companyName

    return (
        <div>
            <div className={styles.head}><Header1 /></div>
            <div className={styles.head2}>
                <Head1 />
            </div>
            <div className="success">
                <img src="/Your-application.png" alt="" />
                <div className="information">
                    <div>
                        <FcCheckmark />
                        <p>You will get an email confirmation at <strong>{user.emaild}</strong></p>
                    </div>
                    <div>
                        <FcCheckmark />
                        <p><strong>{comp}</strong> typically responds to applications within 10 days.</p>
                    </div>
                    <div className="gobackk"><Link exact to="/">Return to job search</Link></div>
                </div>
            </div>
        </div>
    )
}
