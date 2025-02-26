from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/products")
def view_product():
    return render_template("products.html")

@app.route("/cart")
def view_cart():
    return render_template("cart.html")

if __name__ == "__main__":
    app.run(debug=True) 