import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <h2>my nested route</h2>
      {children}
    </main>
  );
};

export default layout;
