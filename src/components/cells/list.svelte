<script>
    export let items = [
        {
            title: 'Sales $1,000,000 per month.'
        },
        {
            title: 'Recrult 3 persons.'
        },
        {
            title: 'Lead artificial intelligence with goodness.'
        }
    ]
</script>

<style>
    ul li {
        color: #333;
        text-indent: -1.2em;
        padding-left: 1.2em;
        list-style-type: decimal;
        list-style-position: inside;
        font-size: 20px;
        letter-spacing: 1.4px;
        line-height: 1.3;
        font-family: 'Playfair Display', serif;
        margin: 0 0 15px;
    }
</style>
<ul>
    {#each items as item}
        <li>{item.title}</li>
    {/each}
</ul>
