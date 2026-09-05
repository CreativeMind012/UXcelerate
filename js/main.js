async function loadData() {
  const response = await fetch('FakeData.json');
  const data =await response.json();
  console.log(data.robots);
}
loadData();

// do:loses signal ,found a survivor, route blocked , hazard found, last updated
