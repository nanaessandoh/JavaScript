/////////////////////////////
////// DATE TIME   //////////
/////////////////////////////

const now  = new Date();

console.log(now);
console.log(typeof now);


// years
console.log('getFullYear', now.getFullYear());

// month
console.log('getMonth', now.getMonth());

// date
console.log('getDate', now.getDate());

// day
console.log('getDay', now.getDay());

// Hours
console.log('getHours', now.getHours());

// Minutes
console.log('getMinutes', now.getMinutes());

// Seconds
console.log('getSeconds', now.getSeconds());



// timestamp
console.log('timeStamp', now.getTime()); // milliseconds since 1/1/1970

// data strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


///////////////////////////////////////////////
////// TIMESTAMPS AND COMPARISONS   //////////
//////////////////////////////////////////////

const before = new Date('June 1 2020 7:30:24');

// Print the time stamps
console.log(before.getTime(), now.getTime());

//
const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000/ 60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);

console.log(mins, hours, days);

console.log(`The blog was written ${days} ago.`);


// Converting timestamps into date objects

const timestamp = 1675938474990;

console.log(new Date(timestamp));




////////////////////////////////////
////// BUILDING A CLOCK   //////////
////////////////////////////////////


const clock = document.querySelector('.clock');

const tick = () =>{

        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();
        const html = `<span>${h}</span> : 
                     <span>${m}</span> : 
                     <span>${s}</span>`;

        clock.innerHTML = html;
};

setInterval(tick, 1000); // Update every 1 second



//////////////////////////////////
////// DATE FNS LIBRARY //////////
//////////////////////////////////

console.log(dateFns.isToday(now));


// formatting options
console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'MMMM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now,'Do'));
console.log(dateFns.format(now,'dddd, Do, MMMM, YYYY'));


// comparing dates
const then = new Date('June 20 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before));
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));