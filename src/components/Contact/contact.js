import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div class="container py-14">
          <div class="text-center m-auto mb-20 md:w-1/2">
            <h4 class="font-bold text-smallTextColor mb-4 text-[35px]">
              Have A Question
            </h4>
            <h1 class="title text-[20px]">Get In Touch</h1>
          </div>

          <form>
            <div class="w-full m-auto text-center md:w-2/3 ">
              <div class="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                <input
                  type="text"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Name"
                />

                <input
                  type="email"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Email"
                />

                <input
                  type="tel"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Phone"
                />

                <input
                  type="text"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Company"
                />
              </div>

              <textarea
                rows="4"
                class="text-color-primary-dark border-smallTextColor border text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                placeholder="Message"
              ></textarea>

              <div className="flex items-center align-items-center justify-center mt-10">
                <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500">
                  <i class="ri-send-plane-line"></i>Let's Talk
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
