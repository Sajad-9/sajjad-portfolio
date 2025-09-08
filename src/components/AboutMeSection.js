import GitHubIcon from "../assets/images/githubicon.svg";
import LinkedInIcon from "../assets/images/linkedinicon.svg";
import { motion } from "framer-motion";
const AboutMeSection = () => {
  return (
    <div
      className="flex flex-col items-center
    "
    >
      <div className="relative flex flex-col items-center bg-slate-800 bg-opacity-50 w-[80%] mt-[80px] pt-[50px] rounded-[20px] border-slate-800 border-2 pb-[10px] p-5">
        <p className="text-[20px] md:text-[25px]">
          Hello 👋
          <br />I am a Game Developer specializing in Unity and C#, with
          hands-on experience creating games and interactive systems since 2019.
          I hold a Game Development certificate from the Tehran Institute of
          Technology, graduating with a perfect score (100). I have published
          JumperBird, an endless runner available on the Myket store, and I’m
          currently working at Helen Game Factory as a Game Developer, where I
          build enemy AI systems, multiplayer features, and gameplay tools.
          Alongside game development, I also contribute as a Backend Developer
          and Designer in a web development team. I’m passionate about
          problem-solving, collaboration, and turning creative ideas into
          memorable player experiences.
          <br />
          <br />
          Websites:
        </p>
        <div className="mt-5 w-full h-[100px] flex flex-col mb-10 upsm:flex-row upsm:mb-0">
          <div id="linkedin">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ transformOrigin: "center" }}
            >
              <div
                className="flex flex-row justify-center items-center mb-5 cursor-pointer ml-10 md:ml-[60px]"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sajad-hoseini-467b5529a/",
                    "_blank"
                  )
                }
              >
                <button className="mr-[15px]">
                  <img
                    src={LinkedInIcon}
                    alt="linkedin"
                    className="min-h-[40px] min-w-[40px] md:min-h-[50px] md:min-w-[50px]"
                  />
                </button>
                <div className="text-[20px] md:text-[25px] ">LinkedIn</div>
              </div>
            </motion.div>
          </div>

          <div id="github">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ transformOrigin: "center" }}
            >
              <div
                className="flex flex-row justify-center items-center mb-5 cursor-pointer ml-10 md:ml-[60px]"
                onClick={() =>
                  window.open("https://github.com/Sajad-9", "_blank")
                }
              >
                <button className="mr-[15px]">
                  <img
                    src={GitHubIcon}
                    alt="github"
                    className="mr-2 min-h-[45px] min-w-[45px] md:min-h-[55px] md:min-w-[55px]"
                  />
                </button>
                <div className="text-[20px] md:text-[25px] ">GitHub</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
