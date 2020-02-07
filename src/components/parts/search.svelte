<style>
    .r {
        border-bottom: 1px solid #111;
        display: flex;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input[type="text"] {
        letter-spacing: 1px;
        transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
        background: #000;
        color: #fff;
        font-size: 14px;
        padding: 15px;
        width: 100%;
    }
    input::-webkit-input-placeholder {
        color: #393939;
    }
    input:-ms-input-placeholder {
        color: #393939;
    }
    input::-moz-placeholder {
        color: #393939;
    }
</style>
<div class="r">
    <div class="icon">
        <img src="/icons/icon-search.svg" width="16" height="" alt="" />
    </div>
    <input type="text" value="" placeholder="Invoice ID / Projct Name / Client Name" />
</div>
