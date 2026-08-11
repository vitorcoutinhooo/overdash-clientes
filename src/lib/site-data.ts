export const CLINIC = {
  name: "Instituto Ramoniê",
  doctor: "Dra. Rubiana Ramos",
  crm: "CRM 43.164-PR",
  phoneDisplay: "(44) 99168-9022",
  whatsapp: "5544991689022",
  addressLine: "R. Santos Dumont, 3196 — Zona 01",
  addressComplement: "Centro Empresarial José Barão",
  city: "Maringá — PR",
  zip: "87013-050",
  hours: "Segunda a sexta · até 18h",
  rating: "5,0",
  reviews: 14,
  mapsQuery:
    "Instituto+Ramoni%C3%AA+R.+Santos+Dumont,+3196+-+Zona+01,+Maring%C3%A1+-+PR,+87013-050",
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
    "https://institutoramonie.com.br/wp-content/uploads/2025/12/Sem-Titulo-2_0000_13.jpg",
    "https://institutoramonie.com.br/wp-content/uploads/2025/12/Sem-Titulo-2_0007_6.jpg",
    "https://institutoramonie.com.br/wp-content/uploads/2025/12/Sem-Titulo-2_0010_3.jpg",
    "https://institutoramonie.com.br/wp-content/uploads/2025/12/Sem-Titulo-2_0012_Camada-1.jpg",
  ],
} as const;
