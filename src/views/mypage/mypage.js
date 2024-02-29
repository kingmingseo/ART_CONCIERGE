const $searchAddress = document.querySelector('#address')
const $detailAddress = document.querySelector('#sample6_detailAddress')
const $research = document.querySelector('#research')
const $email = document.querySelector('#email')
const $phone = document.querySelector('#phone')
const $name = document.querySelector('#name')
const $addressInput = document.querySelector('#addressInput')
const $detailAddressInput = document.querySelector('#detailAddressInput')
const $quitButton = document.querySelector('#quit')
const $changeInfoButton = document.querySelector('#changeInfo')

getUserInformation()

async function getUserInformation() {
  try {
    const response = await axios.get('/api/users/')
    $phone.value = response.data.phone;
    $name.value = response.data.name;
    $email.value = response.data.email;
    $addressInput.value = response.data.userAddress
    $detailAddressInput.value = response.data.detailAddress
  } catch (error) {
    console.error('Error fetching user information:', error);
  }
};


function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }

      }
      $searchAddress.innerHTML = '<input type="text" id="sample6_address" class="input is-medium" readonly>'
      $detailAddress.style.display = 'flex';
      $research.style.display = 'block';
      document.getElementById("sample6_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample6_detailAddress").focus();
    }
  }).open();
}

$quitButton.addEventListener('click', (event) => {
  event.preventDefault();
  Swal.fire({
    title: '회원 탈퇴 하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#363636',
    cancelButtonColor: '#C0C0C0',
    confirmButtonText: '탈퇴',
    cancelButtonText: '취소'
  }).then(async (result) => {
    if (result.value) {
      await axios.post('/api/auth/logout')
      await axios.delete('/api/users')
      Swal.fire({
        title: '탈퇴 완료',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#363636',
        confirmButtonText: '확인'
      }).then(() => {
        window.location.href = "/"
      })
    }
  })
}
)

$changeInfoButton.addEventListener('click', (event) => {
  event.preventDefault();
  Swal.fire({
    title: `회원 정보를 
    수정 하시겠습니까?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#363636',
    cancelButtonColor: '#C0C0C0',
    confirmButtonText: '수정',
    cancelButtonText: '취소'
  }).then(async (result) => {
    if (result.value) {
      await axios.put('/api/auth/')
      Swal.fire({
        title: '수정 완료',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#363636',
        confirmButtonText: '확인'
      })
    }
  })
})




