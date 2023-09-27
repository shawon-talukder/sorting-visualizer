/*
 *
 *
 ------->Title: Helper
 ->Description: this is a helper file for animations
 ------>Author: Shawon Talukder
 -------->Date: 09/27/2023
 *
 *
 */
import { delay } from "@/app/utils/delay";

type ToggleProps = {
  color: string;
  firstBar: HTMLElement;
  secondBar?: HTMLElement;
  delay_ms: number;
};

export const toggleColor = async ({
  color,
  firstBar,
  secondBar,
  delay_ms,
}: ToggleProps) => {
  firstBar && firstBar.classList.add(color);
  secondBar && secondBar.classList.add(color);

  await delay(delay_ms);

  firstBar && firstBar.classList.remove(color);
  secondBar && secondBar.classList.remove(color);
};
