"use client";

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import styles from './links.module.css'
import NavLink from '../navLink/navLink'

function Links() {
    const links = [
        {
            'title': 'Home',
            'url': '/'
        },
        {
            'title': 'About',
            'url': '/about'
        },
        {
            'title': 'Contact',
            'url': '/contact'
        },
        {
            'title': 'Blog',
            'url': '/blog'
        }
    ]

    const session = true
    const isAdmin = true
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => {
                    return (
                        <NavLink key={link.title} item={link} />
                    )
                })}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink item={{ 'title': 'Admin', 'url': '/admin' }} />
                        )}
                        <button className='logout'>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ 'title': 'Login', 'url': '/login' }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((open) => !open)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => {
                        return (
                            <NavLink item={link} key={link.title} />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Links