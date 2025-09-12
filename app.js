// State untuk track card yang expanded
const expandedCards = new Set();

function toggleCard(cardId) {
  const card = document.getElementById(`card-${cardId}`);
  if (!card) return;

  if (expandedCards.has(cardId)) {
    card.classList.remove('expanded');
    expandedCards.delete(cardId);
  } else {
    card.classList.add('expanded');
    expandedCards.add(cardId);
  }
}

  // Function untuk render anggota
function renderMembers(membersData) {
  const membersList = document.getElementById('membersList');
    membersList.innerHTML = membersData.map(member => `
      <div class="member-card" id="card-${member.id}">
        <div class="card-header">
          <div class="profile-pic">
            <img src="${member.profilePic}" alt="${member.name}" 
                onerror="this.style.display='none'; this.parentElement.innerHTML='${member.name.charAt(0).toUpperCase()}';">
          </div>
          <div class="member-info">
            <h3>${member.name}</h3>
            <div class="member-role">${member.role}</div>
          </div>
          <div class="expand-icon" data-id="${member.id}">▼</div>
        </div>
        
        <div class="card-details">
          <div class="details-content">
            <div class="detail-row">
              <div class="detail-icon"><i class="fa-solid fa-calendar-day"></i></div>
              <div class="detail-text">
                <div class="detail-label">Born</div>
                <div class="detail-value">${member.birthDate || '-'}</div>
              </div>
            </div>
            
            <div class="detail-row">
              <div class="detail-icon"><i class="fa-solid fa-location-dot"></i></div>
              <div class="detail-text">
                <div class="detail-label">House</div>
                <div class="detail-value">${member.address || '-'}</div>
              </div>
            </div>
            
            <div class="detail-row">
              <div class="detail-icon"><i class="fa-solid fa-gift"></i></div>
              <div class="detail-text">
                <div class="detail-label">Birthday</div>
                <div class="detail-value">${member.birthday || '-'}</div>
              </div>
            </div>

            <div class="detail-row">
              <div class="detail-icon"><i class="fab fa-whatsapp"></i></div>
              <div class="detail-text">
                <div class="detail-label">Whatsapp</div>
                <div class="detail-value">${member.wa || '-'}</div>
              </div>
            </div>

            <div class="detail-row">
              <div class="detail-icon"><i class="fab fa-instagram"></i></div> 
              <div class="detail-text">
                <div class="detail-label">Instagram</div>
                <div class="detail-value">${member.ig || '-'}</div>
              </div>
            </div>
            
            <div class="photo-gallery">
              <div class="gallery-title">📷 My Photo</div>
              <div class="photo-grid">
                ${(member.photos || []).map(photo => `
                  <div class="photo-item">
                    <img src="${photo}" alt="Foto ku dewe">
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  let allMembers = []; // simpan semua data dari API


  // Function ambil data dari API
  async function fetchMembers() {
    try {
      const res = await fetch("/api/members");
      const data = await res.json();

      allMembers = data; // simpan data asli
      renderMembers(allMembers); 

    } catch (error) {
      console.error("Gagal mengambil data:", error);
      document.getElementById('membersList').innerHTML = `<p style="color:red;">Gagal mengambil data anggota</p>`;
    }
  }

document.addEventListener('DOMContentLoaded', () => {
  fetchMembers();

  // ✅ Event delegation untuk expand
  document.getElementById('membersList').addEventListener('click', (e) => {
    if (e.target.classList.contains('expand-icon')) {
      const cardId = e.target.getAttribute("data-id");
      toggleCard(cardId);
    }
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = allMembers.filter(member => 
      member.name.toLowerCase().includes(keyword)
    );
    renderMembers(filtered);
  });
});

