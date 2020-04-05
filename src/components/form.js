import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

const Form = () => {
  const blockStyle = "mb-6 md:mb-10"
  const labelStyle =
    "dark:text-secondary uppercase text-gray-800 font-bold text-xl font-header "
  const inputStyle =
    "w-full px-3 py-3 mt-2 text-lg text-gray-800 dark:bg-white border rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body bg-gray-100"

  return (
    <form
      name="contact"
      action="https://getform.io/f/55f50474-3eda-4bd4-a8e5-46b5c1760a22"
      method="post"
    >
      <div className={blockStyle}>
        <label className={labelStyle} htmlFor="fullName">
          <FormattedMessage id="form.fullName" />
          <input
            type="text"
            id="fullName"
            name="name"
            className={inputStyle}
            placeholder="Jhon Doe"
            required
          />
        </label>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle} htmlFor="email">
          <FormattedMessage id="form.email" />
          <input
            type="email"
            id="email"
            name="email"
            className={inputStyle}
            placeholder="hello@whydn.dev"
            required
          />
        </label>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle}>
          <FormattedMessage id="form.message" />
          <textarea
            name="message"
            className={inputStyle}
            rows="8"
            required
            />
        </label>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-12 py-2 mt-6 text-xl font-bold text-center text-white uppercase rounded-full cursor-pointer font-header bg-primary hover:bg-primary md:text-1xl dark:bg-secondary dark:text-gray-900 dark:hover:bg-secondary_light shadow-md"
          aria-label="Send an email"
        >
          <FormattedMessage id="form.send" />
        </button>
      </div>
    </form>
  )
}

export default Form
