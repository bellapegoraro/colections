const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "@favorite/CHARACTER":
      const { favorite } = action;
      return [...state, favorite];
    case "@remove/CHARACTER":
      const { list } = action;
      return list;
    default:
      return state;
  }
};

export default favoriteReducer;
