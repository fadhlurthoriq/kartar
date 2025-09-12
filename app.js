function renderMembers(list) {
  membersListEl.innerHTML = '';
  list.forEach(m => {
    const li = document.createElement('li');
    li.className = 'member';

    li.innerHTML = `
      <div class="member-header">
        <img src="${m.avatar}" alt="${m.nama}" />
        <div>
          <strong>${m.nama}</strong>
          <p>${m.jabatan}</p>
        </div>
      </div>
      <div class="member-details">
        <p><b>Nama Lengkap:</b> ${m.nama}</p>
        <p><b>Jabatan:</b> ${m.jabatan}</p>
        <p><b>Tanggal Lahir:</b> ${m.tanggal_lahir}</p>
        <p><b>Rumah:</b> ${m.rumah}</p>
        <p><b>Kata-kata:</b> ${m.kata_kata}</p>
      </div>
    `;

    // Hanya toggle card ini, bukan semuanya
    li.addEventListener('click', () => {
      li.classList.toggle('expanded');
    });

    membersListEl.appendChild(li);
  });
}
