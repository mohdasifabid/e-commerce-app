import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { InterestPropsTypes } from "../lib/definitions";

export const Interest = (props: InterestPropsTypes) => {
  const { interest, checked, value } = props;
  const [isInterestChecked, setIsInterestChecked] = useState(checked);

  const updateInterestHandler = async (categoryId: number, interest: boolean) => {
    const res = await axios.put("/api/update-interest", {
      categoryId: Number(categoryId),
      interest: isInterestChecked,
    });
    return res
  };
  const mutation = useMutation({
    mutationKey: ["categories"],
    mutationFn: (categoryId: number, interest: boolean) => updateInterestHandler(categoryId, interest)
  }
  )
  return (
    <div className="flex gap-5 items-center">
      <input
        type="checkbox"
        className="w-6 h-6"
        checked={isInterestChecked}
        value={value}
        onChange={(e) => {
          console.log({ isInterestChecked })
          const catId = Number(e.target.value)
          setIsInterestChecked((prevState) => !prevState);
          mutation.mutate(catId, !isInterestChecked)
        }}
      />
      <p>{interest}</p>
    </div>
  );
};
