"use client"

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function PopupForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    description: '',
  });

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // CRIAR ENVIO PARA O MEU E-MAIL COM O TITULO DE NOME DA PESSOA E EMPRESA
        console.log(data);
        setShowModal(false);
    }
  
    const formFields = [
      {
        id: "name",
        inputType: "text",
        required: "true",
        label: "Nome Completo",
        placeholder: "Descreva o que precisa",
        errorMessage: "Nome é obrigatório",
        className: ""
      },
      {
        id: "phone",
        inputType: "text",
        required: "true",
        label: "Telefone",

        errorMessage: "Telefone é obrigatório",
        className: ""
      },
      {
        id: "email",
        inputType: "email",
        required: "true",
        label: "E-mail",

        errorMessage: "E-mail é obrigatório",
        className: ""
      },
      {
        id: "company",
        inputType: "text",
        required: "true",
        label: "Empresa",

        errorMessage: "Empresa é obrigatório",
        className: ""
      },
      {
        id: "message",
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
     
      <button onClick={() => setShowModal(true)}>Abrir Formulário</button>
      {showModal && (
      <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              
                  {
                    formFields.map((field, index) => {
                      return (
                        <div className="mb-4" key={index}>
                          <label htmlFor="name" className="block text-gray-800 text-sm font-bold mb-2">{field.label}</label>
                          <input
                            {...register(`${field.id}`, { required: field.required })}
                            type={field.inputType}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
                            placeholder={field.placeholder}
                          />
                          {errors.name && <span className="dark:text-black">* {field.errorMessage}</span>}
                        </div>
                      )
                    })
                  }
                  <textarea id="w3review" name="w3review" rows="4" cols="50">
                            
                            </textarea>
              {/* Outros campos do formulário... */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        </>
      )}
    </>
  );
}