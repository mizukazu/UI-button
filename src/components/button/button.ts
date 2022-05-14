interface ButtonParams {
  color?: ButtonColors,
  size?: number,
  rounded?: boolean,
}

/**
 * button要素を作成する
 * create a button element
 * @param text 
 * @param params 
 * @returns HTMLButtonElement
 */
export const createButton = (text: string, params?: ButtonParams): HTMLButtonElement => {
  console.log(text, params);
  const button: HTMLButtonElement = document.createElement('button');
  button.classList.add('button');
  if(text) { button.innerHTML = text }
  if(params) {
    params.color && button.classList.add(`button-${params.color}`);
    params.rounded && button.classList.add(`button-rounded`);
  }
  return button;
};

export enum ButtonColors {
  red = 'red',
  yello = 'yellow',
  green = 'green',
  blue = 'blue',
  purple = 'purple',
  orange = 'orange'
}