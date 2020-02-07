<script>
    import { onMount } from 'svelte';
	export let type = 'text'
	export let themes = 'dark'
	export let placeholder = ''
	export let value = ''
	export let icon = ''
	export let loading = false
	export let onkeydown = null
    export let label = ''
	export let t = null

    onMount(async () => t ? t.focus() : null)
</script>
<style>
    label {
        padding: 7px 17px;
        display: block;
        letter-spacing: 1.5px;
        font-size: 13px;
    }
    .r {
        position: relative;
    }
    input {
        font-family: 'Source Sans Pro', -apple-system, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
    }
    .dark.text:focus, .dark.email:focus, .dark.password:focus {
        border: 1px solid #fff;
    }
    .dark.text, .dark.email, .dark.password {
        color: #fff;
        border: 1px solid #000;
        background: #181818;
        border-radius: 7px;
        width: calc(100% - 32px);
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        font-size: 14px;
        padding: 13px 16px;
        letter-spacing: 1px;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
    }
    .dark.text.ico, .dark.email.ico, .dark.password.ico {
        color: #fff;
        border: 1px solid #000;
        background: #181818;
        border-radius: 7px;
        width: calc(100% - 64px);
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        font-size: 14px;
        padding: 13px 48px 13px 16px;
        letter-spacing: 1px;
    }

    input::-webkit-input-placeholder {
        color: #393939;
        letter-spacing: 2px;
        font-weight: 200;
    }
    input:-ms-input-placeholder {
        color: #393939;
        letter-spacing: 2px;
        font-weight: 200;
    }
    input::-moz-placeholder {
        color: #393939;
        letter-spacing: 2px;
        font-weight: 200;
    }
    .icon {
        position: absolute;
        top: 7px;
        right: 7px;
        background: #000;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
    }


    @-moz-keyframes plus-loader-top {
        2.5% {
            background: #f86;
            -moz-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -moz-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        13.75% {
            background: #ff430d;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        13.76% {
            background: #ffae0d;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        25% {
            background: #fc6;
            -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        27.5% {
            background: #fc6;
            -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -moz-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        41.25% {
            background: #ffae0d;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        41.26% {
            background: #2cc642;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        50% {
            background: #6d7;
            -moz-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        52.5% {
            background: #6d7;
            -moz-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -moz-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        63.75% {
            background: #2cc642;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        63.76% {
            background: #1386d2;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        75% {
            background: #4ae;
            -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        77.5% {
            background: #4ae;
            -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -moz-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        91.25% {
            background: #1386d2;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        91.26% {
            background: #ff430d;
            -moz-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        100% {
            background: #f86;
            -moz-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @-webkit-keyframes plus-loader-top {
        2.5% {
            background: #f86;
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        13.75% {
            background: #ff430d;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        13.76% {
            background: #ffae0d;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        25% {
            background: #fc6;
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        27.5% {
            background: #fc6;
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        41.25% {
            background: #ffae0d;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        41.26% {
            background: #2cc642;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        50% {
            background: #6d7;
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        52.5% {
            background: #6d7;
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        63.75% {
            background: #2cc642;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        63.76% {
            background: #1386d2;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        75% {
            background: #4ae;
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        77.5% {
            background: #4ae;
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        91.25% {
            background: #1386d2;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        91.26% {
            background: #ff430d;
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        100% {
            background: #f86;
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @keyframes plus-loader-top {
        2.5% {
            background: #f86;
            -moz-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -moz-animation-timing-function: ease-in;
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        13.75% {
            background: #ff430d;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        13.76% {
            background: #ffae0d;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-out;
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        25% {
            background: #fc6;
            -moz-transform: rotateY(180deg);
            -ms-transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        27.5% {
            background: #fc6;
            -moz-transform: rotateY(180deg);
            -ms-transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -moz-animation-timing-function: ease-in;
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        41.25% {
            background: #ffae0d;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        41.26% {
            background: #2cc642;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-out;
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        50% {
            background: #6d7;
            -moz-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        52.5% {
            background: #6d7;
            -moz-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -moz-animation-timing-function: ease-in;
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        63.75% {
            background: #2cc642;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        63.76% {
            background: #1386d2;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-out;
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        75% {
            background: #4ae;
            -moz-transform: rotateY(180deg);
            -ms-transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        77.5% {
            background: #4ae;
            -moz-transform: rotateY(180deg);
            -ms-transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -moz-animation-timing-function: ease-in;
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        91.25% {
            background: #1386d2;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        91.26% {
            background: #ff430d;
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -webkit-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -moz-animation-timing-function: ease-in;
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        100% {
            background: #f86;
            -moz-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @-moz-keyframes plus-loader-bottom {
        0% {
            background: #fc6;
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        50% {
            background: #fc6;
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        75% {
            background: #4ae;
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        100% {
            background: #4ae;
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @-webkit-keyframes plus-loader-bottom {
        0% {
            background: #fc6;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        50% {
            background: #fc6;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        75% {
            background: #4ae;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        100% {
            background: #4ae;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @keyframes plus-loader-bottom {
        0% {
            background: #fc6;
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        50% {
            background: #fc6;
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        75% {
            background: #4ae;
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        100% {
            background: #4ae;
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @-moz-keyframes plus-loader-background {
        0% {
            background: #f86;
            -moz-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
        25% {
            background: #f86;
            -moz-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        27.5% {
            background: #6d7;
            -moz-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
        }
        50% {
            background: #6d7;
            -moz-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        52.5% {
            background: #6d7;
            -moz-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
        }
        75% {
            background: #6d7;
            -moz-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        77.5% {
            background: #f86;
            -moz-transform: rotateZ(270deg);
            transform: rotateZ(270deg);
        }
        100% {
            background: #f86;
            -moz-transform: rotateZ(270deg);
            transform: rotateZ(270deg);
            -moz-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @-webkit-keyframes plus-loader-background {
        0% {
            background: #f86;
            -webkit-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
        25% {
            background: #f86;
            -webkit-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        27.5% {
            background: #6d7;
            -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
        }
        50% {
            background: #6d7;
            -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        52.5% {
            background: #6d7;
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
        }
        75% {
            background: #6d7;
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        77.5% {
            background: #f86;
            -webkit-transform: rotateZ(270deg);
            transform: rotateZ(270deg);
        }
        100% {
            background: #f86;
            -webkit-transform: rotateZ(270deg);
            transform: rotateZ(270deg);
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    @keyframes plus-loader-background {
        0% {
            background: #f86;
            -moz-transform: rotateZ(180deg);
            -ms-transform: rotateZ(180deg);
            -webkit-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
        25% {
            background: #f86;
            -moz-transform: rotateZ(180deg);
            -ms-transform: rotateZ(180deg);
            -webkit-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        27.5% {
            background: #6d7;
            -moz-transform: rotateZ(90deg);
            -ms-transform: rotateZ(90deg);
            -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
        }
        50% {
            background: #6d7;
            -moz-transform: rotateZ(90deg);
            -ms-transform: rotateZ(90deg);
            -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        52.5% {
            background: #6d7;
            -moz-transform: rotateZ(0deg);
            -ms-transform: rotateZ(0deg);
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
        }
        75% {
            background: #6d7;
            -moz-transform: rotateZ(0deg);
            -ms-transform: rotateZ(0deg);
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
        77.5% {
            background: #f86;
            -moz-transform: rotateZ(270deg);
            -ms-transform: rotateZ(270deg);
            -webkit-transform: rotateZ(270deg);
            transform: rotateZ(270deg);
        }
        100% {
            background: #f86;
            -moz-transform: rotateZ(270deg);
            -ms-transform: rotateZ(270deg);
            -webkit-transform: rotateZ(270deg);
            transform: rotateZ(270deg);
            -moz-animation-timing-function: step-start;
            -webkit-animation-timing-function: step-start;
            animation-timing-function: step-start;
        }
    }
    .plus-loader:not(:required) {
        overflow: hidden;
        position: relative;
        text-indent: -9999px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: #f86;
        -moz-border-radius: 24px;
        -webkit-border-radius: 24px;
        border-radius: 24px;
        -moz-transform: rotateZ(90deg);
        -ms-transform: rotateZ(90deg);
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -moz-animation: plus-loader-background 3s infinite ease-in-out;
        -webkit-animation: plus-loader-background 3s infinite ease-in-out;
        animation: plus-loader-background 3s infinite ease-in-out;
    }
    .plus-loader:not(:required)::after {
        background: #f86;
        -moz-border-radius: 24px 0 0 24px;
        -webkit-border-radius: 24px;
        border-radius: 24px 0 0 24px;
        content: '';
        position: absolute;
        right: 50%;
        top: 0;
        width: 50%;
        height: 100%;
        -moz-transform-origin: 100% 50%;
        -ms-transform-origin: 100% 50%;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        -moz-animation: plus-loader-top 3s infinite linear;
        -webkit-animation: plus-loader-top 3s infinite linear;
        animation: plus-loader-top 3s infinite linear;
    }
    .plus-loader:not(:required)::before {
        background: #fc6;
        -moz-border-radius: 24px 0 0 24px;
        -webkit-border-radius: 24px;
        border-radius: 24px 0 0 24px;
        content: '';
        position: absolute;
        right: 50%;
        top: 0;
        width: 50%;
        height: 100%;
        -moz-transform-origin: 100% 50%;
        -ms-transform-origin: 100% 50%;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        -moz-animation: plus-loader-bottom 3s infinite linear;
        -webkit-animation: plus-loader-bottom 3s infinite linear;
        animation: plus-loader-bottom 3s infinite linear;
    }
</style>

<div class="r">
    {#if type === 'text'}
        {#if label}
            <label>{label}</label>
        {/if}
        <input class={themes+' '+type + (icon !== '' ? ' ico' : '')} type="text" placeholder={placeholder} bind:value={value} on:keydown={onkeydown} />
    {:else if type === 'email'}
        {#if label}
            <label>{label}</label>
        {/if}
        <input class={themes+' '+type + (icon !== '' ? ' ico' : '')} type="email" placeholder={placeholder} bind:value={value} on:keydown={onkeydown} bind:this={t} />
    {:else if type === 'password'}
        {#if label}
            <label>{label}</label>
        {/if}
        <input class={themes+' '+type + (icon !== '' ? ' ico' : '')} type="password" placeholder={placeholder} bind:value={value} on:keydown={onkeydown} bind:this={t} />
    {:else}
        {#if label}
            <label>{label}</label>
        {/if}
        <input class={themes+' '+type} type="text" placeholder={placeholder} bind:value={value} on:keydown={onkeydown} />
    {/if}
    {#if icon !== ''}
        <div class="icon">
            {#if icon !== '' && loading}
                <div class="plus-loader"></div>
            {:else}
                <img src={icon} width="12" height="auto" alt="" />
            {/if}
        </div>
    {/if}
</div>
