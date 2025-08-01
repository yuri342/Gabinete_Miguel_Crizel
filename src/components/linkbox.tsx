import "../styles/linkboxStyle.css";
import linkinfos from "../assets/json/linkinfos.json";


export interface linkinfointerface {
    summary: string;
    link: string;
    title: string;
    description?: string;
    icon?: string;
}


function linkbox() {
    return (
        <div className="glassMorph1 opacity h-[70dvh] w-[90dvw] z-[1] pt-2 md:pt-1 md:pt-1 flex flex-col flex-nowrap justify-center items-center content-center sm:w-[75dvw] md:w-[50dvw] lg:w-[30dvw]">
            <header className="w-full h-fit"><h1 className="lexend-FontAppend400 text-center text-white text-2xl md:text-lg lg:text-xl xl:text-2xl">Serviços</h1></header>
            <div className="shineclass"/>
            <section className="w-full h-full overflow-auto flex flex-col flex-nowrap justify-center items-center content-center gap-3">
            {Object.values(linkinfos).flat().map((linkinfo: linkinfointerface) => (
                    <a href={linkinfo.link} className={`linkbox w-[75%] h-[5.25rem] mb-1 md:w-[70%] md:h-[fit] lg:w-[80%] lg:h-[8rem]`}>
                        <section className="w-[100%] h-full">
                            <h1 className="lexend-FontAppend400 w-full font-1xl md:text-base lg:text-base xl:text-2xl">{linkinfo.title}</h1>
                            <h4 className="hidden md:block lexend-FontAppend200 w-full font-1xl text-xs md:text-xs lg:text-xs xl:text-base text-justify">{linkinfo.description}</h4>
                            <h4 className="block md:hidden lg:hidden lexend-FontAppend200 w-full font-1xl text-xs md:text-xs lg:text-lg xl:text-2xl text-justify">{linkinfo.summary}</h4>
                        </section>
                    </a>
            ))}
            </section>
        </div>
        );
    };
 

export default linkbox;