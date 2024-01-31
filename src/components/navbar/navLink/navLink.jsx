"use client";

import React from 'react'
import styles from '../navLink/navLink.module.css'
import Link from 'next/link'
import {usePathname} from 'next/navigation'


function NavLink({ item }) {

    const pathName = usePathname()

    return (
        <Link
            href={item.url}
            className={`${styles.container} 
        ${pathName === item.url ? styles.active : ''}`}>
            {item.title}
        </Link>
    )
}

export default NavLink