export default function ContactForm() {



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
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="pt-2">
                    <label
                      className="block text-sm opacity-80 font-bold mb-2"
                      htmlFor="contact"
                    >
                      Contact
                    </label>
                    <input
                      className="input w-full"
                      id="contact"
                      type="text"
                      placeholder="Enter your contact number"
                    ></input>
                  </div>
                  <div className="pt-4">
                    <button className="btn btn-primary">
                      Submit
                    </button>
                  </div>
              </form>
    )
}