const NavbarComponent = `<div class="nav-container">
<div class="nav-logo">
    <img width="auto" height="20px" src="./assets/icon.svg" alt="로고" />
</div>
<div class="nav-contents">
  <ul class="nav-menu">
    <li class="nav-item">
      <button class="nav-button blue">이메일로 소식 받기</button>
    </li>
    <li class="nav-item">
      <button class="nav-button grey">채용 바로가기</button>
    </li>
  </ul>
</div>
</div>`;

const navElement = document.querySelector("nav");
export default function () {
  navElement.innerHTML = NavbarComponent;
}
