import { cloneElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom'

const openDialog = (Component, defaultCloseName = 'onClose') => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = Component.props[defaultCloseName];

  /**
   * @description 移除
   */
  const remove = () => {
    unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  Component = cloneElement(Component, {
    key: Date.now(),

    visible: true,
    onClose() {
      const args = Array.prototype.slice.call(arguments);

      if (typeof onClose === 'function') {
        // Pass it all through
        onClose.apply(this, args);
      }

      remove();
    },
  });

  render(Component, div);
};

export default openDialog;