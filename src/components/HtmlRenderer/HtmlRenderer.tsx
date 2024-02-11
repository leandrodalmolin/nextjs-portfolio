import { useMemo } from 'react'
import DOMPurify from 'isomorphic-dompurify'
import { IHtmlRenderer } from './HtmlRenderer.types'

export function HTMLRenderer({ html, ...rest }: IHtmlRenderer) {
  const sanitizedHTML = useMemo(() => DOMPurify.sanitize(html), [html])
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} {...rest} />
}
