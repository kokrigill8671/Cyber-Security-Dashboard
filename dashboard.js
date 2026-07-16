/* ============================================
   Cyber Security Dashboard
   dashboard.js
   Part 1
============================================ */

document.addEventListener("DOMContentLoaded", function () {

    animateCounters();

    createIncidentChart();

    createSeverityChart();

    animateProgressBars();

});

/* ============================================
   Animated Counter
============================================ */

function animateCounters() {

    const counters = document.querySelectorAll(".dashboard-card h2");

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let current = 0;

        const speed = Math.max(10, target / 60);

        function update() {

            if (current < target) {

                current += speed;

                if (current > target)
                    current = target;

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        }

        update();

    });

}

/* ============================================
   Incident Line Chart
============================================ */

function createIncidentChart() {

    const canvas = document.getElementById("incidentChart");

    if (!canvas) return;

    new Chart(canvas, {

        type: "line",

        data: {

            labels: [

                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"

            ],

            datasets: [

                {

                    label: "Security Incidents",

                    data: [

                        12,
                        18,
                        10,
                        21,
                        14,
                        27,
                        24

                    ],

                    borderColor: "#0ea5e9",

                    backgroundColor: "rgba(14,165,233,.18)",

                    borderWidth: 3,

                    fill: true,

                    tension: .45,

                    pointRadius: 5,

                    pointBackgroundColor: "#0284c7"

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

/* ============================================
   Severity Pie Chart
============================================ */

function createSeverityChart() {

    const canvas = document.getElementById("severityChart");

    if (!canvas) return;

    new Chart(canvas, {

        type: "doughnut",

        data: {

            labels: [

                "Critical",

                "High",

                "Medium",

                "Low"

            ],

            datasets: [

                {

                    data: [

                        12,

                        24,

                        18,

                        8

                    ],

                    backgroundColor: [

                        "#ef4444",

                        "#f59e0b",

                        "#0ea5e9",

                        "#22c55e"

                    ],

                    borderWidth: 0

                }

            ]

        },

        options: {

            cutout: "70%",

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}

/* ============================================
   Progress Animation
============================================ */

function animateProgressBars() {

    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0%";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

/* ============================================
   Cyber Security Dashboard
   Part 2
============================================ */

/* ============================================
   Sidebar Active Menu
============================================ */

document.querySelectorAll(".sidebar ul li").forEach(item => {

    item.addEventListener("click", function () {

        document.querySelectorAll(".sidebar ul li")
            .forEach(li => li.classList.remove("active"));

        this.classList.add("active");

    });

});

/* ============================================
   Dark Mode
============================================ */

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode")
    );

}

window.addEventListener("load",()=>{

    const saved=localStorage.getItem("theme");

    if(saved==="true"){

        document.body.classList.add("dark-mode");

    }

});

/* ============================================
   Live Clock
============================================ */

function updateClock(){

    const clock=document.getElementById("liveClock");

    if(!clock) return;

    const now=new Date();

    clock.innerHTML=now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();

/* ============================================
   Scroll To Top Button
============================================ */

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML="⬆";

scrollBtn.id="scrollTop";

scrollBtn.style.position="fixed";
scrollBtn.style.bottom="25px";
scrollBtn.style.right="25px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.border="none";
scrollBtn.style.background="#0ea5e9";
scrollBtn.style.color="white";
scrollBtn.style.fontSize="22px";
scrollBtn.style.cursor="pointer";
scrollBtn.style.display="none";
scrollBtn.style.zIndex="9999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>250){

        scrollBtn.style.display="block";

    }else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ============================================
   Card Hover Animation
============================================ */

document.querySelectorAll(".dashboard-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

/* ============================================
   Notification Counter
============================================ */

let notificationCount=4;

function updateNotification(){

    const badge=document.getElementById("notificationCount");

    if(!badge) return;

    badge.innerHTML=notificationCount;

}

updateNotification();

/* ============================================
   Fake Live Alerts
============================================ */

const alerts=[

"Firewall blocked suspicious traffic",

"New phishing email detected",

"Backup completed successfully",

"Critical vulnerability found",

"User login from new location"

];

function randomAlert(){

    const box=document.getElementById("liveAlert");

    if(!box) return;

    const random=Math.floor(Math.random()*alerts.length);

    box.innerHTML=alerts[random];

}

setInterval(randomAlert,6000);

/* ============================================
   Progress Bar Animation
============================================ */

document.querySelectorAll(".progress-bar").forEach(bar=>{

    const width=bar.style.width;

    bar.style.width="0%";

    setTimeout(()=>{

        bar.style.width=width;

    },300);

});

/* ==========================================
   Cyber Security Dashboard
   Part 3
   Premium Features
==========================================*/

/* ===========================
   Loading Screen
=========================== */

window.onload = function(){

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

}

/* ===========================
   Theme Switch
=========================== */

const themeBtn=document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick=function(){

document.body.classList.toggle("dark-mode");

const icon=this.querySelector("i");

if(document.body.classList.contains("dark-mode")){

icon.className="fa-solid fa-sun";

}else{

icon.className="fa-solid fa-moon";

}

}

}

/* ===========================
   Sidebar Collapse
=========================== */

const sidebarBtn=document.getElementById("menuBtn");

if(sidebarBtn){

sidebarBtn.onclick=function(){

document.querySelector(".sidebar").classList.toggle("collapse");

document.querySelector(".content").classList.toggle("expand");

}

}

/* ===========================
   Search Table
=========================== */

const search=document.getElementById("tableSearch");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(value)?"":"none";

});

});

}

/* ===========================
   Auto Refresh Cards
=========================== */

function randomNumber(min,max){

return Math.floor(Math.random()*(max-min+1))+min;

}

setInterval(()=>{

const total=document.getElementById("total");

const open=document.getElementById("open");

const resolved=document.getElementById("resolved");

const critical=document.getElementById("critical");

if(total) total.innerHTML=randomNumber(120,150);

if(open) open.innerHTML=randomNumber(15,35);

if(resolved) resolved.innerHTML=randomNumber(80,120);

if(critical) critical.innerHTML=randomNumber(5,15);

},10000);

/* ===========================
   Live Date
=========================== */

const date=document.getElementById("todayDate");

if(date){

const d=new Date();

date.innerHTML=d.toDateString();

}

/* ===========================
   Welcome Message
=========================== */

const welcome=document.getElementById("welcome");

if(welcome){

let hour=new Date().getHours();

let msg="";

if(hour<12){

msg="Good Morning Administrator";

}

else if(hour<18){

msg="Good Afternoon Administrator";

}

else{

msg="Good Evening Administrator";

}

welcome.innerHTML=msg;

}

/* ===========================
   Export PDF
=========================== */

const pdf=document.getElementById("downloadPDF");

if(pdf){

pdf.onclick=function(){

window.print();

}

}

/* ===========================
   Refresh Button
=========================== */

const refresh=document.getElementById("refreshBtn");

if(refresh){

refresh.onclick=function(){

location.reload();

}

}

/* ===========================
   Card Ripple Effect
=========================== */

document.querySelectorAll(".dashboard-card").forEach(card=>{

card.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

this.appendChild(circle);

let x=e.clientX-this.offsetLeft;

let y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ===========================
   Console
=========================== */

console.log(

"Cyber Security Dashboard Loaded Successfully"

);