<script>
    export let locale = 'en_US'
    export let title = '(No Title)'
    export let type = 'normal'
    export let onclick = null
</script>
<style>
    button {
        cursor: pointer;
        padding: 9px 40px;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        border-radius: 40px;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        background: transparent;
        color: #fff;
        text-transform: uppercase;
    }
    button:hover {
        background: #181818;
    }
    button.en {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
    }
    button.en.primary {
        background: #fff;
        color: #333;
    }
</style>

{#if locale === 'ja_JP'}
    <button class="ja">{title}</button>
{:else if locale === 'en_US' && type === 'primary'}
    <button class="en primary" on:click={onclick}>{title}</button>
{:else if locale === 'en_US'}
    <button class="en" on:click={onclick}>{title}</button>
{:else}
    <button class="en">{title}</button>
{/if}
