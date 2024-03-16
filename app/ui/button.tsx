export const Button = ({ btnName, onClick }: any) => {
  return (
    <button onClick={onClick} className="w-456 h-56 bg-black text-white rounded-md">
      {btnName}
    </button>
  );
};
