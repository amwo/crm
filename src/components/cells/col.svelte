<script>
    export let center = false
    export let w = 0
</script>
<style>
    div {
        width: calc(100% - 20px);
        flex: 1;
        padding: 0 10px;
    }
    .center {
        justify-content: center;
        align-items: center;
        display: flex;
    }
</style>
<div class:center="{center}" style="width:{w}px; {w ? 'flex: none' : null}"><slot></slot></div>
