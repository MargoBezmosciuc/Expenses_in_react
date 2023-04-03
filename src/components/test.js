import React from "react";

// don't change the Component name "App"
export default function App() {
  const [data, setData] = React.useState(false);

  const deleteAlert = () => {
    setData(true);
  };

  const notDeletingAlert = () => {
    setData(false);
  };

  return (
    <div>
      {data ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={notDeletingAlert}>Proceed</button>
        </div>
      ) : (
        ""
      )}
      ;<button onClick={deleteAlert}>Delete</button>
    </div>
  );
}
