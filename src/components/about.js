import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Portrait from "./portrait"
import Stack from "./stack"

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32"
    >
      <div className="w-48 h-48 mx-auto mt-12 mb-10 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
        <Portrait />
      </div>
      <div className="text-gray-800 dark:text-white">
        <div className="mx-auto mb-24">
          <p className="font-bold leading-snug text-left text-1xl md:text-center sm:text-2xl md:text-3xl lg:text-4xl font-header">
            <FormattedMessage id="about.intro" />
          </p>
        </div>
        <div className="mb-24">
          <h3 className="mb-8 text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary">
            <FormattedMessage id="stack.title" />
          </h3>
          <Stack />
        </div>
      </div>
    </section>
  )
}

export default About
