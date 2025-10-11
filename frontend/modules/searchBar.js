// searchBar.js
export function initSearchBar() {
  const searchBox = document.getElementById("search-box");
  const searchInput = document.getElementById("search-input");
  const searchIcon = document.getElementById("search-icon");

  // 아이콘 클릭 시 포커스
  searchIcon.addEventListener("click", () => {
    searchInput.focus();
  });

  // input에 포커스되면 active 유지
  searchInput.addEventListener("focus", () => {
    searchBox.classList.add("active");
  });

  // focus 해제 시 내용이 없으면 축소
  searchInput.addEventListener("blur", () => {
    if (searchInput.value.trim() === "") {
      searchBox.classList.remove("active");
    }
  });
}

// 페이지 로드시 실행
initSearchBar();
