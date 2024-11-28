"use client"
import React from "react";
import { useForm } from "react-hook-form";


export default function page() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center text-left px-10 my-10"
    >
        <span className="text-2xl font-bold">Entre em contato</span>
        <label htmlFor="name" className="text-[1.4rem] pt-8">
        Nome:
        </label>
        <input type="text" name="name" id="name" required {...register("name")} className="p-3"/>

        <label htmlFor="phone" className="text-[1.4rem] pt-8">
        Telefone:
        </label>
        <input type="tel" name="phone" id="phone" required className="p-3" />
        <span className="text-md">Não esqueça do DDD</span>

        <label htmlFor="company" className="text-[1.4rem] pt-8">Quais destar opções você melhor se identifica? </label>
        <select className="p-3">
            <option value="demanda">Trabalho em uma empresa que tem uma demanda</option>
            <option value="empresa">Sou um empresário que precisa de um site</option>
            <option value="freelancer">Estou fazendo um planejamento e buscando orçamentos</option>
        </select>

        <span htmlFor="site ou instaram" className="text-[1.4rem] pt-8">
        Qual é  o site ou rede social da empresa?
        </span>
        <input type="url" name="url" id="url" required pattern="https://.*" placeholder="https://example.com" className="p-3"  />
        <span className="text-md">Compartilhe aqui as redes sociais do seu negocio</span>

      <fieldset id="checkbox">
            <legend className="text-[1.4rem] pt-8"> Quais itens você acredita que são necessários no seu projeto?</legend>
            <div className="pl-3">
                <input type="checkbox" name="frontend" id="frontend" />
                <label htmlFor="frontend" className="pl-2">Front-end</label>
            </div>
            <div className="pl-3">
                <input type="checkbox" name="uiux" id="uiux" />
                <label htmlFor="uiux" className="pl-2">UI/UX Desing</label>
            </div>
            <div className="pl-3">
                <input type="checkbox" name="social" id="social" />
                <label htmlFor="Social-media" className="pl-2">Social Media</label>
            </div>
            <div className="pl-3">
                <input type="checkbox" name="outros" id="outros" />
                <label htmlFor="outros" className="pl-2">Outros</label>
            </div>
      </fieldset>
    
      <label htmlFor="message" className="text-[1.4rem] pt-8">
        Como posso te ajudar?:
      </label>
      <textarea name="message" id="message" required ></textarea>

      <button type="submit">Send</button>
    </form>
  );
}
