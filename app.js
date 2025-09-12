document.addEventListener('DOMContentLoaded', renderMembers);
 
 const membersData = [
            {
                id: 1,
                name: "Satria Anugrah P",
                profilePic: "img/koceng.jpeg",
                role: "Ketua",
                birthDate: "15 Januari 2005",
                address: "Jl. Merdeka No. 123, Jakarta",
                birthday: "15 Januari",
                photos: [
                    "img/koceng.jpeg","img/koceng.jpeg","img/koceng.jpeg","img/koceng.jpeg","img/koceng.jpeg"
                ]
            },
            {
                id: 2,
                name: "bcilaubilu",
                profilePic: "",
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
                name: "Keysha Az-Zahra U.",
                profilePic: "img/koceng.jpeg",
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
                name: "cbwlihblwiu",
                profilePic: "",
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
                name: "chwbliwe",
                profilePic: "img/koceng.jpeg",
                role: "Anggota",
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
                            <img src="${member.profilePic}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${member.name.charAt(0).toUpperCase()}';">
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
                                    <div class="detail-label">Born</div>
                                    <div class="detail-value">${member.birthDate}</div>
                                </div>
                            </div>
                            
                            <div class="detail-row">
                                <div class="detail-icon">🏠</div>
                                <div class="detail-text">
                                    <div class="detail-label">House</div>
                                    <div class="detail-value">${member.address}</div>
                                </div>
                            </div>
                            
                            <div class="detail-row">
                                <div class="detail-icon">🎈</div>
                                <div class="detail-text">
                                    <div class="detail-label">Birthday</div>
                                    <div class="detail-value">${member.birthday}</div>
                                </div>
                            </div>
                            
                            <div class="photo-gallery">
                                <div class="gallery-title">📷 My Photo</div>
                                <div class="photo-grid">
                                    ${member.photos.map(photo => `
                                    <div class="photo-item">
                                        <img src="${photo}" alt="Foto kegiatan">
                                    </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
     