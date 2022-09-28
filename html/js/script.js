const data = [
    {
        title:"这是问题",
        content:"这是答案",
    },
    {
        title:"浙大最潮的学生组织是?",
        content:"求是潮",
    },
    {
        title:"求是潮的办公室在哪里？",
        content:"小剧场B217"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    },
    {
        title:"想不出问题了随便写点什么吧",
        content:"想不出答案了随便写点什么吧"
    }
]

var index1 =["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12","p13"];
var index2 =["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13"];
var index3 =[one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen];//wow
var bu=[false,false,false,false,false,false,false,false,false,false,false,false,false];

for(let i = 0;i<13;i++){
    document.getElementById(index1[i]).innerHTML=data[i]["title"];
}



let bgcolor=["grey","white"];
let a=0;
function changeform(x){
    a=x;
    bu[a-1]=!bu[a-1];
    index3[a-1].style.color="black";
    if(bu[a-1]==true){
        index3[a-1].style.height="120px";
        index3[a-1].style.backgroundColor="grey";
        document.getElementById(index2[a-1]).innerHTML=data[a-1]["content"];
    }else{
        index3[a-1].style.height="30px";
        index3[a-1].style.backgroundColor="white";
        document.getElementById(index2[a-1]).innerHTML=null;
    }
}

const bg =document.querySelector(".bg");
document.addEventListener("scroll",
function(){
    const scrollY=window.scrollY;
    if(scrollY!=0){
        bg.style.backgroundPosition="calc(50% + "+scrollY+"px) calc(50% + "+scrollY+"px)";
    }else{
        bg.style.backgroundPosition="";
    }
})