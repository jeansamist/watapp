// import { Modal } from "../components/Modals";
import * as Config from "./Variables"
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
  // (modal);
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
  // // (modalId);
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

/**
 * Verifie si l'utilisateur est connecté
 * @returns { Boolean }
 */
export const isConnected = () => {
  fetch(`${Config.server}services/user_is_connected.php`)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result.response_data
  })
}