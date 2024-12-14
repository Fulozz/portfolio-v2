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

   
  return (
    <>
      <button onClick={() => setShowModal(true)}>Abrir Formulário</button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                  <label htmlFor="name" className='text-black'>Nome Completo</label>
                  <input
                    {...register("name", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && <span>Este campo é obrigatório</span>}
                </div>

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
      )}
    </>
  );
}