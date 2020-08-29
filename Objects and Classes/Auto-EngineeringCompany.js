function solve(input) {
    const carBrands = {};

    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        let brands = brand;
        if (carBrands.hasOwnProperty(brands) === false) {
            carBrands[brands] = []
        }
        carBrands[brands].push([model, produced]);
    }

    let eachCar = Object.entries(carBrands)

    for (let i = 0; i < eachCar.length; i++) {
        let brand = eachCar[i][0]
        let cars = eachCar[i][1]
        let carsArr = [].concat.apply([], cars)
        console.log(brand);
        for (let j = 0; j < cars.length; j++) {
            let model = cars[j][0]
            let produced = cars[j][1]
            
            console.log(`###${model} -> ${produced}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])