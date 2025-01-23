    const magneticItems = document.querySelectorAll('.magnetic-item');
magneticItems.forEach(item => {
item.addEventListener('mousemove', (e) => {
const { left, top, width, height } = item.getBoundingClientRect();
const x = (e.clientX - (left + width / 2)) * 0.3;
const y = (e.clientY - (top + height / 2)) * 0.3;
item.style.transform = `translate(${x}px, ${y}px)`;
});
item.addEventListener('mouseleave', () => {
item.style.transform = 'translate(0, 0)';
});
});
