import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Radiants</span>,
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
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Radiants'
      }
    } else {
      return {
        titleTemplate: 'Radiants'
      }
    }
  }
}

export default config
