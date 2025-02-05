import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.css";
import Banner from "../components/Banner";
export const metadata = {
  title: "Clinica NTL",
  description: "Clinica Médica",
  charset: "UTF-8",
  author: "Nathan Teixeira Lopes",
  keywords: "HTML, CSS, JavaScript, React, Next.js",
};
const Home = () => {
  return (
    <main className={styles.main}>
      <Banner>
        <div className={styles.bannerContent}>
          <h2>BEM VINDO À CLÍNICA NTL!</h2>
          <p>
            Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência.
            Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.
          </p>
          <button className={styles.button}>Agende Consulta</button>
        </div>
      </Banner>
    </main>
  );
};

export default Home;