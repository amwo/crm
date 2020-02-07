<script>
    import { fly  } from 'svelte/transition'
    import {store} from '../../store.js'
    let visible = false
    const click = type => { visible = !visible }
    const add = async (type,task,locale) => {
        store.ws(type, 'TASK', 'en_US')
        visible = false
    }
</script>
<style>
    button {
        cursor: pointer;
        background: #fff;
        border-radius: 50%;
        vertical-align: middle;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        height: 48px;
        width: 48px;
        position: fixed;
        bottom: 23px;
        right: 60px;
        display: inline-block;
        border: 2px solid #fff;
        -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, .55);
        box-shadow: 0 0 15px rgba(0, 0, 0, .55);
        transition: all .4s ease;
        -o-transition: all .4s ease;
        -moz-transition: all .4s ease;
        -webkit-transition: all .4s ease;
        z-index: 999;
    }
    button.on {
        right: 100px;
        transform: rotate(-45deg)
    }
    .visible {
        color: #333;
        background: #fff;
        width: 140px;
        position: fixed;
        bottom: 100px;
        right: 55px;
        z-index: 1;
        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 7px;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        transition: all .3s ease;
        -o-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -webkit-transition: all .3s ease;

    }
    .visible ul {
        padding: 0;
        position: relative;
        z-index: 9999;
    }
    .visible ul:after {
        background: #fff;
        content: '';
        width: 16px;
        height: 16px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
        bottom: -8px;
        right: 50%;
        margin-right: -8px;
        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: -1
    }
    .visible ul li {
        background: #fff;
        font-weight: 600;
        cursor: pointer;
        font-size: 13px;
        font-family: 'Playfair Display', serif;
        border-bottom: 1px solid #e6e6e6;
        text-align: center;
        display: block;
        letter-spacing: 1px;
        padding: 13px 0
    }
    .visible ul li:first-child {
        border-top-left-radius: 7px;
        -webkit-border-top-left-radius: 7px;
        -moz-border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        -webkit-border-top-right-radius: 7px;
        -moz-border-top-right-radius: 7px;
    }
    .visible ul li:last-child {
        border-bottom-left-radius: 7px;
        -webkit-border-bottom-left-radius: 7px;
        -moz-border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        -webkit-border-bottom-right-radius: 7px;
        -moz-border-bottom-right-radius: 7px;
        border: none
    }
</style>

{#if visible}
<div class="visible" in:fly="{{ x: 100, duration: 400 }}" out:fly="{{ x: 100, duration: 400 }}" >
    <ul>
        <li on:click={() => add('ADD', 'TASK', 'en_US')}>Add</li>
        <li>Send</li>
    </ul>
</div>
{/if}

<button class:on='{visible}' on:click={() => click()}><img src="/icons/icon-add.svg" width="20" height="20" alt="What you want to do?" /></button>
