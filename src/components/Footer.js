import Title from "../assets/images/SAJAD HOSEINI.svg";
import EmailIcon from "../assets/images/emailicon.svg";

import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className=" flex flex-col bg-[linear-gradient(to_bottom_left,black_20%,rgb(0,102,255)_100%)] w-full h-[400px] mt-[100px] justify-center items-center md:h-[400px]">
      <div className="flex flex-col items-start w-[80%] md:flex-row">
        <div className="w-[60%] h-[150px] md:h-[350px] md:h-[400px]">
          <div className="text-[25px] md:text-[35px] md:mt-[100px]">
            Contact me:
          </div>
          <div className="flex flex-col upsm:flex-row items-start my-5 w-[80%]">
            <div id="email">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ transformOrigin: "center" }}
              >
                <div
                  className="flex flex-row justify-center items-center mb-5 cursor-pointer "
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
                  <div className="text-[15px] midsm:text-[20px] lg:text-[25px]  uplg:text-[30px]">
                    sajadhoseini1384@gmail.com
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[130px] upsm:h-[180px] md:h-[350px] -mt-5 md:mt-[50px]">
          <img
            alt="title"
            src={Title}
            className="mr-[50px] h-[200px] w-[200px] upsm:h-[250px] upsm:w-[250px] md:h-[300px] md:w-[300px] ml-[60px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
