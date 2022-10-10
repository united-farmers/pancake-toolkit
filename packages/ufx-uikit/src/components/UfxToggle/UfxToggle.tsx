import React from "react";
import { UfxStack, UfxInput, UfxLabel } from "./StyledUfxToggle";
import { UfxToggleProps, scales } from "./types";

const UfxToggle: React.FC<UfxToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <UfxStack scale={scale}>
    <UfxInput id={props.id || "ufx-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <UfxLabel scale={scale} checked={checked} htmlFor={props.id || "ufx-toggle"}>
      <div className="ufxs">
        <div className="ufx" />
        <div className="ufx" />
        <div className="ufx" />
        <div className="butter" />
      </div>
    </UfxLabel>
  </UfxStack>
);

export default UfxToggle;
