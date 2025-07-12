let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}
// Typing test

const typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Frontend Developer','UI/UX Designer','An Aspiring Software Developer','Photographer',],
      typeSpeed: 80,
      backspeed: 80,
      backDelay: 1200,
      loop: true,
    });

  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-fullscreen-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".cert-img").forEach(img => {
      img.onclick = () => {
          modal.style.display = "block";
          modalImg.src = img.src;
      };
  });

  closeBtn.onclick = () => {
      modal.style.display = "none";
  };

  window.onclick = (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  };


  document.getElementById("read-more-btn").onclick = function () {
    const moreText = document.getElementById("more-text");
    const btn = this;

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
};


