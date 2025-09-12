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

    {
      id: 8,
      name: "Ervina Yuna A.p.",
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
      id: 9,
      name: "Naila Najmatuz Z.",
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
      id: 10,
      name: " M.Hilmi T.",
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
      id: 11,
      name: "⁠Nidia Hardiyanti",
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
      id: 12,
      name: "Giska Navidatuz z.",
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
      id: 13,
      name: "Fahmi Ramadian p.",
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
      id: 14,
      name: "Alexander W.S.",
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
      id: 15,
      name: "Khodimas Eka S.",
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
      id: 16,
      name: "Kelvin alfattama",
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
      id: 17,
      name: "Naufal Cahya A.P.",
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
      id: 18,
      name: "Nayla Kirania Z.",
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
      id: 19,
      name: "Tegar Setya R.",
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
      id: 20,
      name: "Abyan Naufal W.",
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
      id: 21,
      name: "Yoga Rafan Maqil",
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
      id: 22,
      name: "Fico Mahawangsa",
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
      id: 23,
      name: "Anonymous",
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
      id: 24,
      name: "Anonymous",
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
      id: 25,
      name: "Anonymous",
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
      id: 26,
      name: "Anonymous",
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
