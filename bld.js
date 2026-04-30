function showPanel(id){
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function searchDonor(){
  let val = document.getElementById("searchGroup").value.toUpperCase();
  document.querySelectorAll("#donorTable tr:not(:first-child)").forEach(r=>{
    r.style.display = r.children[1].textContent.toUpperCase().includes(val) ? "" : "none";
  });
}