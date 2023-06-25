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
            date:"2023-06-20",
            statistics:{
                sleep: [0,1,3,30],
                work: [20,30,24,0],
                learn: 
                  {
                     english:[],
                     javaScript: [6,0,11,13],
                     react: [11,30,13,0]
                  }
                
            },
            timeMoney:{
             income:{
                random: 0,
                invest: 0,
                borrowed: 0
                
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
                hoursToday: 10,
                salaryPerHour: 20.5,
                premium: 0,
                salary: 0,
            },
            comment: "We began",
            tasks_today: []
        },
        {
         id:2,
         date:"2023-06-21",
         statistics:{
             sleep: [15,30,19,0],
             work: [0,1,8,0,22,0,24,0],
             learn: 
               {
                  english:[],
                  javaScript: [],
                  react: []
               }
             
         },
         timeMoney:{
          income:{
             random: 0,
             invest: 0,
             borrowed: 0
             
          },
          outcome:[
             {
                 eat: 37,
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
                 fun: 7.5,
              },
              {
                 charity: 0,
                 lost: 0,
                 lent: 0
              }
          ]
         },
         work:{
             hoursToday: 8,
             salaryPerHour: 19,
             premium: 0,
             salary: 0,
         },
         comment: "",
         tasks_today: []
     },
     {
      id:3,
      date:"2023-06-22",
      statistics:{
          sleep: [7,30,10,51,16,45,21,0],
          work: [0,1,6,0,22,0,24,0],
          learn: 
            {
               english:[],
               javaScript: [],
               react: [11,55,16,30]
            }
          
      },
      timeMoney:{
       income:{
          random: 0,
          invest: 0,
          borrowed: 0
          
       },
       outcome:[
          {
              eat: 6,
              rent: 0,
              internet: 0,
              orange: 0,
              locomotion: 0,
           },
           {
              netflix: 60,
              telran: 0,
              lifeXP: 0,
           },
           {
              clothes: 0,
              hygiene: 0,
              fun: 6
           },
           {
              charity: 0,
              lost: 0,
              lent: 3
           }
       ]
      },
      work:{
          hoursToday: 8,
          salaryPerHour: 19,
          premium: 0,
          salary: 0,
      },
      comment: "",
      tasks_today: []
  },
  {
   id:4,
   date:"2023-06-23",
   statistics:{
       sleep: [8,30,11,0,17,30,20,45],
       work: [0,1,5,50,22,0,24,0],
       learn: 
         {
            english:[16,0,17,0],
            javaScript: [],
            react: [11,6,14,56]
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
    },
    outcome:[
       {
           eat: 52,
           rent: 0,
           internet: 0,
           orange: 0,
           locomotion: 0,
        },
        {
           netflix: 0,
           telran: 1331,
           lifeXP: 0,
        },
        {
           clothes: 0,
           hygiene: 0,
           fun: 3.5,
        },
        {
           charity: 0,
           lost: 0,
           lent: 2.8,
        }
    ]
   },
   work:{
       hoursToday: 7.5,
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:5,
   date:"2023-06-24",
   statistics:{
       sleep: [6,15,11,21,16,15,21,40],
       work: [0,1,5,30],
       learn: 
         {
            english:[15,0,15,45],
            javaScript: [],
            react: [12,10,14,12,22,0,23,22]
         }
       
   },
   timeMoney:{
    income:{
       random: 3,
       invest: 0,
       borrowed: 0
       
    },
    outcome:[
       {
           eat: 3.5,
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:6,
   date:"2023-06-25",
   statistics:{
       sleep: [0,50,6,0],
       work: [],
       learn: 
         {
            english:[6,20,7,39],
            javaScript: [8,8,11,13],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       hoursToday: 5,
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:7,
   date:"2023-06-26",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:8,
   date:"2023-06-27",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:9,
   date:"2023-06-28",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:10,
   date:"2023-06-29",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:11,
   date:"2023-06-30",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:12,
   date:"2023-07-1",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
{
   id:13,
   date:"2023-07-2",
   statistics:{
       sleep: [],
       work: [],
       learn: 
         {
            english:[],
            javaScript: [],
            react: []
         }
       
   },
   timeMoney:{
    income:{
       random: 0,
       invest: 0,
       borrowed: 0
       
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
       salaryPerHour: 19,
       premium: 0,
       salary: 0,
   },
   comment: "",
   tasks_today: []
},
  
    ],
    pageRendering:()=>{
      mainContainer.innerHTML = "" ;
      const statContainer = document.createElement("div");
      const infoabout = document.createElement("div");
      infoabout.classList.add("infoabout");
      statContainer.classList.add("statisticMainContainer");
      const but = document.createElement("button");
      but.classList.add("backButton");
      but.innerText = "back"
      but.addEventListener("click",mainDataArray[4].functions_store.secondPage)
      statContainer.append(but,infoabout);
      mainContainer.append(statContainer);
      const uppbuttons = [
         {
            id:1,
            title:"Sleap",
            color: "green",
            operation: ()=>{
               console.log("sleap")
            }
         },
         {
            id:2,
            title:"Work",
            color: "gray",
            operation: ()=>{
               console.log("work")
            }
         },
         {
            id:3,
            title:"Learn",
            color: "red",
            operation: ()=>{
               console.log("Learn")
            }
         },
         {
            id:4,
            title:"Free",
            color: "white",
            operation: ()=>{
               console.log("Free")
            }
         }
      ];
      uppbuttons.forEach(el => {
         const cont = document.createElement("div");
         const par = document.createElement("p");
         const color = document.createElement("div");
         color.style.backgroundColor = el.color;
         par.innerText = el.title;
         cont.classList.add("cont");
         cont.append(par,color);
         infoabout.append(cont);
         cont.addEventListener("click",el.operation)
         
      })
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
           if(el.statistics.learn.english.length === 4){
              const learn_begin = (el.statistics.learn.english[0]*60)+(el.statistics.learn.english[1]);
            const learn_end = (el.statistics.learn.english[2]*60)+(el.statistics.learn.english[3]);
            const learn1 = document.createElement("div");
            learn1.classList.add("learnEnglish");
            learn1.innerText = "E1";
            learn1.style.gridColumn = `${learn_begin}/${learn_end}`;
            learn1.style.gridRow = "1/2"
            dayContainer.append(learn1);
           }
           if(el.statistics.learn.english.length === 8){
            const learn_begin1 = (el.statistics.learn.english[0]*60)+(el.statistics.learn.english[1]);
          const learn_end1 = (el.statistics.learn.english[2]*60)+(el.statistics.learn.english[3]);
          const learn1 = document.createElement("div");
          learn1.classList.add("learnEnglish");
          learn1.innerText = "E1";
          learn1.style.gridColumn = `${learn_begin1}/${learn_end1}`;
          learn1.style.gridRow = "1/2"
          const learn_begin2 = (el.statistics.learn.english[4]*60)+(el.statistics.learn.english[5]);
          const learn_end2 = (el.statistics.learn.english[6]*60)+(el.statistics.learn.english[7]);
          const learn2 = document.createElement("div");
          learn2.classList.add("learnEnglish");
          learn2.innerText = "E2";
          learn2.style.gridColumn = `${learn_begin2}/${learn_end2}`;
          learn2.style.gridRow = "1/2"
          dayContainer.append(learn1,learn2);
         }
         if(el.statistics.learn.javaScript.length === 4){
            const java_begin = (el.statistics.learn.javaScript[0]*60)+(el.statistics.learn.javaScript[1]);
          const java_end = (el.statistics.learn.javaScript[2]*60)+(el.statistics.learn.javaScript[3]);
          const java1 = document.createElement("div");
          java1.classList.add("javaScript");
          java1.innerText = "J1"
          java1.style.gridColumn = `${java_begin}/${java_end}`;
          java1.style.gridRow = "1/2"
          dayContainer.append(java1);
         }
         if(el.statistics.learn.javaScript.length === 8){
          const java_begin1 = (el.statistics.learn.javaScript[0]*60)+(el.statistics.learn.javaScript[1]);
        const java_end1 = (el.statistics.learn.javaScript[2]*60)+(el.statistics.learn.javaScript[3]);
        const java1 = document.createElement("div");
        java1.classList.add("javaScript");
        java1.innerText = "J1"
        java1.style.gridColumn = `${java_begin1}/${java_end1}`;
        java1.style.gridRow = "1/2"
        const java_begin2 = (el.statistics.learn.javaScript[4]*60)+(el.statistics.learn.javaScript[5]);
        const java_end2 = (el.statistics.learn.javaScript[6]*60)+(el.statistics.learn.javaScript[7]);
        const java2 = document.createElement("div");
        java2.classList.add("javaScript");
        java2.innerText = "J2"
        java2.style.gridColumn = `${java_begin2}/${java_end2}`;
        java2.style.gridRow = "1/2"
        dayContainer.append(java1,java2);
         } 
         if(el.statistics.learn.react.length === 4){
         const react_begin = (el.statistics.learn.react[0]*60)+(el.statistics.learn.react[1]);
       const react_end = (el.statistics.learn.react[2]*60)+(el.statistics.learn.react[3]);
       const react1 = document.createElement("div");
       react1.classList.add("react");
       react1.innerText = "R1"
       react1.style.gridColumn = `${react_begin}/${react_end}`;
       react1.style.gridRow = "1/2"
       dayContainer.append(react1);
         }
         if(el.statistics.learn.react.length === 8){
       const react_begin1 = (el.statistics.learn.react[0]*60)+(el.statistics.learn.react[1]);
     const react_end1 = (el.statistics.learn.react[2]*60)+(el.statistics.learn.react[3]);
     const react1 = document.createElement("div");
     react1.classList.add("react");
     react1.innerText = "R1"
     react1.style.gridColumn = `${react_begin1}/${react_end1}`;
     react1.style.gridRow = "1/2"
     const react_begin2 = (el.statistics.learn.react[4]*60)+(el.statistics.learn.react[5]);
     const react_end2 = (el.statistics.learn.react[6]*60)+(el.statistics.learn.react[7]);
     const react2 = document.createElement("div");
     react2.classList.add("react");
     react2.innerText = "R2"
     react2.style.gridColumn = `${react_begin2}/${react_end2}`;
     react2.style.gridRow = "1/2"
     dayContainer.append(react1,react2);
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
      const infocontiner = document.createElement("div");
      infocontiner.classList.add("timeInfoabove");
      timeContainer.classList.add("statisticMainContainer");
      const but = document.createElement("button");
      but.classList.add("backButton");
      but.innerText = "back"
      but.addEventListener("click",mainDataArray[4].functions_store.secondPage)
      timeContainer.append(infocontiner,but);
      mainContainer.append(timeContainer);

     const aboveButtons = [
      {
         id:1,
         title: "Work hours",
         color: "green",
         operate: ()=>{
            mainDataArray[4].functions_store.hoursOfWork();
         }
      },
      {
         id:2,
         title: "Outcome",
         color: "red",
         operate: ()=>{
            mainDataArray[4].functions_store.outcome();
         }
      },
      {
         id:3,
         title: "Income",
         color: "gold",
         operate: ()=>{
            mainDataArray[4].functions_store.income();
         }
      },
     ];
     aboveButtons.forEach(el => {
      const par = document.createElement("p");
      const barrel = document.createElement("div");
      const conta = document.createElement("div");
      par.innerText = el.title;
      barrel.style.backgroundColor = el.color;
      conta.classList.add("conElem");
      conta.addEventListener("click", el.operate);

      conta.append(par,barrel);
      infocontiner.append(conta)
     })
/*===========================goal statistic===================================== */

   
      let MainStait =  2679; //20.06.2023
      let IMustTake = 2527; //primerno peredelati!!!
      const theGoal = 8000;


      mainDataArray[0].statisticData.forEach(el => {

         const outcomeToday = el.timeMoney.outcome[0].eat+el.timeMoney.outcome[0].rent+el.timeMoney.outcome[0].internet+
         el.timeMoney.outcome[0].orange+el.timeMoney.outcome[0].locomotion+el.timeMoney.outcome[1].netflix+el.timeMoney.outcome[1].telran+
         el.timeMoney.outcome[1].lifeXP+el.timeMoney.outcome[2].clothes+el.timeMoney.outcome[2].hygiene+el.timeMoney.outcome[2].fun+
         el.timeMoney.outcome[3].charity+el.timeMoney.outcome[3].lost+el.timeMoney.outcome[3].lent;
         const incomeToday = el.timeMoney.income.random+ el.timeMoney.income.invest+el.timeMoney.income.borrowed;
         MainStait = (MainStait - outcomeToday);
         MainStait = (MainStait + incomeToday);
         

      const goalContainer = document.createElement("div");
      const dateContainer = document.createElement("div");
      const progressContainer = document.createElement("div");
      dateContainer.classList.add("dateContainer");
      progressContainer.classList.add("progressContainer");
      goalContainer.classList.add("goalContainer");
      dateContainer.innerText = el.date;
      const mustTake = document.createElement("div");
      const moneyToday = el.work.hoursToday*el.work.salaryPerHour;
      IMustTake = IMustTake+moneyToday;

      if(el.work.premium > 0){
         MainStait = MainStait+el.work.premium;
         IMustTake = IMustTake-el.work.premium;
      }
      if(el.work.salary > 0){
         MainStait = MainStait+el.work.salary;
         IMustTake = IMustTake-el.work.salary;
      }
   StaitPrc = MainStait/(theGoal/100);
   MustPrc = IMustTake/(theGoal/100);
   const state = document.createElement("div");
   
   mustTake.style.height = "100%";
   state.style.height = "100%";
   mustTake.style.width = `${MustPrc}%`;
   state.style.width = `${StaitPrc}%`;
   state.style.backgroundColor = "hsl(185, 58%, 36%)";
   mustTake.style.backgroundColor = "red";
   state.innerText = Math.round(MainStait);
   mustTake.innerText = Math.round(IMustTake);

   progressContainer.append(state,mustTake)
   goalContainer.append(dateContainer,progressContainer)
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
        },
        hoursOfWork:()=>{
         mainContainer.innerHTML = "" ;
         const timeContainer = document.createElement("div");
         const infocontiner = document.createElement("div");
         infocontiner.classList.add("timeInfoabove");
         timeContainer.classList.add("statisticMainContainer");
         const but = document.createElement("button");
         but.classList.add("backButton");
         but.innerText = "back"
         but.addEventListener("click",mainDataArray[4].pageRendering)
         timeContainer.append(infocontiner,but);
         mainContainer.append(timeContainer);
         const aboveButtons = [
            {
               id:1,
               title: "Work hours",
               color: "green",
               operate: ()=>{
                  mainDataArray[4].functions_store.hoursOfWork();
               }
            },
            {
               id:2,
               title: "Outcome",
               color: "red",
               operate: ()=>{
                  mainDataArray[4].functions_store.outcome();
               }
            },
            {
               id:3,
               title: "Income",
               color: "gold",
               operate: ()=>{
                  mainDataArray[4].functions_store.income();
               }
            },
           ];
        aboveButtons.forEach(el => {
         const par = document.createElement("p");
         const barrel = document.createElement("div");
         const conta = document.createElement("div");
         par.innerText = el.title;
         barrel.style.backgroundColor = el.color;
         conta.classList.add("conElem");
         conta.addEventListener("click", el.operate);
   
         conta.append(par,barrel);
         infocontiner.append(conta)
        });
         

        let hoursTotal = 0;
        const hoursGoal = 250;

        mainDataArray[0].statisticData.forEach(el => {


        const goalContainer = document.createElement("div");
        const dateContainer = document.createElement("div");
        const progressContainer = document.createElement("div");
        dateContainer.classList.add("dateContainer");
        progressContainer.classList.add("progressContainer");
        goalContainer.classList.add("goalContainer");
        dateContainer.innerText = el.date;

        const hoursNow = document.createElement("div");
        hoursNow.classList.add("justHours");
        hoursNow.innerText = el.work.hoursToday;
        
        hoursTotal += el.work.hoursToday;
        const hourslong = document.createElement("div");
        hourslong.classList.add("hoursLong");

        const hoursloPrc = hoursTotal/(hoursGoal/100)
        hourslong.style.width = `${hoursloPrc}%`;
        hourslong.innerText = hoursTotal

        progressContainer.append(hourslong);
        goalContainer.append(dateContainer,hoursNow,progressContainer)
        timeContainer.append(goalContainer);
      })






        },
        income:()=>{
         mainContainer.innerHTML = "" ;
         const timeContainer = document.createElement("div");
         const infocontiner = document.createElement("div");
         infocontiner.classList.add("timeInfoabove");
         timeContainer.classList.add("statisticMainContainer");
         const but = document.createElement("button");
         but.classList.add("backButton");
         but.innerText = "back"
         but.addEventListener("click",mainDataArray[4].pageRendering)
         timeContainer.append(infocontiner,but);
         mainContainer.append(timeContainer);
   
         const aboveButtons = [
            {
               id:1,
               title: "Work hours",
               color: "green",
               operate: ()=>{
                  mainDataArray[4].functions_store.hoursOfWork();
               }
            },
            {
               id:2,
               title: "Outcome",
               color: "red",
               operate: ()=>{
                  mainDataArray[4].functions_store.outcome();
               }
            },
            {
               id:3,
               title: "Income",
               color: "gold",
               operate: ()=>{
                  mainDataArray[4].functions_store.income();
               }
            },
           ];
        aboveButtons.forEach(el => {
         const par = document.createElement("p");
         const barrel = document.createElement("div");
         const conta = document.createElement("div");
         par.innerText = el.title;
         barrel.style.backgroundColor = el.color;
         conta.classList.add("conElem");
         conta.addEventListener("click", el.operate);
   
         conta.append(par,barrel);
         infocontiner.append(conta)
        });

      

        mainDataArray[0].statisticData.forEach(el => {


         const goalContainer = document.createElement("div");
         const dateContainer = document.createElement("div");
         const progressContainer = document.createElement("div");
         dateContainer.classList.add("dateContainer");
         progressContainer.classList.add("progressContainer");
         goalContainer.classList.add("goalContainer");
         dateContainer.innerText = el.date;

         const incomeToday = el.timeMoney.income.random+ el.timeMoney.income.invest+el.timeMoney.income.borrowed;
         const workdMoney = el.work.hoursToday*el.work.salaryPerHour;
         const innn = incomeToday + workdMoney;

         const inco = document.createElement("div");
         inco.classList.add("incomeDiv");
         inco.innerText = innn;
         inco.style.width = `${innn*4}px`;
 
         progressContainer.append(inco)
         goalContainer.append(dateContainer,progressContainer)
         timeContainer.append(goalContainer);
       })

        },
        outcome:()=>{
         mainContainer.innerHTML = "" ;
         const timeContainer = document.createElement("div");
         const infocontiner = document.createElement("div");
         infocontiner.classList.add("timeInfoabove");
         timeContainer.classList.add("statisticMainContainer");
         const but = document.createElement("button");
         but.classList.add("backButton");
         but.innerText = "back"
         but.addEventListener("click",mainDataArray[4].pageRendering)
         timeContainer.append(infocontiner,but);
         mainContainer.append(timeContainer);
   
         const aboveButtons = [
            {
               id:1,
               title: "Work hours",
               color: "green",
               operate: ()=>{
                  mainDataArray[4].functions_store.hoursOfWork();
               }
            },
            {
               id:2,
               title: "Outcome",
               color: "red",
               operate: ()=>{
                  mainDataArray[4].functions_store.outcome();
               }
            },
            {
               id:3,
               title: "Income",
               color: "gold",
               operate: ()=>{
                  mainDataArray[4].functions_store.income();
               }
            },
           ];
        aboveButtons.forEach(el => {
         const par = document.createElement("p");
         const barrel = document.createElement("div");
         const conta = document.createElement("div");
         par.innerText = el.title;
         barrel.style.backgroundColor = el.color;
         conta.classList.add("conElem");
         conta.addEventListener("click", el.operate);
   
         conta.append(par,barrel);
         infocontiner.append(conta)
        });
        mainDataArray[0].statisticData.forEach(el => {


         const goalContainer = document.createElement("div");
         const dateContainer = document.createElement("div");
         const progressContainer = document.createElement("div");
         dateContainer.classList.add("dateContainer");
         progressContainer.classList.add("progressContainer");
         goalContainer.classList.add("goalContainer");
         dateContainer.innerText = el.date;

         const outcomeToday = el.timeMoney.outcome[0].eat+el.timeMoney.outcome[0].rent+el.timeMoney.outcome[0].internet+
         el.timeMoney.outcome[0].orange+el.timeMoney.outcome[0].locomotion+el.timeMoney.outcome[1].netflix+el.timeMoney.outcome[1].telran+
         el.timeMoney.outcome[1].lifeXP+el.timeMoney.outcome[2].clothes+el.timeMoney.outcome[2].hygiene+el.timeMoney.outcome[2].fun+
         el.timeMoney.outcome[3].charity+el.timeMoney.outcome[3].lost+el.timeMoney.outcome[3].lent;

         const oucomeBox = document.createElement("div");
         oucomeBox.classList.add("outcomeBox");
         oucomeBox.innerText = outcomeToday;
         oucomeBox.style.width = `${outcomeToday}px`;
 
         progressContainer.append(oucomeBox);
         goalContainer.append(dateContainer,progressContainer)
         timeContainer.append(goalContainer);
       })

        }
   }
}

];
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                                   DATA END                                         //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

mainDataArray[4].functions_store.frontPage();

