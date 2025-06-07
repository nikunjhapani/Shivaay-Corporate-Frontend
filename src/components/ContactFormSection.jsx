"use client";
import React, { useState } from "react";
import axios from "axios";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/inquiry/getAllApi",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFormData({ firstName: "", lastName: "", email: "", comment: "" });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-10">
            <h2
              className="text-34 md:text-30 sm:text-24 capitalize"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              Leave us your info
            </h2>
            <form
              onSubmit={handleSubmit}
              className="contactForm row y-gap-30 pt-30"
              noValidate
            >
              <div className="col-md-6">
                <div className="form-input">
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className=""
                  />
                  <label className="lh-1 text-14 text-light-1">
                    First Name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-input">
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className=""
                  />
                  <label className="lh-1 text-14 text-light-1">Last Name</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-input">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className=""
                  />
                  <label className="lh-1 text-14 text-light-1">Email</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-input">
                  <textarea
                    name="comment"
                    required
                    rows={8}
                    value={formData.comment}
                    onChange={handleChange}
                    className="border-1"
                  />
                  <label className="lh-1 text-14">Comment</label>
                </div>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="button -md -type-2 bg-accent-2 -accent-1 text-white"
                >
                  SEND YOUR MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
