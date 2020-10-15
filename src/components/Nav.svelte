<script>
	export let segment;
</script>

<nav class="wrapper mx-auto py-2">
	<ul class="space-x-4 flex justify-between">
		<li><a
			aria-current="{segment === undefined ? 'page' : undefined}"
			class="{segment === undefined ? '' : 'underline'}"
			href=".">
			Home
		</a></li>
		<li><a
			aria-current="{segment === 'pee' ? 'page' : undefined}"
			class="{segment === 'pee' ? '' : 'underline'}"
			href="pee">Pee Log</a>
		</li>
		<li><a
			aria-current="{segment === 'food' ? 'page' : undefined}"
			class="{segment === 'food' ? '' : 'underline'}"
			href="food">Food Log</a>
		</li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>
