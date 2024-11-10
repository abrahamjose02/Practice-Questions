import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Disable right-click globally
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div style={{ height: '100vh', userSelect: 'none' }}>
      <h1>Right-click is disabled globally</h1>
      <p>Right-click anywhere in this app won’t bring up the context menu.</p>
    </div>
  );
};

export default App;
