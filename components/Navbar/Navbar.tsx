import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={`${styles.header} bg-primary-100 flex`}>
      <div className="flex-center">
        <Link href="/">
          <a><Image src="/assets/svg/migrante.svg" alt="Migrante" height={22} width={113}></Image></a>
        </Link>
        <div className="vertical-line mx-3"></div>
        <b className="primary-15">SHIPYARD</b>
      </div>
    </nav>
  )
}

export default Navbar
