<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<div class="px-4 md:px-0">
	<Nav {segment}/>

	<main class="wrapper bg-gray-800 text-white p-4 md:p-8 mx-auto shadow">
		<slot></slot>
	</main>
</div>
