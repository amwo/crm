<script>
</script>

<style>
    .r {
        user-select: none;
        cursor: pointer;
        display: flex;
        padding: 12px 30px;
        letter-spacing: 1px;
        font-size: 13px;
    }
    .r > div {
        display: flex;
        align-items: center;
    }
    .r:hover {
        background: #111;
        border-radius: 7px;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
    }
    .check {
        padding: 0 20px 0 0
    }
    .check img {
        filter: invert(1)
    }
    .check button {
        cursor: pointer;
        border: 1px solid #fff;
        background: transparent;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
    }
    .check button:hover {
        background: #fff;
    }
    .check button:hover img {
        filter: invert(0)
    }
    .type {
        padding: 0 10px 0 0
    }
    .type p {
        min-width: 40px;
        text-align: center;
        text-transform: uppercase;
        border: 1px solid #fff;
        font-size: 8px;
        padding: 5px 15px;
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
    }
    .project-code-name {
        margin-left:auto;
        color: #333;
        padding: 0 20px 0 0;
    }
    .due-date {
        margin-left:auto;
    }
    .due-date p {
        font-size: 11px;
        padding: 5px 15px;
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
    }
    .name {
        padding: 0 20px 0 0;
        min-width: 300px;
    }
    .time {
    }
</style>

<div class="r">
    <div class="check">
        <button><img src="/icons/icon-check.svg" width="10" height="auto" alt="Check" /></button>
    </div>
    <div class="type">
        <p>Design</p>
    </div>
    <div class="name">
        <p>Website Home Page</p>
    </div>
    <div class="project-code-name">
        <p>Gene</p>
    </div>
    <div class="time">
        <p>1h</p>
    </div>
    <div class="due-date">
        <p>Tue Jan 28 10:50</p>
    </div>
</div>
