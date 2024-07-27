const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;
      //add 해놓은 컴포넌트들이 있으면 해당 부분이 바뀌는 로직임. applydiff와 결합해서 사용했기 때문에 특정 부분이 바뀌었다면 바뀐 상태로 렌더링 될 것임
      //특정 부분만 바뀌어서 기존에 모든 부분을 렌더링 하는 것보다 효율적이게 됨
      const child = registry[name];
      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  };
};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };
  //새로운 main html에 state 변경에 대한 구현후에 이를 리턴해줌
  return renderWrapper(cloneComponent)(root, state);
};

export default {
  add,
  renderRoot,
};
