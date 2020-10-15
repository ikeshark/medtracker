<svelte:head>
  <title>Food Log</title>
</svelte:head>

<script>
  let isHistoryShown = false;

  // const foodInit = {
  //   time: null,
  //   name: null
  // };
  let food;

  let foodHistory = [];
  if (process.browser) {
    foodHistory = !!localStorage.foodHistory ?
      JSON.parse(localStorage.foodHistory) :
      [];
  }

  function showHistory() {
		isHistoryShown = true;
	}

  function submitFood() {
		foodHistory.push({
      time: new Date().getTime(),
      name: food
    });
		if (process.browser) {
			localStorage.foodHistory = JSON.stringify(foodHistory);
		}
		food = '';
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
		foodHistory.forEach(history => {
			const date = formatDate(history.time);

			if (!formatted[date]) {
				formatted[date] = [history]
			} else {
				formatted[date].push(history)
			}

		});
		return Object.entries(formatted);
	}
</script>

<h1 class="text-blue-400 bold text-3xl md:text-4xl text-center">Food Log</h1>
<form class="space-y-4" on:submit|preventDefault={submitFood}>
  <label class="space-y-1 block text-center">
    <span class="text-xl">Food name</span>
    <input class="shadow-sm bg-gray-900 border-2 rounded border-blue-300"
      bind:value={food}
    />
  </label>
  <button class="text-black border-2 bg-white border-solid rounded-lg shadow-sm border-blue-500 px-3 py-1 block mx-auto text-xl">
    Add Food
  </button>
</form>


{#if Object.values(foodHistory).length}
	<button
		class="mt-4 block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700"
		on:click={showHistory}
	>
		Show History
	</button>
{/if}

{#if isHistoryShown}
	<h2 class="text-blue-300 bold text-2xl md:text-3xl text-center">Pee History</h2>
	<table>
		<tr>
			<th>Date</th>
			<th>Name</th>
		</tr>
		{#each formatHistory() as food}
			<tr>
				<th>{food[0]}</th>
        <th></th>
			</tr>
			{#each food[1] as history}
			<tr>
				<td>{formatTime(history.time)}</td>
				<td>{history.name}</td>
			</tr>
			{/each}
		{/each}
	</table>
{/if}

<style>
  tr > * {
    padding: .125rem 1rem 0 0;
  }
</style>
