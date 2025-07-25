import type { ReactNode } from "react";
import "../styles/linkboxStyle.css";

// function jsonRead(json: string) {
//     // try {
//     // } catch (error) {
//     // }
    
// } future use for reading JSON data


function linkbox({link, title, description}: {
    link: string, 
    title: string, 
    description: string
    icon?: ReactNode}) {
    return (
        <div className="glassMorph1 h-[70dvh] w-[90dvw] flex flex-col flex-nowrap justify-center items-center content-center sm:w-[75dvw] md:w-[50dvw]">
            <section className="linkbox lexend-FontAppend400">
                <section>
                    {/* {icon} */}
                    <a href={link}>{title}</a>
                    <p>{description}</p>
                </section>
            </section>
        </div>
        );
    };


export default linkbox;