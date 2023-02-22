<script>
    export let link;
    export let textWhite;
    export let iswhite
</script>

<a href={link} 
class="transition whitespace-nowrap text-center block w-full mx my-6 px-4 py-3  text-sm font-bold border-2 hover:border-2 rounded-sm 
{iswhite ? ' text-white border-white bg-transparent hover:bg-yellowz hover:text-black hover:border-yellowz ': 'text-black hover:text-white bg-yellowz border-yellowz hover:border-white hover:bg-transparent'}

 "

><slot /></a>