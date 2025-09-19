document.addEventListener("DOMContentLoaded", function () {
    const nav = `
    <header class="top-nav">
      <div class="nav-left">
        <div class="logo">EVC</div>
        <div class="categories">
          <a href="index.html">Home</a>
          <a href="library.html">My Library</a>
          <a href="player.html">Player</a>
          <a href="epn.html">EPN</a>
        </div>
      </div>
  
      <div class="nav-center">
        <input type="text" placeholder="Search Settings..." />
        <button><i class="fas fa-search"></i></button>
      </div>
  
      <div class="nav-right">
        <a href="settings.html" class="settings-link">Settings</a>
        <div class="user">
          <span>Mirzan Zuhair</span>
          <img src="images/profile.jpg" alt="Profile" />
        </div>
      </div>
    </header>
    `;
  
    document.getElementById("navbar").innerHTML = nav;
  });
  