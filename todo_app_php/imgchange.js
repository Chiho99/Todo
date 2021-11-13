$list = document.querySelector('.list');
$lists = document.querySelectorAll('.list');

console.log($list);
console.log($lists);
console.log($lists[0].textContent);
console.log($lists[1].textContent);
console.log($lists[2].textContent);


$img = document.querySelector('.card-img-top');
$src = $img.getAttribute('src')
console.log($list.textContent);

for ($a in $lists){
    console.log($a.textContent);
}

// console.log(NodeList.textContent);
// for($group in $lists){
//     console.log($group.textContent);
    for($i = 0; $i<= $lists.length; $i++){
        if($list.textContent == "学校"){
            $img.setAttribute('src', 'img/school.jpg');
        }else if($list.textContent == "課題"){
            $img.setAttribute('src', 'img/assignment.jpg');
        }else if($list.textContent == "買い物"){
            $img.setAttribute('src', 'img/shopping.jpg');
        }else if($list.textContent == "仕事"){
            $img.setAttribute('src', 'img/job.jpg');
        }
    }
// }
// 
  
