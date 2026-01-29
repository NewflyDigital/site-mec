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
    {
      id: 1,
      nome: "EM BREVE2",
      imagem: "/static/images/Produtos/canivete/EmBreve.png",
      categoria: "Guindaste Linha Trave",
    url: "LINK",
    },
    {
      id: 2,
      nome: "EM BREVE",
      imagem: "/static/images/Produtos/trave/EmBreve.png",
      categoria: "Guindaste Linha Canivete",
    url: "LINK",
    },
    {
      id: 3,
      nome: "EM BREVE",
      imagem: "/static/images/Produtos/tecnnic/EmBreve.png",
      categoria: "Acessorios",
    url: "LINK",
    },
  ];

  const categorias = [
    {
      nome: "Linha Canivete",
      categoria: "Guindaste Linha Canivete",
      cor: "cardCinza",
      imagem: "/static/images/produtos/categorias-canivete.png",
    },
    {
      nome: "Linha Trave",
      categoria: "Guindaste Linha Trave",
      cor: "cardAzul",
      imagem: "/static/images/produtos/categorias-trave.png",
    },
    {
      nome: "Tecnnic",
      categoria: "Acessorios",
      cor: "cardVermelho",
      imagem: "/static/images/produtos/categorias-tecnnic.png",
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
          <h2>MEC HIDRAULICAS</h2>
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
                  !selectedCategory || produto.categoria === selectedCategory,
              )
              .map((produto) => {
                const Card = (
                  <div className={styles.cardProduto}>
                    <img src={produto.imagem} alt={produto.nome} />
                    <span>
                      <p>{produto.categoria}</p>
                      <h3>{produto.nome}</h3>
                    </span>
                  </div>
                );

                return produto.url ? (
                  <a
                    key={produto.id}
                    href={produto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={produto.id} className={styles.disabled}>
                    {Card}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className="text-white">Soluções em Implementos</h2>
          </div>
          <div className={styles.box2}>
            <a href="/contato" className={styles.botaofooter}>
              Fale Conosco
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
