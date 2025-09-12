// /pages/api/members.js
export default function handler(req, res) {
  const data = [
    {
      id: 1,
      name: "Satria Anugrah P",
      role: "Ketua",
      profilePic: "img/koceng.jpeg",
      birthDate: "15 Januari 2005",
      address: "Jl. Merdeka No. 123, Jakarta",
      birthday: "15 Januari",
      photos: [
        "img/koceng.jpeg",
        "img/koceng.jpeg",
        "img/koceng.jpeg",
        "img/koceng.jpeg",
        "img/koceng.jpeg"
      ]
    }
  ];

  res.status(200).json(data);
}
