export default function generateKey(name) {
    return `${name || Math.random() * 10000}_${new Date().getTime()}`
}