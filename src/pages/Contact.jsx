import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../utils/constants";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  return (
    <div
      className="flex bg-white flex-col rounded-sm p-6 border-b-2 cursor-pointer"
      onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base font-medium">{title}</h3>
        {isVisible ? <SlArrowUp /> : <SlArrowDown className="cursor-pointer" />}
      </div>
      {isVisible && (
        <p className="text-sm pt-2 text-slate-500">{description}</p>
      )}
    </div>
  );
};

const Contact = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center font-poppins">
      <h1 className="py-5 font-bold w-screen text-center text-2xl bg-slate-900 text-white">
        FAQs
      </h1>
      <div className="w-[80vw] flex-grow">
        {FAQ.map((question) => (
          <Section
            key={question.id}
            id={question.id}
            title={question.title}
            description={question.description}
            isVisible={visibleSection === question.id}
            setIsVisible={(param) => {
              if (param) {
                setVisibleSection(question.id);
              } else {
                setVisibleSection("");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
