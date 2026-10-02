export const preventHash = (e) => {
  if (e.currentTarget.getAttribute('href') === '#') e.preventDefault()
}

export const extAttrs = (href) =>
  href && /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
