const subMenuLinks = Array.from(document.querySelectorAll(".submenu li a"));
const subHeaders = Array.from(document.querySelectorAll(".content-wrapper h2"));

function setActiveNavLink(linkName) {
  console.debug("Setting active link:", linkName);

  for (const link of subMenuLinks) {
    if ("#" + linkName == link.hash) {
      link.firstChild.innerText = "♦";
    } else {
      link.firstChild.innerText = "♢";
    }
  }
}

function updateActiveNavLink() {
  const centerOfScreen = window.innerHeight / 2 + window.scrollY;
  const headersAboveCenter = [];

  for (const header of subHeaders) {
    if (header.offsetTop < centerOfScreen) {
      headersAboveCenter.push(header);
    }
  }
  const activeHeader = headersAboveCenter.pop();
  const linkName = activeHeader.previousElementSibling.id;
  setActiveNavLink(linkName);
}

document.addEventListener("scroll", _.throttle(updateActiveNavLink, 50));

updateActiveNavLink();
