"use client";

import React, { useState } from "react";
import axios from "axios";
import api from "../utils/axios";
import { useIsClient } from "./AOSProvider";

export default function ContactFormSection() {

  const isClient = useIsClient();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${api.defaults.baseURL}api/inquiry/createApi`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.isSuccess) {
        setSuccess(response.data.message || "Form submitted successfully!");
        setError("");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          comment: "",
        });
      } else {
        setSuccess("");
        setError(response.data?.message || "Something went wrong.");
      }

      setTimeout(() => {
        setSuccess("");
        setError("");
      }, 4000);
    } catch (err) {
      console.error("Error:", err);
      setSuccess("");
      setError("Failed to submit form. Please try again.");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-10">
            <h2
              className="text-34 md:text-30 sm:text-24 capitalize"
              {...(isClient && { "data-aos": "fade-up" })}
            >
              Leave us your info
            </h2>

            <form
              onSubmit={handleSubmit}
              className="contactForm row y-gap-30 pt-30"
              // noValidate
            >
              <div className="col-md-6">
                <div
                  className={`form-input ${
                    formData.firstName.trim() !== "" ? "has-value" : ""
                  }`}
                >
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <label className="lh-1 text-14 text-light-1">
                    First Name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className={`form-input ${
                    formData.lastName.trim() !== "" ? "has-value" : ""
                  }`}
                >
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <label className="lh-1 text-14 text-light-1">Last Name</label>
                </div>
              </div>

              <div className="col-12">
                <div
                  className={`form-input ${
                    formData.email.trim() !== "" ? "has-value" : ""
                  }`}
                >
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label className="lh-1 text-14 text-light-1">Email</label>
                </div>
              </div>

              <div className="col-12">
                <div
                  className={`form-input ${
                    formData.comment.trim() !== "" ? "has-value" : ""
                  }`}
                >
                  <textarea
                    name="comment"
                    required
                    rows={8}
                    className="border-1"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                  <label className="lh-1 text-14">Comment</label>
                </div>
              </div>

              <div className="col-12 text-right">
                <button
                  type="submit"
                  className="button -md -type-2 bg-accent-2 -accent-1 text-white"
                >
                  SEND YOUR MESSAGE
                </button>
              </div>

              {success && (
                <div className="alert alert-success mb-20 col-12">
                  <p className="text-green-700 bg-green-100 p-3 rounded">
                    {success}
                  </p>
                </div>
              )}

              {error && (
                <div className="alert alert-error mb-20 col-12">
                  <p className="text-red-700 bg-red-100 p-3 rounded">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
