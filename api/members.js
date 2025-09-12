// api/members.js
export default function handler(req, res) {
  const data = [
    { nama: "Idub", jabatan: "Ketua", avatar: "https://i.pravatar.cc/100?img=1" },
    { nama: "Siti", jabatan: "Sekretaris", avatar: "https://i.pravatar.cc/100?img=2" },
    { nama: "Andi", jabatan: "Bendahara", avatar: "https://i.pravatar.cc/100?img=3" }
  ];

  res.status(200).json(data);
}
