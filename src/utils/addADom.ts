export default function () {
  const demoDom = document.querySelectorAll('.demo');
  const main = document.querySelector('main') as HTMLElement;
  const div = document.createElement('div');
  const div1 = document.createElement('div');

  div.className = 'anchorWrapper'
  div1.className = 'anchorWrapper1'
  main.appendChild(div);
  div.appendChild(div1)
  main.insertBefore(div, demoDom[0]);
  demoDom.forEach((item, index) => {
    const a = document.createElement('a');
    if (item instanceof HTMLElement) {
      item.id = `demo${index}`
      a.innerText = (item.innerText.split('\n')[0])
    }
    div1.appendChild(a);
    a.addEventListener('click', () => {
      document.documentElement.scrollTo({top: (demoDom[index] as HTMLElement).offsetTop - 74, behavior: 'smooth'})
    })
  });
}
