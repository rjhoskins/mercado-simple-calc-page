<script>
  import Buttons from "./Buttons.svelte";




  let numberOfContainers;
  const fixedNumber1 = 30000;
  const fixedNumber2 = 5000;
  let productCostPerContainer = 0;
  let logisticsCostPerContaine = 0;
  let totalPurchasingCost = 0;
  let ExpectedAnnualSales = 0;
  const handleInput = (e) => {
    numberOfContainers = e.target.value;
    productCostPerContainer = fixedNumber1 * numberOfContainers;
    logisticsCostPerContaine = fixedNumber2 * (numberOfContainers || 0);
    totalPurchasingCost = productCostPerContainer + logisticsCostPerContaine;
    ExpectedAnnualSales = totalPurchasingCost * 2;
  };

  function formatIntoCompactCurrency(number) {
    const compactMoneyFormatter = Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      notation: 'compact',
      style: 'currency',
      compactDisplay: 'short',
      currency: 'USD',
    });
    return compactMoneyFormatter.format(number);
  }

  const showAsCurrency = (string) => {
    return ` $${new Intl.NumberFormat('en-US', {
      maximumSignificantDigits: 3,
    }).format(string)}`;
  };

</script>

<section class="relative  bg-white m-2 max-w-3xl  mx-auto lg:mt-[12rem] mt-4 rounded-lg">


  <div
    class="w-full px-8 py-6 text-3xl pb-0 font-bold text-black"
  >
  Your projected <br> annual benefits:
  </div>
  <div class="p-4 space-y-6">




    <p class="flex flex-wrap items-center  justify-between  text-darkBlue ">
      <span>    <p class="font-bold text-center text-darkBlue">
        Enter the number of containers <br /> you  import every year
      </p></span>
      <span
        >    <input
        class="no-spinner block p-2 m-2 mx-auto  text-center bg-white border rounded-md no-spinner border-darkBlue focus:border-darkBlue focus:ring-darkBlue pl-1/2 sm:text-md placeholder:text-center"
        type="number"
        on:input={handleInput}
        placeholder="number of containers..."
        bind:value={numberOfContainers}
      /></span
      >
    </p>
    <p class="flex flex-wrap items-center  justify-between  text-darkBlue ">
      <span>Product Cost Per Container</span>
      <span
        >{numberOfContainers
          ? formatIntoCompactCurrency(productCostPerContainer)
          : ''}</span
      >
    </p>
    <p class="flex flex-wrap items-center  justify-between  text-darkBlue ">
      <span>Logistics Cost Per Container</span><span
        >{numberOfContainers
          ? formatIntoCompactCurrency(logisticsCostPerContaine)
          : ''}</span
      >
    </p>
    <p class="flex flex-wrap items-center  justify-between  text-darkBlue ">
      <span>Total Purchasing Cost</span><span
        >{numberOfContainers
          ? formatIntoCompactCurrency(totalPurchasingCost)
          : ''}</span
      >
    </p>
    <p class="flex flex-wrap items-center  justify-between  text-darkBlue b ">
      <span>Expected Annual Sales</span><span
        >{numberOfContainers
          ? formatIntoCompactCurrency(ExpectedAnnualSales)
          : ''}</span
      >
    </p>
    <p
      class="flex flex-wrap  justify-between px-6 py-6 items-center text-base font-bold rounded-md bg-yellowz text-darkBlue"
    >
      <span class="">Projected annual benefit from Mercado</span><span
        >{numberOfContainers
          ? formatIntoCompactCurrency(
              (totalPurchasingCost + ExpectedAnnualSales) * 0.01
            )
          : ''}</span
      >
    </p>
    <p class=" font-bold text-darkBlue">Share your results!</p>

    <Buttons />
  </div>
</section>

<style>
  /* your styles go here */

  .no-spinner {
  -moz-appearance: textfield;
}

.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
</style>