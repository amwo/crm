<script>
    export let w = 0
    export let h = '100%'
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div style="width: {w}px; height: {h}">
    <slot></slot>
</div>
