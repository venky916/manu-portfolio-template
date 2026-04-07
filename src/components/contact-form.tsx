"use client";
import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all the fields");
      return;
    }

    console.log("handle submit clicked");
    // Handle form submission logic here
    // integrate api later

    // Mock Api Call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Form submitted successfully");
      }, 2000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section my-6 border-y border-neutral-200 px-4 py-12"
    >
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium tracking-tight text-neutral-600"
            htmlFor="name"
          >
            full name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Tyler Durden"
            className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="tyler@projectmayhem.com"
            className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="You are crazy good,never change brother!"
            className="shadow-aceternity focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 cursor-pointer rounded-md py-2 text-sm font-medium text-white transition-colors focus:outline-none"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
