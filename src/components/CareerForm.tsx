"use client";

import React, { useState } from "react";
import api from "../utils/axios";
import axios from "axios";
import { vendored } from "next/dist/server/route-modules/pages/module.compiled";

export default function CareerForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });

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
        `${api.defaults.baseURL}api/career/createApi`,
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
          mobileNo: "",
          address: "",
          city: "",
          state: "",
          country: "",
          message: "",
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
      setSuccess("");
      setError("Failed to submit form. Please try again.");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <form className="contactForm row y-gap-30 pt-30" onSubmit={handleSubmit}>
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
          <label className="lh-1 text-14 text-light-1">First Name</label>
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

      <div className="col-6">
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

      <div className="col-6">
        <div
          className={`form-input ${
            formData.mobileNo.trim() !== "" ? "has-value" : ""
          }`}
        >
          <input
            name="mobileNo"
            type="text"
            required
            value={formData.mobileNo}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Mobile No.</label>
        </div>
      </div>

      <div className="col-12">
        <div
          className={`form-input ${
            formData.address.trim() !== "" ? "has-value" : ""
          }`}
        >
          <textarea
            name="address"
            rows={4}
            required
            className="border-1"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <label className="lh-1">Address</label>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className={`form-input ${
            formData.city.trim() !== "" ? "has-value" : ""
          }`}
        >
          <input
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">City</label>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className={`form-input ${
            formData.state.trim() !== "" ? "has-value" : ""
          }`}
        >
          <input
            name="state"
            type="text"
            required
            value={formData.state}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">State</label>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className={`form-input ${
            formData.country.trim() !== "" ? "has-value" : ""
          }`}
        >
          <input
            name="country"
            type="text"
            required
            value={formData.country}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Country</label>
        </div>
      </div>

      <div className="col-12">
        <div
          className={`form-input ${
            formData.message.trim() !== "" ? "has-value" : ""
          }`}
        >
          <textarea
            name="message"
            rows={8}
            required
            className="border-1"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label className="lh-1 text-14">Message</label>
        </div>
      </div>

      <div className="col-12 text-right">
        <button
          type="submit"
          className="button -md -type-2 bg-accent-2 -accent-1 text-white"
        >
          Submit
        </button>
      </div>

      {success && (
        <div className="alert alert-success mb-20">
          <p className="text-green-700 bg-green-100 p-3 rounded">{success}</p>
        </div>
      )}

      {error && (
        <div className="alert alert-error mb-20">
          <p className="text-red-700 bg-red-100 p-3 rounded">{error}</p>
        </div>
      )}
    </form>
  );
}
