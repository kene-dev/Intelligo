import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import CustomModal from "./Modal";
import AnimatedText from "./AnimatedText";
import { Form1, Form2, Form3 } from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, resetIQform } from "../Redux/features/IQformSlice";
import { toast } from "react-toastify";

const BoothEnrol = ({ joinBooth }) => {
  const [current, setCurrent] = useState("anim1");
  const dispatch = useDispatch();
  const { IQformSuccess, IQformError } = useSelector(
    (state) => state.formstore
  );

  const handleCurrent = (option) => {
    setCurrent(option);
  };

  const renderView = () => {
    switch (current) {
      case "anim1":
        return (
          <>
            <AnimatedText
              title={`
              Hello there! 
              We're excited to help you find the perfect study group based on your unique qualities and preferences.

              However, we’d need you to answer a few questions.
              Your answers will not only help us understand you better but will pave the way for a learning experience tailored just for you.
              `}
              text={`
              Remember, there are no right or wrong answers—just your personal touch!

              Ready? Let's dive in and find your ideal study group! 🚀
              `}
            />

            <div className="w-full flex items-center gap-5 justify-end">
              <button
                onClick={() => setCurrent("form1")}
                className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
              >
                Next
              </button>
            </div>
          </>
        );
      case "anim2":
        return (
          <>
            <AnimatedText
              title={"You're almost there! "}
              text={`Your preferences help us create a well-rounded understanding. Complete this last section, and you'll be one step closer to finding your ideal study group!`}
            />

            <div className="w-full flex items-center gap-5 justify-end">
              <button
                onClick={() => setCurrent("form2")}
                className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrent("form3")}
                className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
              >
                Next
              </button>
            </div>
          </>
        );
        return (
          <>
            <AnimatedText
              title={
                "Remember, there are no right or wrong answers—just your personal touch!"
              }
              text={`Ready? Let's dive in and find your ideal study group! 🚀`}
            />
            <div className="w-full flex items-center gap-5 justify-end">
              <button
                onClick={() => setCurrent("anim2")}
                className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrent("form1")}
                className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
              >
                Next
              </button>
            </div>
          </>
        );
      case "form1":
        return (
          <>
            <Form1 handleCurrent={handleCurrent} />
          </>
        );
      case "form2":
        return (
          <>
            <Form2 handleCurrent={handleCurrent} />
          </>
        );
        return (
          <>
            <AnimatedText
              title={"Great job! "}
              text={`Your unique qualities make you stand out. Let's now explore your problem-solving skills and logical reasoning.`}
            />
            <div className="w-full flex items-center gap-5 justify-end">
              <button
                onClick={() => setCurrent("form2")}
                className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrent("form3")}
                className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
              >
                Next
              </button>
            </div>
          </>
        );
      case "form3":
        return (
          <>
            <Form3 handleCurrent={handleCurrent} />
          </>
        );
      default:
        return (
          <div className="w-full h-full flex items-center justify-start ">
            <p className="text-9xl text-black font-bold text-left leading-relaxed">
              Now Let's <br /> Get To <br /> Know You
            </p>
          </div>
        );
    }
  };

  useEffect(() => {
    dispatch(getQuestions());
    // setJoinBooth(true);
  }, []);

  return (
    <div className="w-full h-[500px] ">
      <CustomModal
        isOpen={joinBooth}
        onClose={() => setJoinBooth(false)}
        size={"lg"}
        children={
          <div className="w-full h-full overflow-y-scroll p-7 flex flex-col gap-3">
            <img src={logo} className="bg-contain  w-[120px]" />
            {renderView()}
          </div>
        }
      />
    </div>
  );
};

export default BoothEnrol;
