// src/data/campaigns.ts

export interface Game {
    day: string | { [key: string]: string };
    time: string;
    name: string;
    theme?: string;
    image?: string;
    vacancies: string;
    lang?: string;
    level?: string;
    frequency?: string | { [key: string]: string };
    price?: string;
    payment?: string;
    link?: string;
    premise?: string;
}

// ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA ATUALIZAR SUAS MESAS!
export const rawScheduleData: Game[] = [
  // --- MESAS COM VAGAS ABERTAS ---
  { 
    day: { 'pt-BR': "Domingo", 'en-US': "Sunday" }, 
    time: "08:00 - 12:00", 
    name: "Heroes of Thylea", 
    theme: "Greek Mythology", 
    image: "/images/campaigns/thylea-banner.jpg", 
    vacancies: "3/6",
    lang: "EN-US", 
    level: "1", 
    frequency: { 'pt-BR': "Semanal", 'en-US': "Weekly" }, 
    price: "$20 USD", 
    payment: "StartPlaying", 
    link: "https://startplaying.games/adventure/clw2w13g3000g08l4f1953k2u", 
    premise: "In a land inspired by Greek mythology, the gods have fallen, and new heroes must rise to face the unleashed titans." 
  },

  // --- HORÁRIOS DISPONÍVEIS PARA NOVAS MESAS ---
  { 
    day: { 'pt-BR': "Segunda", 'en-US': "Monday" }, 
    time: "Noite", 
    name: "available",
    vacancies: "0/0"
  },
  { 
    day: { 'pt-BR': "Sábado", 'en-US': "Saturday" }, 
    time: "Manhã/Tarde", 
    name: "available", 
    vacancies: "0/0" 
  },
  
  // --- MESAS LOTADAS ---
  { 
    day: { 'pt-BR': "Terça", 'en-US': "Tuesday" }, 
    time: "08:20 - 12:00", 
    name: "Fios do Tempo", 
    theme: "Busca ao Passado", 
    image: "https://placehold.co/600x400/1e1e24/d8c3a5?text=Fios+do+Tempo", 
    vacancies: "1/1",
    lang: "PT-BR", 
    level: "10", 
    frequency: { 'pt-BR': "Semanal", 'en-US': "Weekly" }, 
    price: "R$ 60", 
    payment: "Pix/Crédito", 
    link: "#", 
    premise: "Uma jornada para consertar os erros do passado, mesmo que o custo seja o próprio futuro." 
  },
  { 
    day: { 'pt-BR': "Terça", 'en-US': "Tuesday" }, 
    time: "19:00 - 22:50", 
    name: "Fonte dos Desejos Turva", 
    theme: "Exploração Selvagem", 
    image: "https://placehold.co/600x400/1e1e24/d8c3a5?text=Fonte+Turva", 
    vacancies: "3/3", 
    lang: "PT-BR", 
    level: "2", 
    frequency: { 'pt-BR': "Semanal", 'en-US': "Weekly" }, 
    price: "R$ 40", 
    payment: "Pix/Crédito", 
    link: "#", 
    premise: "Uma fonte mística promete realizar qualquer desejo, mas as águas que a cercam estão corrompidas por uma força antiga e faminta." 
  },
  { 
    day: { 'pt-BR': "Quarta", 'en-US': "Wednesday" }, 
    time: "21:00 - 00:50", 
    name: "Heróis de Thylea", 
    theme: "Heroísmo Mítico", 
    image: "/images/campaigns/thylea-banner.jpg", 
    vacancies: "6/6", 
    lang: "PT-BR", 
    level: "4", 
    frequency: { 'pt-BR': "Semanal", 'en-US': "Weekly" }, 
    price: "R$ 20", 
    payment: "Pix/Crédito", 
    link: "#", 
    premise: "Em uma terra inspirada na mitologia grega, os deuses caíram e novos heróis devem se erguer para enfrentar os titãs libertos." 
  },
  { 
    day: { 'pt-BR': "Quinta", 'en-US': "Thursday" }, 
    time: "20:00 - 23:00", 
    name: "Esperança no Deserto", 
    theme: "Exploração Selvagem", 
    image: "https://placehold.co/600x400/1e1e24/d8c3a5?text=Deserto", 
    vacancies: "6/6", 
    lang: "PT-BR", 
    level: "10", 
    frequency: { 'pt-BR': "Semanal", 'en-US': "Weekly" }, 
    price: "R$ 20", 
    payment: "Pix/Crédito", 
    link: "#", 
    premise: "Sob um sol escaldante, um oásis é a última esperança de um povo. Mas o que o protege é tão perigoso quanto o próprio deserto." 
  },
  { 
    day: { 'pt-BR': "Sexta", 'en-US': "Friday" }, 
    time: "21:00 - 00:50", 
    name: "Iluminados de Korala", 
    theme: "Investigação e Intriga", 
    image: "/images/campaigns/lhodos-banner.jpg", 
    vacancies: "4/6", // Esta mesa tem vagas, mas vou deixá-la aqui como exemplo. O sistema a moverá para 'recruiting'.
    lang: "PT-BR", 
    level: "5", 
    frequency: { 'pt-BR': "Semanal", 'en-US': "Weekly" }, 
    price: "R$ 20", 
    payment: "Pix/Crédito", 
    link: "#", 
    premise: "Na capital do reino, uma série de assassinatos entre nobres ameaça a paz. Os heróis devem navegar por uma teia de mentiras antes que a cidade mergulhe em guerra civil." 
  },
  { 
    day: { 'pt-BR': "Domingo", 'en-US': "Sunday" }, 
    time: "14:00 - 17:30", 
    name: "Edimburgo: Avernus", 
    theme: "Incursão Planar", 
    image: "https://placehold.co/600x400/1e1e24/d8c3a5?text=Avernus", 
    vacancies: "6/6", 
    lang: "PT-BR", 
    level: "2", 
    frequency: { 'pt-BR': "Quinzenal", 'en-US': "Bi-weekly" }, 
    price: "R$ 20", 
    payment: "Pix/Crédito", 
    link: "#", 
    premise: "Uma cidade inteira foi arrastada para a primeira camada do Inferno. Os aventureiros devem fazer pactos com demônios e navegar pela paisagem infernal para salvá-la." 
  },
];
