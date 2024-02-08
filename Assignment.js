function calculateMoney(ticketSale) {

    return ticketSale < 0 ? "Invalid Input" : (ticketSale * 120) - (500 + (8 * 50));
}



function checkName(name) {

    if (typeof name !== "string") return "invalid";

    name = name.toLowerCase();

    if (name[name.length - 1] == 'a' || name[name.length - 1] == 'y' || name[name.length - 1] == 'i' || name[name.length - 1] == 'e' || name[name.length - 1] == 'o' || name[name.length - 1] == 'u' || name[name.length - 1] == 'w')
        return "Good Name";

    else return "Bad Name";

}



function deleteInvalids(array) {

    if (!Array.isArray(array)) return "Invalid Array";

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) || typeof array[i] != "number") {
            array.splice(i, 1);
            i--;
        }
    }

    return array;
}



function password(obj) {

    if (obj.name == null || obj.birthYear == null || obj.siteName == null || parseInt(obj.birthYear / 1000) == 0)
        return "invalid";

    return obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
}



function monthlySavings(arr, livingCost) {


    if (!Array.isArray(arr) || typeof livingCost != "number" || isNaN(livingCost))

        return "invalid input";

    var savings = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] >= 3000 ? savings += arr[i] * 0.8 : savings += arr[i];
    }


    return savings - livingCost >= 0 ? savings - livingCost : "earn more";
}
