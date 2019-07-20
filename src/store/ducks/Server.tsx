const INITIAL_STATE: any = {
  owner: null,
  staff: [],
  members: []
};

function reducer(state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "SET_SERVER":
      return { ...action.server };
    default:
      return state;
  }
}

export default reducer;
