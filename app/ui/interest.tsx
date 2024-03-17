import { InterestPropsTypes } from "../lib/definitions";

export const Interest = (props: InterestPropsTypes) => {
  const { interest, checked, value } = props;
  return (
    <div className="flex gap-5 items-center">
      <input
        type="checkbox"
        className="w-6 h-6"
        checked={checked}
        value={value}
      />
      <p>{interest}</p>
    </div>
  );
};
