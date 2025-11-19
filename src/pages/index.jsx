import * as React from "react";
import { useState } from "react";
import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import GoogleMap from "../components/map";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Home() {
  React.useEffect(() => {
    window.document.body.style.backgroundColor = "#01030e";
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <a id="banner"></a>
      <Banner />
      
      <RodapeNewFly />
      <Whats />
    </>
  );
}
