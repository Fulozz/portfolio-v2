import React from "react";

export default function HomeComponent() {
  return (
    <div className="flex flex-col sm:mx-[40px] md:mx-[200px]  md:w-[35vw] sm:justify-center items-center ">
      <h1 className="pt-4 lg:text-[3.2rem] md:text-[2.2rem] text-[2.2rem] text-medium  sm:justify-center text-center md:text-left sm:items-center text-black dark:text-white  ">
        {" "}
        Ajudando empresas a construirem <br />
        <span className="text-[#986dff]"> produtos digitais </span> de forma
        moderna e de alta qualidade
      </h1>
      <p className="text-gray-500 text-medium text-[2rem] text-center md:text-left sm:items-center">
        Design e desenvolvimento profissional que vão destacar a sua loja no
        mercado.
      </p>
      <button className="bg-[#986dff] text-white text-[1.5rem] font-semibold rounded-sm w-[300px] h-12 my-3">
        Solicitar serviço
      </button>
    </div>
  );
}
