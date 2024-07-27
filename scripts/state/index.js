import render from "../rendering/render.js";

export default function useState(initialState) {
  let state = initialState;
  let renderTimeout;

  const setState = (newState) => {
    state = newState;
    if (renderTimeout) {
      clearTimeout(renderTimeout);
    }

    renderTimeout = setTimeout(() => {
      render(state);
    }, 0);
  };
  return [state, setState];
}
