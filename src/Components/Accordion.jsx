import { useState } from "react";
export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          number={i}
          title={el.title}
          key={el.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ number, title, children, curOpen, setCurOpen }) {
  const isOpen = curOpen === number;

  function handleToggle() {
    setCurOpen(isOpen ? null : number);
  }
  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
