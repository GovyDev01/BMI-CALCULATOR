import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControls: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectValue(event.detail.value);
  };

  return (
    <IonSegment
      color={"dark"}
      value={props.selectedValue}
      onIonChange={inputChangeHandler}
    >
      <IonSegmentButton value="mkg">
        <IonLabel>M/KG</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>FT/LBS</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};
export default InputControls;
