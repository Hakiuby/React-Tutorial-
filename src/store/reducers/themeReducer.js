let initState = {
  color: "#ffffff",
};
export default function themeReducer(state = initState, action) {
  switch (action.type) {
    case "CHANGE_THEME":
        console.log("themeReducer: " + JSON.stringify(state));
      return Object.assign({}, state, {
        color: action.playload.color,
      });
    default:
      return initState;
  }
}
