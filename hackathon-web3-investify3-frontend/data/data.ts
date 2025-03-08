import { FaShieldAlt, FaBolt, FaGlobe, FaChartLine } from "react-icons/fa";

export const tradeMode = [
  "Buy", 
  "Sell",
  "Convert"
]

export const cryptoCurrencies = [
  "Solana",
  "Ethereum",
  "ICP"
]

export const navItems = [
    { name: "Invest", link: "/invest" },
    { name: "News", link: "/news" },
    { name: "Forum", link: "/forum" },
];

export type Comment = {
    id: number;
    user: {
      name: string;
      avatar: string;
    };
    date: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
  };
  
  export const comments: Comment[] = [
    {
      id: 1,
      user: {
        name: "Dindaa",
        avatar: "/avatar1.jpg",
      },
      date: "2 days ago",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      image: "/flower.jpg",
      likes: 12,
      comments: 12,
    },
    {
      id: 2,
      user: {
        name: "Briann",
        avatar: "/avatar2.jpg",
      },
      date: "2 days ago",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      likes: 12,
      comments: 12,
    },
  ];

  export interface StockChange {
    name: string;
    change: number;
  }
  
  export interface StockNews {
    title: string;
    source: string;
    date: string;
    link: string;
    imageUrl: string;
    stocks: StockChange[];
  }
  
  export const stockNews: StockNews[] = [
    {
      title: "Mengukur Dampak Peluncuran Bank Emas terhadap Kinerja Saham HRTA, ANTM & BRIS",
      source: "Bisnis.com",
      date: "14 jam lalu",
      link: "https://market.bisnis.com/read/20250226/189/1842903/mengukur-dampak-peluncuran-bank-emas-terhadap-kinerja-saham-hrta-antm-bris",
      imageUrl: "/news-image-1.jpg",
      stocks: [
        { name: "BRIS", change: -4.53 },
        { name: "ANTM", change: 2.35 }
      ]
    },
    {
      title: "Cek Rekomendasi Saham ANTM dan HRTA, Setelah Bullion Bank Resmi Hadir",
      source: "Kontan.co.id",
      date: "12 jam lalu",
      link: "https://investasi.kontan.co.id/news/cek-rekomendasi-saham-antm-dan-hrta-setelah-bullion-bank-resmi-hadir",
      imageUrl: "/news-image-2.jpg",
      stocks: [
        { name: "ANTM", change: 1.8 },
        { name: "HRTA", change: 2.3 }
      ]
    },
    {
        title: "IHSG Hari Ini Ditutup Menguat, Saham BBCA dan BBRI Naik Signifikan",
        source: "CNBC Indonesia",
        date: "10 jam lalu",
        link: "https://www.cnbcindonesia.com/market/20250226/ihsg-hari-ini-ditutup-menguat-saham-bbca-dan-bbri-naik-signifikan",
        imageUrl: "/news-image-3.jpg",
        stocks: [
          { name: "BBCA", change: 1.2 },
          { name: "BBRI", change: 2.1 }
        ]
      },
      {
        title: "Investor Asing Serok Saham TLKM dan GOTO, Ada Apa?",
        source: "Detik Finance",
        date: "8 jam lalu",
        link: "https://finance.detik.com/bursa-dan-valas/d-6603908/investor-asing-serok-saham-tlkm-dan-goto-ada-apa",
        imageUrl: "/news-image-4.jpg",
        stocks: [
          { name: "TLKM", change: 1.7 },
          { name: "GOTO", change: 3.2 }
        ]
      },
      {
        title: "Saham Bank Jago (ARTO) Melonjak 5% Setelah Laporan Keuangan Kuartal IV",
        source: "Kompas.com",
        date: "6 jam lalu",
        link: "https://money.kompas.com/read/20250226/112530426/saham-bank-jago-arto-melonjak-5-setelah-laporan-keuangan-kuartal-iv",
        imageUrl: "/news-image-5.jpg",
        stocks: [
          { name: "ARTO", change: 5.0 },
          { name: "BBRI", change: 1.5 }
        ]
      },
      {
        title: "Saham ASII dan UNVR Anjlok, Apa Penyebabnya?",
        source: "Liputan6",
        date: "4 jam lalu",
        link: "https://www.liputan6.com/bisnis/read/5024092/saham-asii-dan-unvr-anjlok-apa-penyebabnya",
        imageUrl: "/news-image-6.jpg",
        stocks: [
          { name: "ASII", change: -2.8 },
          { name: "UNVR", change: -3.4 }
        ]
      }
  ];
  

export const profileData = {
    username: "Pacar Heleni",
    fullName: "Alastair Warren Tjajhrir",
    email: "alas@mungil.com",
    profilePicture: "/logo.png", 
    id: "XXXXXXXXXX",
    walletId: "XXXXXXXXXX",
  };
  

export const data = [
    { month: "Jan", "2023": 15000000, "2024": 25000000 },
    { month: "Feb", "2023": 20000000, "2024": 30000000 },
    { month: "Mar", "2023": 18000000, "2024": 35000000 },
    { month: "Apr", "2023": 22000000, "2024": 27000000 },
    { month: "May", "2023": 25000000, "2024": 32000000 },
    { month: "Jun", "2023": 38000000, "2024": 28000000 },
    { month: "Jul", "2023": 30000000, "2024": 26000000 },
    { month: "Aug", "2023": 27000000, "2024": 31000000 },
    { month: "Sep", "2023": 22000000, "2024": 29000000 },
    { month: "Oct", "2023": 26000000, "2024": 12000000 },
    { month: "Nov", "2023": 24000000, "2024": 33000000 },
    { month: "Dec", "2023": 28000000, "2024": 35000000 },
];

export const orderStats = {
  totalOrders: {
    saham: 1200000,
    reksadana: 800000,
    obligasi: 500000,
  },
  totalReturns: {
    saham: 300000,
    reksadana: 200000,
    obligasi: 100000,
  },
  totalRevenue: {
    saham: 1500000,
    reksadana: 1000000,
    obligasi: 7500000,
  },
};

export const whyChooseFeatures = [
    {
        icon: FaShieldAlt,
        title: "Secure & Transparent",
        description: "Powered by blockchain and smart contracts for a tamper-proof investment experience."
    },
    {
        icon: FaBolt,
        title: "Fast Transactions",
        description: "Execute trades in real-time with low fees and no middlemen slowing you down."
    },
    {
        icon: FaGlobe,
        title: "Global Access",
        description: "Invest from anywhere in the world, unrestricted by traditional financial barriers."
    },
    {
        icon: FaChartLine,
        title: "AI-Powered Insights",
        description: "Get real-time analytics and AI-driven investment recommendations tailored for you."
    }
];


export const portfolioData = {
  labels: ["Stocks", "Bonds", "Mutual Funds", "Cryptocurrency"],
  datasets: [
    {
      data: [50, 30, 20], // Persentase kepemilikan
      backgroundColor: ["#695192", "#6785F2", "#FFCDCD"],
      hoverBackgroundColor: ["#5B3E8A", "#5673E1", "#FFB3B3"],
      borderWidth: 2,
    },
  ],
};

export const trendingInvestments = [
  {
    name: "AAPL",
    fullName: "Apple Inc.",
    price: "$175.32",
    change: "+3.2%",
    isUp: true,
  },
  {
    name: "TSLA",
    fullName: "Tesla Inc.",
    price: "$789.45",
    change: "+5.8%",
    isUp: true,
  },
  {
    name: "ETH",
    fullName: "Ethereum",
    price: "$2,480.12",
    change: "+4.3%",
    isUp: true,
  },
];

export const categories = ["Stocks", "Bonds", "Mutual Funds", "Cryptocurrency"];


export const trendingToday = [
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "AAPL", price: "8,600", change: "+51 (3.23%)", isUp: true },
];

export const stockList = [
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AAPL", fullName: "AAPL Stock", price: "8,600", change: "+50 (3.23%)", isUp: true }
];

export const stockPrices = {
  AAPL: 175, // Harga per saham dalam USD
  MSFT: 320,
  GOOGL: 130,
};

export const conversionRates = {
  USD: 1, // USD ke USD (tetap sama)
  EUR: 0.92, // 1 USD = 0.92 EUR
  GBP: 0.79, // 1 USD = 0.79 GBP
  BTC: 0.000025, // 1 USD = 0.000025 BTC
  ETH: 0.00035,// 1 USD = 0.00035 ETH
};