const title = document.querySelector(".title"),
  text = title.innerHTML;
title.innerHTML = "";

function rec(i = 0) {
  title.innerHTML += text[i];
  i++;
  if (text.length > i) {
    setTimeout(() => {
      rec(i);
    }, 500);
  }
}
rec();

const boat = document.querySelector(".boat"),
  clouds = document.querySelectorAll(".cloud");
window.addEventListener("scroll", () => {
  boat.style.transform = `translateX(${scrollY}px)`;
  clouds.forEach((cloud) => {
    const speed = cloud.getAttribute("speed");
    cloud.style.transform = `translateX(${scrollY * speed}px)`;
  });
});

const div = document.querySelector(".div"),
  images = document.querySelectorAll(".img");

images.forEach((img) => {
  div.addEventListener("mousemove", (e) => {
    let speed = img.getAttribute("data-speed");
    let x = (e.pageX * speed) / 20;
    let y = (e.pageY * speed) / 10;
    img.style.transform = `translate(${x}px, ${y}px)`;
  });
});

const timers = document.querySelectorAll(".timer"),
  item = document.querySelector(".item");

window.addEventListener("scroll", function scrollFunc() {
  if (this.scrollY > item.offsetTop - item.clientHeight * 2) {
    timers.forEach((timer) => {
      function rec() {
        let count = Number(timer.getAttribute("count"));
        timer.innerHTML++;
        if (count > timer.innerHTML) {
          setTimeout(() => {
            rec();
          }, 10);
        }
      }
      rec();
    });
    this.window.removeEventListener('scroll', scrollFunc)
  }
});


const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', `${x}px`)
        btn.style.setProperty('--y', `${y}px`)
    })
})

