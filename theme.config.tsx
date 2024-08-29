import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Radiant Hack</span>,
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  project: {
    link: 'https://github.com/matt-gefen/radiant-hack',
  },
  footer: {
    text: 'Made with Nextra Docs Template',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Radiant Hack'
      }
    } else {
      return {
        titleTemplate: 'Radiant Hack'
      }
    }
  }
}

export default config
