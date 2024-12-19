"use client"

import { cn } from '@/utils/cn';
import React, { useState } from 'react';

export default function Experience() {
  const [activeExperienceId, setActiveExperienceId] = useState(1);

  const experienceItems = [
    {
      id: 1,
      name: 'Gs Contact Center',
      description: 'Estágio de infraestrutura e redes, onde tive a oportunidade de trabalhar com servidores Windows e Linux, além de realizar manutenção de computadores e redes.',
      isActive: activeExperienceId === 1,
    },
    {
      id: 2,
      name: 'Naturalmente bom',
      description: 'Desenvolvi para a empresa Naturalmente Bom um sistema de gerenciamento de vendas e estoque, com integração com o sistema de vendas online.',
      isActive: activeExperienceId === 2,
    },
  ];

  const handleExperienceClick = (experienceId) => {
    setActiveExperienceId(experienceId);
  };

  return (
    <div className="bg-[#072E33] text-white h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-[1.7rem] pt-5">Experiência</h2>
      <div className="flex mt-[32px]">
        <div className="flex flex-col bg-black text-white text-left w-[1/3] h-full">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "px-[82px] py-[34px] cursor-pointer",
                item.isActive ? "border-l-4 border-[#FFD700]" : "border-none"
              )}
              onClick={() => handleExperienceClick(item.id)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="w-[600px] h-[180px] p-4 text-[1.5rem]">
          {experienceItems.find((item) => item.id === activeExperienceId)?.description}
        </div>
      </div>
    </div>
  );
}