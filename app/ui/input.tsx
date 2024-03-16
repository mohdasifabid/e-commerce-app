import { InputPropsType } from "../lib/definitions";

export const Input = (props: InputPropsType) => {
  const { placeholder, label } = props;
  return (
    <div className="min-w-456 h-74">
      <p className="p-1">{label}</p>
      <input
        placeholder={placeholder}
        className="p-2  focus:outline-none border-2 border-gray-300 rounded-md"
      />
    </div>
  );
};
