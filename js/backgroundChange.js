const body = document.body;



function changeBackground(){
    const img_cnt = 15;
    console.log(Math.floor((Math.random() * img_cnt))-1);
    img_path = `./img/${Math.floor((Math.random() * img_cnt))-1}.jpg`;
    console.log(img_path);
    body.style.background = img_path;
}

changeBackground();
