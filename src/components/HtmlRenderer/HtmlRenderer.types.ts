import React from 'react'

export interface IHtmlRenderer extends React.HTMLAttributes<HTMLDivElement> {
  html: string
}
