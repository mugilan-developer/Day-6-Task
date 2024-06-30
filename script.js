const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // 1. Get all the countries from Asia continent/region using the filter method
        const asianCountries = data.filter(country => country.region === 'Asia');
        console.log('Asian Countries:', asianCountries);

        // 2. Get all the countries with a population of less than 2 lakhs using the filter method
        const smallPopulationCountries = data.filter(country => country.population < 200000);
        console.log('Countries with population < 200000:', smallPopulationCountries);

        // 3. Print the following details: name, capital, flag, using forEach method
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
        });

        // 4. Print the total population of countries using the reduce method
        const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
        console.log('Total Population:', totalPopulation);

        // 5. Print the country that uses US dollars as currency
        const usdCountries = data.filter(country => {
            return country.currencies && country.currencies.USD;
        });
        console.log('Countries using USD:', usdCountries);
    } else {
        console.error('Failed to fetch data:', xhr.statusText);
    }
};
xhr.onerror = function () {
    console.error('Network error');
};
xhr.send();
