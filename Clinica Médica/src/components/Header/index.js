'use client';
import { useState } from "react";
import styles from "./Header.module.css";
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
  
    const handleMouseEnter = (menu) => {
      setOpenDropdown(menu);
    };
  
    const handleMouseLeave = () => {
      setOpenDropdown(null);
    };
  
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={"/images/logoHeader.png"} width={160} height={70} alt="CLINICA NTL" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">HOME</a></li>
  
            <li 
              className={styles.menuitem} 
              onMouseEnter={() => handleMouseEnter("medicos")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">MÉDICOS</a>
              {openDropdown === "medicos" && (
                <ol className={styles.submenu}>
                  <li><Link href="#">Lista de Médicos</Link></li>
                  <li><Link href="#">Especialidades</Link></li>
                </ol>
              )}
            </li>
  
            <li 
              className={styles.menuitem} 
              onMouseEnter={() => handleMouseEnter("pacientes")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">PACIENTES</a>
              {openDropdown === "pacientes" && (
                <ol className={styles.submenu}>
                  <li><Link href="#">Área do Paciente</Link></li>
                  <li><Link href="#">Histórico Médico</Link></li>
                </ol>
              )}
            </li>
  
            <li 
              className={styles.menuitem} 
              onMouseEnter={() => handleMouseEnter("agendamento")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">AGENDAMENTO</a>
              {openDropdown === "agendamento" && (
                <ol className={styles.submenu}>
                  <li><Link href="#">Agendar Consulta</Link></li>
                  <li><Link href="#">Minhas Consultas</Link></li>
                </ol>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }