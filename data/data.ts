import { FaShieldAlt, FaBolt, FaGlobe, FaChartLine } from "react-icons/fa";

export const navItems = [
    { name: "Invest", link: "/invest" },
    { name: "News", link: "/news" },
    { name: "Forum", link: "/forum" },
];

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

// Dummy Data
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