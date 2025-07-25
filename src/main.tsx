import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/indexStyle.css";
import Header from "./components/header";
import Linkbox from "./components/linkbox";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="background w-full min-h-dvh flex flex-col ">
      <section className="flex flex-col flex-nowrap justify-start items-center content-normal w-full h-fit">
        <Header/>
      </section>
      <section className="flex flex-col flex-nowrap justify-center items-center content-normal w-full h-full">
        <Linkbox 
          link="teste"
          title="Teste"
          description="Descrição do teste"/>
      </section>  
    </div>
  </StrictMode>
);  
