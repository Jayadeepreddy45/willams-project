// let willams_avaliablity = [
//   { day: "Tuesday", starttime: "14:00", endtime: "20:00" },
// ];
let data = [
  {
    parent: "p1",
    session: "30",
    avaliablity: [
      { day: "Tuesday", starttime: "17:30", endtime: "19:00" },
      { day: "Wednesday", starttime: "18:30", endtime: "20:00" },
    ],
    confirmation: {
      day: "",
      starttime: "",
      endtime: ""
    }
  },
  {    parent: "p2",
    session: "45",
    avaliablity: [
      { day: "Thursaday", starttime: "18:00", endtime: "20:00" },
      { day: "Wednesday", starttime: "18:30", endtime: "20:00" },
    ],
    confirmation: {
      day: "",
      starttime: "",
      endtime: ""
    }},
  {    parent: "p3",
    session: "60",
    avaliablity: [
      { day: "Friday", starttime: "18:00", endtime: "20:00" },
      { day: "Saturday", starttime: "18:30", endtime: "20:00" },
    ],
    confirmation: {
      day: "",
      starttime: "",
      endtime: ""
    }},
  {    parent: "p4",
    session: "45",
    avaliablity: [
      { day: "Thursaday", starttime: "19:00", endtime: "20:00" },
      { day: "Wednesday", starttime: "18:00", endtime: "20:00" },
    ],
    confirmation: {
      day: "",
      starttime: "",
      endtime: ""
    }},
  {    parent: "p2",
    session: "45",
    avaliablity: [
      { day: "Thursaday", starttime: "18:00", endtime: "20:00" },
      { day: "Wednesday", starttime: "18:30", endtime: "20:00" },
    ],
    confirmation: {
      day: "",
      starttime: "",
      endtime: ""
    }},
  {    parent: "p5",
    session: "30",
    avaliablity: [
      { day: "Tuesday", starttime: "17:00", endtime: "18:00" },
      { day: "Wednesday", starttime: "18:30", endtime: "20:00" },
    ],
    confirmation: {
      day: "",
      starttime: "",
      endtime: ""
    }},
];
function convertHoursToMinutes(time) {
  const[hours, minutes]=time.split(':');
  return hours * 60;
}

// function convertMinutesToHours(time) {
//   return minutes / 60;
// }

data.forEach(parent => {
  if (parent.avaliablity && parent.avaliablity.length > 0) {
    parent.avaliablity.forEach(slot => {
      if (slot.day && slot.starttime && slot.endtime) {
        let startTime = convertHoursToMinutes(slot.starttime);
        let endTime = convertHoursToMinutes(slot.endtime);
        
        console.log(`Parent: ${parent.parent}, Available on ${slot.day} from ${startTime} to ${endTime} minutes`);
      }
    });
  }
});