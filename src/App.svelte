<script>
	import Table from './Table.svelte'
	import TextArea from './TextArea.svelte'
</script>

<header>
	<h1>XML TABLE VIEWER</h1>
</header>

<main>
	<TextArea/>
	<Table/>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	header {
		background-color: ivory;
		grid-column: 1/3;
		padding: 5px;
		padding-left: 10px;
	}
	main {
		background-color: #eee;
		box-sizing: border-box;
		display: flex;
	}
</style>