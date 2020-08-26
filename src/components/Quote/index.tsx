import React, { FunctionComponent } from "react";
import "./style.css";

type Props = {
  text: string;
  id: string;
  isVisible: boolean;
};

const Quote: FunctionComponent<Props> = ({ text, id, isVisible }) => {
  return (
    <>
      {isVisible ? (
        <></>
      ) : (
        <div className={"quoteContainer"}>{text}</div>
      )}
    </>
  );
};
export default Quote;
