const API_ENDPOINT = '/api/members'; // otomatis panggil endpoint di vercel

const membersListEl = document.getElementById('membersList');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');

async function fetchMembers() {
  try {
    const res = await fetch(API_ENDPOINT);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderMembers(data);
  } catch (err) {
    console.error(err);
    errorEl.hidden = false;
    errorEl.textContent = 'Gagal memuat data anggota.';
  } finally {
    loadingEl.style.display = 'none';
  }
}

function renderMembers(list) {
  if (!Array.isArray(list) || list.length === 0) {
    membersListEl.innerHTML = '<li>Tidak ada data anggota.</li>';
    return;
  }
  membersListEl.innerHTML = '';
  list.forEach(m => {
    const li = document.createElement('li');
    li.className = 'member';
    li.innerHTML = `
      <img src="${m.avatar}" alt="${m.nama}" loading="lazy" />
      <div class="meta">
        <strong>${m.nama}</strong>
        <span>${m.jabatan}</span>
      </div>
    `;
    membersListEl.appendChild(li);
  });
}

fetchMembers();
