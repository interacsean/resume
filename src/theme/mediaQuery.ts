import breakpoint from "./breakpoint";

export function max(max: breakpoint) {
  return `@media screen and (max-width: ${max - 1}px)`;
}

export function min(min: breakpoint) {
  return `@media screen and (min-width: ${min}px)`;
}

export function range(min: breakpoint, max: breakpoint) {
  return `@media screen and (min-width: ${min}px) and (max-width: ${
    max - 1
  })px`;
}

export const print = "@media print";

export default {
  min,
  max,
  range,
  print
};
