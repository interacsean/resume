const spaceRatio = 1.2;

export const ratioToTheX = (n: number) => (n >= 1 ? n - 1 : -(1 / n - 1));

const space = (n: number) => `${Math.pow(spaceRatio, ratioToTheX(n))}rem`;

export default space;
