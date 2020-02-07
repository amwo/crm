<script>
    let thumbnail = ''
    let base64 = ''
    const handleFile = e => {
        const file = e.target.files[0]
        const f = new FileReader()
        f.onload = e => {
            base64 = e.target.result
        }
        f.readAsDataURL(file);
    }
</script>

<style>
    .thumbnail {
        width: 120px;
        height: 120px;
        background: #333;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        position:relative;
        overflow: hidden;
    }
    .icon {
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        position: absolute;
        width: 100%;
        background: rgba(255,255,255,.7)
    }
    .root {
        display: flex;
    }
    .r {
        display: flex;
        align-items: center;
        padding: 0 0 0 30px;
    }
    .r h3 {
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 1.5px;
    }
    .r .desc {
        margin: 10px 0 0;
    }
    .upload {
        margin: 10px 0 0;
    }

</style>

<div class="root">
    <div class="l">
        <div class="thumbnail" style={`background: #333 url(${base64}) no-repeat center center;background-size: cover`}>
            {#if !base64}
            <div class="icon">
                <img src="/icons/icon-camera.svg" width="14" height="" alt="" />
            </div>
            {/if}
        </div>
    </div>
    <div class="r">
        <div>
            <h3>Upload photo ...</h3>
            <p class="desc">Photo should be at least 300px × 300px</p>
            <div class="upload">
                <input type="file" value="" on:change={handleFile}/>
            </div>
        </div>
    </div>
</div>
