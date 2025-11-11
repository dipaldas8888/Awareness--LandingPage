import React from "react";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
