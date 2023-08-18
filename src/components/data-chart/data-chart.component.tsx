import { FC } from "react";
import ScalableBox from "../UI/scalable-box/scalable-box.component";
import { ComponentProperties } from "../../hooks/useComponentSize";

const DataChart: FC<{ componentProperties: ComponentProperties }> = ({
  componentProperties,
}) => {
  if (componentProperties.isClosed) return null;
  return (
    <ScalableBox size={componentProperties.size}>
      <p></p>
    </ScalableBox>
  );
};

export default DataChart;
