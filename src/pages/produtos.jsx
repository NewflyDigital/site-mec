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
      nome: "TKA 8.700",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/8.700/",
    },
    {
      id: 2,
      nome: "TKA 10.700",
      imagem: "/static/images/Produtos/trave/tka-10700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/10.700/",
    },
    {
      id: 3,
      nome: "TKA 12.700",
      imagem: "/static/images/Produtos/trave/tka-12700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/12.700/",
    },
    {
      id: 4,
      nome: "TKA 16.900",
      imagem: "/static/images/Produtos/trave/tka-16900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/16.900/",
    },
    {
      id: 5,
      nome: "TKA 20.700",
      imagem: "/static/images/Produtos/trave/tka-20700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/20.700/",
    },
    {
      id: 6,
      nome: "TKA 30.700",
      imagem: "/static/images/Produtos/trave/tka-30700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/30.700/",
    },
    {
      id: 7,
      nome: "TKA 40.900",
      imagem: "/static/images/Produtos/trave/tka-40900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/40.900/",
    },
    {
      id: 8,
      nome: "TKA 41.900",
      imagem: "/static/images/Produtos/trave/tka-41900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/41.900/",
    },
    {
      id: 9,
      nome: "TKA 45.700",
      imagem: "/static/images/Produtos/trave/tka-45700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/45.700/",
    },
    {
      id: 10,
      nome: "TKA 48.700",
      imagem: "/static/images/Produtos/trave/tka-48700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/48.700/",
    },
    {
      id: 11,
      nome: "TKA 50.900",
      imagem: "/static/images/Produtos/trave/tka-50900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/50.900/",
    },
    {
      id: 12,
      nome: "TKA 51.900",
      imagem: "/static/images/Produtos/trave/tka-51900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/51.900/",
    },
    {
      id: 13,
      nome: "TKA 55.900",
      imagem: "/static/images/Produtos/trave/tka-55900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/55.900/",
    },
    {
      id: 14,
      nome: "TKA 72.900",
      imagem: "/static/images/Produtos/trave/tka-72900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/72.900/",
    },
    {
      id: 15,
      nome: "TKA 80.700",
      imagem: "/static/images/Produtos/trave/tka-80700.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/80.700/",
    },
    {
      id: 16  ,
      nome: "TKA 90.900",
      imagem: "/static/images/Produtos/trave/tka-90900.png",
      categoria: "Guindaste Linha Trave",
    url: "https://tkacranes.com/produtos/90.900/",
    },


    {
      id: 17,
      nome: "TKA 6.700c",
      imagem: "/static/images/Produtos/canivete/tka-6700.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/6.700c",
    },
    {
      id: 18,
      nome: "TKA 9.900c",
      imagem: "/static/images/Produtos/canivete/tka-9900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/9.900c",
    },
    {
      id: 19,
      nome: "TKA 11.900c",
      imagem: "/static/images/Produtos/canivete/tka-11900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/11.900c",
    },
    {
      id: 20,
      nome: "TKA 15.900c",
      imagem: "/static/images/Produtos/canivete/tka-15900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/15.900c",
    },
    {
      id: 21,
      nome: "TKA 17.900c",
      imagem: "/static/images/Produtos/canivete/tka-17900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/17.900c",
    },
    {
      id: 22,
      nome: "TKA 18.900c",
      imagem: "/static/images/Produtos/canivete/tka-18900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/18.900c",
    },
    {
      id: 23,
      nome: "TKA 23.700c",
      imagem: "/static/images/Produtos/canivete/tka-23700.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/23700c",
    },
    {
      id: 24,
      nome: "TKA 30.900c",
      imagem: "/static/images/Produtos/canivete/tka-30900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/30.900c",
    },
    {
      id: 25,
      nome: "TKA 38.900c",
      imagem: "/static/images/Produtos/canivete/tka-38900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/38.900c",
    },
    {
      id: 26,
      nome: "TKA 50.700c",
      imagem: "/static/images/Produtos/canivete/tka-50700.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/50700c",
    },
    {
      id: 27,
      nome: "TKA 66.700c",
      imagem: "/static/images/Produtos/canivete/tka-66700.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/66700c",
    },
    {
      id: 28,
      nome: "TKA 100.900c",
      imagem: "/static/images/Produtos/canivete/tka-100900.png",
      categoria: "Guindaste Linha Canivete",
    url: "https://tkacranes.com/produtos/100900c",
    },


    {
      id: 29,
      nome: "Controle Remoto para Guindaste - 4ª Geração",
      imagem: "/static/images/Produtos/tecnnic/Controle-remoto-guindaste.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/controle-remoto-para-guindaste/",
    },
    {
      id: 30,
      nome: "Controile Remoto para Guindaste 4ª Geração - Integrado",
      imagem: "/static/images/Produtos/tecnnic/Controle-remoto-guindaste-integrado.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/controle-remoto-integrado/",
    },
    {
      id: 31,
      nome: "Kit Adequação NR12 - 4ª Geração",
      imagem: "/static/images/Produtos/tecnnic/kit-adequacao-nr12.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/kit-adequacao-n12-tecnnic/",
    },
    {
      id: 32,
      nome: "Inclinometro com Limitador de Carga",
      imagem: "/static/images/Produtos/tecnnic/inclinometro.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/inclinometro-com-limitador-de-carga/",
    },
    {
      id: 33,
      nome: "Nivelador de Cesto",
      imagem: "/static/images/Produtos/tecnnic/nivelador.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/nivelador-de-cesto/",
    },
    {
      id: 34,
      nome: "Sistema Anticolisão",
      imagem: "/static/images/Produtos/tecnnic/sistema-anticolisao.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/sistema-anticolisao/",
    },
    {
      id: 35,
      nome: "Limitador de Carga para Fly Jib",
      imagem: "/static/images/Produtos/tecnnic/limitador-de-carga.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/limitador-de-carga-para-fly-jib/",
    },
    {
      id: 36,
      nome: "Controlador Integrado de Segurança Veicular",
      imagem: "/static/images/Produtos/tecnnic/controlador-integrado.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/controlador-integrado-de-seguranca-veicular/",
    },
    {
      id: 37,
      nome: "Módulo Inclinação",
      imagem: "/static/images/Produtos/tecnnic/modolo-inclinacao.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/modulo-inclinacao/",
    },
    {
      id: 38,
      nome: "Módulo Monitor de Apoio das Patolas",
      imagem: "/static/images/Produtos/tecnnic/modulo-monitor.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/modulo-monitor-de-apoio-das-patolas/",
    },
    {
      id: 39,
      nome: "Módulo Monitor de Pressão das Patolas",
      imagem: "/static/images/Produtos/tecnnic/Monitor-de-pressao-das-patolas.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/modulo-monitor-de-pressao-das-patolas/",
    },
    {
      id: 40,
      nome: "Módulo Anemômetro",
      imagem: "/static/images/Produtos/tecnnic/Anemometro.png",
      categoria: "Acessorios",
    url: "https://tecnnic.com.br/produto/modulo-anemometro/",
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
