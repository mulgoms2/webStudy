// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectBar = document.querySelector('.js_select'),
  COUNTRY_KEY = 'country';


function saveCountry(){
    const country = selectBar.value; // 자동으로 선택된 자식요소 <option> 태그들의 value 요소들을 가져온다.
    localStorage.setItem(COUNTRY_KEY ,country); // 유일한 키값인 COUNTRY_KEY로 value를 보내기 때문에 밸류의 변경만 일어남
}

function loadCountry(){
  const country = localStorage.getItem(COUNTRY_KEY); //COUNTRY_KEY(key)의 밸류 리턴
  if (country) {
    selectBar.value = country; //select 태그의 밸류를 지정해주면 해당 밸류의 자식태그 option이 선택됨
  }
}

function init() {
    selectBar.addEventListener('change', saveCountry);
    loadCountry();
}

init();