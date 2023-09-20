const times = document.querySelectorAll(".when");
const currentWork = document.querySelector("#current_Work");
const previousWork = document.querySelector("#Previous_w");
const currentPlay = document.querySelector("#current_play");
const previousPlay = document.querySelector("#Previous_p");
const currentStudy = document.querySelector("#current_study");
const previousStudy = document.querySelector("#previous_s");
const currentExercise = document.querySelector("#current_exercise");
const preiousExercise = document.querySelector("#previous_exercise");
const currentSocial = document.querySelector("#current_social");
const previousSocial = document.querySelector("#previous_social");
const currentSelfCare = document.querySelector("#current_selfcare");
const previousSelfCare = document.querySelector("selfcare_previousweek");

fetch("./data.json")
.then((response)=>{
    return response.json();
})

.then((data)=>{

    times.forEach(function(t){
        t.addEventListener("click", (e)=>{
            const check = e.currentTarget.classList

            if (check.contains("D")){
                currentWork.textContent = data[0]["timeframes"]["daily"]["current"];
                previousWork.textContent = data[0]["timeframes"]["daily"]["previous"];

                currentPlay.textContent = data[1]["timeframes"]["daily"]["current"];
                previousPlay.textContent = data[1]["timeframes"]["daily"]["previous"];

                currentStudy.textContent = data[2]["timeframes"]["daily"]["current"];
                previousStudy.textContent = data[2]["timeframes"]["daily"]["previous"];

                currentExercise.textContent = data[3]["timeframes"]["daily"]["current"];
                preiousExercise.textContent = data[3]["timeframes"]["daily"]["previous"];
                
                currentSocial.textContent = data[4]["timeframes"]["daily"]["current"];
                previousSocial.textContent = data[4]["timeframes"]["daily"]["previous"];

                currentSelfCare.textContent = data[5]["timeframes"]["daily"]["current"];
                previousSelfCare.textContent = data[5]["timeframes"]["daily"]["previous"];
            }

            else if (check.contains("W")){
                currentWork.textContent = data[0]["timeframes"]["weekly"]["current"];
                previousWork.textContent = data[0]["timeframes"]["weekly"]["previous"];

                currentPlay.textContent = data[1]["timeframes"]["weekly"]["current"];
                previousPlay.textContent = data[1]["timeframes"]["weekly"]["previous"];

                currentStudy.textContent = data[2]["timeframes"]["weekly"]["current"];
                previousStudy.textContent = data[2]["timeframes"]["weekly"]["previous"];

                currentExercise.textContent = data[3]["timeframes"]["weekly"]["current"];
                preiousExercise.textContent = data[3]["timeframes"]["weekly"]["previous"];
                
                currentSocial.textContent = data[4]["timeframes"]["weekly"]["current"];
                previousSocial.textContent = data[4]["timeframes"]["weekly"]["previous"];

                currentSelfCare.textContent = data[5]["timeframes"]["weekly"]["current"];
                previousSelfCare.textContent = data[5]["timeframes"]["weekly"]["previous"];
            }

            else {
                currentWork.textContent = data[0]["timeframes"]["monthly"]["current"];
                previousWork.textContent = data[0]["timeframes"]["monthly"]["previous"];

                currentPlay.textContent = data[1]["timeframes"]["monthly"]["current"];
                previousPlay.textContent = data[1]["timeframes"]["monthly"]["previous"];

                currentStudy.textContent = data[2]["timeframes"]["monthly"]["current"];
                previousStudy.textContent = data[2]["timeframes"]["monthly"]["previous"];

                currentExercise.textContent = data[3]["timeframes"]["monthly"]["current"];
                preiousExercise.textContent = data[3]["timeframes"]["monthly"]["previous"];
                
                currentSocial.textContent = data[4]["timeframes"]["monthly"]["current"];
                previousSocial.textContent = data[4]["timeframes"]["monthly"]["previous"];

                currentSelfCare.textContent = data[5]["timeframes"]["monthly"]["current"];
                previousSelfCare.textContent = data[5]["timeframes"]["monthly"]["previous"];
            }
        
        })
    })

})






