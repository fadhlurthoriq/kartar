const membersListEl = document.getElementById('membersList');

// Dummy data dulu
const members = [
  {
    nama: "Budi",
    jabatan: "Ketua",
    lahir: "01-01-2000",
    rumah: "Jakarta",
    kata: "Semangat berkarya!",
    foto: ["https://via.placeholder.com/80", "https://via.placeholder.com/80"]
  },
  {
    nama: "Siti",
    jabatan: "Sekretaris",
    lahir: "05-02-2001",
    rumah: "Bandung",
    kata: "Kerja ikhlas itu kunci.",
    foto: ["https://via.placeholder.com/80"]
  },
  {
    nama: "Andi",
    jabatan: "Bendahara",
    lahir: "20-03-2002",
    rumah: "Surabaya",
    kata: "Uang adalah amanah.",
    foto: ["https://via.placeholder.com/80", "https://via.placeholder.com/80", "https://via.placeholder.com/80"]
  },
  {
    nama: "Rina",
    jabatan: "Anggota",
    lahir: "10-04-2003",
    rumah: "Yogyakarta",
    kata: "Kebersamaan itu indah.",
    foto: []
  }
];

function renderMembers(list) {
  membersListEl.innerHTML = '';
  list.forEach(m => {
    const card = document.createElement('div');
    card.className = `member-card ${m.jabatan.toLowerCase()}`;

    card.innerHTML = `
      <div class="member-header">
        <strong>${m.nama}</strong>
        <span>${m.jabatan}</span>
      </div>
      <div class="member-details">
        <p><b>Nama Lengkap:</b> ${m.nama}</p>
        <p><b>Jabatan:</b> ${m.jabatan}</p>
        <p><b>Tanggal Lahir:</b> ${m.lahir}</p>
        <p><b>Rumah:</b> ${m.rumah}</p>
        <p><b>Kata-kata:</b> "${m.kata}"</p>
        <div class="member-gallery">
          ${m.foto.map(f => `<img src="${f}" alt="foto ${m.nama}">`).join("")}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });

    membersListEl.appendChild(card);
  });
}

renderMembers(members);
