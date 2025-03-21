const sortedCategories = [
  'Citra and 3DS',
  'Dolphin',
  'Ruby and Sapphire',
  'FireRed and LeafGreen',
  'Emerald',
  'Diamond, Pearl, and Platinum',
  'HeartGold and SoulSilver',
  'Black and White',
  'Black 2 and White 2',
  'X and Y',
  'Omega Ruby and Alpha Sapphire',
  'Sun and Moon',
  'Ultra Sun and Ultra Moon',
  'Sword and Shield',
];

export const sortCategories = (first, second) => {
  const firstIndex = sortedCategories.indexOf(first);
  const secondIndex = sortedCategories.indexOf(second);
  if (firstIndex === -1 || secondIndex === -1) {
    // This will stop the Gatsby release build or show an error during development
    // to make sure unordered categories won't deploy.
    throw new Error(
      'Unexpected category!  Please ensure all guide categories are in the sorted category list.',
    );
  }
  return firstIndex - secondIndex;
};
