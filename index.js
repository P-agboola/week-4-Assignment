// person object
function Person(fullname, age, gender, height, skinColour) {
    return {
        fullname,age,gender,height,skinColour,
        personProfile: function () {
            profile = `My name is ${fullname},I am a ${gender} and I'm ${age} years old. I am ${height} foot tall, and I'm proud of my ${skinColour} skin colour.`;
            return profile; 
        },
            
    };
 };

 const person = new Person('peter agboola', 42, 'male', 5.0, 'black');
 console.log(person);
 console.log(person.personProfile());

// school object
 function School(fullname, age, gender, height, skinColour) {
    let schoolName = "NextGen Academy";
    let address = "C&I street, Lekki phase one";
    return {
        schoolInfo: function () {
            const schoolDetail= `This is ${schoolName} it is located at ${address}`;
            return schoolDetail;
    },
    studentInfo: function () {
        return Person.call(this, fullname, age, gender, height, skinColour);
     }
    }
 }

 // An instance of a school with a student
 const school = new School('peter agboola', 23, 'male', 5.0, 'black')
 console.log(school)
 console.log(school.schoolInfo())
 console.log(school.studentInfo())
 console.log(school.studentInfo().personProfile())