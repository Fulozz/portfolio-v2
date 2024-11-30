import React from 'react';

export default function DownloadButton({href, filename}) {
 
  return (
    <a href={href} filename={filename}>Currículo</a>
  );
}

