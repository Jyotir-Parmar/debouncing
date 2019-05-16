/**
 * A higher-order function which takes care the debouncing logic and returns a executable function.
 * @param {*} func Function which needs to be executabled after given wait time.
 * @param {*} waitTime Waiting time.
 */
const debounce = (func, waitTime) => {
    // setTimeout api id
    let timerId;
    return (...args) => {
        // If gets invoked within given wait time period then clear the setTimeout event.
        clearTimeout(timerId);

        // Register setTimeout for given wait time.
        timerId = setTimeout(() => {
            func(...args);
        }, waitTime);
    }
}

export default debounce;
