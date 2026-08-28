let scholarships = [];
const grid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');
const countryFilter = document.getElementById('countryFilter');

async function fetchData() {
  try {
    const res = await fetch('./scholarships.json');
    scholarships = await res.json();
    displayCards(scholarships);
  } catch (err) {
    grid.innerHTML = '<p>Erreur lors du chargement des données.</p>';
  }
}

function displayCards(data) {
  if (data.length === 0) {
    grid.innerHTML = '<p>Aucune opportunité trouvée.</p>';
    return;
  }

  grid.innerHTML = data.map(item => `
    <article class="card">
      <div>
        <span class="tag">${item.country}</span>
        <span class="tag">${item.level}</span>
        <h3>${item.title}</h3>
        <p><strong>Financement :</strong> ${item.coverage}</p>
        <p><strong>Période :</strong> ${item.deadline}</p>
      </div>
      <a href="${item.link}" target="_blank" rel="noreferrer" class="btn-apply">Voir l'offre</a>
    </article>
  `).join('');
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const selectedCountry = countryFilter.value;

  const results = scholarships.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(query) || 
                          item.coverage.toLowerCase().includes(query);
    const matchesCountry = selectedCountry === 'all' || item.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  displayCards(results);
}

searchInput.addEventListener('input', applyFilters);
countryFilter.addEventListener('change', applyFilters);

fetchData();