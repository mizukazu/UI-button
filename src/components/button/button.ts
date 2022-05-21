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
    params.size && button.classList.add(BUTTONSIZE_TO_CLASS[params.size]);
  }
  return button;
};

interface ButtonParams {
  color?: ButtonColors,
  size?: ButtonSize,
  rounded?: boolean,
  onClick?: () => unknown,
}

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum ButtonColors {
  red = 'red',
  yello = 'yellow',
  green = 'green',
  blue = 'blue',
  purple = 'purple',
  orange = 'orange'
}

const BUTTONSIZE_TO_CLASS: Record<ButtonSize, string> = {
  'small': 'button-small',
  'medium': 'button-medium',
  'large': 'button-large',
}