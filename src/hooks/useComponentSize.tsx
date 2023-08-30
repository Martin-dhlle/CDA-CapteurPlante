import { useCallback, useState } from "react";

export type ComponentProperties = {
  componentIndex: number;
  size: "xs" | "s" | "m" | "l";
  isClosed: boolean;
};

/**
 * Custom hook qui offre la possibilité de gérer la taille et l'état des composants déclarés
 * @param componentsDeclaration Permet de déclarer les états initiaux (size, closeState) des composants du main
 * @returns
 */
const useComponentsProperties = (
  componentsDeclaration: ComponentProperties[]
) => {
  const [componentsProperties, setComponentsProperties] = useState<
    ComponentProperties[]
  >(componentsDeclaration);

  const changeComponentProperties = useCallback(
    (propertiesToChange: ComponentProperties) => {
      const updatedProperties = componentsProperties.map((component) =>
        component.componentIndex === propertiesToChange.componentIndex
          ? propertiesToChange
          : component
      );
      console.log(updatedProperties);

      setComponentsProperties(updatedProperties);
    },
    [componentsProperties]
  );

  const changeMultipleComponentProperties = useCallback(
    (multiplePropertiesToChange: ComponentProperties[]) => {
      const updatedProperties = [...componentsProperties]; // Create a new array

      multiplePropertiesToChange.forEach((change) => {
        updatedProperties[change.componentIndex] = {
          ...updatedProperties[change.componentIndex],
          ...change,
        };
      });

      setComponentsProperties(updatedProperties);
    },
    [componentsProperties]
  );

  return {
    componentsProperties,
    changeComponentProperties,
    changeMultipleComponentProperties,
  };
};

export default useComponentsProperties;
