/**
 * Convert miliseconds time into string
 * @param {number} miliseconds Amount of miliseconds past
 * @returns {string}
 */
export default function timefmt(miliseconds) {
    const mili = (miliseconds % 1000).toString().padStart(3, "0");
    const seconds = Math.floor(miliseconds / 1000);
    const sec = (seconds % 60).toString().padStart(2, "0");
    const minutes = Math.floor(seconds / 60);
    const min = (minutes % 60).toString().padStart(2, "0");
    const hours = Math.floor(minutes / 60);
    return `${hours}:${min}:${sec}:${mili}`;
}
