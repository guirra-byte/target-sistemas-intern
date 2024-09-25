const beerMonthlyInvoicing = {
  monthlyInvoicing: {
    SP: 67836,
    RJ: 36678,
    MG: 29229,
    ES: 27165,
    OTHERS: 19849,
  },
};

const taggedInvoicing = beerMonthlyInvoicing.monthlyInvoicing;
let totalInvoicing = 0;
let percentages = {};

Object.keys(taggedInvoicing).forEach((tag) => {
  console.log(taggedInvoicing[tag]);
  totalInvoicing += taggedInvoicing[tag];
});

for (const tag of Object.keys(taggedInvoicing)) {
  if (!percentages[tag]) {
    const x = taggedInvoicing[tag] * 100;
    const percentage = x / totalInvoicing;
    percentages[tag] = Math.round(percentage);
  }
}

console.log(percentages);
