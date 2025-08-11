const Title1 = ({ text }) => {
  return (
    <div className="flex justify-start items-start bg-slate-800  p-6 rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.15)] shadow-black mx-auto mb-1 w-[300px] mt-5 md:flex-row text-white text-[25px] ">
      <h1>{text}</h1>
    </div>
  );
};

export default Title1;
