type Props = {
  setShowGatoConga: (show: boolean) => void;
};

export const DoNotPressBtn = ({ setShowGatoConga }: Props) => {
  return (
    <div className="flex flex-col justify-evenly items-center w-72 min-h-96 px-6 py-16 ">
      <h3 className="text-white text-2xl uppercase">do not press</h3>
      <button
        onClick={() => setShowGatoConga(true)}
        className="w-28 h-28 rounded-full bg-[#BE3144] shadow-[2px_5px_6px_rgba(0,0,0,0.7)] cursor-pointer transition-all ease-in-out hover:bg-[#BE3144] hover:w-32 hover:h-32 active:shadow-[0px_2px_5px_rgba(0,0,0,0.7)] active:translate-y-0.5"
      ></button>
    </div>
  );
};
