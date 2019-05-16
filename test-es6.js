
import { debounce } from "./debounce-es6"

const showName = (name, lastName)=> {
    console.log(`${name} ${lastName}`);
}
let intervalId;
let count = 0;
const executableFunc = debounce(showName, 1000);
intervalId = setInterval(() => {
    executableFunc("Jyotir", "Parmar");
    console.log(++count);
    if (count == 5)
        clearInterval(intervalId);
}, 500);