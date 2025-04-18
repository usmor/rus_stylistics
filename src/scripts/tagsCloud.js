const unsortedTags = [
  { name: "варианты правописания", link: "#" },
  { name: "вводные слова", link: "#" },
  { name: "управление", link: "#" },
  { name: "падеж", link: "#" },
  { name: "предлог", link: "#" },
  { name: "подлежащее", link: "#" },
  { name: "дополнение", link: "#" },
  { name: "члены предложения", link: "#" },
  { name: "местоимения", link: "#" },
  { name: "отрицание", link: "#" },
  { name: "неопределенность", link: "#" },
  { name: "дискурсивные маркеры", link: "#" },
  { name: "наречия", link: "#" },
  { name: "модальность", link: "#" },
  { name: "семантика", link: "#" },
  { name: "паронимы", link: "#" },
  { name: "орфография", link: "#" },
  { name: "союзы", link: "#" },
  { name: "грамматика", link: "#" },
  { name: "синонимы", link: "#" },
  { name: "грамматические варианты", link: "#" }
];

tags = unsortedTags.sort((a, b) => a.name.localeCompare(b.name));