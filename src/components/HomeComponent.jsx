import React from "react";
import PopupForm from "./PopupForm";

export default function HomeComponent() {
  return (
    <div className="flex flex-col sm:mx-[40px] md:mx-[200px]  md:w-[35vw] sm:justify-center items-center ">
      <h1 className="pt-[200px] lg:text-[2.2rem] md:text-[2.2rem] text-[1.8rem] text-medium  sm:justify-center text-center md:text-left sm:items-center text-black dark:text-white  ">
        {" "}
        Ajudando empresas a construirem <br />
        <span className="text-[#D9C634]"> produtos digitais </span> de forma
        moderna e de alta qualidade
      </h1>
      <p className="text-gray-500 text-medium text-[1.5rem] text-center md:text-left sm:items-center">
        Design e desenvolvimento profissional que vão destacar a sua loja no
        mercado.
      </p>
      {/* FORM PARA ENCAMINHAR PARA O MEU EMAIL informações necessarias: e-mail da pessoa, nome, número de telefone e informações sobre a empresa */}
      <PopupForm />
    </div>
  );
}
