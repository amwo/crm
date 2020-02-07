<script context="module">
    import {store} from '../store'
	import Input from '../components/cells/input.svelte'
    import { fly, fade } from 'svelte/transition'
    import { checkEmailExist, signInWithFirebase } from  '../fn'
</script>

<script>
    import { goto } from '@sapper/app'
    import { onMount } from 'svelte'

    let email = ''
    let password = ''
    let errMessage = ''
    let emailIcon = '/icons/icon-right-arrow.svg'
    let passwordIcon = '/icons/icon-lock.svg'
    let emailLoading = false
    let passwordInput = false

    const handleEmailKeyDown = async e => {
        if(e.keyCode === 13) {
            emailLoading = true
            const isUser = await checkEmailExist(email)

            if(isUser) {
                errMessage = isUser
                email = ''
            } else {
                passwordInput = true
            }
            emailLoading = false
        }
    }

    const handlePasswordKeyDown = async e => {
        if(e.keyCode === 13) {
            emailLoading = true
            const isAuth = await signInWithFirebase(email, password)
            if(isAuth) {
                errMessage = isAuth
            } else {
                passwordInput = true
            }
            emailLoading = false
            email = ''
        }
    }

    onMount(async () => {
        if($store.s.login)
            goto('/')
    })
</script>

<style>
    .r {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .i {
        width: 100%;
        max-width: 270px;
    }
    .title {
        font-weight: 300;
        margin: 20px 0 20px 0;
        display: block;
        font-size: 30px;
        text-align: left;
        line-height: 1.5;
        font-weight: 100;
        letter-spacing: 1px;
    }
    .title span {
        display: block;
    }
    .errMessage {
        color: #d8384b;
        margin: 20px 0 0;
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 1.6;
    }

    .inputs {
        position: relative;
        display: block;
        width: 100%;
    }
    .inputs .in {
        width: 100%;
        position: absolute;
        top: 0;
    }
</style>

<div class="r">
    <div class="i" transition:fly="{{ y: 30, duration: 500 }}">
        <img src="logo.svg" width="32" height="32" alt="" />
        <h1 class="title"><span>Welcome back,</span><span>Log in to continue</span><span>to FamilyLand</span></h1>
        <div class="inputs">
            {#if passwordInput}
                <div class="in" in:fly="{{ y: 30, duration: 500 }}">
                    <Input type="password" placeholder="Password" bind:value={password} onkeydown={handlePasswordKeyDown} icon={passwordIcon} loading={emailLoading}/>
                </div>
            {:else}
                <div class="in" out:fly="{{ y: -30, duration: 500 }}">
                    <Input type="email" placeholder="Your Company E-mail" bind:value={email} onkeydown={handleEmailKeyDown} icon={emailIcon} loading={emailLoading}/>
                </div>
            {/if}
        </div>
        <p class="errMessage">{errMessage}</p>
    </div>
</div>
<!--{$store.authorization.login}-->
