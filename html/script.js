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
        title:"你认为计科和软工区别是？",
        content:"做积木搭积木"
    },
    {
        title:"1+1",
        content:"2"
    },
    {
        title:"linux系统中Ctrl+C的效果是？",
        content:"终止当前程序"
    },
    {
        title:"求是潮的三大产品分别是？",
        content:"box求是潮云u盘、enroll选课助手、mobile求是潮手机站"
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
var bu=[false,false,false,false,false,false,false,false,false,false,false,false,false];/*盒子状态*/

/*添加title文本*/
for(let i = 0;i<13;i++){
    document.getElementById(index1[i]).innerHTML=data[i]["title"];
}



let bgcolor=["grey","white"];
let a=0;
function changeform(x){
    a=x;
    bu[a-1]=!bu[a-1];
    index3[a-1].style.color="black";
    /*改变盒子的状态*/
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

/*背景滚轮文字效果*/
const bg =document.querySelector(".bg");
document.addEventListener("scroll",
function(){
    const scrollY=window.scrollY;/*获取滚轮*/
    if(scrollY!=0){
        bg.style.backgroundPosition="calc(50% + "+scrollY+"px) calc(50% + "+scrollY+"px)";
    }else{
        bg.style.backgroundPosition="";/*重置*/
    }
})