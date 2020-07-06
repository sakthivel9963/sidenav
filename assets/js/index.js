function toggleSideNav() {
  const sidenav = document.querySelector('.sidenav');
  const sidenavBlock = sidenav.classList.value
    .split(' ')
    .filter((value) => value === 'block');
  if (sidenavBlock && sidenavBlock.length) {
    sidenav.classList.remove('block');
    sidenav.classList.add('none');
  } else {
    sidenav.classList.remove('none');
    sidenav.classList.add('block');
  }
}
