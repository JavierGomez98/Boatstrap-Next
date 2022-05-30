import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './_navbar.module.scss'
import migranteImg from '@svg/migrante.svg'

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <div className="flex-center">
        <Link href="/">
          <a><Image src={migranteImg} alt="Migrante" height={22} width={113}></Image></a>
        </Link>
        <div className="vertical-line mx-3"></div>
        <b className="primary-15">SHIPYARD</b>
      </div>
    </nav>
  )
}

export default Navbar
