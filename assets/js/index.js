const VIToast = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("VIToast")
);
const MaintainToast = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("maintainToast")
);
//VIToast.show();
MaintainToast.show();

function getPing() {
    console.log(new Date());
    let status = document.getElementById("status");
    let version = document.getElementById("version");

    let online_players = document.getElementById("online_players");
    let max_players = document.getElementById("max_players");
    let player_list = document.getElementById("player_list");
    var playerList = "";

    fetch("https://api.lite.cafe/api/getPing")
        .then((response) => response.json())
        .then((data) => {
            if (data.code == 1 || data.data == false) {
                if (!errorShow) {
                    errorToast.show();
                    errorShow = true;
                } else {
                }
            } else {
                errorToast.hide();
                errorShow = false;
            }
        })
        .catch((error) => {
            console.error("Error fetching JSON:", error);
            errorToast.show();
        });
}
window.onload = () => {
    getPing();
};

navheader = document.getElementById("navbar");
navLogo = document.getElementById("nav-logo");
navbar = document.getElementById("navbar");

btt_span = document.getElementById("back-to-top");

if (window.scrollY > 0) {
    btt_span.style.opacity = "1";
} else {
    btt_span.style.opacity = "0";
}

addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
        //btt_span.style.display = "block";
        btt_span.style.opacity = "1";
    } else {
        navbar.classList.remove("navbar-scrolled");
        //btt_span.style.display = "none";
        btt_span.style.opacity = "0";
    }
});

function back_to_top() {}
