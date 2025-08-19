import Sajjad from "../assets/images/sajjad.jpg";

const AboutMeSection = () => {
  return (
    <div
      className="flex flex-col items-center
    "
    >
      <img
        src={Sajjad}
        alt="Sajjad"
        className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] md:top rounded-full -mb-[30px]"
      />
      <div className="relative flex flex-col items-center bg-slate-800 bg-opacity-50 w-[80%] mt-[80px] pt-[50px] rounded-[20px] border-slate-800 border-2 pb-[50px] p-5">
        <p className="text-[20px] md:text-[25px]">
          Hello 👋
          <br /> I am a game developer with over 6 years of experience in Unity
          and 5 years of programming. I hold a Game Development certificate from
          Tehran Institute of technology with a perfect score (100). I have
          published several simple games to the market and I am especially
          passionate about teamwork and continuous learning in the field of game
          development
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;
