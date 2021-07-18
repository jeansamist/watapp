/**
 * Créer une clé aléatoirement
 * @param { Number } lenght Nombres de caractères de la clé
 * @returns { String }
 */
export const createKey = (lenght = 10) => {
  let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789a"
  let key = "";
  for (let i = 0; i < lenght; i++) {
    const element = symbols[Math.round(Math.random() * (symbols.length - 1))];
    key = key + element
  }
  console.log(key);
  return key
}
