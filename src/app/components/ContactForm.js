import React from "react";
import { myFetch } from "@/utils/myFetch";
import Cookies from "js-cookie"; // For cookie handling

export default function ContactForm() {
  const [formData, setFormData] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  React.useEffect(() => {
    // Check if the user has already submitted the form using a cookie
    // const formSubmitted = Cookies.get('formSubmitted');
    // if (formSubmitted) {
    //   setSubmitted(true); // Mark the form as already submitted
    // }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Honeypot trap to prevent bots
    if (formData.honeypot) {
      setErrorText("Something went wrong. Please try again later.");
      setSubmitting(false);
      return;
    }

    // Check if the form has already been submitted (cookie is present)
    if (Cookies.get('formSubmitted')) {
      setErrorText("You've already submitted this form. Please wait for 6 hours to submit again.");
      setSubmitting(false);
      return;
    }

    try {
      let url = "/api/contact";
      let data = await myFetch(url, "POST", formData);

      console.log(data);
      setSubmitted(true);

      // Set a cookie to expire in 6 hours
      Cookies.set('formSubmitted', 'true', { expires: 0.25 }); // 6 hours = 0.25 days
    } catch (e) {
      console.log(e);
      setErrorText("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-4">
        <p className="text-success">Form submission is successful. Our team will contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold mb-2">Get a Free Quote</h2>

      {errorText && <span className="py-2 text-error">{errorText}</span>}

      <div className="pt-2">
        <label className="block text-sm opacity-80 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="input w-full"
          id="name"
          type="text"
          required
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="pt-2">
        <label className="block text-sm opacity-80 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="input w-full"
          id="email"
          type="email"
          required
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="pt-2">
        <label className="block text-sm opacity-80 font-bold mb-2" htmlFor="mobile">
          Mobile
        </label>
        <input
          className="input w-full"
          id="mobile"
          type="text"
          required
          name="mobile"
          value={formData.mobile || ""}
          onChange={handleChange}
          placeholder="Enter your contact number"
        />
      </div>

      <div className="pt-2">
        <label className="block text-sm opacity-80 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          className="textarea w-full textarea-bordered"
          value={formData.message || ""}
          onChange={handleChange}
          placeholder="Write your message"
        ></textarea>
      </div>

      {/* Honeypot hidden field */}
      <input
        type="text"
        value={formData.honeypot || ""}
        onChange={handleChange}
        name="honeypot"
        style={{ display: 'none' }}
      />

      {!submitting && (
        <div className="pt-4">
          <input type="submit" className="btn btn-primary" />
        </div>
      )}

      {submitting && (
        <div className="pt-4">
          <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        </div>
      )}
    </form>
  );
}
