import Accordion from "./Components/Accordion";
import "./styles.css";

const faqs = [
  {
    title: "What is React ?",
    text: "React is a JavaScript library developed by Facebook for building fast and interactive user interfaces, especially single-page applications.",
  },
  {
    title: "What are components in React ?",
    text: "Components are the building blocks of a React application. They are reusable pieces of code that return UI elements (usually JSX).",
  },
  {
    title: "What is JSX ?",
    text: "JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside JavaScript. It makes the UI easier to describe and understand.",
  },
  {
    title: "What is the difference between functional and class components ?",
    text: "Functional components are simple JavaScript functions that return JSX. Class components use ES6 classes and can hold their own state and lifecycle methods (older React style).",
  },
  {
    title: "What are props in React ?",
    text: "Props (short for properties) are read-only inputs passed from parent components to child components. They are used to pass data or functions.",
  },
  {
    title: "What is the difference between state and props ?",
    text: "State: managed inside the component and can change. Props: passed from outside and cannot be changed by the component.",
  },
  {
    title: "What is useEffect used for ?",
    text: "useEffect allows you to perform side effects in functional components — like fetching data, updating the DOM, or setting up subscriptions.",
  },
  {
    title: "What is useEffect used for ?",
    text: "useEffect allows you to perform side effects in functional components — like fetching data, updating the DOM, or setting up subscriptions.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
