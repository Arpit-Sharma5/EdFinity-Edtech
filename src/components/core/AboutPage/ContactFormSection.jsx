import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto'>
      <h1 className='text-center text-4xl font-semibold'>
        Get in Touch
      </h1>
      <p className='text-center text-brownred-200 mt-3'>
        We'd love to here for you, Please fill out this form.
      </p>
      <div className='mt-12 mx-auto bg-brownred-600 py-10 px-10 rounded-lg w-11/12 max-w-maxContent'>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection
