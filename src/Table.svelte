<script>
  import { xmlData } from './store.js'
  import { XMLParser } from 'fast-xml-parser'

  const options = {
    ignoreAttributes: false
  }
  const parser = new XMLParser(options);

  let keys = {}
  let items = {}
  let title = ''
  let toggle = true
  
  function getKeysAndItems(objectData, titleData, itemData) {
    let tmp_title = titleData
    let tmp_item = itemData
    Object.entries(objectData).forEach(
      ([key, value]) => {
        if(typeof value === "object") {
          toggle = true
          tmp_title = !!Number(key) || Number(key) === 0 ? titleData : key
          return getKeysAndItems(value, tmp_title, value)
        } 
        if(toggle) { // run once
          toggle = false

          // get keys
          Object.entries(tmp_item).forEach(([k]) => {
            !keys[tmp_title.toString()] ? keys[tmp_title.toString()] = [] : undefined
            keys[tmp_title].indexOf(k) === -1 && keys[tmp_title].push(k)
          })
          
          // get item
          !items[tmp_title.toString()] ? items[tmp_title.toString()] = [] : undefined
          items[tmp_title.toString()].push(tmp_item)
        }
      }
    )
    // title = tmp_title
  }
  
  $: jsonData = parser.parse($xmlData)
  $: if(Object.keys(jsonData).length > 0) {
    console.log(jsonData)
    keys = {}
    items = {}
    title = ''
    toggle = true
    getKeysAndItems(jsonData, 'root', jsonData)
  } else {
    console.log("error")
  }
</script>

<div>
  <!-- <h2>{title}</h2> -->

  {#each Object.entries(keys) as header}
  <table>
      <col>
      <colgroup span={header[1].length}></colgroup>
      <tr>
        <th colspan={header[1].length} scope="colgroup">
          {header[0]}
        </th>
      </tr>
      <tr>
        {#each header[1] as col}
          <th>
            {col}
          </th>
        {/each}
      </tr>
      {#each items[header[0]] as row}
        <tr>
          {#each header[1] as key}
            <td>
              {!!row[key] ? row[key] : ''}
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  {/each}
</div>

<style>
  div {
    width: 100%;
  }
  table {    
    min-width: 300px;
    margin: 0.5rem;
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
  }
  th {
    background-color: #ddd;
  }
  td {
    padding: 0.3em;
  }
</style>