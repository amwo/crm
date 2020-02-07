<script>
    import { fly } from 'svelte/transition'
    export let avatar = ''
    let visibility = false

    const visible = () => {
        visibility = !visibility
    }
</script>
<style>
    .wrap {
        user-select: none;
        position: relative;
    }
    .avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border: 2px solid #222;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
    }
    .avatar.on {
        border: 2px solid #fff;
    }
    nav {
        position: absolute;
        top: 54px;
        left: -20px;
        background: #fff;
        border-radius: 7px;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
    }
    nav:after {
        background: #fff;
        content: '';
        width: 6px;
        height: 6px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
        top: -3px;
        right: 50%;
        margin-right: -3px;
        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: -1;
    }
    nav ul {
        padding: 10px 0;
    }
    nav ul li {
        text-align: center;
        letter-spacing: .3px;
        cursor: pointer;
        padding: 7px 20px;
        display: block;
        color: #000;
        font-size: 12px;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
    }
    nav ul li:hover {
        background: #ebebeb;
    }
</style>

<div class="wrap">
    <div on:click={visible} class="avatar" class:on='{visibility}' style="background: #111 url({avatar}) no-repeat center center;background-size: cover" ></div>

    {#if visibility}
        <div class="list">
            <nav in:fly="{{ y: 20, duration: 500 }}" out:fly="{{ y: 20, duration: 500 }}">
                <ul>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    {/if}

</div>
