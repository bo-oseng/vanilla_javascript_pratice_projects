# Hangman Game

## 배운점

1. svg

   - SVG란?

     - Scable Vector Graphics의 약자로 2차원 그래픽을 텍스트 편집기에서 픽셀 단위로 수정할 수 있는 XML 파일 형싱의 마크업 언어이다.
     - 픽셀단위로 조작하기 때문에 해상도가 깨지지 않는다.
     - 평면의 컬러 아이콘만 가능하다.
     - declarative하다.

   - svg태그로 선언을 시작하고, height width가 속성으로 주어지면 height \* width 내의 사각형의 픽셀을 다룰 수 있다.
   - 직선은 <line>으로 사각형은 <rect> 원은 <circle>태그가 등 여러 도형이 있다.

   ```html
   <svg height="250" width="200" class="figure-container">
     <!-- Rod -->
     <line x1="60" y1="20" x2="140" y2="20" />
   </svg>
   ```

2. 템플릿 리터럴에서 변수에 배열을 넣을때
   - 템플릿 리터럴 `${}` 에서 변수로 배열을 넣으면 배열의 원소간에 ,를 추가한 모양으로 출력된다. (arr.join(',')형태)
3. e.key, keyCode
   - 강의에서는 사용자가 입력한 키를 알기위해 event.keyCode를 사용했는데 keyCode는 입력받은 키의 아스키코드를 반환하는 옛날 방법으로 deprecated된 방법이다.
   - e.key는 사용자가 입력한 키를 바로 문자열로 반환한다.
4. regular expression, replace 함수 옵션,
   - 자바스크립트에서의 정규표현식(regular expression) 이다.
   - 파이썬에서의 정규표현식과 거의 비슷하고 쓰는 함수나 형태만 다르다.
   <table
     border="1"
   >
     <tbody>
       <tr style="height: 19px">
         <td><b>기호</b></td>
         <td><b>의미</b></td>
       </tr>
       <tr>
         <td>|</td>
         <td>OR</td>
       </tr>
       <tr>
         <td>[xxx]</td>
         <td>괄호안의 문자들 중 하나</td>
       </tr>
       <tr style="height: 19px">
         <td>[^xxx]</td>
         <td>괄호안의 문자를 제외한 것</td>
       </tr>
       <tr>
         <td>^xxx</td>
         <td>특정 문자열로 시작(괄호 없음 주의!)</td>
       </tr>
       <tr>
         <td>xxx$</td>
         <td>특정 문자열로 끝남</td>
       </tr>
       <tr>
         <td><span>()</span></td>
         <td>
           <span
             >그룹 검색 및 분류(match메서드에서 그룹별로 묶어줌)</span
           >
         </td>
       </tr>
       <tr>
         <td><span>(?: 패턴)</span></td>
         <td><span>그룹 검색(분류X)</span></td>
       </tr>
       <tr>
         <td><span>\b</span></td>
         <td>단어의 처음/끝</td>
       </tr>
       <tr>
         <td><span>\B</span></td>
         <td>단어의 처음/끝이 아님</td>
       </tr>
     </tbody>
   </table>
