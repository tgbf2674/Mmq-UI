export default function () {
  const demoDom = document.querySelectorAll('.demo');
  const main = document.querySelector('main') as HTMLElement;
  const div = document.createElement('div');
  main.appendChild(div);
  main.insertBefore(div, demoDom[0]);
  demoDom.forEach((item, index) => {
    const a = document.createElement('a');
    if (item instanceof HTMLElement) {
      item.id = `demo${index}`
      a.innerText = (item.innerText.split('\n')[0])
    }
    div.appendChild(a);
    a.addEventListener('click', () => {
      document.documentElement.scrollTop = demoDom[index].offsetTop - 74
    })
  });
}
