<script>
    export let number = 100
    export let unit = ''
</script>

<style>
    p {
        font-size: 50px;
        letter-spacing: 2px;
        font-weight: 100
    }
    p span {
        margin-left: 8px;
        font-size: 32px;
    }
</style>

<p>{String(number).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}{#if unit}<span>{unit}</span>{/if}</p>
