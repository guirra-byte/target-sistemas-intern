const monthlyInvoicing = [
  {
    month: "Setembro",
    year: 2024,
    days: 30,
    dailyInvoicing: [
      2200, 3500, 0, 5120, 4800, 6000, 3200, 2300, 0, 1900, 4000, 5100, 7000,
      4300, 3800, 0, 2900, 5800, 2400, 0, 6100, 4600, 5200, 0, 3400, 2900, 5700,
      6300, 0, 4800,
    ],
  },
];

let lowerRevenue = 0;

let higherRevenue = 0;
let higherRevenueDay = 0;

let biggerThanAverage = [];
let totalInvoicing = 0;
let average = 0;

for (const month of monthlyInvoicing) {
  month.dailyInvoicing.forEach((invoice) => {
    totalInvoicing += Math.round(invoice);
  });

  average = Math.round(totalInvoicing / month.days);

  let day = 0;
  while (day < month.days) {
    const dailyInvoice = month.dailyInvoicing[day];
    totalInvoicing += dailyInvoice;
    if (dailyInvoice === 0.0) {
      if (month.dailyInvoicing[day]) {
        day++;
      }
    }

    if (dailyInvoice !== 0.0 && dailyInvoice < lowerRevenue) {
      lowerRevenue = dailyInvoice;
      day++;
    }

    if (dailyInvoice > average) {
      biggerThanAverage.push(day);
    }

    if (dailyInvoice > higherRevenue) {
      higherRevenue = dailyInvoice;
      higherRevenueDay = day;
      if (month.dailyInvoicing[day]) {
        day++;
      }
    }

    day++;
  }
}

console.log(`Aqui está o faturamento total do mês: ${totalInvoicing}R$`);
console.log(`Aqui está a média diária de faturamento: ${average}R$`);
console.log(`O número de dias que tiveram um faturamento maior que a média estipulada: ${biggerThanAverage}`);
console.log(`Aqui está o dia onde houver maior faturamento ${higherRevenueDay} e o valor do faturamento: ${higherRevenue}R$`);
