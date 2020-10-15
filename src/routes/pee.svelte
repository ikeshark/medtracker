<svelte:head>
	<title>Pee Log</title>
</svelte:head>

<script>
	let isPeeing = false;
	let isHistoryShown = false;

	const peeInit = {
		startTime: null,
		totalTime: null
	}
	let pee = { ...peeInit };
	let peeHistory = {};
	if (process.browser) {
		peeHistory = !!localStorage.peeHistory ?
			JSON.parse(localStorage.peeHistory) :
			{};
	}

	function submitPee() {
		peeHistory[pee.startTime] = pee.totalTime;
		if (process.browser) {
			localStorage.peeHistory = JSON.stringify(peeHistory);
		}
		pee = { ...peeInit };
	}

	function startPee() {
		isPeeing = true;
		pee.startTime = new Date().getTime();
	}
	function endPee() {
		isPeeing = false;
		pee.totalTime = new Date().getTime() - pee.startTime;
		submitPee();
	}
	function showHistory() {
		isHistoryShown = true;
	}

	function formatDate(epoch) {
		const dateObj = new Date(parseInt(epoch));
		return dateObj.toLocaleDateString('en-US')
	}
	function formatTime(epoch) {
		const dateObj = new Date(parseInt(epoch));
		return dateObj.toLocaleTimeString('en-US')
	}

	function formatHistory() {
		let formatted = {};
		Object.entries(peeHistory).forEach(history => {
			const date = formatDate(history[0]);

			if (!formatted[date]) {
				formatted[date] = [history]
			} else {
				formatted[date].push(history)
			}

		});
		return Object.entries(formatted);
	}
</script>

<h1 class="text-yellow-500 bold text-3xl md:text-4xl text-center">Pee Log</h1>

{#if !isPeeing}
	<button
		on:click={startPee}
		class="block mb-4 mx-auto rounded-md border-black border py-2 px-4 text-white bg-green-700"
	>
		Start Pee
	</button>
{:else if isPeeing}
	<button
		on:click={endPee}
		class="rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-red-700"
	>
		End Pee
	</button>
{/if}

{#if Object.values(peeHistory).length}
	<button
		class="block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700"
		on:click={showHistory}
	>
		Show History
	</button>
{/if}

{#if isHistoryShown}
	<h2 class="text-yellow-500 bold text-2xl md:text-3xl text-center">Pee History</h2>
	<table>
		<tr>
			<th>Date</th>
			<th>Length</th>
		</tr>
		{#each formatHistory() as pee}
			<tr>
				<th>{pee[0]}</th>
				<th></th>
			</tr>
			{#each pee[1] as history}
			<tr>
				<td>{formatTime(history[0])}</td>
				<td>{history[1] / 1000} seconds</td>
			</tr>
			{/each}
		{/each}
	</table>
{/if}
