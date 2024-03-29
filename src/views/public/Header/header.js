const $loginButton = document.querySelector('#login');
  const $myPage = document.querySelector('#mypage')
  let token;
  let user_Data;
  loadCategory();
  getUserInformation();

  token = getCookie("token");

  if (token) {
    $loginButton.textContent = "LOGOUT";
  }
  else {
    $loginButton.textContent = "LOGIN";
  }

async function getUserInformation() {
  try {
    const response = await axios.get('/api/users/');
    user_Data = response.data;
  } catch (error) {
    console.error('Error fetching user information:', error);
  }
};

  $loginButton.addEventListener('click', () => {
    if (token) {
      Swal.fire({
        title: '로그아웃 하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#363636',
        cancelButtonColor: '#C0C0C0',
        confirmButtonText: '로그아웃',
        cancelButtonText: '취소'
      }).then(async(result) => {
        if (result.value) {
          await axios.post('/api/auth/logout')
          window.location.href = '/'
        }

      })
    }
    else {
      window.location.href = '/auth'
    }
  })

  $myPage.addEventListener('click', () => {
    if (token) {
      if (user_Data.isAdmin) {
        window.location.href = '/admin/categories'
      } else {
        window.location.href = '/orders'
      }
    }
    else {
      Swal.fire({
        title: '로그인이 필요합니다!',
        icon: 'warning',
        confirmButtonColor: '#363636',
        confirmButtonText: '확인',
      });
    }
  })
  // 카테고리 목록을 드롭다운 목록에 렌더링
  function loadCategory() {
    axios.get('/api/exhibits/categoryList')
      .then(response => {
        let category_All = response.data;
        console.log(category_All)
        let category_List = [];

        for (let element of category_All) {
          category_List.push([element.category, element._id]);
        }

        category_List.unshift(['전체', '전체 ID']);

        let element_Select = document.querySelector('.navbar-dropdown');
        element_Select.innerHTML = '';

        let for_Count = 1;
        category_List.forEach(category => {
          // 카테고리 최대 5개까지만 목록에 출력
          if (for_Count >= 7) {
            return;
          } else {
            for_Count += 1;
            const createElement = document.createElement("a");
            createElement.className = 'navbar-item';
            createElement.textContent = category[0];
            createElement.href = `/exhibits?categoryName=${category[1]}`;
            element_Select.appendChild(createElement);
          }
        });
      })
      .catch(error => {
        console.error('에러 발생:', error);
      });
  }
  
  // 키워드 검색
  function search_Keyword() {
    let input_Element = document.getElementById('header-search-input');

    let keyword = input_Element.value;

    if (keyword.trim() === '') {
      alert('검색할 키워드를 입력하세요')
    } else {
      let search_URL = `/exhibits?word=${input_Element.value}`;

      window.location.href = search_URL;
    }
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }