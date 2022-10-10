import React, { useState } from "react";
import UfxToggle from "./UfxToggle";

export default {
  title: "Components/UfxToggle",
  component: UfxToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <UfxToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <UfxToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <UfxToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
