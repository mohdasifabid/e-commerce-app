import { InputPropsType } from "../lib/definitions";

export const Input = (props: InputPropsType) => {
  const { placeholder, label, type, setter } = props;
  return (
    <div className="min-w-300 h-74">
      <p className="">{label}</p>
      <input
        onChange={(e) => setter(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="w-456 h-48 p-2  focus:outline-none border-2 border-gray-400 rounded-md"
      />
    </div>
  );
};
