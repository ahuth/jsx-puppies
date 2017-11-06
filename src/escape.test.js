import escape from "./escape"

test("escapes brackets", () => {
  expect(escape("<script>")).toEqual("&lt;script&gt;")
})

test("escapes double quotes", () => {
  expect(escape('She said "Holla"')).toEqual("She said &quot;Holla&quot;")
})

test("escapes single quotes", () => {
  expect(escape("This project's tests are great")).toEqual("This project&#x27;s tests are great")
})

test("escapes backticks", () => {
  expect(escape("abc`def`")).toEqual("abc&#x60;def&#x60;")
})
