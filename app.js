document.addEventListener('DOMContentLoaded', renderMembers);
 
 const membersData = [
            {
                id: 1,
                name: "Satria Anugrah P",
                role: "Ketua",
                birthDate: "15 Januari 2005",
                address: "Jl. Merdeka No. 123, Jakarta",
                birthday: "15 Januari",
                photos: [
                    "📸", "🎓", "🏆", "⚽"
                ]
            },
            {
                id: 2,
                name: "Anisa Putri Maharani",
                role: "Wakil Ketua",
                birthDate: "28 Maret 2005",
                address: "Jl. Pemuda No. 45, Bandung",
                birthday: "28 Maret",
                photos: [
                    "📚", "🎨", "🌸", "🎭"
                ]
            },
            {
                id: 3,
                name: "Muhammad Rizki Fadillah",
                role: "Sekretaris",
                birthDate: "10 Juli 2004",
                address: "Jl. Diponegoro No. 78, Surabaya",
                birthday: "10 Juli",
                photos: [
                    "💻", "📝", "🎵", "🏀"
                ]
            },
            {
                id: 4,
                name: "Siti Nurhaliza",
                role: "Bendahara",
                birthDate: "3 November 2005",
                address: "Jl. Ahmad Yani No. 56, Yogyakarta",
                birthday: "3 November",
                photos: [
                    "💰", "📊", "🌺", "🎪"
                ]
            },
            {
                id: 5,
                name: "Dimas Prasetyo",
                role: "Koordinator Acara",
                birthDate: "22 September 2004",
                address: "Jl. Sudirman No. 89, Medan",
                birthday: "22 September",
                photos: [
                    "🎉", "🎤", "🏃‍♂️", "🎮"
                ]
            }
        ];

        // State untuk mengtrack card mana yang sedang expanded
        const expandedCards = new Set();

        // Function untuk toggle expand card
        function toggleCard(cardId) {
            const card = document.getElementById(`card-${cardId}`);
            
            if (expandedCards.has(cardId)) {
                // Tutup card
                card.classList.remove('expanded');
                expandedCards.delete(cardId);
            } else {
                // Buka card
                card.classList.add('expanded');
                expandedCards.add(cardId);
            }
        }

        // Function untuk render anggota
        function renderMembers() {
            const membersList = document.getElementById('membersList');
            
            membersList.innerHTML = membersData.map(member => `
                <div class="member-card" id="card-${member.id}" onclick="toggleCard(${member.id})">
                    <div class="card-header">
                        <div class="profile-pic">
                            ${member.name.charAt(0)}
                        </div>
                        <div class="member-info">
                            <h3>${member.name}</h3>
                            <div class="member-role">${member.role}</div>
                        </div>
                        <div class="expand-icon">
                            ▼
                        </div>
                    </div>
                    
                    <div class="card-details">
                        <div class="details-content">
                            <div class="detail-row">
                                <div class="detail-icon">🎂</div>
                                <div class="detail-text">
                                    <div class="detail-label">Tanggal Lahir</div>
                                    <div class="detail-value">${member.birthDate}</div>
                                </div>
                            </div>
                            
                            <div class="detail-row">
                                <div class="detail-icon">🏠</div>
                                <div class="detail-text">
                                    <div class="detail-label">Tempat Tinggal</div>
                                    <div class="detail-value">${member.address}</div>
                                </div>
                            </div>
                            
                            <div class="detail-row">
                                <div class="detail-icon">🎈</div>
                                <div class="detail-text">
                                    <div class="detail-label">Ulang Tahun</div>
                                    <div class="detail-value">${member.birthday}</div>
                                </div>
                            </div>
                            
                            <div class="photo-gallery">
                                <div class="gallery-title">📷 Foto Kegiatan</div>
                                <div class="photo-grid">
                                    ${member.photos.map(photo => `
                                        <div class="photo-item">${photo}</div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render saat halaman dimuat
       