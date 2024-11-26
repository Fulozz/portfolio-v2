import React from 'react';

export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "./assets/Thiago Silva Andrade - Desenvolvimento de Software.pdf"; // Substitua por o caminho do seu PDF
    link.download = 'Thiago Silva Andrade - Desenvolvimento de Software.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Currículo</button>
  );
}

