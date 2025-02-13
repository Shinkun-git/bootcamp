export function filterUnique(array){
    const uniqueSet = new Set(array);
    return [...uniqueSet];
}