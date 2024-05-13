import React from "react";
import { myFetch } from "@/utils/myFetch";

export default function ContactForm() {

  const [formData, setFormData] = React.useState({});
  const [submitting , setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    setSubmitting(true);

    try {
    let url = "/api/contact"
    let data = await myFetch(url, "POST", formData);

    console.log(data);
    setSubmitted(true);

    }
    catch (e) { 
        console.log(e);
    } 
    finally{
        setSubmitting(false);
    }
    
    // console.log(name, email, password, address);
}

    if (submitted) {
      return(
        <div className="p-4">
          <p className="text-success">Form submission is successful. Our team will contact you soon.</p>
        </div>
      )
    }


    return (

        <form >
                <h2 className="text-3xl font-bold mb-2">Get a Free Quote</h2>
                
                  <div className="pt-2">
                    <label
                      className="block text-sm opacity-80 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="input w-full"
                      id="name"
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}

                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="pt-2">
                    <label
                      className="block text-sm opacity-80 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="input w-full"
                      id="email"
                      type="email"

                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}

                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="pt-2">
                    <label
                      className="block text-sm opacity-80 font-bold mb-2"
                      htmlFor="contact"
                    >
                      Mobile
                    </label>
                    <input
                      className="input w-full"
                      id="contact"
                      type="text"

                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                    ></input>
                  </div>
                  
                  {!submitting &&<div className="pt-4">
                    <input onClick={handleSubmit} type="submit" className="btn btn-primary" />
                  </div>}

                  {submitting && <div className="pt-4">
                    <button className="btn">
                      <span className="loading loading-spinner"></span>
                      loading
                    </button>
                  </div>

                  }


              </form>
    )
}