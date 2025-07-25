import "../styles/headerStyle.css";

function header() {
  return (
    <header className="glassMorph grid grid-cols-3 items-center w-4/5 h-[8vh] animate-enter overflow-hidden">
      <div className="shineclass"/>
      <img src="/imgs/brazil.png" alt="Bandeira do Brasil" className="pl-5 w-15 sm:w-13 md:w-16 lg:w-18 xl:w-20" />
        <section className="flex flex-col flex-nowrap justify-center items-center content-center h-full">
            <h1 className="lexend-FontAppend400 text-white m-0 responsive-title text-center">Gabinete virtual</h1>
            <h4 className="lexend-FontAppend200 text-white responsive-text hidden pb-3 sm:block sm:pb-0">Miguel Crizel</h4>
       </section>
       <div className="block sm:hidden">
        <h4 className="lexend-FontAppend400 text-white responsive-text text-center pr-2">Miguel Crizel</h4>
       </div>
    </header>
  );
}

export default header;  
