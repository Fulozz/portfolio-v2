"use client"

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import APILead from "@/utils/API.lead"

export default function PopupForm() {


  const [showModal, setShowModal] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        APILead().post("/mailer", {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message
        })
        setShowModal(false);
    }
  


    const formFields = [
      {
        id: "name",
        tag: "input",
        inputType: "text",
        required: "true",
        label: "Nome Completo",
        placeholder: "Exemplo da Silva",
        errorMessage: "Nome é obrigatório",
        className: ""
      },
      {
        id: "phone",
        tag: "input",
        inputType: "text",
        required: "true",
        label: "Telefone",
        placeholder: "(00) 00000-0000",
        errorMessage: "Telefone é obrigatório",
        className: ""
      },
      {
        id: "email",
        tag: "input",
        inputType: "email",
        required: "true",
        label: "E-mail",
        placeholder: "exemplo@compania.com.br",
        errorMessage: "E-mail é obrigatório",
        className: ""
      },
      {
        id: "company",
        tag: "input",
        inputType: "text",
        required: "true",
        label: "Empresa",
        placeholder: "exemplo ltda",
        errorMessage: "Empresa é obrigatório",
        className: ""
      },
      {
        id: "message",
        tag: "textarea",
        inputType: "area",
        required: "true",
        label: "Mensagem",
        placeholder: "Descreva o que precisa",
        errorMessage: "Mensagem é obrigatório",
        className: "h-20"
      }
    ]

  return (
    <>
      {showModal === true && (
        <div
          className="fixed inset-0 z-40 bg-black/50" // Adjust opacity as needed
        />
      )}
     
      <button onClick={() => setShowModal(true)} className="bg-[#D9C634] text-black text-[1.5rem] font-semibold rounded-md w-[300px] hover:w-[350px]  hover:transition-all hover:ease-in-out hover:delay-150 h-12 my-3  justify-center text-center flex items-center">Solicitar serviço</button>
      {showModal && (
      <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md md:w-[500px] sm:w-screen">
            <h1 className=" flex text-black text-[2.7rem] text-center mb-2">FICHA DE CONTATO</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              
                  {
                    formFields.map((field, index) => {
                      return (
                        <div className="mb-4" key={index}>
                          <label htmlFor="name" className="block text-gray-800 text-sm font-bold mb-2">{field.label}</label>
                          <field.tag
                            {...register(`${field.id}`, { required: field.required })}
                            type={field.inputType}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${field.className}`}	
                            placeholder={field.placeholder}
                          />
                          {errors.name && <span className="dark:text-black">* {field.errorMessage}</span>}
                        </div>
                      )
                    })
                  }
                
              {/* Outros campos do formulário... */}

              <div className="flex justify-between ml-2">
                <button onClick={() => setShowModal(false)} className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded">Sair</button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        </>
      )}
    </>
  );
}