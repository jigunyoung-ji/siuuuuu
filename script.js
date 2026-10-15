document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".card ol li");

    if (listItems[0]) {
        listItems[0].style.cursor = "pointer";
        listItems[0].style.fontWeight = "bold";
        listItems[0].title = "클릭하여 로그인하세요";

        listItems[0].addEventListener("click", () => {
            const userId = prompt("아이디를 입력해주세요:");
            
            if (userId) {
                const password = prompt("비밀번호를 입력해주세요:");
                if (password) {
                    alert(`${userId}님, 환영합니다! 공룡 정보 공유 웹사이트에 오신 것을 환영합니다.`);
                    // 로그인 성공 시 텍스트 변경
                    listItems[0].innerText = `로그인 완료 (접속중: ${userId})`;
                    listItems[0].style.color = "blue";
                } else {
                    alert("비밀번호 입력이 취소되었습니다.");
                }
            } else {
                alert("아이디 입력이 취소되었습니다.");
            }
        });
    }

    if (listItems[1]) {
        listItems[1].style.cursor = "pointer";
        listItems[1].style.fontWeight = "bold";
        listItems[1].title = "클릭할 때마다 제목 색상이 바뀝니다";

        listItems[1].addEventListener("click", () => {
            const randomColor = '#' + Math.round(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
            
            document.querySelector("h1").style.color = randomColor;
            
            const headings = document.querySelectorAll("h2, h3");
            headings.forEach(heading => {
                heading.style.color = randomColor;
            });

            listItems[1].innerText = `글자 색 바꾸기 (적용된 색상: ${randomColor})`;
        });
    }

    if (listItems[2]) {
        let clickCount = 0; // 클릭 수를 저장할 변수 초기화
        
        listItems[2].style.cursor = "pointer";
        listItems[2].style.fontWeight = "bold";
        listItems[2].title = "클릭하여 횟수를 증가시키세요";

        listItems[2].addEventListener("click", () => {
            clickCount++; // 클릭할 때마다 1씩 증가
            
            listItems[2].innerText = `클릭 수 세기 (현재 클릭 횟수: ${clickCount}번)`;
            
            listItems[2].style.color = "red";
            setTimeout(() => {
                listItems[2].style.color = "black";
            }, 200);
        });
    }
});
