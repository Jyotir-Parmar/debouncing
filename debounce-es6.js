/**
 * A higher-order function which takes care the debouncing logic and returns a executable function.
 * @param {*} func Function which needs to be executabled after given wait time.
 * @param {*} waitTime Waiting time.
 */
const debounce = (func, waitTime) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, waitTime);
    }
}
