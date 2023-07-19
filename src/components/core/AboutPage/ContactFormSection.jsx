import React from 'react'
import ContactUsForm from "../../ContactPage/ContactUsForm"

const ContactFormSection = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center'>

        <h1>
          Get in touch
        </h1>
        <p>
        We'd love to here for you, Please fill out this form.

        </p>
        <div>
            <ContactUsForm/>
        </div>
      
    </div>
  )
}

export default ContactFormSection
