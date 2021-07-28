const content = document.querySelector('div.content');

const truyen = document.createElement('h1');
truyen.innerText = 'Truyện Rùa và Thỏ';
content.appendChild(truyen);
truyen.style.fontWeight = 'bolder';
truyen.style.fontSize = '50px';

const tacgia = document.createElement('h2');
tacgia.innerText = 'Aesop';
content.appendChild(tacgia);
tacgia.style.color = 'red';
tacgia.style.fontSize = '40px';


const noidung = document.createElement('h2');
noidung.innerText = 'Câu chuyện kể về cuộc đua giữa rùa và thỏ. Chú thỏ vì ỷ lại tốc độ chạy của mình mà chủ quan nên rùa dù chậm chạp mà kiên trì đã về đến đích trước. Qua đó, rút ra được bài học vô cùng ý nghĩa cho người đọc. Ý nghĩa của câu truyện chính là khi làm bất cứ một việc gì thì làm chậm và ổn định chắc chắn sẽ chiến thắng. Và cũng đừng giống Thỏ nghĩ mình chạy nhanh nên đã tự cao tự đại coi thường Rùa, kết cục là Rùa đã chiến thắng.';
content.appendChild(noidung);
noidung.style.fontSize = '30px';
noidung.style.fontWeight = 'lighter';

const image = document.createElement('img');
image.src = 'https://vcdn1-vnexpress.vnecdn.net/2015/11/08/hai-truyen-ngu-ngon-y-nghia-bang-tieng-anh-1446957781.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=sF43KYl0Mf6n8RAJ7g3EgQ';
content.appendChild(image);