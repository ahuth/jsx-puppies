const chars = {
	"&": "&amp;",
	">": "&gt;",
	"<": "&lt;",
	'"': "&quot;",
	"'": "&#x27;",
	"`": "&#x60;",
}
const regex = new RegExp(Object.keys(chars).join("|"), "g");

export default function htmlEscape(html) {
  return String(html).replace(regex, match => chars[match])
}
