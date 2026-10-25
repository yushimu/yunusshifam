export interface KaryaItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnailUrl: string;
  previewUrl: string;
  description: string;
  tags: string[];
  features?: string[];
  badge?: string;
}

export const KARYA_ITEMS: KaryaItem[] = [
  {
    id: 'kopi-ruang',
    title: 'Kopi Ruang',
    subtitle: 'Specialty Coffee & Cozy Space',
    category: 'F&B & Lifestyle',
    thumbnailUrl: '/portofolio-karya/thumbnails/Kopi Ruang.JPG',
    previewUrl: '/portofolio-karya/pages/LP Kopi Ruang/landing_page_kopi_ruang.html',
    description: 'Landing page premium untuk coffee shop modern dengan nuansa hangat, elegan, dan estetik. Menampilkan signature coffee, suasana ruang, filosofi biji kopi, hingga integrasi kontak reservasi.',
    tags: ['Landing Page', 'F&B & Coffee Shop', 'Responsive', 'Modern Aesthetic', 'Live Preview'],
    features: [
      'Desain Responsif & Estetik Bernuansa Hangat',
      'Katalog Menu Signature & Kisah Kopi Pilihan',
      'Navigasi Halus (Smooth Scrolling) & Micro-Interactions',
      'Integrasi Google Maps, Jam Buka, & Reservasi WhatsApp'
    ],
    badge: 'Live Interactive Preview'
  },
  {
    id: 'suroya-indonesia',
    title: 'Suroya Indonesia',
    subtitle: 'Produsen & Konveksi Rajut Custom',
    category: 'Tekstil & Apparel',
    thumbnailUrl: '/portofolio-karya/thumbnails/Suroya Indonesia.JPG',
    previewUrl: '/portofolio-karya/pages/LP Suroya/suroya_indonesia_landing_page.html',
    description: 'Landing page modern dan representatif untuk produsen rajut custom (manual & komputer). Menampilkan keunggulan mesin 7 & 12 Get, material berkualitas (PE, Akrilik, Cotton), kapasitas produksi, hingga integrasi kontak WhatsApp dan workshop Google Maps.',
    tags: ['Landing Page', 'Pabrik Rajut', 'Tekstil & Apparel', 'Custom Knitwear', 'Responsive', 'Live Preview'],
    features: [
      'Spesifikasi Mesin Rajut Manual & Komputer (Get 7 & 12)',
      'Pilihan Material Benang Lengkap (PE, Akrilik, Katun, Custom)',
      'Desain Modern, Responsif & Mobile-First dengan Nuansa Earthy',
      'Integrasi Cepat Chat WhatsApp & Titik Lokasi Google Maps'
    ],
    badge: 'Live Interactive Preview'
  }
];
