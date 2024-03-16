import { InputPropsType } from "../lib/definitions";

export const Input = (props: InputPropsType) => {
  const { placeholder, label } = props;
  return (
    <div className="min-w-300 h-74">
      <p className="p-1">{label}</p>
      <input
        placeholder={placeholder}
        className="w-456 h-48 p-2  focus:outline-none border-1 border-gray-300 rounded-md"
      />
    </div>
  );
};
