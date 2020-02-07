<script>
    export let segment;
</script>
<style>
    header {
        height: 48px;
        text-align: center;
        padding: 0 60px;
    }
    .in {
        height: 100%;
        width: 100%;
        position: relative;
    }
    nav {
        height: 100%;
    }
    nav ul {
        height: 100%;
        position: relative;
        display: inline-block;
    }
    nav ul li {
        display: inline-block;
        height: 100%;
    }
    nav ul li a {
        text-decoration: none;
        display: inline-flex;
        margin: 0 25px;
        height: 100%;
        font-size: 14px;
        letter-spacing: 1.7px;
        font-family: 'Playfair Display', serif;
        align-items: center;
    }
    .logo {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        left: 0;
    }
    .line {
        position: absolute;
        width: 50px;
        bottom: 2px;
        left: 25px;
        border-bottom: 2px solid #fff;
        -webkit-transition: all.2s ease;
        transition: all.2s ease;
        -o-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -webkit-transition: all .2s ease;
    }
    .line.docs {
        width: 40px;
        left: 128px;
        border-bottom: 2px solid #000;
    }
</style>

<header>
    <div class="in">
        <div class="logo">
            <a href="/"><img src="logo.svg" width="26" height="auto" alt="Logo" /></a>
        </div>
        <nav>
            <ul>
                <li><a class:selected='{segment === undefined}' href='.'>Works</a></li>
                <li><a rel=prefetch class:selected='{segment === "docs"}' href='/docs/'>Docs</a></li>
                <li class={segment === 'docs' ? 'line docs' : 'line'}></li>
            </ul>
        </nav>
    </div>
</header>
