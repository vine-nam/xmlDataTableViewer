<script>
  import { xmlData } from './store.js'
  let data = $xmlData
</script>

<textarea bind:value={data}></textarea>
<button on:click={() => { $xmlData = data }}>
  >>
</button>

<style>
	textarea {
		height: 100%;
		min-width: 300px;
	}
  button {
    height: 100%;
		min-width: 40px;
  }
</style>