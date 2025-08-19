import Title from "../assets/images/SEYED SAJAD HOSEINI.svg";
import EmailIcon from "../assets/images/emailicon.svg";
import GitHubIcon from "../assets/images/githubicon.svg";
import LinkedInIcon from "../assets/images/linkedinicon.svg";
import XICon from "../assets/images/xicon.svg";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className=" flex flex-row bg-[linear-gradient(to_bottom_left,black_20%,rgb(0,102,255)_100%)] w-full h-[400px] mt-[100px] justify-center items-center">
      <div className="flex flex-row items-start w-[80%] lg:w-[60%]  ">
        <div className="  w-[60%] h-[300px] md:h-[350px]">
          <div className="text-[25px] md:text-[35px]">Contact me:</div>
          <div className="flex flex-col items-start my-5 w-[80%] lg:w-[60%] ">
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
                      className="min-h-[40px] min-w-[40px] md:min-h-[50px] md:min-w-[50px]"
                    />
                  </button>
                  <div className="text-[20px] md:text-[25px] ">GitHub</div>
                </div>
              </motion.div>
            </div>
            <div id="email">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ transformOrigin: "center" }}
              >
                <div
                  className="flex flex-row justify-center items-center mb-5 cursor-pointer ml-10 md:ml-[60px]"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=sajadhoseini1384@gmail.com&su=Open%20Letter&body=Dear%20Sajad,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20wanted%20to%20share%20some%20thoughts%20with%20you...",
                      "_blank"
                    )
                  }
                >
                  <button className="mr-[15px]">
                    <img
                      src={EmailIcon}
                      alt="email"
                      className="max-h-[40px] max-w-[40px] md:max-h-[50px] md:max-w-[50px] min-h-[40px] min-w-[40px] md:min-h-[50px] md:min-w-[50px]"
                    />
                  </button>
                  <div className="text-[20px] md:text-[25px] ">Email</div>
                </div>
              </motion.div>
            </div>
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
            <div id="x">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ transformOrigin: "center" }}
              >
                <div
                  className="flex flex-row justify-center items-center cursor-pointer ml-10 md:ml-[60px]"
                  onClick={() =>
                    window.open("https://x.com/SajadHo43678539", "_blank")
                  }
                >
                  <button className="mr-[15px]">
                    <img
                      src={XICon}
                      alt="x"
                      className="min-h-[40px] min-w-[40px] md:min-h-[50px] md:min-w-[50px]"
                    />
                  </button>
                  <div className="text-[20px] md:text-[25px] ">Twitter</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  w-1/2 h-[300px] md:h-[350px]">
          <img
            alt="title"
            src={Title}
            className="h-[130px] w-[130px] upsm:h-[180px] upsm:w-[180px] md:h-[240px] md:w-[240px] ml-[60px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
