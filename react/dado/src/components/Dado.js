import React from "react";

export const Dado = ({ valor }) => {
  const dados = [
    "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado1.png?v=1709855087643",
    "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado2.png?v=1709855088164",
    "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado3.png?v=1709855088659",
    "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado4.png?v=1709855089180",
    "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado5.png?v=1709855089711",
    "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado6.png?v=1709855090308",
  ];

  return (
    <div>
      <img src={dados[valor - 1]} alt={`Dado ${valor}`} />
      
    </div>
  );
};