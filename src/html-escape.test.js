import htmlEscape from "./html-escape"

test("escapes brackets", () => {
  expect(htmlEscape("<script>")).toEqual("&lt;script&gt;")
})

test("escapes double quotes", () => {
  expect(htmlEscape('She said "Holla"')).toEqual("She said &quot;Holla&quot;")
})

test("escapes single quotes", () => {
  expect(htmlEscape("This project's tests are great")).toEqual("This project&#x27;s tests are great")
})

test("escapes backticks", () => {
  expect(htmlEscape("abc`def`")).toEqual("abc&#x60;def&#x60;")
})
