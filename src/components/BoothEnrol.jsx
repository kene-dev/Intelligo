import React, { useEffect, useState } from "react";
import join from "../assets/joinBooth.png";
import logo from "../assets/logo.svg";
import CustomModal from "./Modal";
import AnimatedText from "./AnimatedText";
import { Form1, Form2, Form3 } from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, resetIQform } from "../Redux/features/IQformSlice";

const BoothEnrol = () => {
  const [current, setCurrent] = useState(null);
  const [joinBooth, setJoinBooth] = useState(null);
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
        return (
          <>
            <AnimatedText />
            <div className="w-full flex items-center gap-5 justify-end">
              <button
                onClick={() => setCurrent("form3")}
                className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrent("form4")}
                className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
              >
                Next
              </button>
            </div>
          </>
        );
        return (
          <>
            <Form4 />
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
    if (joinBooth) {
      dispatch(getQuestions());
    }
    if (IQformSuccess) {
      setTimeout(() => {
        dispatch(resetIQform());
      }, 1500);
    }
    if (IQformError) {
      setTimeout(() => {
        dispatch(resetIQform());
      }, 1500);
    }
  }, [joinBooth]);

  return (
    <div className="w-full h-[500px] ">
      <div className="w-full h-[400px] bg-primary flex items-center rounded-lg">
        <img src={join} className="w-full h-full object-cover" />
        <div className="w-full flex flex-col gap-8 p-7">
          <h1 className="font-bold text-xl text-white font-pt">
            Studying just became more fun with
            <span className="p-1 bg-black rounded-md text-bold ">
              study groups
            </span>
          </h1>

          <p className="text-sm text-white/50 font-pt font-thin">
            Online learning just got a whole lot more fun! Ditch the lonely
            study sessions and join the virtual huddle of study groups. Connect
            with classmates from around the globe, share insights, and conquer
            those tricky concepts together. It's like having a global study
            party right at your fingertips!
          </p>

          <div
            onClick={() => {
              setJoinBooth(true);
              setCurrent("anim1");
            }}
            className="bg-black text-white text-sm font-pt font-bold px-5 py-2 w-max rounded-md"
          >
            Join Now
          </div>
        </div>
      </div>

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
