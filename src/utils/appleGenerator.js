/**
 * This function generates an array of apple objects with random positions and a default status of "tree"
 * @param {*} numberOfApple
 * @returns Array of the apples
 */

export const appleGenerator = (numberOfApple) => {
  return Array.from({ length: numberOfApple }, (_, i) => ({
    id: Date.now() + i,
    position: {
      bottom: Math.floor(Math.random() * 200 + 200),
      left: Math.floor(Math.random() * 300 + 100),
    },
    status: "tree",
  }));
};
