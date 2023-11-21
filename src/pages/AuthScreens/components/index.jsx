import React, { useEffect, useState } from "react";
import Inputs from "../../../components/Inputs";
import { useNavigate } from "react-router-dom";
import Kyc from "../../../components/Kyc";

// LOGIN FORM COMPONENT STARTS HERE
export const LoginForm = () => {
  const [filled, setFilled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    if (email && password) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [email, password]);

  return (
    <div className="flex flex-col gap-9">
      {/* WELCOME TEXT AREA */}
      <div className="flex flex-col gap-2 w-max p-2">
        <h1 className="text-xl font-bold">Welcome</h1>
        <p className="text-black/50">Let's get you logged in</p>
      </div>

      <form className="w-full flex flex-col gap-5">
        <Inputs
          label={"E-mail"}
          type={"text"}
          placeholder={"Enter your e-mail"}
          value={email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Inputs
          label={"Password"}
          type={"password"}
          placeholder={"Type your password"}
          value={password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div
          onClick={() => navigate("onboard")}
          className={` ${
            filled ? "bg-[#800080]" : "bg-[#80008092]"
          } w-full h-[45px] p-2 flex items-center justify-center cursor-pointer rounded-md text-white text-center`}
        >
          Sign In
        </div>
      </form>
    </div>
  );
};

// REGISTER FORM COMPONENT STARTS HERE
export const RegisterForm = () => {
  const [filled, setFilled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, firstName, lastName, confirmPassword } = formData;

  useEffect(() => {
    if (email && password) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [email, password]);

  return (
    <div className="flex flex-col gap-9">
      {/* WELCOME TEXT AREA */}
      <div className="flex flex-col gap-2 w-max p-2">
        <h1 className="text-xl font-bold">Welcome</h1>
        <p className="text-black/50">Create an Account</p>
      </div>

      <form className="w-full flex flex-col gap-5">
        <div>
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="appearance-none border-[.5px] text-sm focus:outline-[#800080] focus:outline-[.3px] border-black/50 h-[45px] w-full p-2 rounded-md"
          />
        </div>

        <div>
          <label className="text-sm">E-mail</label>
          <input
            type="text"
            placeholder="Enter your e-mail"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="appearance-none border-[.5px] text-sm focus:outline-[#800080] focus:outline-[.3px] border-black/50 h-[45px] w-full p-2 rounded-md"
          />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="Type your password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="appearance-none border-[.5px] text-sm focus:outline-[#800080] focus:outline-[.3px] border-black/50 h-[45px] w-full p-2 rounded-md"
          />
        </div>

        <div>
          <label className="text-sm">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-Type your password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="appearance-none border-[.5px] text-sm focus:outline-[#800080] focus:outline-[.3px] border-black/50 h-[45px] w-full p-2 rounded-md"
          />
        </div>

        <div
          className={` ${
            filled ? "bg-[#800080]" : "bg-[#80008092]"
          } w-full h-[45px] p-2 flex items-center justify-center rounded-md text-white text-center`}
        >
          Sign Up
        </div>
      </form>
    </div>
  );
};

// ONBOARD FORMS COMPONENT STARTS HERE
export const OnboardForm1 = ({ handleProceed }) => {
  const [active, setActive] = useState(null);
  const data = [
    {
      title: "Business",
      text: "Sales representative, Accountant,Customer service representative,Manager, Administrative assistant, Marketing specialist, Research and development specialist, Finance Specialist",
    },
    {
      title: "Technology",
      text: "Software engineer, web developer, Data Scientist, Machine learning-Engineer, Artificial intelligence engi-neer, Cloud architect, CybersecurityAnalyst, Ui/Ux Designer etc.",
    },
    {
      title: "Healthcare",
      text: "Doctors, Dentists, Pharmacist, Phy-sician, Chiropractor, Dietitian, veterinarian etc.",
    },
    {
      title: "Education",
      text: "Teachers, Professor, Principal, Librarian, School counsellor etc.",
    },
  ];

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="w-full h-full flex flex-col gap-12 items-start">
      <h1 className="font-bold text-2xl">What would you like to learn ?</h1>

      <div className="w-full flex items-start gap-4">
        {data.map((item, index) => (
          <div
            onClick={() => handleActive(index)}
            className="w-full h-[290px]"
            key={item.title}
          >
            <Kyc
              title={item.title}
              tsize
              text={item.text}
              selected={active === index ? true : false}
            />
          </div>
        ))}
      </div>

      <div className=" w-full flex items-end justify-between ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#800080]">Not Here?</h1>
          <div className="w-[300px]">
            <Inputs type={"text"} placeholder={"Type what you do"} />
          </div>
        </div>

        <div
          onClick={() => handleProceed("form2")}
          className="w-max px-12 py-2 bg-[#800080] text-white rounded-md"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export const OnboardForm2 = ({ handleProceed }) => {
  const [active, setActive] = useState(null);
  const data = [
    {
      text: "To learn new skills and  knowledge",
    },
    {
      text: "To stay up-to-date onthe latest trends and technologies",
    },
    {
      text: "To prepare for exams and Technologies",
    },
    {
      text: "To Improve your personal development",
    },
  ];

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="w-full h-full flex flex-col gap-12 items-start">
      <h1 className="font-bold text-2xl">What are your learning goals ?</h1>

      <div className="w-full flex items-start gap-4">
        {data.map((item, index) => (
          <div
            onClick={() => handleActive(index)}
            className="w-full h-[290px]"
            key={index}
          >
            <Kyc text={item.text} selected={active === index ? true : false} />
          </div>
        ))}
      </div>

      <div className=" w-full flex items-end justify-between ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#800080]">Not Here?</h1>
          <div className="w-[300px]">
            <Inputs type={"text"} placeholder={"Type what you do"} />
          </div>
        </div>

        <button
          onClick={() => handleProceed("form3")}
          className="w-max px-12 py-2 bg-[#800080] text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const OnboardForm3 = ({ handleProceed }) => {
  const [active, setActive] = useState(null);
  const data = [
    {
      title: "Beginner",
      text: `I have never used an e-learning application before. 
    
      I have only used an e-learning application once or twice. 
 
      I am still learning how to use e-learning applications`,
    },

    {
      title: "Intermediate",
      text: `I have used e-learning applications on several occasions. 
         I am familiar with the basic features of most e-learning applications. 
        I am able to use e-learning applications to complete courses and learn new skills`,
    },

    {
      title: "Advanced",
      text: `I have extensive experience using e-learning applications.
      I am able to use all of the features of most e-learning applications. 
      I am able to use e-learning applications to create and teach my own courses`,
    },
  ];

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="w-full h-full flex flex-col gap-12 items-start">
      <h1 className="font-bold text-2xl">
        What is your level of experience with e-learning applications{" "}
      </h1>

      <div className="w-full flex items-start gap-4">
        {data.map((item, index) => (
          <div
            onClick={() => handleActive(index)}
            className="w-full h-[290px]"
            key={item.title}
          >
            <Kyc
              title={item.title}
              tsize
              list
              text={item.text}
              selected={active === index ? true : false}
            />
          </div>
        ))}
      </div>

      <div className=" w-full flex items-end justify-between ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#800080]">Not Here?</h1>
          <div className="w-[300px]">
            <Inputs type={"text"} placeholder={"Type what you do"} />
          </div>
        </div>

        <div
          onClick={() => handleProceed("form4")}
          className="w-max px-12 py-2 bg-[#800080] cursor-pointer text-white rounded-md"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export const OnboardForm4 = ({ handleProceed }) => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const data = [
    {
      title: "Visual",
    },

    {
      title: "Auditory",
    },

    {
      title: "Kinesthetic",
    },
  ];

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="w-full h-full flex flex-col gap-12 items-start">
      <h1 className="font-bold text-2xl">
        What are your preferred learning styles(e.g., Visual, auditory,
        kinesthetic)?
      </h1>

      <div className="w-full flex items-start gap-4">
        {data.map((item, index) => (
          <div
            onClick={() => handleActive(index)}
            className="w-full h-[290px] loginBG"
            key={item.title}
          >
            <Kyc
              title={item.title}
              selected={active === index ? true : false}
            />
          </div>
        ))}
      </div>

      <div className=" w-full flex items-end justify-end ">
        <div
          onClick={() => navigate("/layout")}
          className="w-max px-12 py-2 bg-primary cursor-pointer text-white rounded-md"
        >
          Continue
        </div>
      </div>
    </div>
  );
};
