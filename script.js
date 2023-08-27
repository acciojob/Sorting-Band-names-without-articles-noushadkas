//your code here

const bandNames = [
  'The Rolling Stones',
  'Led Zeppelin',
  'Aerosmith',
  'The Beatles',
  'Queen',
  'Pink Floyd',
  'The Who'
];

function stripArticle(name) {
  return name.replace(/^(a|an|the)\s+/i, '').trim();
}

const sortedBands = bandNames.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

const ul = document.querySelector('#bands');

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
