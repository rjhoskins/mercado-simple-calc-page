<script lang="ts">

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org'
}

const handleSubmit = async () => {
    console.log('sharing...');
    try {
    await navigator.share(shareData)
    console.log('MDN shared successfully')
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
    // your script goes here
</script>

<button on:click={handleSubmit}
class="flex items-center min-w-[161px] mx-auto justify-center w-full px-2 py-2  my-1 text-white transition-colors duration-300 transform rounded-md grow bg-darkBlue focus:outline-none sm:w-auto sm: hover:bg-yellowz focus:bg-yellowz focus:ring focus:ring-blue-300 focus:ring-opacity-40"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  
</button>