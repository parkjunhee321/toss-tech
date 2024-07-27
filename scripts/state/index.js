import render from "../rendering/render.js";

export default function useState(initialState) {
  let state = initialState;
  let renderTimeout;

  const setState = (newState) => {
    state = newState;
    if (renderTimeout) {
      clearTimeout(renderTimeout);
    }

    // 호출되어도 마지막에 실행하기 위해 비동기 함수 추가
    renderTimeout = setTimeout(() => {
      render(state);
    }, 0);
  };
  return [state, setState];
}
