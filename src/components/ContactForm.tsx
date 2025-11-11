import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! (No backend connected)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-pink-700 via-pink-600 to-pink-500 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-berkshire mb-6 text-center drop-shadow-md">
        Get In Touch With Us 💬
      </h2>
      <p className="max-w-lg text-center text-pink-100 mb-10">
        Whether you’re a survivor, supporter, or volunteer — we’d love to hear
        from you. Together, we can make a difference.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[60%] lg:w-[40%] bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-pink-200 rounded-lg p-3 bg-white/20 text-white placeholder:text-pink-100 focus:ring-2 focus:ring-white outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-pink-200 rounded-lg p-3 bg-white/20 text-white placeholder:text-pink-100 focus:ring-2 focus:ring-white outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-white">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-pink-200 rounded-lg p-3 bg-white/20 text-white placeholder:text-pink-100 focus:ring-2 focus:ring-white outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-pink-700 font-semibold py-3 rounded-lg hover:bg-pink-100 transition shadow-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
