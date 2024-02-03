
  
  // RWD
  ScrollTrigger.matchMedia({
    // 跟設定css 一樣  如果畫面不小於 992px 執行
    "(min-width: 768px)": () => { 
      gsap.from("#m1",{
        scrollTrigger:{
          scrub:true
        },
        y:100,
      })
      gsap.from("#m2",{
        scrollTrigger:{
          scrub:true
        },
        y:200,
        x:-100,
      })
      gsap.from("#m3",{
        scrollTrigger:{
          scrub:true
        },
        y:300,
        x:-20,
      })
      gsap.from("#t1",{
        scrollTrigger:{
          scrub:true
        },
        y:100,
      })
      gsap.from("#t2",{
        scrollTrigger:{
          scrub:true
        },
        y:350,
      })
      gsap.from("#text",{
        scrollTrigger:{
          scrub:true
        },
        y:30,
      }) 
      gsap.from("#text2",{
        scrollTrigger:{
          scrub:true
        },
        y:50,
      }) 
  },
    // 畫面不小於 768px 執行
    // error todo
    // "(min-width: 768px)": () => { 
    //   gsap.from("#m1",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:100,
    //   })
    //   gsap.from("#m2",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:200,
    //     x:-100,
    //   })
    //   gsap.from("#m3",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:300,
    //     x:-20,
    //   })
    //   gsap.from("#t1",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:100,
    //   })
    //   gsap.from("#t2",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:380,
    //   })
    //   gsap.from("#text",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:30,
    //   }) 
    //  },
    // 不管畫面大小，我都執行
    "(all)": () => { 
      // error todo
    // gsap.from("#m1",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:-50,
    //   })
    //   gsap.from("#m2",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:0,
    //     x:-50,
    //   })
    //   gsap.from("#m3",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:20,
    //     x:0,
    //   })
    //   gsap.from("#t1",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:20,
    //   })
    //   gsap.from("#t2",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:80,
    //   })
    //   gsap.from("#text",{
    //     scrollTrigger:{
    //       scrub:true
    //     },
    //     y:30,
    //   }) 
     },
  });

  
  // 另一種寫法
  // gsap.registerPlugin(ScrollTrigger);
  
  // gsap.to("#m1", {
  //       x: 300,
  //       duration: 3,
  //       rotation: 360,
  //       scrollTrigger: {
  //         trigger: ".m1", //觸發得物件
  //         start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
  //         end: "+=300", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
  //         pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
  //         scrub: true, // 物件動畫根據卷軸捲動程度跑
  //         toggleClass: "active", // 增加移除的class，class名稱須為字串
  //         markers: true // 顯示標記
  //       })