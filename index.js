  function calculateBMI() {
  
      let weight = document.getElementById("weight").value;
      let height = document.getElementById("height").value / 100;
  
      if(weight === "" || height === ""){
          alert("Please enter weight and height");
          return;
      }
  
      let bmi = weight / (height * height);
  
      document.getElementById("result").innerHTML =
      "Your BMI is " + bmi.toFixed(2);
  }
  
  function submitForm() {
  
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
  
      if(name === "" || email === "") {
          alert("Please fill all required fields");
      } else {
          alert("Message Sent Successfully!");
      }
  }
  
  function toggleMode() {
      document.body.classList.toggle("dark");
  }
