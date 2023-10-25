const tabs = document.querySelectorAll('[data-tab]');
const allContent = document.querySelectorAll('[data-content]');
const header = document.querySelector('[data-header]');

//Перебор табов
tabs.forEach((item) => {
  //Навесил собитие на таб
  item.addEventListener('click', (event) => {
    //Получили атрибут таба
    const content = event.currentTarget.getAttribute('data-tab');
    //Нашли нужный контент оответствующий нашему атрибуту
    const contentList = document.querySelectorAll(`.${content}`);

    //Удалим айди у хедера
    header.removeAttribute('id');
    //Добавим нужный айди
    header.id = content;

    //Убрать активный таб
    tabs.forEach((item) => {
      item.classList.remove('active-tab');
    });
    //Дать класс табу на который совершено нажатие
    event.currentTarget.classList.add('active-tab');

    //Скрыть весь контент
    allContent.forEach((item) => {
      item.classList.add('hidden');
    });

    //Отобразить нужный
    contentList.forEach((item) => {
      item.classList.remove('hidden');
    });

    //Скролим на вверх
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  });
});
