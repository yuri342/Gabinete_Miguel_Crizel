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
        <div className="flex flex-col flex-nowrap justify-center items-center content-center w-full h-fit">
            <section className="linkbox">
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