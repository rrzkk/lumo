import React, { useState } from "react";

const Accordion = ({ title, content, imagePath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center p-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-height duration-300 ease-linear ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div
          className="px-3 py-2"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {imagePath && isOpen && (
          <div className="px-3">
            <img
              src={imagePath}
              alt={title}
              className="w-24 h-24 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
