import { Children, useEffect, useState } from 'react';

export const Show = props => {
  const [showComponent, setShowComponent] = useState(null);

  useEffect(() => {
    let when = null;
    let otherwise = null;

    Children.forEach(props.children, children => {
      if (children.props.isTrue === undefined) {
        otherwise = children;
      } else if (!when && children.props.isTrue === true) {
        when = children;
      }
    });

    setShowComponent(when || otherwise);
  }, [props.children]);

  return showComponent;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);
Show.Else = ({ children }) => children;
