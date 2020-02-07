<style>
    .r {
        user-select: none;
        height: 100%;
        vertical-align: middle;
        text-align: center;
        position: relative;
    }

    .r img {
        animation: spinner infinite 2s linear;
    }

    .r p {
        font-family: 'Lato', san-serif;
        font-size: 11px;
        color: #fff;
        font-weight: bold;
        margin: 9px 0 0 0;
        letter-spacing: 2px;
        padding: 0 0 0 1px;
    }

    .r div {
        position: absolute;
        left: 50%;
        margin-top: -50px;
        margin-left: -35px;
        top: 50%;
    }

    @keyframes spinner {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
</style>

<div class="r">
    <div>
        <img src="logo.svg" width="38" height="38" alt="Logo" />
        <p>LOADING</p>
    </div>
</div>
