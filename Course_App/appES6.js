class Course {
    constructor(title, instructor, image) {
        this.courseId=Math.floor(Math.random()*10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI {
    addCoursetoList(course) {
        const list = document.getElementById("course-list");

        var html = `
        <tr>

        <td><img src="img/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
    
    `;
        list.innerHTML += html;
    }

    clearControls() {
        const title = document.getElementById("title").value = "";
        const instructor = document.getElementById("instructor").value = "";
        const image = document.getElementById("image").value = "";
    }

    deleteCourse(element) { 
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove(); 
            return true;
        }
    }

    showAlert(message, className) { 
        var alert=`
    <div class="alert alert-${className}">
        ${message}
    </div>
    `;

    const row=document.querySelector(".row");
    //beforeBegin,afterBegin,BeforeEnd,afterEnd
    row.insertAdjacentHTML("beforeBegin",alert)

    setTimeout(()=>{
        document.querySelector(".alert").remove();
    },3000);
    }

}

class Storage{
    static getCourses(){
        let courses;

        if(localStorage.getItem("courses")===null){
            courses=[];
        }else{
            courses=JSON.parse(localStorage.getItem("courses"));
        }


        return courses;
    }

    static displayCourses(){
        const courses=Storage.getCourses("courses");

        courses.forEach(course => {
            const ui=new UI();
            ui.addCoursetoList(course);

        });
    }

    static addCourse(course){
        const courses=Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses",JSON.stringify(courses));
    }

    static deleteCourse(element){
        if(element.classList.contains("delete")){
            const id=element.getAttribute("data-id");
            
            const courses=Storage.getCourses();

            courses.forEach((course,index)=>{
                if(course.courseId==id){
                    courses.splice(index,1);
                }
            });
            localStorage.setItem("courses",JSON.stringify(courses));
            return true;
        }
    }
}


document.addEventListener("DOMContentLoaded",Storage.displayCourses);

document.getElementById("new-course").addEventListener("submit", function(e) {
    
    const title = document.getElementById("title").value;
    const instructor=document.getElementById("instructor").value;
    const image=document.getElementById("image").value;

    const course=new Course(title,instructor,image);

    //UI olusturma
    const ui=new UI();

    if(title==="" || instructor==="" || image===""){
        ui.showAlert("Lütfen Formu Doldurunuz","warning")
    }else{
        ui.addCoursetoList(course);

        Storage.addCourse(course);

        ui.clearControls();
        ui.showAlert("Kurs Eklendi","success")
    }



    
    
    e.preventDefault();
});

document.getElementById("course-list").addEventListener("click",function(e){
    const ui =new UI();

    if(ui.deleteCourse(e.target)==true){
        Storage.deleteCourse(e.target);

        ui.showAlert("Kurs Silindi","danger")
    }
    
    
   
})