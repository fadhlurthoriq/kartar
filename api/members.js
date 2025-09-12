// /pages/api/members.js
export default function handler(req, res) {
  const data = [
    {
      id: 1,
      name: "Zivanna Yunita A.",
      role: "Ketua",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },

    {
      id: 2,
      name: "Violla shevia a.r.",
      role: "Wakil Ketua",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },
    
    {
      id: 3,
      name: "Keysha Azzahra U",
      role: "Sekretaris",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },

    {
      id: 4,
      name: "Abelfi Lovely S.H.",
      role: "Bendahara",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },

    {
      id: 5,
      name: "Gilas Kusuma A.",
      role: "Anggota",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },

    {
      id: 6,
      name: "Ridwan Darma P.",
      role: "Anggota",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },

    {
      id: 7,
      name: "Alini audia S.",
      role: "Anggota",
      profilePic: "",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },
  ];

  res.status(200).json(data);
}
