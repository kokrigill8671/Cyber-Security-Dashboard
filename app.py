from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

app.secret_key = "cyber_security_project"

# -------------------------------------
# Home
# -------------------------------------

@app.route("/")
def home():
    return redirect(url_for("login"))

# -------------------------------------
# Login
# -------------------------------------

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        username = request.form.get("username")
        password = request.form.get("password")

        # Demo Login
        if username == "admin" and password == "admin123":
            return redirect(url_for("dashboard"))

        return "Invalid Username or Password"

    return render_template("login.html")


# -------------------------------------
# Dashboard
# -------------------------------------

@app.route("/dashboard")
def dashboard():

    return render_template(
        "dashboard.html",
        total=3,
        open=1,
        resolved=1,
        critical=1,
        incidents=[]
    )


# -------------------------------------
# Run Server
# -------------------------------------

if __name__ == "__main__":
    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )