<script>
	export let locale = 'en_US'
    export let title = '(No Title)'
</script>

<style>
    h1 { user-select: none }
    h1.ja {
    }
    h1.en {
        letter-spacing: 1px;
        font-size: 48px;
        text-transform: capitalize;
    }
</style>

{#if locale === 'ja_JP'}
    <h1 class="ja">{title}</h1>
{:else if locale === 'en_US'}
    <h1 class="en">{title}</h1>
{:else}
    <h1 class="en">{title}</h1>
{/if}
