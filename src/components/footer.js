import React from "react"
import Social from "./social"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import { TiHeart } from "react-icons/ti"

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="px-4 py-20 text-center bg-white border-t border-gray-400 dark:border-gray-800 dark:bg-gray-900"
    >
      <h3 className="font-bold text-gray-800 uppercase text-1xl dark:text-white font-bold">
        <FormattedMessage id="footer.socialConnect" />
      </h3>
      <div className="flex justify-center py-5 mb-4">
        <Social value="light dark cursor-pointer" />
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-200">
        <FormattedMessage id="footer.info" />{" "}
        <TiHeart className="inline align-baseline" style={{color: "red"}}/> Wahyudin ©{" "}
        {new Date().getFullYear()} <br />
      </p>
    </footer>
  )
};

export default injectIntl(Footer)
