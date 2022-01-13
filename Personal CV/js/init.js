window.onload = () => {

    let icon1 = document.querySelector("#email-logo");
    let icon2 = document.querySelector("#phone-logo");
    let icon3 = document.querySelector("#home-logo");

    //icons
    icon1.addEventListener('mouseenter', () => {
        icon1.src="images/emailhover.png";
    });
    icon1.addEventListener('mouseleave', () => {
        icon1.src="images/email.png";
    });

    icon2.addEventListener('mouseenter', () => {
        icon2.src="images/phonehover.png";
    });
    icon2.addEventListener('mouseleave', () => {
        icon2.src="images/phone.png";
    });

    icon3.addEventListener('mouseenter', () => {
        icon3.src="images/homehover.png";
    });
    icon3.addEventListener('mouseleave', () => {
        icon3.src="images/home.png";
    });

    //social media
    let logo1 = document.querySelector("#linkedin-logo");
    let logo2 = document.querySelector("#github-logo");
    let logo3 = document.querySelector("#instagram-logo");

    logo1.addEventListener('mouseenter', () => {
        logo1.src="images/linkedinhover.png";
    });
    logo1.addEventListener('mouseleave', () => {
        logo1.src="images/linkedin.png";
    });

    logo2.addEventListener('mouseenter', () => {
        logo2.src="images/githubhover.png";
    });
    logo2.addEventListener('mouseleave', () => {
        logo2.src="images/github.png";
    });

    logo3.addEventListener('mouseenter', () => {
        logo3.src="images/instagramhover.png";
    });
    logo3.addEventListener('mouseleave', () => {
        logo3.src="images/instagram.png";
    });

}