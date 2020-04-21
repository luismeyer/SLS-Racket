export const spawnGridAnimation = (refs) => {
  const spawnGridItem = index => {
    refs[index].$el.style.display = "flex";

    if (index < refs.length - 1) {
      setTimeout(() => spawnGridItem(index + 1), 100);
    }
  };

  spawnGridItem(0);
}