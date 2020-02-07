<script>
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'
	import Scroll from '../../components/parts/scroll.svelte'
    export let items = []
    export let current = ''
    export let align = ''
    let itr = 0
    let lineWidth = ''
    let linePosition = 0
    let tmp = 0
    let parent
    let firstElement

    const move = (e,i,code) => {
        itr = i
        for (let i = 0; i < parent.children.length; i++) {
            if(i < itr) {
                tmp += (parent.children[i].clientWidth + 50)
            }
        }
        linePosition = `${tmp}px`
        tmp = 0
        current = code
        lineWidth = `${e.target.clientWidth}px`
    }
</script>
<style>
    nav {
        user-select: none;
        margin-left: 30px;
        border-bottom: 1px solid #111;
    }
    div ul {
        position: relative;
        display: inline-block;
    }
    div ul li {
        cursor: pointer;
        font-size: 13px;
        display: inline-block;
        letter-spacing: 1.3px;
        margin-right: 50px;
        padding: 18px 0 18px 0;
        color: #333;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
        font-family: 'Playfair Display', serif;
        text-decoration: none;
    }
    div ul li.on {
        color: #fff;
    }
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .contents {
        display: flex;
        height: calc(100% - 50px);
        overflow: hidden;
    }
    .scene {
        width: 100%;
        height: 100%;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
        transform: translate(calc(-100% * var(--pos)), 0);
        flex-shrink: 0;
    }
    .line {
        position: absolute;
        bottom: 0;
        left: var(--linePosition);
        width: var(--lineWidth);
        border-bottom: 1px solid #fff;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
        height: 1px;
        padding: 0;
        margin: 0 0 -1px 0;
    }
    .center {
        text-align: center;
    }
</style>

<div class="container">
    <nav class:center='{align === 'center'}'>
        <ul bind:this={parent}>
            {#each items as item, i}
                {#if i === 0}
                    <li on:click={e => move(e,i,item.code)} class:on='{current === item.code}' bind:this={firstElement}>{item.name}</li>
                {:else}
                    <li on:click={e => move(e,i,item.code)} class:on='{current === item.code}'>{item.name}</li>
                {/if}
            {/each}
            <li class="line" style="--lineWidth:{lineWidth}; --linePosition:{linePosition}"></li>
        </ul>
    </nav>
    <div class="contents">
        {#each items as item, i}
            <section style="--pos:{itr};" class="scene">
                <Scroll>
                    <svelte:component this={item.component} />
                </Scroll>
            </section>
        {/each}
    </div>
</div>
