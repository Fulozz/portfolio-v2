import React from 'react';

export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/seu-curriculo.pdf'; // Substitua por o caminho do seu PDF
    link.download = 'meu-curriculo.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Baixar Currículo</button>
  );
}

