const mainContainer = document.querySelector(".container");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                                     DATA                                           //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
const mainDataArray = [
   {
    id:1,
    title:"Statistics",
    statisticData: [
        {
            id:1,
            date:"2023-06-04",
            statistics:{
                sleep: [],
                work: []
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: 0,
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:2,
            date:"2023-06-05",
            statistics:{
                sleep: [6,5,11,11],
                work: [0,1,5,15,20,30,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [10,10],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:3,
            date:"2023-06-06",
            statistics:{
                sleep: [8,15,11,55],
                work: [0,1,7,10,20,30,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [9,30],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:4,
            date:"2023-06-07",
            statistics:{
                sleep: [6,45,12,45],
                work: [0,1,6,5,22,0,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [7,30],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:5,
            date:"2023-06-08",
            statistics:{
                sleep: [6,33,13,9],
                work: [0,1,5,30]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [0,0],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:6,
            date:"2023-06-09",
            statistics:{
                sleep: [0,50,6,30,9,11,12,3],
                work: [22,0,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [9,0],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:7,
            date:"2023-06-10",
            statistics:{
                sleep: [8,45,14,14],
                work: [0,1,7,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [0,0],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:8,
            date:"2023-06-11",
            statistics:{
                sleep: [1,35,6,9,13,1,15,39],
                work: [21,0,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [8,30],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:9,
            date:"2023-06-12",
            statistics:{
                sleep: [6,35,12,23],
                work: [0,1,5,30,20,30,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [10,20],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:10,
            date:"2023-06-13",
            statistics:{
                sleep: [9,25,15,40],
                work: [0,1,7,50,20,30,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [10,20],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:11,
            date:"2023-06-14",
            statistics:{
                sleep: [8,30,13,23,16,0,18,0],
                work: [0,1,7,47,22,0,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [8,30],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
        {
            id:12,
            date:"2023-06-15",
            statistics:{
                sleep: [8,30,15,20],
                work: [0,1,6,30,22,0,24,0]
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0,
                workPremium: 0,
             },
             outcome:[
                {
                    eat: 0,
                    rent: 0,
                    internet: 0,
                    orange: 0,
                    locomotion: 0,
                 },
                 {
                    netflix: 0,
                    telran: 0,
                    lifeXP: 0,
                 },
                 {
                    clothes: 0,
                    hygiene: 0,
                    fun: 0
                 },
                 {
                    charity: 0,
                    lost: 0,
                    lent: 0
                 }
             ]
            },
            work:{
                hoursToday: [0,0],
                salaryPerHour: 20.5,
                premium: 0,
                salary: false,
            },
            comment: "",
            tasks_today: []
        },
    ],
    pageRendering:()=>{
      mainContainer.innerHTML = "" ;
      const statContainer = document.createElement("div");
      statContainer.classList.add("statisticMainContainer");
      const but = document.createElement("button");
      but.classList.add("backButton");
      but.innerText = "back"
      but.addEventListener("click",mainDataArray[4].functions_store.secondPage)
      statContainer.append(but);
      mainContainer.append(statContainer);

      mainDataArray[0].statisticData.forEach(el => {
         const dayContainer = document.createElement('div');
         dayContainer.classList.add("dayContainer");
         //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
         if(el.statistics.sleep.length === 4){
         const sleep_from = (el.statistics.sleep[0]*60)+(el.statistics.sleep[1]);
         const sleep_till = (el.statistics.sleep[2]*60)+(el.statistics.sleep[3]);
         const sleep = document.createElement("div");
         sleep.classList.add("sleep");
         sleep.style.gridColumn = `${sleep_from}/${sleep_till}`;
         dayContainer.append(sleep);
           };
         if(el.statistics.sleep.length === 8){
            const sleep_from = (el.statistics.sleep[0]*60)+(el.statistics.sleep[1]);
            const sleep_till = (el.statistics.sleep[2]*60)+(el.statistics.sleep[3]);
            const sleep = document.createElement("div");
            sleep.classList.add("sleep");
            sleep.style.gridColumn = `${sleep_from}/${sleep_till}`;
            dayContainer.append(sleep);

           const sleep_from2 = (el.statistics.sleep[4]*60)+(el.statistics.sleep[5]);
           const sleep_till2 = (el.statistics.sleep[6]*60)+(el.statistics.sleep[7]);
           const sleep2 = document.createElement("div");
           sleep2.classList.add("sleep");
           sleep2.style.gridColumn = `${sleep_from2}/${sleep_till2}`;
           dayContainer.append(sleep2);
           };
           //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
           if(el.statistics.work.length === 4){
            const work_begin = (el.statistics.work[0]*60)+(el.statistics.work[1]);
            const work_end = (el.statistics.work[2]*60)+(el.statistics.work[3]);
            const work1 = document.createElement("div");
            work1.classList.add("work");
            work1.style.gridColumn = `${work_begin}/${work_end}`;
            work1.style.gridRow = "1/2"
            dayContainer.append(work1)
           }
           if(el.statistics.work.length === 8){
            const work_begin = (el.statistics.work[0]*60)+(el.statistics.work[1]);
            const work_end = (el.statistics.work[2]*60)+(el.statistics.work[3]);
            const work1 = document.createElement("div");
            work1.classList.add("work");
            work1.style.gridColumn = `${work_begin}/${work_end}`;
            work1.style.gridRow = "1/2"
            dayContainer.append(work1)

            const work_begin2 = (el.statistics.work[4]*60)+(el.statistics.work[5]);
            const work_end2 = (el.statistics.work[6]*60)+(el.statistics.work[7]);
            const work2 = document.createElement("div");
            work2.classList.add("work");
            work2.style.gridColumn = `${work_begin2}/${work_end2}`;
            work2.style.gridRow = "1/2"
            dayContainer.append(work2)

           }

        statContainer.append(dayContainer);

      });
      
    }
   },
   {
    id:2,
    title:"Body",
    pageRendering:()=>{
        
        console.log("Body")
    }
   },
   {
    id:3,
    title:"Mind",
    pageRendering:()=>{
       
        console.log("Mind")
    }
   },
   {
    id:4,
    title:"Society",
    pageRendering:()=>{
        
        console.log("Society")
    }
   },
   {
    id:5,
    title:"Time/Money",
    pageRendering:()=>{
      mainContainer.innerHTML = "" ;
      const timeContainer = document.createElement("div");
      timeContainer.classList.add("statisticMainContainer");
      const but = document.createElement("button");
      but.classList.add("backButton");
      but.innerText = "back"
      but.addEventListener("click",mainDataArray[4].functions_store.secondPage)
      timeContainer.append(but);
      mainContainer.append(timeContainer);

      mainDataArray[0].statisticData.forEach(el => {
      const goalContainer = document.createElement("div");
      goalContainer.classList.add("goalContainer");
      goalContainer.innerText = el.work.hoursToday;
      timeContainer.append(goalContainer);
      });
    },
    functions_store:{
        frontPage:()=>{
            mainContainer.innerHTML = "";
            const container = document.createElement("div");
            const button = document.createElement("button");
            container.classList.add("frontPageContainer");
            button.innerText = "Welcome";
            button.addEventListener('click',mainDataArray[4].functions_store.secondPage)
            container.append(button);
            mainContainer.append(container);
        },
        secondPage:()=>{
            mainContainer.innerHTML = "";
            const container = document.createElement("div");
            const back = document.createElement("p");
            back.innerText = "back";
            back.addEventListener("click",mainDataArray[4].functions_store.frontPage)
            container.append(back)
            container.classList.add("secondPageContainer")
            mainDataArray.forEach(el => {
                const buttons = document.createElement("button");
                buttons.innerText = el.title;
                buttons.addEventListener("click",el.pageRendering)
                container.append(buttons);
                mainContainer.append(container);
        })
        }
   }
   }

];
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                                   DATA END                                         //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

mainDataArray[4].functions_store.frontPage();

