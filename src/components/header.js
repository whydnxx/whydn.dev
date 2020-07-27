import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from "react-anchor-link-smooth-scroll"
import HeaderLayout from "./headerLayout"

class Header extends React.Component {
  state = {
    theme: null,
  }
  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  render() {
    return (
      <HeaderLayout>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <nav className="mb-1 sm:mb-0">
            <AnchorLink
              href="#work"
              className="cursor-pointer hover:text-primary dark:hover:text-secondary"
            >
              <FormattedMessage id="nav.work" />
            </AnchorLink>
            <AnchorLink
              href="#about"
              className="mx-6 cursor-pointer md:mx-8 hover:text-primary dark:hover:text-secondary"
            >
              <FormattedMessage id="nav.about" />
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="cursor-pointer hover:text-primary dark:hover:text-secondary"
            >
              <FormattedMessage id="nav.contact" />
            </AnchorLink>
          </nav>
          <div>
            <Language />
          </div>
          {/* <div className="flex justify-between sm:ml-2 sm:ml-6">
              {this.state.theme !== null ? (
                  <Toggle
                      icons={{
                        checked: (
                            <img
                                src={moon}
                                width="16"
                                height="16"
                                role="presentation"
                                style={{ pointerEvents: 'none' }}
                            />
                        ),
                        unchecked: (
                            <img
                                src={sun}
                                width="16"
                                height="16"
                                role="presentation"
                                style={{ pointerEvents: 'none' }}
                            />
                        ),
                      }}
                      checked={this.state.theme === 'dark'}
                      onChange={e =>
                          window.__setPreferredTheme(
                              e.target.checked ? 'dark' : 'light'
                          )
                      }
                  />
              ) : (
                  <div style={{ height: '24px' }} />
              )}
            </div> */}
        </div>
      </HeaderLayout>
    )
  }
}
export default injectIntl(Header)
