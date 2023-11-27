// Import your logo file accordingly
import Logo from "../assets/logo2.svg";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-black text-white h-[299px] flex flex-col w-full items-center justify-center gap-12 ">
      <div className="w-full flex items-center  justify-between  px-12  ">
        <div>
          <img
            src={Logo}
            alt="Intelligo Logo"
            className="bg-contain  w-[150px]"
          />
        </div>

        <div>
          <nav className="hidden md:flex items-center gap-14 text-sm  text-[#BFBFBF]">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              My Progress
            </a>
            <a href="#" className="hover:text-gray-300">
              Study Booth
            </a>
            <a href="#" className="hover:text-gray-300">
              My Calendar
            </a>
          </nav>
        </div>

        <div className="flex gap-6 justify-center">
          <p legacyBehavior href={"/"}>
            <a href="">
              <ImFacebook color="white" />
            </a>
          </p>
          <p legacyBehavior href={"/"}>
            <a href="">
              <ImTwitter color="white" />
            </a>
          </p>
          <p legacyBehavior href={"/"}>
            <a href="">
              <ImYoutube color="white" />
            </a>
          </p>
        </div>
      </div>

      <div className="h-[2px] bg-[#707070] w-full"></div>

      <div className="flex flex-col items-center gap-6 font-pt w-full">
        <div className="flex items-center gap-7">
          <h1 className="font-normal text-base text-[#BFBFBF]">
            SUBSCRIBE NOW
          </h1>

          <div className="flex items-center">
            <input
              type="text"
              className=" rounded-l-sm w-[309px] h-[46px] p-2 focus:outline-none "
              placeholder="Enter Your Email"
            />
            <button className=" w-[46px] h-[46px] flex items-center justify-center p-2 rounded-r-sm text-white bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
              >
                <path
                  d="M0.188112 12.8196C0.128022 12.8864 0.0810462 12.965 0.0498649 13.0508C0.0186835 13.1367 0.00390775 13.2282 0.00638157 13.32C0.00885539 13.4119 0.0285306 13.5023 0.0642829 13.5862C0.100036 13.6701 0.151166 13.7457 0.214754 13.8088C0.278342 13.872 0.353143 13.9213 0.434886 13.954C0.516629 13.9868 0.603713 14.0023 0.691166 13.9997C0.77862 13.9971 0.86473 13.9765 0.944579 13.9389C1.02443 13.9013 1.09645 13.8476 1.15654 13.7809L6.81794 7.48455C6.93486 7.35466 7 7.18269 7 7.00393C7 6.82518 6.93486 6.65321 6.81794 6.52331L1.15655 0.226309C1.09685 0.158057 1.02484 0.102942 0.9447 0.0641674C0.864556 0.0253929 0.777877 0.00373118 0.689696 0.000441C0.601515 -0.00285014 0.513591 0.0122961 0.43103 0.0449985C0.348469 0.0777019 0.272917 0.127308 0.208762 0.190939C0.144608 0.25457 0.0931308 0.330956 0.0573199 0.41566C0.0215094 0.500365 0.00207923 0.591698 0.000158044 0.684357C-0.00176314 0.777015 0.0138628 0.869151 0.0461285 0.955412C0.0783946 1.04167 0.126657 1.12034 0.188113 1.18685L5.41791 7.00393L0.188112 12.8196Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-[90%] flex items-center justify-between text-center text-sm font">
          <div className="w-full text-[#C4C4C4]">
            <p>Copyright ©️ 2023 Intelligo. All Rights Reserved</p>
          </div>
          <div className="w-full text-[#C4C4C4]">
            <p>Powered By FUEGO</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
