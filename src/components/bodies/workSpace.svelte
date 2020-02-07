<script>
    import { fade,fly } from 'svelte/transition'
	import Input from '../../components/cells/input.svelte'
	import H1 from '../../components/cells/h1.svelte'
	import Button from '../../components/cells/button.svelte'
    import {store} from '../../store'
	import AddPerson from '../../components/scenes/addPerson.svelte'
	import AddPersonInputs from '../../components/parts/addPersonInputs.svelte'
	import AddPersonInputsSceneJaJp from '../../components/parts/addPersonInputsSceneJaJp.svelte'
	import Tabs from '../../components/parts/tabs.svelte'
	import Scroll from '../../components/parts/scroll.svelte'

    export let type = ''

    let langs = [
        {
            name: 'English',
            code: 'en_US',
            component: AddPersonInputs
        },
        {
            name: 'Japanese',
            code: 'ja_JP',
            component: AddPersonInputsSceneJaJp
        }
    ]
</script>
<style>
    .wrapper {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.9);
        display: flex;
        justify-content: center;
        z-index: 999;
    }
    .in {
        margin: 40px 0 0;
        background: #111;
        width: 90%;
        border-top-left-radius: 21px;
        -webkit-border-top-left-radius: 21px;
        -moz-border-top-left-radius: 21px;
        border-top-right-radius: 21px;
        -webkit-border-top-right-radius: 21px;
        -moz-border-top-right-radius: 21px;
        position: relative;
        overflow: hidden;
    }
    .container {
        height: 100%;
        width: 100%;
    }
    .wrap {
        display: flex;
        height: 100%;
    }
    .head {
        padding: 30px 60px;
    }
    nav ul {
        padding-right: 20px;
    }
    nav ul li {
        cursor: pointer;
        border-top-right-radius: 40px;
        -webkit-border-top-right-radius: 40px;
        -moz-border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        -webkit-border-bottom-right-radius: 40px;
        -moz-border-bottom-right-radius: 40px;
        padding: 10px 60px;
        font-size: 14px;
        margin: 0 0 20px 0;
        letter-spacing: 1.5px;
        list-style-type:none;
    }
    aside {
        padding: 11px 0 0;
        height: calc(100% - 11px);
    }
    nav ul li:hover {
        background: #181818;
    }
    nav ul li.on {
        font-weight: bold;
        background: #fff;
        color: #000;
    }
    .l {
        width: 210px;
        height: 100%;
    }
    .r {
        width: 100%;
        height: 100%;
        flex: 1;
        background: #181818;
    }
    .content-wrapper {
        width: 100%;
        height: 100%;
    }

    .content-wrapper header {
        background: #111;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-wrapper .main {
        height: calc(100% - 60px);
    }
    .content-wrapper footer {
        height: 60px;
        background: #111;
        display: flex;
    }
    .content-wrapper footer .separator {
        width: 100%;
        display: flex;
    }
    .content-wrapper footer .separator.r {
        background: transparent;
        display: flex;
        justify-content: flex-end;
        padding-right: 30px;
        align-items: center;
    }
    .content-wrapper footer .spacer {
        padding: 0 5px;
    }
    .locale-switcher li {
        cursor: pointer;
        padding: 15px 0 16px;
        border-top: 1px solid #111;
        margin: 0 10px;
        display: inline-block;
        opacity: .1
    }
    .locale-switcher li:hover {
        opacity: 1;
    }
    .locale-switcher li.on {
        opacity: 1;
        border-top: 1px solid #fff;
    }
</style>

<section class="wrapper" in:fade out:fade>
    <div class="in" in:fly="{{ y: 30, duration: 500 }}" out:fly="{{ y: 30, duration: 500 }}">
        <section class="container">
            <div class="wrap">
                <div class="l">
                    <aside>
                        <div class="head">
                            <h1>Add</h1>
                        </div>
                        <Scroll>
                            <nav>
                                <ul>
                                    <li class:on='{type === 'ADD_PERSON'}'>Person</li>
                                    <li class:on='{type === 'ADD_COMPANY'}'>Company</li>
                                    <li class:on='{type === 'ADD_PROJCT'}'>Project</li>
                                    <li class:on='{type === 'ADD_TEAM'}'>Team</li>
                                    <li class:on='{type === 'ADD_INVOICE'}'>Invoice</li>
                                </ul>
                            </nav>
                        </Scroll>
                    </aside>
                </div>
                <section class="r">
                    <div class="content-wrapper">
                        <div class="main">
                            <Scroll>
                                <AddPersonInputs />
                            </Scroll>
                        </div>
                        <footer>
                            <div class="separator l">
                                <div class="spacer">
                                    <ul class="locale-switcher">
                                        <li class="on"><img src="/icons/icon-lang-en-US.svg" width="28" height="28" alt="US" /></li>
                                        <li><img src="/icons/icon-lang-ja-JP.svg" width="28" height="28" alt="JP" /></li>
                                        <li><img src="/icons/icon-lang-zh-CN.svg" width="28" height="28" alt="CN" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="separator r">
                                <div class="spacer">
                                    <Button title="Cancel" locale="en_US" onclick={() => store.ws(null, null, null)}/>
                                </div>
                                <div class="spacer">
                                    <Button title="Save" locale="en_US" type="primary" />
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
        </section>
    </div>
</section>
<!--<Tabs current="en_US" items={langs} align="center"/>-->
