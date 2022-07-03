import axios from 'axios'
axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('[name=csrf-token]').content

const formatExtension = (format) => (format === 'html' ? '' : `.${format}`)

export const checkFormCodePath = (options = { format: 'json' }) =>
  `/form_codes/check_code${formatExtension(options.format)}`

export const checkFormCode = (params) =>
  axios.get(checkFormCodePath(), { params: { code: params } })
