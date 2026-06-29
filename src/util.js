// Stops navigation for placeholder ("#") anchors so demo links don't jump the
// page, while letting real links (mailto:, #section ids) behave normally.
export const preventHash = (e) => {
  if (e.currentTarget.getAttribute('href') === '#') e.preventDefault()
}

// Opens external (http/https) links in a new tab; leaves mailto: and in-page
// anchors alone.
export const extAttrs = (href) =>
  href && /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
