import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";


import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Produtos.module.css";
import Link from "next/link";
import GoogleMap from "../components/map";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Produtos() {
  
const [hovered, setHovered] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query.categoria) {
      setSelectedCategory(router.query.categoria);
    }
  }, [router.query.categoria]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const produtos = [
   {/*
     {
      id: 1,
      nome: "80.500",
      imagem: "/static/images/Produtos/ING/80-500-Trave.png",
      categoria: "Guindaste Linha Trave",
      slug: "produto-01",
    },
    {
      id: 2,
      nome: "52.500 C ",
      imagem: "/static/images/Produtos/ING/52-500-Canivete.png",
      categoria: "Guindaste Linha Canivete",
      slug: "produto-01",
    },
    {
      id: 3,
      nome: "Rádio Controle",
      imagem: "/static/images/Produtos/ING/Radio-Controle-Acessorios.png",
      categoria: "Acessorios",
      slug: "produto-01",
    },
    */
     
      id: 1,
      nome: "EM BREVE",
      imagem: "/static/images/Produtos/ING/EmBreve.png",
      categoria: "Guindaste Linha Trave",
      slug: "",
    },
    {
      id: 2,
      nome: "EM BREVE",
      imagem: "/static/images/Produtos/ING/EmBreve.png",
      categoria: "Guindaste Linha Canivete",
      slug: "",
    },
    {
      id: 3,
      nome: "EM BREVE",
      imagem: "/static/images/Produtos/ING/EmBreve.png",
      categoria: "Acessorios",
      slug: "",
    },
  
  ];

  const categorias = [
    {
      nome: "Guindaste Linha Canivete",
      categoria: "Guindaste Linha Canivete",
      cor: "cardCinza",
      imagem: "/static/images/produtos/ING/Menu-52-500-Canivete.png", // nova imagem
    },
    {
      nome: "Guindaste Linha Trave",
      categoria: "Guindaste Linha Trave",
      cor: "cardAzul",
      imagem: "/static/images/produtos/ING/Menu-80-500-Trave.png", // nova imagem
    },
    {
      nome: "Acessorios",
      categoria: "Acessorios",
      cor: "cardVermelho",
      imagem: "/static/images/produtos/ING/Menu-Radio-Controle-Acessorios.png", // nova imagem
    },
  ];

  const handleFilter = (categoria) => {
    setSelectedCategory(categoria === selectedCategory ? null : categoria);
  };

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>PRODUTOS</span>
          <br />
          <h2>NSA Representações</h2>
        </div>
      </section>

      <section className={styles.background}>
        <img
          className={styles.banquemsomos}
          src="/static/images/banner-interno.jpg"
        />
      </section>

      <section className={styles.background3}>
        <div className={styles.sessoes}>
          {categorias.map((filtro) => {
            const isSelected = selectedCategory === filtro.categoria;

            return (
              <div key={filtro.categoria}>
                <a
                  onClick={() => handleFilter(filtro.categoria)}
  onMouseEnter={() => setHovered(filtro.categoria)}
  onMouseLeave={() => setHovered(null)}
  className={`${styles.card} ${styles[filtro.cor]} ${isSelected ? styles.selected : ""}`}
                >
                  {/* Imagem com animação e condição */}
                  <div className={styles.cardHoverImage}>
                    {(isSelected || hovered === filtro.categoria) && (
                      <img src={filtro.imagem} alt={filtro.nome} />
                    )}
                  </div>
                  <span>{filtro.nome}</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno}>
          <div className={styles.produtos}>
            {produtos
              .filter(
                (produto) =>
                  !selectedCategory || produto.categoria === selectedCategory
              )
              .map((produto) => (
                <Link legacyBehavior href={`/${produto.slug}`} key={produto.id}>
                  <div className={styles.cardProduto}>
                    <img src={produto.imagem} alt={produto.nome} />
                    <span>
                      <p>{produto.categoria}</p>
                      <h3>{produto.nome}</h3>
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className="text-white">Representações estratégicas</h2>
          </div>
          <div className={styles.box2}>
            <a href="/contato" className={styles.botaofooter}>
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
