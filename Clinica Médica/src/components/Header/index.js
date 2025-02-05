'use client';
import React from "react";
import styles from "./Header.module.css";
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
    return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Image src={"/images/logoHeader.png"} width={160} height={70} alt="CLINICA NTL"/>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MÉDICOS</a></li>
                <li><a href="#">PACIENTES</a></li>
                <li><a href="#">AGENDAMENTO</a></li>
            </ul>
        </nav>
    </header>
    );
  };
  
  export default Header;