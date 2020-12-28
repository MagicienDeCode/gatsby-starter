import './global.less'

import React, { ReactNode } from 'react'

interface GlobalLayoutProps {
  children: ReactNode
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return <div>{children}</div>
}
