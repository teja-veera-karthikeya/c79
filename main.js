var name_array=[];

function submit(){
    var name1= document.getElementById("name_of_the_student_1").value;
    var name2= document.getElementById("name_of_the_student_2").value;
    var name3= document.getElementById("name_of_the_student_3").value;
    var name4= document.getElementById("name_of_the_student_4").value;
    
    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);
    console.log(name_array)
    document.getElementById("display_name").innerHTML=name_array;
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="block"
}
function sorting(){
name_array.sort()
console.log(name_array)
document.getElementById("display_name").innerHTML=name_array;
}
