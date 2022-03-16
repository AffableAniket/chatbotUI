let count = 0;
let botFrame = document.querySelector("#bot_frame");
let iframeBody;
let iframeList;
let iframeOptions;
let toggle;
const bot = document.querySelector(".bot");
const bg_img = document.querySelector(".bg_img");
const bot_top = document.querySelector(".bot-top");
const bot_content = document.querySelector(".bot-content");
window.addEventListener("load",function (){
  setTimeout(handleVisibility,1000)

});
botFrame.addEventListener("load",function (){
  toggle = true;
handleVisibility("true");
   });

 function animateIframe(){

        botFrame.removeEventListener("load",function (){
          console.log("event listener rmv");
      });
       window.removeEventListener("load",function (){
         console.log("event listener rmv");
     })
  toggle = false;


 }
function handleVisibility(value){
    bot_top.style.transition = "opacity 3s ease 2s";
    bot_top.style.visibility = "visible";
    bot_top.style.opacity = "1";

    bot_content.style.transition = "opacity 2s ease 5s";
    bot_content.style.visibility = "visible";
    bot_content.style.opacity = "1";

    bot.style.transition = "opacity 2s ease 7s";
    bot.style.visibility = "visible";
    bot.style.opacity = "1";

    if(value==="true"){
   toggle = true;
      const windowExists  = botFrame.contentWindow;
       if(windowExists){
            const documentExists = botFrame.contentDocument;
             if(documentExists){
               iframeBody = documentExists.body;
               iframeBody=botFrame.contentDocument.body;
               iframeList = iframeBody.querySelectorAll(".list");
                 if(iframeList[0].style.visibility == "hidden" || iframeList[0].style.visibility !== "visible"){
              iframeList.forEach((item, i) => {
                    return  setTimeout(() => {item.style.visibility="visible";},1000*i)
              });
                     const chat_btn = iframeBody.querySelector(".chat_btn");
                    setTimeout(()=>{
                       chat_btn.style.visibility = "visible";
                            chat_btn.style.opacity = "1";
                              return
                    },3500)
              }
        }
    }

}
}
bot.addEventListener("click",function (){
        count += 1;
        if(count==1){
           if(toggle){
             botFrame.style.visibility = "visible";
              bg_img.style.boxShadow = "none";
             bot.style.pointerEvents = "auto";
                animateIframe();
            }

        }
      else if(count==2){
         botFrame.style.visibility = "hidden";
          bg_img.style.boxShadow = "#bfffd7d1 0px 2px 8px 1px";
         count -= 2;
         }
})
