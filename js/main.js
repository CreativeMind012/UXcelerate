function loadData() {
  const response = fetch('FakeData.json');
  const data = response.json();
  console.log(data.robots);
}
loadData();

// do:loses signal ,found a survivor, route blocked , hazard found, last updated
