// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// console.log(countries[0].name.length);
// 1 - Calcule a quantidade total da população de todos os países.
const expectedResult1 = 120797034;
const getPopulation = () => {
  const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0 );
  return totalPopulation;
};
// console.log(getPopulation());

// 2 - Calcule a área total de todos os países.
const expectedResult2 = 4311757;
const getTotalArea = () => {
const totalAreaContries = countries.reduce((acc, currContry) => acc + currContry.area, 0);
return totalAreaContries;
};
// console.log(getTotalArea());
// 3 - Encontre o país com o maior nome.

const expectedResult3 = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}
const longestName = () => {
  const longestNameCountry = countries.reduce((accCountry, currCountry) => accCountry.name.length > currCountry.name.length ? accCountry : currCountry);
  return longestNameCountry;
}

// console.log(longestName());

// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult4 = 20;
const countA = () => {
const arrayLetras = names.join('').toLowerCase().split('');
return arrayLetras.reduce((acc, curr) => { return curr === 'a' ? acc += 1: acc;}, 0);

}
// console.log(countA());

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = (studantsList, gradesList) => {
 return studantsList.map((studant, i) => ({name: studant,
  average: (gradesList[i].reduce((acc, curr) => acc + curr, 0) / gradesList[i].length)}));
};

console.log(studentAverage(students, grades));