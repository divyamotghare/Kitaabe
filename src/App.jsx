import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const books = [
  {
    author: "George Orwell",
    country: "United Kingdom",
    language: "English",
    link: "https://example.com/1984",
    pages: "328",
    title: "1984",
    year: "1949",
    id: 1,
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    language: "Spanish",
    link: "https://example.com/cien-anos-de-soledad",
    pages: "417",
    title: "One Hundred Years of Solitude",
    year: "1967",
    id: 2,
  },
  {
    author: "Haruki Murakami",
    country: "Japan",
    language: "Japanese",
    link: "https://example.com/kafka-on-the-shore",
    pages: "505",
    title: "Kafka on the Shore",
    year: "2002",
    id: 3,
  },
  {
    author: "Chimamanda Ngozi Adichie",
    country: "Nigeria",
    language: "English",
    link: "https://example.com/half-of-a-yellow-sun",
    pages: "433",
    title: "Half of a Yellow Sun",
    year: "2006",
    id: 4,
  },
  {
    author: "Milan Kundera",
    country: "Czech Republic",
    language: "Czech",
    link: "https://example.com/the-unbearable-lightness-of-being",
    pages: "314",
    title: "The Unbearable Lightness of Being",
    year: "1984",
    id: 5,
  },
];

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
