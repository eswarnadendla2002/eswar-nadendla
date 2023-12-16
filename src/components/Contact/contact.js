import React, { useState } from "react";
import axios from 'axios'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('')
  const [hidden, setHidden] = useState('hidden')
  const [value, setValue] = useState(0)
  const nameChange = (e) => {
    setName(e.target.value)

  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const phoneChange = (e) => {
    setPhone(e.target.value)
  }

  const companyChange = (e) => {
    setCompany(e.target.value)
  }
  const messageChange = (e) => {
    setMessage(e.target.value)
  }

  // const valueClick = () => {
  //   const alertDiv = document.getElementById("alertDiv");
  //   if (alertDiv) {
  //    setTimeout(()=>{
  //     alertDiv.remove()
  //    },5000)
  //   }
  // };

  const data = {
    name: name,
    email: email,
    phone: phone,
    company: company,
    message: message
  }
  const submitHandler = (e) => {
    const url = "https://eswar-nadendla.onrender.com/create";
    // const url = "http://localhost:5000/Signup-Login/login";
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200) {
          console.log("Successfully added!")
          setValue(res.status);
          setHidden('block')
          setTimeout(()=>{
            setHidden('hidden')
          },3000)

          setCompany('')
          setEmail('')
          setName('')
          setPhone('')
          setMessage('')
        }
      })
      .catch((err) => {

        console.log('Error!Something went wrong!')
        setValue(400)
        setHidden('block')
        setTimeout(()=>{
          setHidden('hidden')
        },3000)

      }
      )


    e.preventDefault();
  }


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
                  value={name}
                  onChange={nameChange}
                />

                <input
                  type="email"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Email"
                  value={email}
                  onChange={emailChange}
                />

                <input
                  type="tel"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Phone"
                  value={phone}
                  onChange={phoneChange}
                />

                <input
                  type="text"
                  class="bg-gray-50 border border-smallTextColor text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                  placeholder="Company"
                  value={company}
                  onChange={companyChange}
                />
              </div>

              <textarea
                rows="4"
                class="text-color-primary-dark border-smallTextColor border text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                placeholder="Message"
                value={message}
                onChange={messageChange}

              ></textarea>

              <div className="flex items-center align-items-center justify-center mt-10" >
                <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500" onClick={submitHandler}>
                  <i class="ri-send-plane-line"></i>Let's Talk
                </button>
              </div>

              {
                value === 200 ?

                  <div id="alertDiv" class={`${hidden} bg-green-300 mt-4 mx-8 md:mx-24 lg:mx-32 py-2 px-4 rounded-md text-white text-center bottom-4 right-4 gap-4`}>
                    <p>Success! Your request have been sent.</p>
                    <span class="cursor-pointer font-bold absolute top-0 right-0" ><sup>X</sup></span>
                  </div>
                  :
                  <div id="alertDiv" className={`bg-red-300 mt-4 mx-8 md:mx-24 ${hidden} lg:mx-32 py-2 px-4 rounded-md text-white text-center bottom-4 right-4 gap-4`}>
                    <p>Error! Something went wrong!</p>
                    <span class="cursor-pointer font-bold absolute top-0 right-0" ><sup>X</sup></span>
                  </div>
              }
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
