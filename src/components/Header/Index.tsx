import React from 'react'
import { useLocation } from 'react-router-dom';
import Logo from '../../img/logo.png'
import useConfig from "../useConfig";

export default function Index() {

    const config = useConfig();

    const tabs = [
        'home',
        'schedule',
        'reports',
        'vessel',
        'trips',
        'gallery',
        'contact',
    ];

    const location = useLocation();

    return (
        <header>
            <img className='mainLogo' src={Logo} alt='Vagabond Logo' />
            <nav>
                {
                    tabs.map((tab: string, i: number) => {
                        return (
                            <a
                                href={`/${tab}`}
                                key={`tab${i}`}
                                className={location.pathname === `/${tab}` ? 'currentLink' : ''}
                            >
                                {tab}
                            </a>
                        )
                    })
                }
            </nav>
        </header >
    )
}
