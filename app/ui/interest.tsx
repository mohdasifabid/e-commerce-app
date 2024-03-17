import { useState } from "react";
import { InterestPropsTypes } from "../lib/definitions";

export const Interest = (props: InterestPropsTypes) => {
  const { interest, checked, value, setUpdatedCategoryInfo } = props;
  const [isInterestChecked, setIsInterestChecked] = useState(checked);

  return (
    <div className="flex gap-5 items-center">
      <input
        type="checkbox"
        className="w-6 h-6"
        checked={isInterestChecked}
        value={value}
        onChange={(e) => {
          setIsInterestChecked((prevState) => !prevState);
          setUpdatedCategoryInfo({
            categoryId: e.target.value,
            interest: !isInterestChecked,
          });
        }}
      />
      <p>{interest}</p>
    </div>
  );
};
