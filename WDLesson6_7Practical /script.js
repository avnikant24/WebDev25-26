let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
    build += `<div class="fitted card">
                 <h3>${collisions.crash_date}</h3>
                 <hr>
                 <p>${collisions.on_street_name}</p>
                 <p># Persons Injured: ${collisions.number_of_persons_injured}</p>
                 <p># Persons Killed: ${collisions.number_of_persons_killed}</p>
                 <hr>
                 <p>Vehicle Type: ${collisions.vehicle_type_code1}</p>
                 <hr>
                 <p>Avenue: ${collisions.off_street_name}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
    if(collisions.borough == borough){
      build += `<div class="fitted card">
                    <h3>${collisions.crash_date}</h3>
                    <hr>
                    <p>${collisions.borough}</p>
                    <p>${collisions.incident_zip}</p>
                    <p>${collisions.descriptor}</p>
                    <hr>
                    <p>${collisions.created_date}</p>
                    <hr>
                    <p>${collisions.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByStreet(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
    if(collisions.incident_zip == borough){
      build += `<div class="fitted card">
                    <h3>${collisions.complaint_type}</h3>
                    <hr>
                    <p>${collisions.borough}</p>
                    <p>${collisions.incident_zip}</p>
                    <p>${collisions.descriptor}</p>
                    <hr>
                    <p>${collisions.created_date}</p>
                    <hr>
                    <p>${collisions.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterByVehicle(){
  let output = document.getElementById("output");
  let compliant = document.getElementById("complaint").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.complaint == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.complaint}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
