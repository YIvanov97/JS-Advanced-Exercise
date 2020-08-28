function solve(input) {
    const rows = [];
    //обхождане на входа
    for (const line of input) {
        // JSON.parse на елементите
        const person = JSON.parse(line);
        // съставяме низ, съдържащ HTML ред със стойностите от обекта
        rows.push(`\t<tr>\n\t\t<td>${person.name}</td>\n\t\t<td>${person.position}</td>\n\t\t<td>${person.salary}</td>\n\t</tr>\t`)
    }
    
    // отпечатваме началото на таблицата
    console.log('<table>');
    // отпечатваме резултата
    console.log(rows.join('\n'));
    // отпечатваме края на таблицата
    console.log('</table>');
}