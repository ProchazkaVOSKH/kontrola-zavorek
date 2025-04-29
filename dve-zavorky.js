const vyraz1 = "[(x+3)/(x-2)+1)/2";
const vyraz2 = "[(x+3)]+1)/2";

function kontrolaDvouTypuZavorek(vyraz) {
    let stack = [];
    for (let znak of vyraz) {
        if (znak === "(" || znak === "[") {
            stack.push(znak);
        }
        else if (znak === ")" || znak === "]") {
            if (stack.length === 0) return false; // chyba - není v zásobníku otevírací závorka, závorka zavírací je navíc
            let posledni = stack.pop();
            if ((znak === ")" && posledni !== "(") || (znak === "]" && posledni !== "[")) {
                return false;   // chyba - závorky se neshodují
            }
        }
    }   
    return stack.length === 0;  // pokud je zásobník prázdný, tak je to OK, ale pokud v něm něco zůstalo, tak to znamená, že chybí zavírací závorka
}

console.log(kontrolaDvouTypuZavorek(vyraz1));
console.log(kontrolaDvouTypuZavorek(vyraz2));