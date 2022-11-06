const body = document.body;



function changeBackground(){
    const img_cnt = 14;
    console.log(Math.floor((Math.random() * img_cnt)));
    img_path = `img/${Math.floor((Math.random() * img_cnt))}.jpg`;
    console.log(img_path);
    body.style.backgroundImage = `url(${img_path})`;
}

changeBackground();
