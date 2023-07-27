//1. 모바일 메뉴 숨기기
//객체 = m_nav_open 모바일 메뉴
//객체. 속성 style.display = 'none';
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 = m_nav, m_nav_open 햄버거 메뉴, 모바일 메뉴
//속성 addEventListener
//이벤트 click
//메서드 function
//3. x버튼 클릭 시 모바일 메뉴 숨기기
//객체 = close, m_nav_open x 버튼, 모바일 메뉴
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
console.log(m_nav_open, m_nav, close);
//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2-1 햄버거 메뉴 클릭 시 (객체.메서드(이벤트,함수))
m_nav.addEventListener('click',function(){
    //2-2 모바일 메뉴 보이기 (객체.속성.속성=값)
    m_nav_open.style.display = 'block';
})
//3-1 x버튼 클릭 시 (객체.메서드(이벤트,함수))
close.addEventListener('click',function(){
    //3-2 모바일 메뉴 숨기기 (객체.속성.속성=값)
    m_nav_open.style.display = 'none';
})
