import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../Redux/features/IQformSlice";
import { toast } from "react-toastify";

export const Form1 = ({ handleCurrent }) => {
  const { formQuestion, question_1, question_2, question_3 } = useSelector(
    (state) => state.formstore
  );
  const dispatch = useDispatch();

  const handleChange = (value, name) => {
    dispatch(updateFormData({ name, value }));
  };

  const handleProceed = () => {
    if (question_1 && question_2 && question_3) {
      handleCurrent("form2");
    } else {
      toast.error("please fill all required fields");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start  xl:gap-7 gap-4 mt-6">
      <div className="flex flex-col gap-2 lg:text-xs xl:text-base">
        <h1 className="flex items-center gap-1 font-pt lg:text-xs xl:text-base font-semibold">
          1. <p>{formQuestion.questions.question_1.question}</p>
        </h1>
        {formQuestion.questions.question_1.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              onChange={() => handleChange(option.name, "question_1")}
              checked={question_1 === option.name}
              required
            />
            {option.value}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-1 font-pt lg:text-xs xl:text-base font-semibold">
          2. <p>{formQuestion.questions.question_2.question}</p>
        </h1>
        {formQuestion.questions.question_2.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3  cursor-pointer"
          >
            <input
              type="radio"
              onChange={() => handleChange(option.name, "question_2")}
              checked={question_2 === option.name}
              required
            />
            {option.value}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          3. <p>{formQuestion.questions.question_3.question}</p>
        </h1>
        {formQuestion.questions.question_3.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              onChange={() => handleChange(option.name, "question_3")}
              checked={question_3 === option.name}
              required
            />
            {option.value}
          </label>
        ))}
      </div>

      <div className="w-full flex items-center gap-5 justify-end">
        <button
          onClick={() => handleCurrent("anim1")}
          className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
        >
          Prev
        </button>
        <button
          onClick={handleProceed}
          className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Form2 = ({ handleCurrent }) => {
  const { formQuestion, question_4, question_5, question_6 } = useSelector(
    (state) => state.formstore
  );
  const dispatch = useDispatch();

  const handleChange = (value, name) => {
    dispatch(updateFormData({ name, value }));
  };

  const handleProceed = () => {
    if (question_4 && question_5 && question_6) {
      handleCurrent("anim2");
    } else {
      toast.error("please fill all required fields");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-start gap-7 mt-6">
      {/* FIRST QUESTION */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          4. <p>{formQuestion.questions.question_4.question}</p>
        </h1>
        {formQuestion.questions.question_4.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              onChange={() => handleChange(option.name, "question_4")}
              checked={question_4 === option.name}
            />
            {option.value}
          </label>
        ))}
      </div>

      {/* SECOND QUESTION */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          5. <p>{formQuestion.questions.question_5.question}</p>
        </h1>
        {formQuestion.questions.question_5.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              onChange={() => handleChange(option.name, "question_5")}
              checked={question_5 === option.name}
            />
            {option.value}
          </label>
        ))}
      </div>

      {/* SECOND QUESTION */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          6. <p>{formQuestion.questions.question_6.question}</p>
        </h1>
        {formQuestion.questions.question_5.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              checked={question_6 === option.name}
              onChange={() => handleChange(option.name, "question_6")}
            />
            {option.value}
          </label>
        ))}
      </div>

      <div className="w-full flex items-center gap-5 justify-end">
        <button
          onClick={() => handleCurrent("form1")}
          className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
        >
          Prev
        </button>
        <button
          onClick={handleProceed}
          className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Form3 = ({ handleCurrent }) => {
  const { formQuestion, question_7, question_8, question_9 } = useSelector(
    (state) => state.formstore
  );
  const dispatch = useDispatch();

  const handleChange = (value, name) => {
    dispatch(updateFormData({ name, value }));
  };

  const handleProceed = () => {
    if (question_7 && question_8 && question_9) {
      console.log("completed!!!");
    } else {
      toast.error("please fill all required fields");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-start gap-7 mt-6">
      {/* FIRST QUESTION */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          7. <p>{formQuestion.questions.question_7.question}</p>
        </h1>
        {formQuestion.questions.question_7.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              checked={question_7 === option.name}
              onChange={() => handleChange(option.name, "question_7")}
            />
            {option.value}
          </label>
        ))}
      </div>

      {/* SECOND QUESTION */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          8. <p>{formQuestion.questions.question_8.question}</p>
        </h1>
        {formQuestion.questions.question_8.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              checked={question_8 === option.name}
              onChange={() => handleChange(option.name, "question_8")}
            />
            {option.value}
          </label>
        ))}
      </div>

      {/* SECOND QUESTION */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-1 font-pt font-semibold">
          9. <p>{formQuestion.questions.question_9.question}</p>
        </h1>
        {formQuestion.questions.question_9.options.map((option) => (
          <label
            key={option.name}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              checked={question_9 === option.name}
              onChange={() => handleChange(option.name, "question_9")}
            />
            {option.value}
          </label>
        ))}
      </div>

      <div className="w-full flex items-center gap-5 justify-end">
        <button
          onClick={() => setCurrent("anim2")}
          className="w-max h-[30px] flex items-center justify-center px-4 cursor-pointer p-2 border-2 border-primary bg-transparent  rounded-md"
        >
          Prev
        </button>
        <button
          onClick={handleProceed}
          className="w-max h-[30px] flex items-center justify-center text-white px-4 cursor-pointer p-2 bg-primary rounded-md"
        >
          Finish
        </button>
      </div>
    </div>
  );
};
