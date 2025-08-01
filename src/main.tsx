import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/indexStyle.css";
import Header from "./components/header";
import Linkbox from "./components/linkbox";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="backgroundgradient">
      <section className="w-screen">
        <img
          src="/imgs/CrizelBG.png"
          className="
                bg-img
                absolute bottom-0
                left-1/2 -translate-x-1/2
                sm:left-auto sm:right-0 sm:translate-x-0
                w-80 sm:w-[80vw] md:w-[70vw] lg:w-[60dvw]
                max-w-none h-auto
                z-[2] pointer-events-none select-none
              "
          alt=""
        />
        <img
          src="/imgs/AssinaturaMiguelCrizel.png"
          alt=""
          className="z-[2] sm:z-[1] absolute bottom-0 right-0 origin-bottom-left h-[auto] w-30 pointer-events-none select-none"
        />
      </section>
      <section className="flex flex-col flex-nowrap justify-start items-center content-normal w-full h-fit">
        <Header />
      </section>
      <section className="flex flex-row flex-nowrap justify-around items-center content-normal w-full h-[75dvh] sm:h-[80dvh] lg:h-[90dvh]">
        <Linkbox />
          <div className="hidden h-full w-[30vw] lg:flex lg:z-[2] mask flex flex-col justify-end items-center">
            <div className="w-fit h-fit glassMorph1 p-5">
                <h4 className="text-white text-justify lexend-FontAppend200 text-2xl sm:text-xl md:text-lg ">
                  Esta página foi criada para facilitar o contato com o Gabinete de
                  Miguel Crizel. Nela, você encontra links úteis como redes sociais,
                  formulários de atendimento, contato direto e outras informações
                  importantes — tudo em um só lugar, de forma rápida e acessível
                  pelo celular ou computador.
                </h4>
            </div>
          </div>
      </section>
      <footer className="flex flex-col justify-center items-center content-center w-full absolute bg-transparent bottom-0 z-[2] bg-gray-200 p-3">
        <a className="text-xs text-gray-500 z-[2]" href="https://www.linkedin.com/in/yuri-bertola/">
          Desenvolvido por Yuri Bertola de Souza
        </a>
        <p className="text-xs text-gray-500">© 2030 </p>
       <p className="text-xs text-gray-500 z-[2]">1.0.w.ud</p>
      </footer>
    </div>
  </StrictMode>
);
