<script>
    import { stores } from '@sapper/app';
    import { fly, fade } from 'svelte/transition'
    export let segment
    const { page } = stores();
    let line = 0
    let linePosition = '15px'

    $: if ($page.path !== '/') {
        linePosition = '74px';
        line = 0
    } else {
        linePosition = '15px';
    }
    const menus = [
        {
            name: 'Dashboard',
            href: '/',
            locale: 'en_US',
            child: []
        },
        {
            name: 'Projects',
            href: '/projects/',
            locale: 'en_US',
            child: []
        },
        {
            name: 'Marketing',
            href: '/marketing/',
            locale: 'en_US',
            child: []
        },
        {
            name: 'Management',
            href: '/management/',
            locale: 'en_US',
            child: []
        },
        {
            name: 'Team',
            href: '/team/',
            locale: 'en_US',
            child: []
        },
        {
            name: 'Support',
            href: '/support/',
            locale: 'en_US',
            child: []
        }
    ]
</script>
<style>
    nav {
        margin: 50px 0 0;
        position: relative;
    }
    ul li {
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
    }
    ul li a {
        text-decoration:none;
        font-family: 'Playfair Display', serif;
        line-height: 1;
        font-size: 16px;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
        display: block;
        padding: 13px 0 13px 60px;
        letter-spacing: 1.9px;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    ul li a.projects { transform: translate(0,-47px); font-size: 26px }
    ul li a.marketing { transform: translate(0,-89px); font-size: 26px }
    ul li a.management { transform: translate(0,-131px); font-size: 26px }
    ul li a.team { transform: translate(0,-173px); font-size: 26px }
    ul li a.support { transform: translate(0,-215px); font-size: 26px }
    ul li.disable { opacity: 0;pointer-events: none; }
    .line {
        top: var(--linePosition);
        background: rgba(255,255,255,1);
        height: 12px;
        width: 42px;
        position: absolute;
        border-top-right-radius: 40px;
        -moz-border-top-right-radius: 40px;
        -webkit-border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        -moz-border-bottom-right-radius: 40px;
        -webkit-border-bottom-right-radius: 40px;
        transition: all .3s ease;
        -o-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -webkit-transition: all .3s ease;
    }
    .second {
        width: 100%;
        position: absolute;
        top: 60px;
    }
    .second li a {
        font-size: 16px!important;
    }
    .back {
        cursor: pointer;
        position: absolute;
        left: 20px;
        top: 3px;
        z-index: 99;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        background: transparent;
    }
    .back a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .back img {
        filter: invert(1)
    }
</style>
<aside>
    <nav>
        {#if segment !== undefined}
            <div class="back" in:fly="{{ x: -30, duration: 500 }}" out:fly="{{ x: -30, duration: 500 }}">
                <a href="/">
                    <img src="/icons/icon-back.svg" width="" height="" alt="" />
                </a>
            </div>
        {/if}

        <ul>
            <li class:disable='{segment !== undefined && segment !== 'month'}'><a rel=prefetch class:selected='{segment === undefined}' href='.'>Dashboard</a></li>
            <li class:disable='{segment !== 'projects' && segment !== undefined && segment !== 'month'}'><a rel=prefetch class:projects='{segment === 'projects'}' href='/projects/'>Projects</a></li>
            <li class:disable='{segment !== 'marketing' && segment !== undefined && segment !== 'month'}'><a rel=prefetch class:marketing='{segment === 'marketing'}' href='/marketing/'>Marketing</a></li>
            <li class:disable='{segment !== 'management' && segment !== undefined && segment !== 'month'}'><a rel=prefetch class:management='{segment === 'management'}' href='/management/'>Management</a></li>
            <li class:disable='{segment !== 'team' && segment !== undefined && segment !== 'month'}'><a rel=prefetch class:team='{segment === 'team'}' href='/team/'>Team</a></li>
            <li class:disable='{segment !== 'support' && segment !== undefined && segment !== 'month'}'><a rel=prefetch class:support='{segment === 'support'}' href='/support/'>Support</a></li>
            <li class="line" style="--linePosition: {linePosition}"></li>
        </ul>

        {#if segment === 'projects'}
            <ul class="second" in:fly="{{ y: 30, duration: 500 }}">
                <li><a rel=prefetch href='/'>All</a></li>
                <li><a rel=prefetch href='/'>Archives</a></li>
            </ul>
        {/if}

        {#if segment === 'marketing'}
            <ul class="second" in:fly="{{ y: 30, duration: 500 }}">
                <li><a rel=prefetch href='/'>Analysis</a></li>
                <li><a rel=prefetch href='/'>Research</a></li>
                <li><a rel=prefetch href='/' >Strategies</a></li>
                <li><a rel=prefetch href='/' >Internet</a></li>
                <li><a rel=prefetch href='/' >Telemarketing</a></li>
                <li><a rel=prefetch href='/' >Mail</a></li>
                <li><a rel=prefetch href='/' >Direct</a></li>
                <li><a rel=prefetch href='/' >Pricing</a></li>
                <li><a rel=prefetch href='/' >Services</a></li>
                <li><a rel=prefetch href='/' >Branding</a></li>
            </ul>
        {/if}

        {#if segment === 'management'}
            <ul class="second" in:fly="{{ y: 30, duration: 500 }}">
                <li><a rel=prefetch href='/management/payments/'>Payments</a></li>
                <li><a rel=prefetch href='/management/invoices/'>Invoices</a></li>
                <li><a rel=prefetch href='/management/quotations/' >Quotations</a></li>
                <li><a rel=prefetch href='/management/clients/' >Clients</a></li>
            </ul>
        {/if}

        {#if segment === 'team'}
            <ul class="second" in:fly="{{ y: 30, duration: 500 }}">
                <li><a rel=prefetch href='/'>All</a></li>
                <li><a rel=prefetch href='/'>Archives</a></li>
            </ul>
        {/if}

        {#if segment === 'support'}
            <ul class="second" in:fly="{{ y: 30, duration: 500 }}">
                <li><a rel=prefetch href='/'>Clients</a></li>
                <li><a rel=prefetch href='/'>Visitor</a></li>
            </ul>
        {/if}
    </nav>
</aside>
