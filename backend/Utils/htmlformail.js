export default function htmlGnerator(headText){
    const Html = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validator</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

</head>
<body>
    <div class="container">
     <div class="title">
         <h1 >${headText}</h1> 
     </div>  
    <img src="https://i.ibb.co/74h8mWB/logo.png" alt="logo" border="0">
    <img src="https://i.ibb.co/g60j6cK/mail-pic.png" alt="mail-pic" border="0">

    </div>
    <footer>
        
        <div class="links">
            <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fas fa-globe"></i></a>
        </div>
        <div class="footerlower">
            <h3>Helathy, Quality, Tasty and Love in your house</h3>
        </div>
    </footer>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	color: rgb(0, 0, 0);
	width: 100%;
	min-height: 100vh;
	background-color: rgb(255, 255, 255);
	display: flex;
	justify-content: center;
	align-items: center;
    flex-direction: column;
	font-family: Roboto;
}

.container {
	display: block;
    width: 1200px;
	position: relative;
	box-shadow: 0 0 10px #b6b5b5;
	padding: 40px;
	text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}
.title {
    color:rgb(39, 39, 39);
    width: 700px;
}

.title h1{
    font-weight: bold;
    font-size: 45px;
    color: #7DC383;
}

footer{
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:#7DC383;
    width: 1200px;
    box-shadow: 0 0 10px #b6b5b5;
}

footer .links{
    display: flex;
    width: 200px;
    justify-content: space-around;
    padding: 20px 0;
}

.links a{
    background-color:rgba(255, 255, 255, 0);
    border-radius:10%;
    padding:5px;
    color:rgb(54, 54, 54);

}

.links a i{
    font-size: 30px;
    color:rgb(7, 90, 51);
}

.footerlower{
    color: #2c2c2c;
    font-weight: bold;
    font-size: 20px;
}
</style>



    <script src="app.js"></script>
</body>`
    return Html;
}