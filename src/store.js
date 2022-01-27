import { writable } from 'svelte/store'

const xmlData1 = `
<root>
  <item>
    <a>wow11</a>
    <b>wow21</b>
    <c>wow31</c>
  </item>
  <item>
    <a>wow12</a>
    <b>wow22</b>
    <c>wow32</c>
  </item>
  <item1>
    <c>wow6</c>
    <b>wow5</b>
    <d>wow4</d>
  </item1>
</root>
`
export let xmlData = writable(xmlData1)