export function randomizeColor() {
  return `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255,
  )}, ${Math.round(Math.random() * 255)}, 1)`;
}
