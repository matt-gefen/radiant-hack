import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Guardians</span>,
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  project: {
    link: 'https://github.com/matt-gefen/radiant-hack/tree/v1.2',
  },
  footer: {
    text: `Guardians SRD by radiant-moon licensed under CC-BY`
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s'
      }
    } else {
      return {
        titleTemplate: 'Guardians'
      }
    }
  }
}3

export default config
