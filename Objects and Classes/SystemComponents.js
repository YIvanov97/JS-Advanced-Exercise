function solve(input) {
    const catalog = {}
    // обхождаме входа
    for (const line of input) {
        // отделяме име на система, компонент, подкомпонент
        const [system, component, sub] = line.split(' | ');

        // попълваме каталога
        if (catalog.hasOwnProperty(system) === false) {
            catalog[system] = {};
        }

        if (catalog[system].hasOwnProperty(component) === false) {
            catalog[system][component] = [];
        }

        catalog[system][component].push(sub);
    }

    // сортираме
    Object.entries(catalog).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
    }).forEach(([system, component]) => {
        // печатаме резултата
        console.log(system);
        Object.entries(component).sort((a, b) => b[1].length - a[1].length).forEach(([name, sub]) => {
            console.log("|||" + name);
            sub.forEach(c => {
                console.log("||||||" + c);
            })
        })
    })
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])