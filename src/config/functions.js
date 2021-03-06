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

/**
 * 
 * @param { String } modalId Id du modal dans le DOM
 * @returns { Boolean }
 */
export const openModal = (modalId) => {
  let modal = document.querySelector("#" + modalId);
  let view = document.querySelector(".view");
  let container = document.querySelector(".container-fluid");
  if (view && container) {
    view.style.overflowY = "hidden";
    container.classList.add('blur')
  }
  console.log(modal);
  if (!modal.classList.contains("active")) {
    modal.classList.add('active')
    return true
  } else {
    return false
  }
}

/**
 * 
 * @param { String } modalId Id du modal dans le DOM
 * @returns { Boolean }
 */
export const closeModal = (modalId) => {
  let modal = document.querySelector("#" + modalId);
  // console.log(modalId);
  let view = document.querySelector(".view");
  let container = document.querySelector(".container-fluid");
  if (view && container) {
    view.style.overflowY = "auto";
    container.classList.remove('blur')
  }
  if (modal.classList.contains("active")) {
    modal.classList.remove('active')
    return true
  } else {
    return false
  }
}

/**
 * Un nombre au hasard
 * @param { Number } max Valeur maximale qui peut être retourner
 * @returns { Number }
 */
export const random = (max = 10) => Math.round(Math.random() * max)