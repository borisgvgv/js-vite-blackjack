/**
 * 
 * @param {String} carta Valor de la carta
 * @returns {HTMLElement} Imagen de retorno
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw Error("Carta es un argumento necesario");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return  imgCarta;
};
