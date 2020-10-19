<html>

<head>
    <title>length</title>
    <link rel="stylesheet" href="style.css">
    <script>
        function validate() {
            var username = document.getElementById("user");
            var password = document.getElementById("pass");
            if (username.value.trim() == "") {
                alert("no blank values allowed")
                user.style.border = "solid 3px blue";
                return false;
            }
             else if (password.value.trim() == "") {
                alert("no blanck values")
                return false;
            } else if (password.value.trim().length < 5) {
                pass.style.border = "solid 3px blue"
                alert("password is to small")
                return false;
            } else {
                return true;
            }
        }
    </script>
</head>

<body>
    <div class="validate">
        <form onsubmit="return validate()" action="wel.html">
                <label>username</label>
                <input id="user" placeholder="username" type="text">
                <br></br>
            <lable>password</lable>
            <input id="pass" placeholder="password" type="password">
            <br></br>
    </div>
    <div class="button">
        <button type="submit">submit</button>
    </div>
    </form>
    </form>
    </div>

</body>

</html>
