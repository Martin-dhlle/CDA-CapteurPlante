import { useState } from "react";

export type ComponentProperties = {
  componentIndex: number;
  size: "xs" | "s" | "m" | "l";
  isClosed: boolean;
};

const useComponentsProperties = (
  componentsDeclaration: ComponentProperties[]
) => {
  const [componentsProperties, setComponentsProperties] = useState<
    ComponentProperties[]
  >(componentsDeclaration);

  const changeComponentProperties = (
    propertiesToChange: ComponentProperties
  ) => {
    const updatedProperties = componentsProperties.map((component) =>
      component.componentIndex === propertiesToChange.componentIndex
        ? { ...component, ...propertiesToChange }
        : component
    );
    setComponentsProperties(updatedProperties);
  };

  return { componentsProperties, changeComponentProperties };
};

export default useComponentsProperties;
