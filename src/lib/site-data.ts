export const CLINIC = {
  name: "Instituto Ramoniê",
  doctor: "Dra. Rubiana Ramos",
  crm: "CRM 43.164-PR",
  phoneDisplay: "(44) 99168-9022",
  whatsapp: "5544991689022",
  addressLine: "R. Santos Dumont, 3196 — Zona 01",
  city: "Maringá — PR",
  zip: "87013-050",
  hours: "Segunda a sexta · até 18h",
  rating: "5,0",
  reviews: 14,
  mapsQuery:
    "R.+Santos+Dumont+3196+Zona+01+Maring%C3%A1+PR+87013-050",
} as const;

export function wa(message: string) {
  return `https://api.whatsapp.com/send/?phone=${CLINIC.whatsapp}&text=${encodeURIComponent(
    message,
  )}&type=phone_number&app_absent=0`;
}

export const IMG = {
  logo: "https://institutoramonie.com.br/wp-content/uploads/2025/11/LOGO-PRINCIPAL-ROSA-1-1024x447.png",
  symbol:
    "https://institutoramonie.com.br/wp-content/uploads/2025/03/SIMBOLO-AZUL-300x300.webp",
  lifting: "https://institutoramonie.com.br/wp-content/uploads/2025/12/FOTO-1.jpg",
  sculp3r: "https://institutoramonie.com.br/wp-content/uploads/2025/12/FOTO-2-1.jpg",
  fat: "https://institutoramonie.com.br/wp-content/uploads/2025/12/FOTO-3.jpg",
  results: [
    "/images/resultados/resultado-01.jpg",
    "/images/resultados/resultado-02.jpg",
    "/images/resultados/resultado-03.jpg",
    "/images/resultados/resultado-04.jpg",
    "/images/resultados/resultado-05.jpg",
    "/images/resultados/resultado-06.jpg",
    "/images/resultados/resultado-07.jpg",
    "/images/resultados/resultado-08.jpg",
    "/images/resultados/resultado-09.jpg",
    "/images/resultados/resultado-10.jpg",
    "/images/resultados/resultado-11.jpg",
    "/images/resultados/resultado-12.jpg",
    "/images/resultados/resultado-13.jpg",
    "/images/resultados/resultado-14.jpg",
    "/images/resultados/resultado-15.jpg",
    "/images/resultados/resultado-16.jpg",
  ],
} as const;
