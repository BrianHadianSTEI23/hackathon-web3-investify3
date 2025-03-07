import { FaShieldAlt, FaBolt, FaGlobe, FaChartLine } from "react-icons/fa";

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
      title: "Apple Stock Surges After Strong Earnings Report",
      source: "Bloomberg",
      date: "14 hours ago",
      link: "https://www.bloomberg.com/apple-earnings-report",
      imageUrl: "/news-image-1.jpg",
      stocks: [
        { name: "AAPL", change: 3.2 },
        { name: "MSFT", change: 1.5 }
      ]
    },
    {
      title: "Tesla Shares Plummet Amid Production Challenges",
      source: "CNBC",
      date: "12 hours ago",
      link: "https://www.cnbc.com/tesla-production-issues",
      imageUrl: "/news-image-2.jpg",
      stocks: [
        { name: "TSLA", change: -4.7 },
        { name: "NIO", change: -2.3 }
      ]
    },
    {
      title: "Amazon Sees Growth in Cloud Division, Stock Rises",
      source: "Reuters",
      date: "10 hours ago",
      link: "https://www.reuters.com/amazon-cloud-growth",
      imageUrl: "/news-image-3.jpg",
      stocks: [
        { name: "AMZN", change: 2.8 },
        { name: "GOOGL", change: 1.1 }
      ]
    },
    {
      title: "European Stocks Gain as Inflation Eases",
      source: "Financial Times",
      date: "8 hours ago",
      link: "https://www.ft.com/europe-inflation",
      imageUrl: "/news-image-4.jpg",
      stocks: [
        { name: "DAX", change: 1.9 },
        { name: "FTSE", change: 1.2 }
      ]
    },
    {
      title: "Alibaba's Stock Jumps After Positive Earnings Call",
      source: "Wall Street Journal",
      date: "6 hours ago",
      link: "https://www.wsj.com/alibaba-earnings",
      imageUrl: "/news-image-5.jpg",
      stocks: [
        { name: "BABA", change: 4.5 },
        { name: "JD", change: 2.0 }
      ]
    },
    {
      title: "Meta Platforms Sees Stock Decline After New Regulations",
      source: "Yahoo Finance",
      date: "4 hours ago",
      link: "https://www.yahoo.com/meta-stock-decline",
      imageUrl: "/news-image-6.jpg",
      stocks: [
        { name: "META", change: -1.8 },
        { name: "SNAP", change: -2.1 }
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
  
  export const dummyData = [
    { date: "02/24/2025", open: 177.57, high: 177.8, low: 176.0, close: 176.62, volume: 236800, brand_name: "toyota"},
    { date: "02/25/2025", open: 180.7, high: 180.93, low: 178.14, close: 179.46, volume: 262000, brand_name: "toyota"},
    { date: "02/26/2025", open: 181.69, high: 183.06, low: 181.16, close: 181.21, volume: 246000, brand_name: "toyota"}
];

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
  labels: ["Reksadana", "Saham", "Crypto"],
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

export const categories = ["Stocks", "Bonds", "Mutual Funds"];


export const trendingToday = [
  { name: "BRRI", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "ARB", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "FSX", price: "8,600", change: "+51 (3.23%)", isUp: true },
  { name: "BRRI", price: "8,600", change: "+51 (3.23%)", isUp: true },
];

export const stockList = [
  { name: "DHDI", fullName: "PT. Dutilaga Pertama", price: "8,600", change: "+50 (3.23%)", isUp: true },
  { name: "AMRI", fullName: "PT. Amna Merapi", price: "2,421", change: "-121 (4.8%)", isUp: false },
  { name: "ODD", fullName: "PT. Okubo Dokuri", price: "5,300", change: "+41 (2.23%)", isUp: true },
  { name: "PYQ", fullName: "PT. Himnas Yosque", price: "3,867", change: "-71 (1.8%)", isUp: false },
  { name: "DAN", fullName: "PT. Danang Amin", price: "6,600", change: "-281 (6.02%)", isUp: false },
  { name: "HELENI", fullName: "PT. Helena Inves", price: "3,600", change: "+41 (2.23%)", isUp: true },
  { name: "TIRA", fullName: "PT. Tiran Capital", price: "2,800", change: "+32 (1.8%)", isUp: true },
  { name: "ZONA", fullName: "PT. Zona Equity", price: "7,200", change: "-90 (2.7%)", isUp: false },
];

