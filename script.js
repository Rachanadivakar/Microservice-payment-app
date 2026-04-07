function payNow() {
  const name = document.getElementById("name").value;
  const card = document.getElementById("card").value;
  const expiry = document.getElementById("expiry").value;
  const cvv = document.getElementById("cvv").value;

  if (name && card && expiry && cvv) {
    document.getElementById("successMsg").style.display = "block";
  } else {
    alert("Please fill all fields");
  }
}
