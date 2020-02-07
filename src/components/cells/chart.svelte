<script>
	import { onMount } from 'svelte';

    export let ratio = 0
    export let type = 'circle'

    let circle

    onMount(() => {
        const ctx = circle.getContext('2d')
        let diam = 80
        circle.width = diam
        circle.height = diam
        // Init Results
        let setRatio = ratio
        let deg = 360 / 100 * setRatio
        let radian = deg * Math.PI / 180
        let text
        let text_width
        // Outer
        ctx.beginPath()
        ctx.strokeStyle = '#333'
        ctx.lineWidth = 1
        ctx.arc(circle.width/2, circle.height/2, (circle.width/2) - 1, 0, Math.PI*2, false)
        ctx.stroke()
        // Inner
        ctx.beginPath()
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 1
        ctx.arc(circle.width/2, circle.height/2, (circle.width/2) - 1, 0 - 90*Math.PI/180, radian - 90*Math.PI/180, false)
        ctx.stroke()
        ctx.fillStyle = '#fff'
        ctx.font = '28px Helvetica'
        text = Math.floor(deg/360*100)
        text_width  = ctx.measureText(text).width
        ctx.fillText(text, circle.width/2 - text_width/2, circle.height/2 + 10)
    })
</script>

<style>
</style>

{#if type === 'circle'}
<div>
    <canvas width="0" height="0" bind:this={circle}></canvas>
</div>
{:else}
<div>
    <canvas width="0" height="0" bind:this={circle}></canvas>
</div>
{/if}
